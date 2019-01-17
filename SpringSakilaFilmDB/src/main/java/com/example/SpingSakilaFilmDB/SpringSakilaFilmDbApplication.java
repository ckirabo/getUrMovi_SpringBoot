package com.example.SpingSakilaFilmDB;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.data.jpa.repository.config.EnableJpaAuditing;

@SpringBootApplication
@EnableJpaAuditing
public class SpringSakilaFilmDbApplication {

	public static void main(String[] args) {
		SpringApplication.run(SpringSakilaFilmDbApplication.class, args);
	}

}

