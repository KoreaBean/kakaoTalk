package com.example.kakaotalk.config;

import org.springframework.context.annotation.Configuration;
import org.springframework.messaging.simp.config.MessageBrokerRegistry;
import org.springframework.web.socket.config.annotation.EnableWebSocketMessageBroker;
import org.springframework.web.socket.config.annotation.StompEndpointRegistry;
import org.springframework.web.socket.config.annotation.WebSocketMessageBrokerConfigurer;

@Configuration
@EnableWebSocketMessageBroker // WebSocket 메시지 브로커 활성화
public class WebsocketConfig  implements WebSocketMessageBrokerConfigurer {


    @Override
    // 메시지 브로커의 설정을 정의
    public void configureMessageBroker(MessageBrokerRegistry registry) {
        //클라이언트가 서버로 메시지를 보낼 때 사용할 prefix ex) /app/message -> /message
        registry.setApplicationDestinationPrefixes("/app");
        // 간단한 메모리 기반 메시지 브로커 활성화, 구독 경로 /chatroom , /user
        registry.enableSimpleBroker("/topic");
//        // 특정 사용자에게 메시지를 보낼 때 사용할 prefix , 이를 통해 고유 경로로 메시지 전송 가능
//        registry.setUserDestinationPrefix("/user");
    }

    @Override
    //클라이언트가 WebSocket을 통해 서버에 연결 할 수 있는 STOMP 엔드 포인트
    public void registerStompEndpoints(StompEndpointRegistry registry) {
        // /ws 경로로 엔트 포인트 추가
        registry.addEndpoint("/ws")
                //모든 도메인 허용
                .setAllowedOriginPatterns("*")
                // 클라이언트가 WebSocket을 지원하지 않는 인터넷일 경우 WebSocket의 대체 기술로 호환성 개선
                .withSockJS();
    }
}
