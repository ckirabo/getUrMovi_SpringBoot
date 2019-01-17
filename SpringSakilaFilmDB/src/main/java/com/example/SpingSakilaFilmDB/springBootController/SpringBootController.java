package com.example.SpingSakilaFilmDB.springBootController;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.SpingSakilaFilmDB.springBootException.ResourceNotFoundException;
import com.example.SpingSakilaFilmDB.springBootModel.SpringBootModel;
import com.example.SpingSakilaFilmDB.springBootRepository.SpringBootRepository;


@CrossOrigin(origins="*",allowedHeaders="*")
@RestController
@RequestMapping("/api")
public class SpringBootController {
	
	@Autowired
	SpringBootRepository myRepository;
	
	
	//METHOD TO GET A FILM
	@GetMapping("film/(id)")
	public SpringBootModel getFilm_id(@PathVariable (value = "film_id") Long filmID) {
		return myRepository.findById(filmID).orElseThrow(()-> new ResourceNotFoundException ("SpringBootModel", "id",filmID));
		
	}
	
	//METHOD TO GET ALL FILMS
	@GetMapping("/films")
	public List<SpringBootModel> getAllFilms(){
		return myRepository.findAll();
	}




}
