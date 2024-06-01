import defaultImage from 'assets/images/profileDefaultImage.png'
import './index.css';

export default function ChattingHeader() {




    return(
        <div className='chattingHeader-container'>
            <div className='chatting-userBox'>
                <div className='chatting-titleImage-box'>
                    <div className='chatting-titleImage' style={{backgroundImage : `url(${defaultImage})`}}></div>
                </div>
                <div className='chatting-user'>
                    <div className='chatting-userName'>{'동호'}</div>
                    <div className='chatting-userNumber'>{'2'}</div>
                </div>
            </div>
            <div className='chatting-icon-box'>
                <div className='chatting-Magnifier-iconBox'>
                    <div className='icon search-light'></div>
                </div>
                <div className='chatting-phone-iconBox'>
                    <div className='icon phone'></div>
                </div>
                <div className='chatting-video-iconBox'>
                    <div className='icon video-camera'></div>
                </div>
                <div className='chatting-bugger-iconBox'>
                    <div className='icon view-list'></div>
                </div>
            </div>
        </div>
    )
}