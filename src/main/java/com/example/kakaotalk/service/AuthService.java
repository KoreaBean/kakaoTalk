package com.example.kakaotalk.service;

import com.example.kakaotalk.dto.request.auth.SignInRequestDto;
import com.example.kakaotalk.dto.request.auth.SignUpRequestDto;
import com.example.kakaotalk.dto.response.auth.SignInResponseDto;
import com.example.kakaotalk.dto.response.auth.SignUpResponseDto;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

public interface AuthService {


    ResponseEntity<? super SignInResponseDto> SignIn(SignInRequestDto dto);

    ResponseEntity<? super SignUpResponseDto> SignUn(SignUpRequestDto dto);

}
