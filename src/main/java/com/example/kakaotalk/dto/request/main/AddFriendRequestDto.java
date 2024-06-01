package com.example.kakaotalk.dto.request.main;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class AddFriendRequestDto {
    private String sendEmail;
    private String receiveEmail;
}
