function greet(user) {
  let des;
  let gender = user.gender;
  let age = user.age;

  if (gender == "male") {
    des = "Mr";
  } else if (gender == "female") {
    des = "Ms";
  } else {
    des = "";
  }
  let canVote = true;

  canVote = age >= 18 ? true : false;

  console.log(
    `Hello ${des} ${user.name}, your age is ${user.age}. and the voting ability is ${canVote}`
  );
}

let user = {
  name: "pogo",
  age: 9,
  gender: "male",
};

greet(user);
