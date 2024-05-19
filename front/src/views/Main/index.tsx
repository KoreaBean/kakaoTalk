import './index.css';
import ProfileBox from "./myprofileBox";
import MyProfileHeader from "./myprofileBox/myProfileHeader";
import UpdateProfileHeader from "./updateProfile/header";
import UpdateProfile from "./updateProfile";
import FriendHeader from "./friendProfile/friendHeader";
import updateUserListMock from "../../mocks/updateUser-list.mock";
import friendsProfileListMock from "../../mocks/friendsProfile-list.mock";
import MyFriendProfile from "./friendProfile";
export default function Main() {

    const props = () => {

    }


    return(
        <div className='main-container'>
            <MyProfileHeader/>
            <ProfileBox/>
            <UpdateProfileHeader/>
            <div className='updateMock-container'>
                {updateUserListMock.map(updateUserList => <UpdateProfile updateUserList={updateUserList}/>)}
            </div>
            <FriendHeader number={3} icon={"expand-down-light"}/>
            <div className='friendsProfileMock-container'>
                {friendsProfileListMock.map(friendsProfileList => <MyFriendProfile friendList={friendsProfileList}/>)}
            </div>
        </div>
    )
}