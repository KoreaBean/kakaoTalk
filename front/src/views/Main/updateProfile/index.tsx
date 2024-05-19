import './index.css';
import profileDefaultImage from 'assets/images/profileDefaultImage.png';
import updateUserListItem from "../../../types/interface/updateUserList.interface";

interface Props {
    updateUserList : updateUserListItem
}


export default function UpdateProfile({updateUserList} : Props){

    const {nickname, profileImage} = updateUserList

    return(
        <div className='updateProfile-container'>
            <div className='profileImage-box'>
                    <div className='profileImage' style={{backgroundImage : `url(${profileImage ? profileImage : profileDefaultImage})`}}></div>
            </div>
            <div className='nickname'>{nickname}</div>
        </div>
    )
}