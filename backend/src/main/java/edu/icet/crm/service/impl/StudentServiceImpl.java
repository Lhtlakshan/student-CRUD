package edu.icet.crm.service.impl;

import edu.icet.crm.data.StudentData;
import edu.icet.crm.model.Student;
import edu.icet.crm.service.StudentService;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.RequestBody;

import java.util.List;

@Service
@RequiredArgsConstructor
public class StudentServiceImpl implements StudentService {
    final private StudentData studentData;


    @Override
    public List<Student> getAllStudent() {
        return studentData.findAll();
    }

    @Override
    public void addStudent( Student student) {
        System.out.println(student);
        studentData.save(student);
    }

    @Override
    public void deleteStudent(int id) {
        studentData.deleteById(id);
    }

    @Override
    public Student getStudentById(int id) {
        return studentData.findStudentById(id);
    }


}
