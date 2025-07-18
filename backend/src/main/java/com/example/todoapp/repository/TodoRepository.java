package com.example.todoapp.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;
import com.example.todoapp.model.Todo;

@Repository
public interface TodoRepository extends JpaRepository<Todo, Long>{
	
	@Query(value="SELECT * FROM todo ORDER BY date DESC",nativeQuery=true)
	public List<Todo> getAllByDateDesc();

}
