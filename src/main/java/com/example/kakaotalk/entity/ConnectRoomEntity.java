package com.example.kakaotalk.entity;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity(name = "connectRoom")
@Table(name = "connectRoom")
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class ConnectRoomEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long connectId;
    private long roomId;
    private String email;
}
