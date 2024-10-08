package edu.icet.crm.service;

import edu.icet.crm.model.Student;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.RequestBody;

import java.util.List;
import java.util.Map;

public interface StudentService {
    List<Student> getAllStudent();
    void addStudent(Student student);
    void deleteStudent(int id);
    Student getStudentById(int id);
}
