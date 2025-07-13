package com.example.todoapp.model;
import java.time.LocalDateTime;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Table(name="todo")
@NoArgsConstructor
@AllArgsConstructor
@Data
public class Todo {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name="todo_id")
	private Long todoId;
	
	@Column(name="task")
	private String task;
	
	@Column(name="date")
	private LocalDateTime date;

}
