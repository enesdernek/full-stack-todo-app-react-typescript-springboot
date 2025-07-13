package com.example.todoapp.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.todoapp.dto.TodoDto;
import com.example.todoapp.dto.TodoDtoIU;
import com.example.todoapp.service.concretes.TodoService;

@CrossOrigin
@RestController
@RequestMapping("/api/todo")
public class TodoController {
	
	@Autowired
	private TodoService todoService;
	
	@PostMapping
	public ResponseEntity<TodoDto> add(@RequestBody TodoDtoIU todoDtoIU){
		return new ResponseEntity<>(this.todoService.add(todoDtoIU),HttpStatus.CREATED);
	}
	
	@GetMapping("/{todoId}")
	public ResponseEntity<TodoDto> getById(@PathVariable("todoId") Long todoId) {
		return new ResponseEntity<>(this.todoService.getById(todoId),HttpStatus.OK);
	}
	
	@DeleteMapping("/{todoId}")
	public ResponseEntity<TodoDto> deleteById(@PathVariable("todoId") Long todoId) {
		return new ResponseEntity<>(this.todoService.deleteById(todoId),HttpStatus.OK);
	}
	
	@DeleteMapping("delete-all")
	public void deleteAll() {
		this.todoService.deleteAll();
	}
	
	@GetMapping("get-all-by-date-desc")
	public ResponseEntity<List<TodoDto>> getAllByDateDesc(){
		return new ResponseEntity<>(this.todoService.getAllByDateDesc(),HttpStatus.OK);
	}

}
