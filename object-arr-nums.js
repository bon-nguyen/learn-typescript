"use strict";
// let person:{
//     name: string,
//     age: number,
//     hobbies: string[],
//     role: [number, string];
// } = {
//     name: 'Maximilian',
//     age: 30,
//     hobbies: ['Sport','Cooking'],
//     role: [1, "bon"]
// }
// const ADMIN = 0;
// const READ_ONLY = 1;
// const AUTHOR = 2;
var Role;
(function (Role) {
    Role[Role["ADMIN"] = 0] = "ADMIN";
    Role[Role["READ_ONLY"] = 1] = "READ_ONLY";
    Role[Role["AUTHOR"] = 2] = "AUTHOR";
})(Role || (Role = {}));
;
const person = {
    name: 'Maximilian',
    age: 30,
    hobbies: ['Sport', 'Cooking'],
    role: Role.ADMIN,
};
// person.role.push("Admin");
// console.log("bon",person.role);
let favoriteActivities;
for (const hobby of person.hobbies) {
    console.log(hobby);
}
// check enums
if (person.role === Role.ADMIN) {
    console.log("Is read only");
}
