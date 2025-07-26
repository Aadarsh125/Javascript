const tinderUser = new Object() // singleton Object hai
// const tinderUser = {} // Non singleton object hai

tinderUser.id = "123abc",
tinderUser.name = "sammy",
tinderUser.isLoggedIn = false


// console.log(tinderUser);

const regularUser = {
    email: "some@gmail.com",
    fullname: {
        userfullname: {
            firstname: "aadarsh",
            laseName: "sahu"
        }
    }
}
// console.log(regularUser.fullname.userfullname.firstname);

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}

// const obj3 = {obj1, obj2}
// const obj3 = Object.assign(obj1, obj2)
// const obj3 = Object.assign({}, obj1, obj2)// {} ye laga kr assign krna zayada accha hota hai

const obj3 = {...obj1, ...obj2}

// console.log(obj3);
// output { obj1: { '1': 'a', '2': 'b' }, obj2: { '3': 'a', '4': 'b' } } this problem means object ke andaar object aa jat hai


const users = [
    {
        id: 1,
        email: "a@gmail.com"
    },
    {
        id: 1,
        email: "a@gmail.com"
    },
    {
        id: 1,
        email: "a@gmail.com"
    },
]

users[1].email
// console.log(tinderUser);

// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser));

// console.log(Object.hasOwnProperty('isLogged')); // check krta hai ki vo property object me exist bhi krti hai ya nhi

const course = {
    coursename: "js in hindi",
    price: "999",
    courseInstructor: "aadarsh"
}

// course.courseInstructor

const {courseInstructor: instructor} = course// Just change the name with the help of (:)

// console.log(courseInstructor);
console.log(instructor);


