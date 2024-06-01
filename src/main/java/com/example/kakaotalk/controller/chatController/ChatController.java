package com.example.kakaotalk.controller.chatController;

import lombok.RequiredArgsConstructor;
import org.springframework.messaging.handler.annotation.MessageMapping;
import org.springframework.messaging.handler.annotation.Payload;
import org.springframework.messaging.simp.SimpMessagingTemplate;
import org.springframework.stereotype.Controller;


@Controller
@RequiredArgsConstructor
public class ChatController {

    private final SimpMessagingTemplate messagingTemplate;

    //클라이언트가 /app/chat.send 의 경로로 메시지를 보내면 이 메서드 호출
    @MessageMapping("/chat.send")
    //메시지 본문을 chatMessage 객체로 매핑
    public void sendMessage(@Payload ChatMessage chatMessage) {
        System.out.println("Received message " + chatMessage);

        String destination = "/topic/private/"+chatMessage.getRoomId();
        //topic/public 경로로 메시지를 변환하여 발송, 즉 모든 구독자에게 메시지를 브로드캐스트
        messagingTemplate.convertAndSend(destination, chatMessage);
    }

    @MessageMapping("/chat.newUser")
    public void newUser(@Payload ChatMessage chatMessage) {
        System.out.println("out message " + chatMessage);
        chatMessage.setType(ChatMessage.MessageType.JOIN);
        String destination = "/topic/private/" + chatMessage.getRoomId();
        messagingTemplate.convertAndSend(destination, chatMessage);
    }
}

