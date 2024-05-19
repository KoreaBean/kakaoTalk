import {SignInRequestDto} from "./request/auth";
import axios from "axios";
import {SignInResponseDto} from "./response/auth";
import {ResponseDto} from "./response";


const  DOMAIN = 'http://localhost:8080';

const API_DOMAIN = `${DOMAIN}/api/v1`;

const SIGN_IN_URL = () => `${API_DOMAIN}/sign-in`;


export const signInRequest = async (requestBody : SignInRequestDto) => {
    const result = await axios.post(SIGN_IN_URL(),requestBody)
        .then(response => {
            const responseBody : SignInResponseDto = response.data;
            return responseBody;
        })
        .catch(error => {
            if (!error.response.data) return null;
            const responseBody : ResponseDto = error.response.data;
            return responseBody;
        })
    return result;

}