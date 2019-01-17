package com.example.SpingSakilaFilmDB.springBootRepository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.SpingSakilaFilmDB.springBootModel.SpringBootModel;

public interface SpringBootRepository extends JpaRepository<SpringBootModel, Long> {

}
