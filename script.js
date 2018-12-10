var user = {
	name: "Василий",
	surname: "Петров",
};

alert(user.name);
user.name = "Сергей"
alert(user.name);
delete user.name;
alert(user.name);

// var person = {
// 	name: "Василий",
// 	age: 25,
// 	city: "Tashkent"
// };

// delete person.city;

// var answer;

// if (person.city === undefined) {
// 	answer = "Элемент отсутствует";
// }else{
// 	answer = person.city;
// }

// alert(answer);