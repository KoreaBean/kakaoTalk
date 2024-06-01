package com.example.kakaotalk.repository;

import com.example.kakaotalk.entity.UserEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface UserRepository extends JpaRepository<UserEntity,String> {

    boolean existsByEmail(String email);

    boolean existsByPassword(String password);

    UserEntity findByEmail(String email);


    List<UserEntity> findByEmailContaining(String email);


}
