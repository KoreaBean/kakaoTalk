import React, { useState, useEffect, useRef } from 'react';
import stompClient from './stompclient';
import './view.css'

type MessageType = 'CHAT' | 'JOIN' | 'LEAVE';

interface ChatMessage {
    content: string;
    sender: string;
    type: MessageType;
}

const Kakao = () => {
    // 채팅 메시지 저장
    const [messages, setMessages] = useState<ChatMessage[]>([]);
    // 새로 입력된 메시지 저장
    const [newMessage, setNewMessage] = useState<string>('');
    // 사용자 이름 저장
    const [username, setUsername] = useState<string>('');
    // 사용자가 채팅에 연결되었는지 여부
    const [isConnected, setIsConnected] = useState<boolean>(false);
    // stompclient를 참조하는 useRef
    const stompClientRef = useRef(stompClient);

    useEffect(() => {
        // STOMP 클라이언트가 연결되었을때 실행 할 함수
        stompClientRef.current.onConnect = () => {
            console.log('Connected');
            // /topic/public을 구독하고 메시지가 도착할 때 마다 setMessages를 호출하여 메시지 업데이트
            stompClientRef.current.subscribe('/topic/public', (message) => {
                console.log("String을 JSON으로 변환" +JSON.parse(message.body))
                // function 형식으로 들어온 메시지 body만 골라서 JSON으로 변환
                const chatMessage: ChatMessage = JSON.parse(message.body);
                // setMessages((매개변수) => [] ) 함수는 이전의 Messages를 매개변수로 가져와서 새로운 배열을 만들고 chatMeesage를 업데이트 하는 함수
                setMessages((prevMessages) => [...prevMessages, chatMessage]);
            });
        };

        // STOMP 클라이언트를 활성화하여 서버와의 연결을 시작
        stompClientRef.current.activate();

        // 블록 컴포넌트가 언마운트 될 떄 STOMP 클라이언트를 비활성화하여 연결을 끊음
        return () => {
            if (stompClientRef.current.connected) {
                stompClientRef.current.deactivate();
            }
        };
    }, []);

    // 메시지를 보낼 때 호출되는 함수
    const handleSendMessage = () => {
        // new Message 와 username이 모두 존재하면 새로운 채팅 메시지 생성
        if (newMessage.trim() && username) {
            const chatMessage: ChatMessage = {
                content: newMessage,
                sender: username,
                type: 'CHAT',
            };
            // publish를 이용하여 서버에 메시지 전송
            stompClientRef.current.publish({
                // 서버 경로
                destination: `/app/chat.send`,
                // JSON 형태를 String 타입으로 변환, STOMP는 데이터로 전송해야함
                body: JSON.stringify(chatMessage),
            });
            console.log("JSON 을 String으로 변환" + JSON.stringify(chatMessage))
            // 메시지를 보낸 후 새로운 메시지 state 초기화
            setNewMessage('');
        }
    };

    // 사용자가 채팅에 참여할 때 호출되는 함수
    const handleJoinChat = () => {
        //유저가 존재하면
        if (username.trim()) {
            //connected : true
            setIsConnected(true);
            const chatMessage: ChatMessage = {
                content: '',
                sender: username,
                type: 'JOIN',
            };
            stompClientRef.current.publish({
                destination: `/app/chat.newUser`,
                body: JSON.stringify(chatMessage),
            });
        }
    };

    return (
        <div className="app">
            {!isConnected ? (
                <div className="join-container">
                    <input
                        type="text"
                        placeholder="Enter your username"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                    />
                    <button onClick={handleJoinChat}>Join</button>
                </div>
            ) : (
                <div className="chat-container">
                    <div className="chat-messages">
                        {messages.map((message, index) => (
                            <div key={index} className={`message ${message.sender === username ? 'my-message' : ''}`}>
                                <strong>{message.sender}</strong>: {message.content}
                            </div>
                        ))}
                    </div>
                    <div className="message-input">
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

export default Kakao;
