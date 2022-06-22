class Student {
  constructor(name,grade,studentId){
    this.name = name ; 
    this.grade = grade ; 
    this.studentId = studentId ;
  }
}

// const Student1 = new Student("daniel","10","123456789");
// const Student2 = new Student("lior","10","987654321");

// console.log(Student2);
// console.log(Student1);



class  CollageStudent extends Student {
  constructor(name,grade,studentId){
    super(name,grade,studentId)
  }

}
const collageStd = new CollageStudent("jhon",10,123456789)
console.log(collageStd)