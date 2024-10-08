package edu.icet.crm.data;

import edu.icet.crm.model.Student;
import org.springframework.data.jpa.repository.JpaRepository;

public interface StudentData extends JpaRepository<Student,Integer> {

    Student findStudentById(int id);
}
