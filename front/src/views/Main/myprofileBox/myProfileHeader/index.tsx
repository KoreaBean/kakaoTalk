import './index.css';
import {CHATTING_PATH, SEARCHFRIEND_PATH} from "../../../../contant";

export default function MyProfileHeader(){


    //                  event handler : 친구 추가 버튼 클릭 핸들러
    const addFriendHandler = () => {


        window.open(SEARCHFRIEND_PATH(),'_blank','width=500, height=500')

    }


    return(
        <div className='title-container'>
            <div className='title-box'>
                <div className='title'>{"친구"}</div>
            </div>
            <div className='titleIcon-box'>
                <div className='searchIcon-box'>
                    <div className='icon search-light'></div>

                </div>
                <div className='userplusIcon-box'>
                    <div className='icon user-plus' onClick={addFriendHandler}></div>
                </div>

            </div>
        </div>
    )
}