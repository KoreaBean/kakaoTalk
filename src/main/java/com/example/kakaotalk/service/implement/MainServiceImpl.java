package com.example.kakaotalk.service.implement;

import com.example.kakaotalk.dto.request.main.AddFriendRequestDto;
import com.example.kakaotalk.dto.response.ResponseDto;
import com.example.kakaotalk.dto.response.main.*;
import com.example.kakaotalk.entity.SendFriendEntity;
import com.example.kakaotalk.entity.UserEntity;
import com.example.kakaotalk.repository.SendFriendRepository;
import com.example.kakaotalk.repository.UserRepository;
import com.example.kakaotalk.service.MainService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
@RequiredArgsConstructor
public class MainServiceImpl implements MainService {


    private final UserRepository userRepository;

    private final SendFriendRepository sendFriendRepository;



    @Override
    public ResponseEntity<? super MyProfileResponseDto> myProfile(String email) {

        UserEntity userEntity = null;


        try {
            System.out.println(email);
            userEntity = userRepository.findByEmail(email);
            System.out.println(userEntity.getEmail() + userEntity.getNickname());

            if (userEntity == null) return MyProfileResponseDto.noExistUser();

        }catch (Exception e) {
            e.printStackTrace();
            return ResponseDto.databaseError();
        }


        return MyProfileResponseDto.success(userEntity);
    }

    @Override
    public ResponseEntity<? super MyFriendProfileListResponseDto> MyFriendList(String email) {

        List<SendFriendEntity> sendFriendEntities = new ArrayList<>();
        List<UserEntity> userEntities = new ArrayList<>();
        try {

            sendFriendEntities = sendFriendRepository.findBySendEmailAndAcceptTrue(email);

            if (sendFriendEntities == null){
                FriendListResponseDto.noExistFriend();
            }

            for (SendFriendEntity sendFriendEntity : sendFriendEntities) {
                String searchEmail = sendFriendEntity.getReceiveEmail();
                System.out.println(searchEmail);
                UserEntity user = userRepository.findByEmail(searchEmail);
                System.out.println(user);
                userEntities.add(user);
                if (user == null) {
                    return MyFriendProfileListResponseDto.noExistedUser();
                }
            }
            if (userEntities == null) {
                return MyFriendProfileListResponseDto.noExistedUser();
            }

        }catch (Exception e) {
            e.printStackTrace();
            System.out.println("에러에러!!");
            return ResponseDto.databaseError();
        }

        return MyFriendProfileListResponseDto.success(userEntities);
    }

    @Override
    public ResponseEntity<? super SearchFriendResponseDto> SearchFriendList(String email) {

        List<UserEntity> userEntities = new ArrayList<>();

        try {
            userEntities = userRepository.findByEmailContaining(email);
            if (userEntities == null) {
                SearchFriendResponseDto.noExistUser();
            }

        }catch (Exception e){
            e.printStackTrace();
            return ResponseDto.databaseError();
        }

        return SearchFriendResponseDto.success(userEntities);
    }

    @Override
    public ResponseEntity<ResponseDto> AddFriendList(AddFriendRequestDto addFriendRequestDto) {

        SendFriendEntity sendFriendEntity = new SendFriendEntity();

        try {
            sendFriendEntity.setSendEmail(addFriendRequestDto.getSendEmail());
            sendFriendEntity.setReceiveEmail(addFriendRequestDto.getReceiveEmail());
            sendFriendEntity.setAccept(true);
            sendFriendRepository.save(sendFriendEntity);

            if (sendFriendEntity == null) {
                AddFriendResponseDto.notExistUser();
            }
        }catch (Exception e){
            e.printStackTrace();
            return ResponseDto.databaseError();
        }
        return AddFriendResponseDto.success();
    }


}
