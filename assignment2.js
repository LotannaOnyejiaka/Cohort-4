const students = [
    { name: "Lotanna", age: 18, grade: "A" },
    { name: "Nelson", age: 17, grade: "B" },
    { name: "Abigail", age: 19, grade: "A" },
    { name: "Amaka", age: 18, grade: "D" },
    { name: "Adaora", age: 16, grade: "C" },
    { name: "Segun", age: 21, grade: "B" },
    { name: "Tobi", age: 15, grade: "F" },
  ];
  
  function filterByGrade(students, grade) {
    return students.filter(student => student.grade === grade);
  }
  
  function averageAge(students) {
    const totalAge = students.reduce((sum, student) => sum + student.age, 0);
    return totalAge / students.length;
  }
  
  const gradeAStudents = filterByGrade(students, "B");
  console.log(gradeAStudents);
  
  const average = averageAge(students);
  console.log(average);