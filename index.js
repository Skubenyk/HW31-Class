// *Реалізуй клас, що описує коло. У класі повинні бути такі компоненти:

//* -поле, що зберігає радіус кола;
//* -get-властивість, яке повертає радіус кола;
//* -set-властивість, що встановлює радіус кола;
//* -get-властивість, яке повертає діаметр кола;
//* -метод, що обчислює площу кола;
//* -метод, що обчислює довжину кола.
//* Продемонструй роботу властивостей і методів.

class Circle {
  constructor(radius) {
    this.radius = radius;
  }

  showRadius() {
    return `Радіус кола - ${this.radius}`;
  }

  showDiameter() {
    return `Діаметр кола - ${this.radius * 2}`;
  }

  showArea() {
    return `Площа кола - ${3.14 * this.radius ** 2}`;
  }

  showLength() {
    return `Довжина кола - ${2 * 3.14 * this.radius}`;
  }
}

const radius = new Circle(10);
console.log(radius.showRadius());

const diameter = new Circle(10);
console.log(diameter.showDiameter());

const area = new Circle(10);
console.log(area.showArea());

const length = new Circle(10);
console.log(length.showLength());


//* Реализуйте класс Student, который будет наследовать класс User. Этот класс должен иметь следующие свойства: name (имя, наследуется от User), surname (фамилия, наследуется от User), year (год поступления в вуз). Класс должен иметь метод getFullName() (наследуется от User), с помощью которого можно вывести одновременно имя и фамилию студента. Также класс должен иметь метод getCourse(), который будет выводить текущий курс студента (от 1 до 5). Курс вычисляется так: нужно от текущего года отнять год поступления в вуз. Текущий год получите самостоятельно.

class User {
  constructor(name, surname) {
    this.name = name;
    this.surname = surname;
  }

  getFullName() {
    return this.name + " " + this.surname;
  }
}

const user = new User("Джон", "Сміт");
console.log(user.getFullName());

class Student extends User {
  constructor(name, surname, year) {
    super(name, surname);
    this.year = year;
  }
  getCourse() {
    console.log(`${2022 - this.year}`,'курс');
  }
}

const student = new Student("Aня", "Петрова", 2020);

student.getCourse();
console.log(student.getFullName());
