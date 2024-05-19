import './index.css';
export default function UpdateProfileHeader(){

    return(
        <div className='friendHeader-container'>
            <div className='friend-control-box'>
                <div className='friend-number-box'>
                    <div className='friend-font'>{'업데이트한 프로필'}</div>
                    <div className='friend-number'>{'3'}</div>
                </div>
                <div className='arrowIcon-box'>
                    <div className={`icon expand-down-light`}></div>
                </div>
            </div>
        </div>
    )
}