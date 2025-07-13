package com.example.todoapp.service.abstracts;

import java.util.List;

import com.example.todoapp.dto.TodoDto;
import com.example.todoapp.dto.TodoDtoIU;

public interface ITodoService {
	
	public TodoDto add(TodoDtoIU todoDtoIU);
	
	public TodoDto getById(Long todoId);
	
	public TodoDto deleteById(Long todoId);
	
	public void deleteAll();
	
	public List<TodoDto>getAllByDateDesc();

}
