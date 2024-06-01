import './index.css'
import defaultImage from 'assets/images/profileDefaultImage.png';
import chatListItem from "../../types/interface/chatList.interface";
import {CHAT_PATH, CHATTING_PATH} from "../../contant";
import stompClient from "../../views/chatting/chattingMessage/stompclient";
import {useEffect, useRef} from "react";

interface Props {
    chatList : chatListItem
}

type MessageType = 'CHAT' | 'JOIN' | 'LEAVE';

interface ChatMessage {
    sender : string;
    content : string;
    type : MessageType;
    roomId : string;

}

export default function Chat({chatList} : Props) {


    const {titleImage, userName, lastMessage, lastSendTime, notReadCount} = chatList

    const stompClientRef = useRef(stompClient)


    useEffect(() => {
        stompClientRef.current.onConnect = () => {
            console.log('Connected');
        };
        stompClientRef.current.activate();

        return () => {
            if (stompClientRef.current.connected) {
                stompClientRef.current.deactivate();
            }
        };
    }, []);



    //                  function : 채팅 더블클릭 이벤트
    const onChatDoubleClickEvent = () => {

        const chatMessage: ChatMessage = {
            sender: userName,
            content: '',
            type: 'JOIN',
            roomId: "1"
        }
        stompClientRef.current.publish({
            destination : '/app/chat.newUser',
            body : JSON.stringify(chatMessage)
        })

        window.open(CHATTING_PATH("1"),`_blank`,'width=900, height=900')
    }


    return (
        <div className='chat-container'>

            <div className='chat-body-chatList'>
                <div className='chat-body-RoomImage-box'>
                    <div className='chat-body-titleImage' style={{backgroundImage : `url(${titleImage ? titleImage : defaultImage})`}}></div>
                </div>
                <div className='chat-body-content-box' onDoubleClick={onChatDoubleClickEvent}>
                    <div className='chat-body-content-left'>
                        <div className='chat-body-content-title'>{userName}</div>
                        <div className='chat-body-content-Message'>{lastMessage}</div>
                    </div>
                </div>
                <div className='chat-body-content-right'>
                    <div className='chat-body-detail-lastTime'>{lastSendTime}</div>
                    <div className='chat-body-detail-notCheckMessage'>{notReadCount}</div>
                </div>
            </div>
        </div>
    )
}