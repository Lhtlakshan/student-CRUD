package edu.icet.crm.controller;

import edu.icet.crm.model.Student;
import edu.icet.crm.service.StudentService;
import jakarta.websocket.server.PathParam;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin
@RequestMapping("/stu")
@RequiredArgsConstructor
public class StudentController {

    final StudentService studentService;

    @GetMapping("/all")
    List<Student> getStudent(){
        return studentService.getAllStudent();
    }

    @GetMapping("/get-student-by-Id/{id}")
    Student getStudentById(@PathVariable int id){
        return studentService.getStudentById(id);
    }

    @PostMapping("/add-student")
    void addStudent(@RequestBody Student student){
        studentService.addStudent(student);
    }

    @DeleteMapping("/{id}")
    void deleteStudent(@PathVariable int id){
        studentService.deleteStudent(id);
    }

}
