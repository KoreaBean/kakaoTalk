package com.example.kakaotalk.entity.primaryKey;

import jakarta.persistence.Column;
import jakarta.persistence.Id;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.io.Serializable;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class SendFriendPk implements Serializable {

    @Column(name = "send_email")
    private String sendEmail;
    @Column(name = "receive_email")
    private String receiveEmail;
}
