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
enum Role {
    ADMIN, READ_ONLY, AUTHOR
};

const person = {
    name: 'Maximilian',
    age: 30,
    hobbies: ['Sport','Cooking'],
    role: Role.ADMIN,
}

// person.role.push("Admin");
// console.log("bon",person.role);


let favoriteActivities: string[];

for(const hobby of person.hobbies){
    console.log(hobby);
}

// check enums
if(person.role === Role.ADMIN){
    console.log("Is read only");
}