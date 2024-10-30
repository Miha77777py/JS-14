const users = [
    {
        name: "Tom",
        age: 24,
        gender: "male",
        eyeColor: "blue",
        email: "tom@email.com",
        isActive: false,
    },
    {
        name: "Lisa",
        age: 32,
        gender: "female",
        eyeColor: "brown",
        email: "lisa@email.com",
        isActive: true,
    },
    {
        name: "Ivan",
        age: 54,
        gender: "male",
        eyeColor: "gray",
        email: "ivan@email.com",
        isActive: true,
    },
    {
        name: "David",
        age: 42,
        gender: "male",
        eyeColor: "brown",
        email: "david@email.com",
        isActive: false,
    },
    {
        name: "Mike",
        age: 93,
        gender: "male",
        eyeColor: "gray",
        email: "mike@email.com",
        isActive: false,
    },
];

const getName = arr => arr.map(el => el.name);

console.log(getName(users));

const getUserByEyeColor = (arr, color) => 
    arr.filter(el => el.eyeColor === color).length > 1 
        ? arr.filter(el => el.eyeColor === color)
        : arr.filter(el => el.eyeColor === color)[0];

console.log(getUserByEyeColor(users, "blue"));

const getUserByGender = (arr, gender) => 
    arr.filter(el => el.gender === gender).map(el => el.name);

console.log(getUserByGender(users, "female"));

const getInactiveUsers = arr => arr.filter(el => !el.isActive);

console.log(getInactiveUsers(users));

const getUserByEmail = (arr, email) => arr.find(el => el.email === email);

console.log(getUserByEmail(users, "david@email.com"));

const getUsersByAgeRange = (arr, min, max) => 
    arr.filter(el => el.age >= min && el.age <= max);

console.log(getUsersByAgeRange(users, 40, 50));