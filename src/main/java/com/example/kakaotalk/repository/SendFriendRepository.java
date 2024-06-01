package com.example.kakaotalk.repository;

import com.example.kakaotalk.entity.SendFriendEntity;
import com.example.kakaotalk.entity.primaryKey.SendFriendPk;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface SendFriendRepository extends JpaRepository<SendFriendEntity, SendFriendPk> {


    List<SendFriendEntity> findBySendEmailAndAcceptTrue(String email);


}
