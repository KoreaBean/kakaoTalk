export default function Chat() {

    return (
        <div className='chat-container'>
            <div className='chat-header'>
                <div className='chat-header-left'>
                    <div className='chat-header-write'>{'채팅'}</div>
                    <div className='chat-header-icon-box'>
                        <div className='expand-down-light'></div>
                    </div>
                </div>
                <div className='chat-header-right'>
                    <div className='chat-header-Magnifier-icon-box'>
                        <div className='search-light'></div>
                    </div>
                    <div className='chat-header-openChat-icon-box'>
                        <div></div>
                    </div>
                    <div className='chat-header-newChat-icon-box'>
                        <div></div>
                    </div>
                </div>
            </div>
            <div className='chat-body-chatList'>
                <div className='chat-body-RoomImage-box'>
                    <div></div>
                </div>
                <div className='chat-body-content-box'>
                    <div className='chat-body-content-title'></div>
                    <div className='chat-body-content-Message'></div>
                </div>
                <div className='chat-body-detail-box'>
                    <div className='chat-body-detail-lastTime'></div>
                    <div className='chat-body-detail-notCheckMessage'></div>
                </div>
            </div>
        </div>
    )
}