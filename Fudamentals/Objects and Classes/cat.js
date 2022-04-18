function person(data) {
  class Person {
    constructor(name, age, town, neighbourhood, weather) {
      this.name = name;
      this.age = age;
      this.town = town;
      this.neighbourhood = neighbourhood;
      this.weather = weather;
    }
    say() {
      console.log(
        `${this.name} says that he is ${this.age} years old from ${this.town}, ${this.neighbourhood} and that the weather is ${this.weather}.`
      );
    }
  }

  let sentance = [];
  console.log(sentance);

  for (let element of data) {
    let datas = element.split(' ');
    let person = new Person(
      datas[0],
      Number(datas[1]),
      datas[2],
      datas[3],
      datas[4]
    );
    sentance.push(person);
  }
  console.log(sentance);

  for (let element of sentance) {
    element.say();
  }
}
person(['Kris 23 Sofia Simeonovo Cold']);
