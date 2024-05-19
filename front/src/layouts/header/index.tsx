import './index.css';

export default function Header() {



    return(
        <div className='header-container'>
            <div className='icon-box'>
                <div className='icon cog-icon'></div>
            </div>
            <div className='icon-box'>
                <div className='icon minus-vertical-icon'></div>
            </div>
            <div className='icon-box'>
                <div className='icon minus-icon'></div>
            </div>
            <div className='icon-box'>
                <div className={'icon rectangle-icon'}></div>
            </div>
            <div className='icon-box'>
                <div className='icon x-icon'></div>
            </div>
        </div>
    )
}