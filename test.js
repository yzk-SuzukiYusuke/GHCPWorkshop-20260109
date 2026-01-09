function calculateSum(a, b) {
  return a + b;
}

// JavaScript で Student クラスを作成
// プロパティ: name, age, grade
// メソッド: getInfo() - 学生情報を文字列で返す
// メソッド: isAdult() - 18歳以上かどうかを返す
class Student {
  constructor(name, age, grade) {
    this.name = name;
    this.age = age;
    this.grade = grade;
  }

  getInfo() {
    return `Name: ${this.name}, Age: ${this.age}, Grade: ${this.grade}`;
  }

  isAdult() {
    return this.age >= 18;
  }
}

// テストコード
const student1 = new Student('Alice', 20, 'A');
console.log(student1.getInfo()); // "Name: Alice, Age: 20, Grade: A"
console.log(student1.isAdult()); // true
