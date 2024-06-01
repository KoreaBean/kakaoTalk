package com.example.kakaotalk.entity;


import com.example.kakaotalk.entity.primaryKey.SendFriendPk;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.IdClass;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Table(name = "sendfriend")
@Entity(name = "sendfriend")
@NoArgsConstructor
@AllArgsConstructor
@Setter
@Getter
@IdClass(SendFriendPk.class)
public class SendFriendEntity {

    @Id
    private String sendEmail;
    @Id
    private String receiveEmail;
    private boolean accept;

}
