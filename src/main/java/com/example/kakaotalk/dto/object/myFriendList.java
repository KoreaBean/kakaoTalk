package com.example.kakaotalk.dto.object;

import com.example.kakaotalk.entity.UserEntity;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;

import java.util.ArrayList;
import java.util.List;

@Getter
@NoArgsConstructor
@AllArgsConstructor
public class myFriendList {

    private String email;
    private String ProfileImage;
    private String nickname ;
    private String titleMessage ;


    public myFriendList(UserEntity userEntity) {
        this.email = userEntity.getEmail();
        this.ProfileImage = userEntity.getProfileImage();
        this.nickname = userEntity.getNickname();
        this.titleMessage = userEntity.getTitleMessage();
    }

    public static List<myFriendList> getList(List<UserEntity> userEntities){
        List<myFriendList> list = new ArrayList<>();

        for (UserEntity user : userEntities) {
            myFriendList myFriendProfileListItem  = new myFriendList(user);
            list.add(myFriendProfileListItem);
        }


        return list;
    }


}
