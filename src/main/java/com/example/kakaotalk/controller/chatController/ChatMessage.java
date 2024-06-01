package com.example.kakaotalk.controller.chatController;

import lombok.Data;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.sql.Struct;

@Data
@Getter
@Setter
@NoArgsConstructor
public class ChatMessage {
    private String sender;
    private String content;
    private MessageType type;
    private String roomId;

    public enum MessageType {
        CHAT, JOIN, LEAVE
    }
}
