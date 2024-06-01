import React, { useState, useEffect, useRef } from 'react';
import { Client } from '@stomp/stompjs';
import SockJS from 'sockjs-client';

type MessageType = 'CHAT' | 'JOIN' | 'LEAVE';

interface ChatMessage {
    content: string;
    sender: string;
    type: MessageType;
}

interface ChatRoom {
    id: string;
    name: string;
}

const Test1: React.FC = () => {
    const [messages, setMessages] = useState<ChatMessage[]>([]);
    const [chatRooms, setChatRooms] = useState<ChatRoom[]>([]);
    const [currentRoomId, setCurrentRoomId] = useState<string | null>(null);
    const [newMessage, setNewMessage] = useState<string>('');
    const [username, setUsername] = useState<string>('');
    const stompClientRef = useRef<Client | null>(null);

    useEffect(() => {
        const socket = new SockJS('http://localhost:8080/ws');
        const client = new Client({
            webSocketFactory: () => socket,
            onConnect: () => {
                console.log('Connected');
                client.subscribe('/topic/public', (message) => {
                    const chatRoom: ChatRoom = JSON.parse(message.body);
                    setChatRooms((prevRooms) => [...prevRooms, chatRoom]);
                });

                if (currentRoomId) {
                    client.subscribe(`/topic/${currentRoomId}`, (message) => {
                        const chatMessage: ChatMessage = JSON.parse(message.body);
                        setMessages((prevMessages) => [...prevMessages, chatMessage]);
                    });
                }
            },
            onDisconnect: () => {
                console.log('Disconnected');
            }
        });

        client.activate();
        stompClientRef.current = client;

        return () => {
            if (stompClientRef.current) {
                stompClientRef.current.deactivate();
            }
        };
    }, [currentRoomId]);

    const handleSendMessage = () => {
        if (currentRoomId && newMessage.trim() && username) {
            const chatMessage: ChatMessage = {
                content: newMessage,
                sender: username,
                type: 'CHAT',
            };
            stompClientRef.current?.publish({
                destination: `/app/chat.send`,
                body: JSON.stringify(chatMessage),
            });
            setNewMessage('');
        }
    };

    const handleCreateRoom = (roomName: string) => {
        if (roomName.trim() && username) {
            const chatMessage: ChatMessage = {
                content: roomName,
                sender: username,
                type: 'JOIN',
            };
            stompClientRef.current?.publish({
                destination: `/app/chat.register`,
                body: JSON.stringify(chatMessage),
            });
        }
    };

    const handleRoomDoubleClick = (roomId: string) => {
        setCurrentRoomId(roomId);
        setMessages([]);
        stompClientRef.current?.subscribe(`/topic/${roomId}`, (message) => {
            const chatMessage: ChatMessage = JSON.parse(message.body);
            setMessages((prevMessages) => [...prevMessages, chatMessage]);
        });
    };

    return (
        <div>
            <h1>Chat Application</h1>
            <div>
                <input
                    type="text"
                    placeholder="Enter your username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                />
            </div>
            <div>
                <input
                    type="text"
                    placeholder="Enter room name"
                    onKeyDown={(e) => {
                        if (e.key === 'Enter') handleCreateRoom(e.currentTarget.value);
                    }}
                />
            </div>
            <div>
                <h2>Chat Rooms</h2>
                <ul>
                    {chatRooms.map((room) => (
                        <li key={room.id} onDoubleClick={() => handleRoomDoubleClick(room.id)}>
                            {room.name}
                        </li>
                    ))}
                </ul>
            </div>
            {currentRoomId && (
                <div>
                    <h2>Messages</h2>
                    <div>
                        {messages.map((message, index) => (
                            <div key={index}>
                                <strong>{message.sender}</strong>: {message.content}
                            </div>
                        ))}
                    </div>
                    <div>
                        <input
                            type="text"
                            placeholder="Type a message..."
                            value={newMessage}
                            onChange={(e) => setNewMessage(e.target.value)}
                            onKeyDown={(e) => {
                                if (e.key === 'Enter') handleSendMessage();
                            }}
                        />
                        <button onClick={handleSendMessage}>Send</button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Test1;
