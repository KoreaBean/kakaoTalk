import chatListMock from "../../mocks/chatList.mock";
import Chat from "../../components/chat";
import ChatHeader from "../../components/chat/chatHeader";
import 'index.css';
import {useEffect, useRef} from "react";
import stompClient from "../chatting/chattingMessage/stompclient";



export default function ChatPage() {

    const stompClientRef = useRef(stompClient);


    useEffect(() => {
        stompClientRef.current.onConnect = () => {

        }
    })


    return(
        <div className='ChatPage-container'>
            <div className='ChatPage-Header'>
                <ChatHeader/>
            </div>
            <div className='ChatPage-body'>
                {chatListMock.map(chatList => <Chat chatList={chatList}/>)}

            </div>
        </div>
    )
}
