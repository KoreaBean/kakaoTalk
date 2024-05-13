import './index.css';
import {useRef, useState, KeyboardEvent} from "react";
import {Simulate} from "react-dom/test-utils";
import timeUpdate = Simulate.timeUpdate;


//                  function : 로그인 화면
export default function Authentication() {

    //                  state : 이메일 상태
    const [email,setEmail] = useState<string>('')

    //                  state : 패스워드 상태
    const [password,setPassword] = useState<string>('')

    //                  state : 이메일 ref
    const emailRef = useRef<HTMLInputElement | null>(null)
    //                  state : 패스워드 ref
    const passwordRef = useRef<HTMLInputElement | null>(null)

    //                  state : password 아이콘 상태
    const [passwordIcon,setPasswordIcon] = useState<'eye-light-off' | 'eye-light-on'>('eye-light-off')

    //                  state : paasswordType 상태
    const [passwordType, setPasswordType] = useState<'text' | 'password'>('password')

    //                  state : 에러 상태
    const [error,setError] = useState<boolean>(false)




    //                  event handler : 이메일 ref 핸들러
    const emailRefHandler = (event : KeyboardEvent<HTMLInputElement>) => {
        if (event.key !== 'Enter') return;
        if (!passwordRef.current) return;
        passwordRef.current?.focus()
    }

    //                  event handler : 패스워드 ref 핸들러
    const passwordRefHandler = (event : KeyboardEvent<HTMLInputElement>) => {
        if ((event.key as 'Tab' | 'Enter') === 'Tab' || (event.key as 'Tab' | 'Enter') === 'Enter'){
            submitOnClickHandler()
        }
    }
    
    //                  event handler : 로그인 submit 핸들러
    const submitOnClickHandler = () => {
        alert('로그인')
    }

    //                  event handler : 패스워드 아이콘 변경 핸들러
    const passwordIconButtonClickHandler = () => {
        if (passwordIcon === 'eye-light-off'){
            setPasswordType('text')
            setPasswordIcon('eye-light-on')
        }else {
            setPasswordType('password')
            setPasswordIcon('eye-light-off')
        }
    }



    return(
        <div className='login-container'>
            <div className='kakaoTalk-icon-box'>
                    <div className='icon kakaoTalk-icon'></div>
            </div>
            <div className='login-form'>
                <div className='form id-inputbox-container'>
                    <input className='id-inputbox' ref={emailRef} onKeyDown={emailRefHandler} type='text'/>
                </div>
                <div className='form password-inputbox-container'>
                    <input className='password-inputbox' ref={passwordRef} onKeyDown={passwordRefHandler} type={passwordType}/>
                    <div className='icon-box' onClick={passwordIconButtonClickHandler}>
                        <div className={`icon ${passwordIcon}`}></div>
                    </div>
                </div>
                {error && <div className='error-description'>{'이메일 또는 비밀번호가 틀렸습니다.'}</div>}

                <div className='login-submit'  onClick={submitOnClickHandler}>{'로그인'}</div>
            </div>
            <div className='login-description'>
                <div className='lose-Email'>{'이메일 찾기'}</div>
                <div className='lose-password'>{'비밀번호 찾기'}</div>
                <div className='sign-up'>{'회원가입'}</div>
            </div>
        </div>
    )
}