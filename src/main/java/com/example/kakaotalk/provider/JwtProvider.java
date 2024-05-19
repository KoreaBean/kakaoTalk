package com.example.kakaotalk.provider;

import io.jsonwebtoken.Claims;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Component;

import java.time.Instant;
import java.time.temporal.ChronoUnit;
import java.util.Date;

@Component
public class JwtProvider {

    @Value("@{secret-key}")
    private String secretKey;

    public String create(String email){

        // 만료기간 설정 -> 생성 시간으로부터 1시간 +
        Date expiredDate = Date.from(Instant.now().plus(1, ChronoUnit.HOURS));

        //jwt 빌더
        String jwt = Jwts.builder()
                // 알고리즘 시그니처 hs256 , 시크릿 키 설정
                .signWith(SignatureAlgorithm.HS256,secretKey)
                // 사용 주체
                .setSubject(email)
                // 생성 날짜 -> 현재 날짜
                .setIssuedAt(new Date())
                // 만료 날짜
                .setExpiration(expiredDate)
                // 압축
                .compact();
        return jwt;

    }

    // 검증 메서드
    public String validate (String jwt){
        // claims 는 jwt 에서 payload 부분이며 사용자와 역할이 담겨 있다.
        Claims claims = null;

        try{
            // jwts.parser 를 통해 jwt 파서를 생성하고 setSigningkey안에 secretkey로 서명 검증에 사용할 비밀키 설정
            claims = Jwts.parser().setSigningKey(secretKey)
                    //.parseClaimsJws(jwt)를 호출하여 입력받은 jwt 토큰을 파싱하고 검증
                    // 이 과정에서 서명이 올바른지, 토큰이 만료되지 않았는지 검사
                    .parseClaimsJws(jwt)
                    //검증된 jwt의 payload부분을 가져와 claims 변수에 할당
                    .getBody();

        }catch(Exception e){
            e.printStackTrace();
            return null;
        }
        // 예외가 발생하지 않았다면  토큰의 주체를 리턴 (email)
        return claims.getSubject();
    }
}
