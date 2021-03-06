// Create at least 3 JavaScript objects. 
// Each object should have at least one method. Use the object literal method and the constructor function method at least once each to construct these objects. 
// Instantiate the objects and exemplify your understanding of them through JavaScript code and comments.


var user1 = {firstName: "Holly", lastName: "Neckermann", age : 25, zipCode : 19125, email: "hneckerm@gmail.com"};
// created an object literal. named it 'user1' instead of simply 'user' like below because with object literal you cannot create multiple objects of the same type. object literals are best for simple containers of data. it has 5 methods.


function User(firstName, lastName, age, zip, email) {
	this.firstName = firstName;
	this.lastName = lastName;
	this.age = age;
	this.zipCode = zip;
	this.email = email;
};
// created an object construction function 'user' that takes 5 parameters. 

user1.infoResults = function() {
	console.log("Name: " + this.firstName + " " + this.lastName + " ||" + " Age: " + this.age + " || Location: " + this.zipCode + " || " + "Contact: " + this.email);
};

var user2 = new User("Gregory", "Horbal", 27, 19125, "ghorbal@gmail.com");
user2.infoResults = function() {
	console.log("Name: " + this.firstName + " " + this.lastName + " ||" + " Age: " + this.age + " || Location: " + this.zipCode + " || " + "Contact: " + this.email);
};

var user3 = new User("Kevin", "Tomasura", 25, 19125, "ktomasur@gmail.com");
user3.infoResults = function() {
	console.log("Name: " + this.firstName + " " + this.lastName + "||" + " Age: " + this.age + " || Location: " + this.zipCode + " || " + "Contact: " + this.email);
};
// the above are the two new objects i created using the constructor function. they are both 2 new 'user' objects. 


console.log(user1.firstName, user2.firstName, user3.firstName);
console.log(user1.email, user2.email, user3.email);
// logging the first names and emails of all users to the console.

