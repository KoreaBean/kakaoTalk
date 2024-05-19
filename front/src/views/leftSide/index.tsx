import './index.css'
import {useState} from "react";
import {useNavigate} from "react-router-dom";
import {CHAT_PATH, MAIN_PATH} from "../../contant";
export default function LeftSide(){

    const navigator = useNavigate();


    //                  state : personIcon 상태
    const [personIcon, setPersonIcon] = useState<boolean>(false);    //'white-person-fill' | 'person-fill'>

    //                  state : chatIcon 상태
    const [chatIcon, setChatIcon] = useState<boolean>(false);  //'chat' | 'chat-fill'

    //                  state : threedots 상태
    const [threedotsIcon, setThreedotsIcon] = useState<boolean>(false);         //'white-three-dots' | 'three-dots'


    //              event ClickHandler : personIcon 클릭
    const personIconOnClickHandler = () => {
        if (personIcon == false) {
            setPersonIcon(!personIcon)
            setChatIcon(false)
            setThreedotsIcon(false)
            navigator(MAIN_PATH());
        }
    }
    //              event ClickHandler : chatIcon 클릭
    const chatIconOnClickHandler = () => {
       if (chatIcon == false){
           setChatIcon(true)
           setPersonIcon(false)
           setThreedotsIcon(false)
           navigator(CHAT_PATH());
       }
    }
    //              event ClickHandler : threedots 클릭
    const threedotsIconOnClickHandler = () => {
        if (threedotsIcon == false){
            setThreedotsIcon(true)
            setPersonIcon(false)
            setChatIcon(false)
        }
    }

    //                  render : 랜더링
    return(
        <div className='leftSide-container'>
            <div className='top-container'>
                <div className='personIcon-box' onClick={personIconOnClickHandler}>
                    <div className={`icon ${personIcon ?  "person-fill" : "white-person-fill"}`}></div>
                </div>
                <div>
                    <div className='chatIcon-box' onClick={chatIconOnClickHandler}>
                        <div className={`icon ${chatIcon ? "chat-fill" : "chat"}`}>
                            <div className='message-box'>
                                <div className='message-count'>{'447'}</div>
                            </div>
                        </div>

                    </div>

                </div>
                <div className='dots-box' onClick={threedotsIconOnClickHandler}>
                    <div className={`icon ${threedotsIcon ? "three-dots" : "white-three-dots"}`}></div>
                </div>
            </div>
            <div className='bottom-container'>
                <div className='emotion-box'>
                    <div className='icon emoji'></div>
                </div>
                <div className='bell-box'>
                    <div className='icon bell-ringing'></div>
                </div>
                <div className='option-box'>
                    <div className='icon patch-minus'></div>
                </div>
            </div>
        </div>
    )
}