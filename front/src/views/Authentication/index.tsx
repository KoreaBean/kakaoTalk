import './index.css';
import {useRef, useState, KeyboardEvent, ChangeEventHandler, ChangeEvent} from "react";
import {useNavigate} from "react-router-dom";
import {SignInRequestDto} from "../../apis/request/auth";
import {signInRequest} from "../../apis";
import {SignInResponseDto} from "../../apis/response/auth";
import {ResponseDto} from "../../apis/response";
import {MAIN_PATH} from "../../contant";
import {useCookies} from "react-cookie";
import useLoginUserStore from "../../stores/login-user.stores";

//                  function : 로그인 화면
export default function Authentication() {

    const navigator = useNavigate();

    //                  state : 쿠키 상태
    const [cookies, setCookies] = useCookies();


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

        const requestBody :SignInRequestDto = {email,password}
        signInRequest(requestBody) .then(signAuthentication)



    }

    const signAuthentication = (responseBody : ResponseDto | SignInResponseDto |null) => {

        if (!responseBody) return null;

        if (responseBody.code !== "SU") {
            alert(responseBody.code)
            setError(true)
            return ;
        }
        alert('인증 성공')
        sessionStorage.setItem('email',email);
        setError(false)
        const {token, expirationTime} = responseBody as SignInResponseDto;
        const now = new Date().getTime();
        const expires = new Date(now + expirationTime * 1000);
        setCookies('accessToken', token,{expires, path:MAIN_PATH(), httpOnly : true})
        navigator(MAIN_PATH())
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

    //                  event hanlder : 이메일 변경 핸들러
    const emailChangeHandler = (event : ChangeEvent<HTMLInputElement>) => {
        const {value} = event.target
        setEmail(value)
    }

    //                  event handler : 패스워드 변경 핸들러
    const passwordChangeHandler = (event : ChangeEvent<HTMLInputElement>) => {
        const {value} = event.target
        setPassword(value)
    }




    return(
        <div className='login-container'>
            <div className='kakaoTalk-icon-box'>
                    <div className='icon kakaoTalk-icon'></div>
            </div>
            <div className='login-form'>
                <div className='form id-inputbox-container'>
                    <input className='id-inputbox' ref={emailRef} onKeyDown={emailRefHandler} type='text' value={email} onChange={emailChangeHandler} />
                </div>
                <div className='form password-inputbox-container'>
                    <input className='password-inputbox' ref={passwordRef} onKeyDown={passwordRefHandler} type={passwordType} value={password} onChange={passwordChangeHandler}/>
                    <div className='icon-box' onClick={passwordIconButtonClickHandler}>
                        <div className={`icon ${passwordIcon}`}></div>
                    </div>
                </div>
                {error && <div className='error-description'>{'이메일 또는 비밀번호가 틀렸습니다.'}</div>}

                <div className='login-submit'  onClick={submitOnClickHandler}>{'로그인'}</div>
            </div>
            <div className='login-description'>
                <div className='lost-Email'>{'이메일 찾기'}</div>
                <div className='lost-password'>{'비밀번호 찾기'}</div>
                <div className='sign-up'>{'회원가입'}</div>
            </div>
        </div>
    )
}