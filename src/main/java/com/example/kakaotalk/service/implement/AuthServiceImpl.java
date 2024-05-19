package com.example.kakaotalk.service.implement;

import com.example.kakaotalk.dto.request.auth.SignInRequestDto;
import com.example.kakaotalk.dto.request.auth.SignUpRequestDto;
import com.example.kakaotalk.dto.response.ResponseDto;
import com.example.kakaotalk.dto.response.auth.SignInResponseDto;
import com.example.kakaotalk.dto.response.auth.SignUpResponseDto;
import com.example.kakaotalk.entity.UserEntity;
import com.example.kakaotalk.provider.JwtProvider;
import com.example.kakaotalk.repository.UserRepository;
import com.example.kakaotalk.service.AuthService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class AuthServiceImpl implements AuthService {

    private final UserRepository userRepository;

    private final JwtProvider jwtProvider;


    @Override
    public ResponseEntity<? super SignInResponseDto> SignIn(SignInRequestDto dto) {

        String token = null;
        try {
            String email = dto.getEmail();
            UserEntity userEntity = userRepository.findByEmail(email);

            if (userEntity == null) return SignInResponseDto.signFailed();

            String password = dto.getPassword();

            if (password.equals(userEntity.getPassword())){

                token = jwtProvider.create(email);

            }else return SignInResponseDto.signFailed();

        }catch (Exception e){
            e.printStackTrace();
            return ResponseDto.databaseError();
        }
        return SignInResponseDto.success(token);


    }

    @Override
    public ResponseEntity<? super SignUpResponseDto> SignUn(SignUpRequestDto dto) {
        return null;
    }

}
