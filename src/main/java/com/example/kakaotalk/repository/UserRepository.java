package com.example.kakaotalk.repository;

import com.example.kakaotalk.entity.UserEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface UserRepository extends JpaRepository<UserEntity,String> {

    boolean existsByEmail(String email);

    boolean existsByPassword(String password);

    UserEntity findByEmail(String email);

}
