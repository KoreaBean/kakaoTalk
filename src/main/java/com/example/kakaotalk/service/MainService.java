package com.example.kakaotalk.service;

import com.example.kakaotalk.dto.request.main.AddFriendRequestDto;
import com.example.kakaotalk.dto.response.ResponseDto;
import com.example.kakaotalk.dto.response.main.FriendListResponseDto;
import com.example.kakaotalk.dto.response.main.MyFriendProfileListResponseDto;
import com.example.kakaotalk.dto.response.main.MyProfileResponseDto;
import com.example.kakaotalk.dto.response.main.SearchFriendResponseDto;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RequestParam;

public interface MainService {

    ResponseEntity<? super MyProfileResponseDto> myProfile(String email);


    ResponseEntity<? super MyFriendProfileListResponseDto> MyFriendList(String email);

    ResponseEntity<? super SearchFriendResponseDto> SearchFriendList(String email);


    ResponseEntity<ResponseDto> AddFriendList(AddFriendRequestDto addFriendRequestDto);
}
