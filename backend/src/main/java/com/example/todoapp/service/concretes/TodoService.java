package com.example.todoapp.service.concretes;

import java.time.format.DateTimeFormatter;
import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.todoapp.dto.TodoDto;
import com.example.todoapp.dto.TodoDtoIU;
import com.example.todoapp.model.Todo;
import com.example.todoapp.repository.TodoRepository;
import com.example.todoapp.service.abstracts.ITodoService;

@Service
public class TodoService implements ITodoService {

	@Autowired
	private TodoRepository todoRepository;

	public TodoDto convertToDto(Todo todo) {
		DateTimeFormatter formatter = DateTimeFormatter.ofPattern("yyyy-MM-dd HH:mm:ss");

		TodoDto todoDto = new TodoDto();
		BeanUtils.copyProperties(todo, todoDto);

		todoDto.setDate(todo.getDate().format(formatter));
		return todoDto;
	}

	@Override
	public TodoDto add(TodoDtoIU todoDtoIU) {
		Todo todo = new Todo();
		BeanUtils.copyProperties(todoDtoIU, todo);
		this.todoRepository.save(todo);
		TodoDto todoDto = convertToDto(todo);
		return todoDto;
	}

	@Override
	public TodoDto getById(Long todoId) {
		Todo todo = this.todoRepository.findById(todoId).get();
		TodoDto todoDto = convertToDto(todo);
		return todoDto;
	}

	@Override
	public TodoDto deleteById(Long todoId) {
		Todo todo = this.todoRepository.findById(todoId).get();
		TodoDto todoDto = convertToDto(todo);
		this.todoRepository.deleteById(todoId);
		return todoDto;
	}

	@Override
	public void deleteAll() {
		this.todoRepository.deleteAll();
	}

	@Override
	public List<TodoDto> getAllByDateDesc() {
		List<TodoDto> todoDtos = new ArrayList<>();
		List<Todo> todos = this.todoRepository.getAllByDateDesc();

		for (Todo todo : todos) {
			TodoDto todoDto = convertToDto(todo);
			todoDtos.add(todoDto);
		}
		
		return todoDtos;
	}

}
