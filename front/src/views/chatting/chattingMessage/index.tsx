import './index.css';
import {ChangeEvent, KeyboardEvent, useEffect, useRef, useState} from "react";
import stompClient from "./stompclient";
import {useParams} from "react-router-dom";

type MessageType = 'CHAT' | 'JOIN' | 'LEAVE';

interface ChatMessage {
    sender : string;
    content : string;
    type : MessageType;
    roomId : string;

}

interface Props {
    roomId : string;
    isGroup : boolean;
    userNickname : string

}

export default function ChattingMessage(props : Props){

    const {roomId, isGroup, userNickname} = props

    //                  state : 채팅 메시지 저장
    const [messages, setMessages] = useState<ChatMessage[]>([])
    //                  state : 새로 입력된 메시지 저장
    const [newMessage, setNewMessage] = useState<string>('')
    //                  statee : 사용자 닉네임 저장
    const [nickname, setNickname] = useState<string>('')
    //                  state : 사용자가 채팅에 연결 되었는지 여부
    const [isConnected, setIsConnected] = useState<boolean>(true)
    //                  state : stompClient 참조하는 useRef
    const stompClientRef = useRef(stompClient)
    //                  state : roomId
    const {path} = useParams()



    //                  effect : 컴포넌트가 마운트 될 떄
    useEffect(() => {
        stompClientRef.current.onConnect = () => {
            console.log('Connected')
            console.log("isGroup"+isGroup)
            console.log("roomid " + roomId)
            const destination = `/topic/private/${roomId}`
            console.log(destination)

            stompClientRef.current.subscribe(destination,(message) => {
                console.log("parse " + message)
                const chatMessage = JSON.parse(message.body)
                setMessages((prevMessages) => [...prevMessages,chatMessage])
            });
        };

        console.log("server Connect")
        console.log("message "+messages)
        setNickname(userNickname)
        stompClientRef.current.activate()



        return() => {
            if (stompClientRef.current.connected){
                stompClientRef.current.deactivate()
            }
        }
    },[])


    const JoinChat = () => {

        const chatMessage: ChatMessage = {
            sender: nickname,
            content: '',
            type: 'JOIN',
            roomId: roomId
        }
        stompClientRef.current.publish({
            destination : '/app/chat.newUser',
            body : JSON.stringify(chatMessage)
        })
        setIsConnected(true)
        console.log("isConnected " + isConnected)

    }
    //                  event handler : 메시지 발송
    const sendMessageHandler = () => {

        if (newMessage.trim() ){
            const chatMessage : ChatMessage = {
                sender : nickname,
                content : newMessage,
                type : 'CHAT',
                roomId : roomId
            }
            stompClientRef.current.publish({
                destination : '/app/chat.send',
                body : JSON.stringify(chatMessage)
            })
            setNewMessage('')
        }
    }

    //                  event handler : input 값 변경 시
    const changeSetMessageHandler = (event : ChangeEvent<HTMLInputElement>) => {
        const {value} = event.target

        setNewMessage(value)

    }

    const keyDownHandler = (event : KeyboardEvent<HTMLInputElement>) => {

        if (event.key == 'Enter'){
            sendMessageHandler()
        }

    }



    return (

        <div className='chatting-container'>
            <div className='chatting-message-box'>
                {messages.map(( message,index) => (
                    <div key={index} className={`${message.sender === nickname ? 'my-message' : 'friend-message'}`}>
                        <strong>{message.sender}</strong> : {message.content}
                    </div>
                ))}
            </div>

            <div className='chatting-footer-container'>
                <div className='chatting-footer-inputBox'>
                    <input className='chatting-footer-input' placeholder={"Enter the Chat"} value={newMessage} onChange={changeSetMessageHandler} onKeyDown={keyDownHandler}/>
                </div>
                <div></div>
            </div>
        </div>
    )
}