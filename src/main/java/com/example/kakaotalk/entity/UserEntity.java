package com.example.kakaotalk.entity;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import jakarta.validation.constraints.NotBlank;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.util.Date;

@Entity(name = "user")
@Table(name = "user")
@NoArgsConstructor
@AllArgsConstructor
@Getter
public class UserEntity {

    @Id
    private String email;
    private String password;
    private String nickname;
    private String id;
    private String telnumber;
    private String address;
    private String createdate;
    private String modifydate;
    private String birthdate;
    private String detailaddress;
    private String profileimage;
    private String titlemessage;

}
