import './index.css';

export default function MyProfileHeader(){

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
                    <div className='icon user-plus'></div>
                </div>

            </div>
        </div>
    )
}