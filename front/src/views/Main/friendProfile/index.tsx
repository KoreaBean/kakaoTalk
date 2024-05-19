import './index.css';
import profileDefaultImage from 'assets/images/profileDefaultImage.png';
import friendsProfileListItem from "../../../types/interface/myfriendsProfileList.interface";

interface Props {

    friendList : friendsProfileListItem

}



export default function MyFriendProfile({friendList} : Props){

    const {nickname, titleMessage, profileImage} = friendList



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