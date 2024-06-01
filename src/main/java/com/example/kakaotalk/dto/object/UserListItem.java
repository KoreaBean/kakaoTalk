package com.example.kakaotalk.dto.object;


import com.example.kakaotalk.common.ResponseCode;
import com.example.kakaotalk.common.ResponseMessage;
import com.example.kakaotalk.dto.response.ResponseDto;
import com.example.kakaotalk.entity.UserEntity;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.util.ArrayList;
import java.util.List;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class UserListItem {

    private String email;
    private String nickname;
    private String profileImage;


    public UserListItem(UserEntity userEntity) {
        this.email = userEntity.getEmail();
        this.nickname = userEntity.getNickname();
        this.profileImage = userEntity.getProfileImage();
    }

    public static List<UserListItem> getList (List<UserEntity> userEntities){

        List<UserListItem> list = new ArrayList<>();

        for (UserEntity user : userEntities) {
            UserListItem userListItem = new UserListItem(user);
            list.add(userListItem);
        }
        return list;
    }





}
