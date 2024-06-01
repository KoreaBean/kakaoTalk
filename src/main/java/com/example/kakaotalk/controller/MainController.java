package com.example.kakaotalk.controller;


import com.example.kakaotalk.dto.request.main.AddFriendRequestDto;
import com.example.kakaotalk.dto.request.main.CreateChattingRoomRequestDto;
import com.example.kakaotalk.dto.request.main.MyProfileRequestDto;
import com.example.kakaotalk.dto.response.ResponseDto;
import com.example.kakaotalk.dto.response.main.FriendListResponseDto;
import com.example.kakaotalk.dto.response.main.MyFriendProfileListResponseDto;
import com.example.kakaotalk.dto.response.main.MyProfileResponseDto;
import com.example.kakaotalk.dto.response.main.SearchFriendResponseDto;
import com.example.kakaotalk.service.MainService;
import lombok.Getter;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/v1/main")
@RequiredArgsConstructor
public class MainController {


    private final MainService mainService;

    @PostMapping("/my-profile")
    public ResponseEntity<? super MyProfileResponseDto> myProfile(@RequestBody MyProfileRequestDto dto){


        ResponseEntity<? super MyProfileResponseDto> response =  mainService.myProfile(dto.getEmail());

        return response;
    }

    @GetMapping("/myfriend-list/{email}")
    public ResponseEntity<? super MyFriendProfileListResponseDto> myFriendList(@PathVariable("email") String email){
        ResponseEntity<? super MyFriendProfileListResponseDto> response = mainService.MyFriendList(email);
        return response;
    }


    @GetMapping("/addfriend/{email}")
    public ResponseEntity<? super SearchFriendResponseDto> searchFriendList (@PathVariable("email") String email){

        ResponseEntity<? super SearchFriendResponseDto> response = mainService.SearchFriendList(email);

        return response;
    }

    @PostMapping("/addFriend-list")
    public ResponseEntity<ResponseDto> addFriendList (@RequestBody AddFriendRequestDto requestDto) {

        ResponseEntity<ResponseDto> response = mainService.AddFriendList(requestDto);

        return  response;
    }

    @PostMapping("/create-chatting-room")
    public ResponseEntity<ResponseDto> createChattingRoom (@RequestBody CreateChattingRoomRequestDto dto) {

        // 1. 기존 채팅방 검색해서 없는 유저들이면
        // 2. 새로운 채팅방 만들기
        // 3. 만약 기존 채팅방이 있으면
        // 4. 해당 채팅방으로 연결하기

        // 1. 검증하는 메서드 1 개
        // 2. 검증 결과에 따라 방 만드는 메서드 1개 -> 반환 타입은 roomID




    }




}


