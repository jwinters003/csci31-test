// 1.0 Use console.log to output your name
console.log("Jesse Winters");

// 1.1 Use object longhand to create an object with properties: firstName, lastName
const person = {
  firstName: "Jesse",
  lastName: "Winters"
};

// 1.2 Use JSON.stringify to console.log the object
console.log(JSON.stringify(person));

// 1.3 Use "dot notation" to console.log the firstName property
console.log(person.firstName);

// 1.4 Use "square brackets" to console.log the lastName property
console.log(person["lastName"]);

// 1.5 Use object shorthand to create an object with properties: title, subtitle. console.log the object
const title = "JavaScript 101";
const subtitle = "Learning Objects";
const lesson = { title, subtitle };
console.log(lesson);

// 1.6 Use destructuring to pull the firstName property out of an object. console.log the firstName
const { firstName } = person;
console.log(firstName);

// 1.7 Use destructured renaming to pull the lastName property out of an object, rename the property to "surname". console.log the surname.
const { lastName: surname } = person;
console.log(surname);

// 1.8 Use spread syntax to create a new object from the old object, but also adds a new property called "secret". console.log the secret
const personWithSecret = { ...person, secret: "JavaScript rocks!" };
console.log(personWithSecret.secret);

// 1.9 Use rest syntax to pull out the "secret" property, but put everything else into the personWithoutSecret property. console.log the personWithoutSecret
const { secret, ...personWithoutSecret } = personWithSecret;
console.log(personWithoutSecret);
