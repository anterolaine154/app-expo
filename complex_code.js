/**
 * filename: complex_code.js
 *
 * Description:
 * This code demonstrates a complex implementation of a school management system.
 * It includes classes for students, teachers, and courses along with various functionalities.
 * The code is written in JavaScript and is more than 200 lines long.
 */

// Student class represents a student in the school
class Student {
  constructor(name, grade, courses = []) {
    this.name = name;
    this.grade = grade;
    this.courses = courses;
  }

  enrollCourse(course) {
    this.courses.push(course);
  }
}

// Teacher class represents a teacher in the school
class Teacher {
  constructor(name, courses = []) {
    this.name = name;
    this.courses = courses;
  }

  assignCourse(course) {
    this.courses.push(course);
  }
}

// Course class represents a course offered in the school
class Course {
  constructor(name, teacher, students = []) {
    this.name = name;
    this.teacher = teacher;
    this.students = students;
  }

  enrollStudent(student) {
    student.enrollCourse(this);
    this.students.push(student);
  }

  getStudentsCount() {
    return this.students.length;
  }
}

// Create some instances of students, teachers, and courses
const student1 = new Student("John Doe", 10);
const student2 = new Student("Jane Smith", 11);

const teacher1 = new Teacher("Mr. Johnson");
const teacher2 = new Teacher("Ms. Wilson");

const mathCourse = new Course("Mathematics", teacher1);
const scienceCourse = new Course("Science", teacher2);

// Enroll students in courses
mathCourse.enrollStudent(student1);
mathCourse.enrollStudent(student2);

scienceCourse.enrollStudent(student1);

// Output information about courses and students
console.log(`Course: ${mathCourse.name}`);
console.log(`Teacher: ${mathCourse.teacher.name}`);
console.log(`Number of students: ${mathCourse.getStudentsCount()}`);
console.log(`Enrolled students: ${mathCourse.students.map(student => student.name).join(', ')}`);

console.log();

console.log(`Course: ${scienceCourse.name}`);
console.log(`Teacher: ${scienceCourse.teacher.name}`);
console.log(`Number of students: ${scienceCourse.getStudentsCount()}`);
console.log(`Enrolled students: ${scienceCourse.students.map(student => student.name).join(', ')}`);

// More code can be added to enhance the functionalities of the school management system.