import './index.css';


export default function ChatHeader(){
    return (
        <div className='chat-header'>
            <div className='chat-header-left'>
                <div className='chat-header-write'>{'채팅'}</div>
                <div className='chat-header-icon-box'>
                    <div className='icon expand-down-light'></div>
                </div>
            </div>
            <div className='chat-header-right'>
                <div className='chat-header-Magnifier-icon-box'>
                    <div className='icon search-light'></div>
                </div>
                <div className='chat-header-openChat-icon-box'>
                    <div className='icon chatbubbles-outline'></div>
                </div>
                <div className='chat-header-newChat-icon-box'>
                    <div className='icon bubble-plus'></div>
                </div>
            </div>
        </div>
    )
}