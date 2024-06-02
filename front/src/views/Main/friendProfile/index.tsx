import './index.css';
import profileDefaultImage from 'assets/images/profileDefaultImage.png';
import MyFriendListItem from "../../../types/interface/myFriendListItem";
interface Props {
    myFriendListItem : MyFriendListItem


}



export default function MyFriendProfile({myFriendListItem} : Props){

    const {email, profileImage, titleMessage, nickname} = myFriendListItem

    sessionStorage.getItem(nickname);



    return(
        <div className='friend-container'>
            <div className='profile-container'>
                <div className='user-box'>
                    <div className='image-box'>
                        <div className='profileImage' style={{backgroundImage : `url(${profileImage ? profileImage : profileDefaultImage})`}}></div>
                    </div>
                    <div className='nickname-box'>
                        <div className='nickname'>{nickname}</div>
                        <div className='titleMessage'>{titleMessage}</div>
                    </div>
                </div>
            </div>
        </div>
    )
}