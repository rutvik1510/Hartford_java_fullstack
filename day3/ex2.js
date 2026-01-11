const empid = Symbol("empid");

let user = {
  name: "Suresh",
  phone: "+9189292929",
  email: "fr@.com",
  [empid]: 11
};

console.log(user.name);
console.log(user.phone);
console.log(user.email);
console.log(user[empid]);