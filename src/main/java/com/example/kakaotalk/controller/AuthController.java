package com.example.kakaotalk.controller;

import com.example.kakaotalk.dto.request.auth.SignInRequestDto;
import com.example.kakaotalk.dto.response.auth.SignInResponseDto;
import com.example.kakaotalk.service.AuthService;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequiredArgsConstructor
public class AuthController {

    private final AuthService authService;

    @PostMapping("/api/v1/sign-in")
    public ResponseEntity<? super SignInResponseDto>SignIn(
            @RequestBody @Valid SignInRequestDto dto){
        ResponseEntity<? super SignInResponseDto> response = authService.SignIn(dto);
        return response;
    }
}
