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
public class ChatRoomPk implements Serializable {

    @Column(name = "roomId")
    private int roomId;
    @Column(name = "email")
    private String email;
}
