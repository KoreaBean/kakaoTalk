package com.example.kakaotalk.dto.object;

import com.example.kakaotalk.entity.SendFriendEntity;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;

import java.util.ArrayList;
import java.util.List;

@Getter
@NoArgsConstructor
@AllArgsConstructor
public class MyFriendListItem {

    private String sendEmail;
    private String receiveEmail;
    private boolean accept;


    public MyFriendListItem(SendFriendEntity sendFriendEntity) {
        this.sendEmail =sendFriendEntity.getSendEmail();
        this.receiveEmail = sendFriendEntity.getReceiveEmail();
        this.accept = sendFriendEntity.isAccept();
    }


    public static List<MyFriendListItem> getList (List<SendFriendEntity> sendFriendEntities){

        List<MyFriendListItem> list = new ArrayList<>();

        for (SendFriendEntity sendFriendEntity1 : sendFriendEntities) {
            MyFriendListItem myFriendListItem = new MyFriendListItem(sendFriendEntity1);
            list.add(myFriendListItem);
        }

        return list;
    }




}
