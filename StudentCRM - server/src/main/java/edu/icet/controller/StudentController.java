package edu.icet.controller;

import edu.icet.dto.Student;
import edu.icet.service.StudentService;
import jakarta.servlet.http.HttpServletRequest;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin
@RequestMapping("/student")
public class StudentController {

    @Autowired
    private StudentService service;

    @GetMapping("/all")
    public  List<Student> getStudents() {
        return service.getStudents();
    }

    @PostMapping
    public void addStudent(@RequestBody Student student) {
        service.addStudent(student);
    }

    @DeleteMapping("/{id}")
    public void deleteStudentById(@PathVariable Integer id) {
        service.deleteStudentById(id);
    }

    @PutMapping
    public void updateStudent(@RequestBody Student student){
        service.updateStudent(student);
    }

    @GetMapping("/{name}")
    public List<Student> findByName(@PathVariable String name){
        return service.findByName(name);
    }
}
