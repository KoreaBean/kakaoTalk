package com.example.kakaotalk.dto.request.auth;

import jakarta.validation.constraints.NotBlank;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@NoArgsConstructor
@Getter
@Setter
public class SignInRequestDto {

    @NotBlank
    private String email;
    @NotBlank
    private String password;
}
