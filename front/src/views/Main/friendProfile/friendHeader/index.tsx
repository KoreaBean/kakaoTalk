import './index.css';

interface Props {
    number : number;
    icon : 'expand-down-light' | 'expand-up-light';
}

export default function FriendHeader(props : Props){

    const {number, icon} = props

    return(
        <div className='friendHeader-container'>
            <div className='friend-control-box'>
                <div className='friend-number-box'>
                    <div className='friend-font'>{'친구'}</div>
                    <div className='friend-number'>{number}</div>
                </div>
                <div className='arrowIcon-box'>
                    <div className={`icon ${icon}`}></div>
                </div>
            </div>
        </div>
    )
}