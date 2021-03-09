const person = {
    name: "Andrew",
    age: 26,
    location:{
        city: "philadelphia",
        temp: 92
    }
}
//destructuring, and renaming
const { name, age: new_age } = person

console.log(name)
console.log(new_age)

const address = [
    "134",
    "calvin street",
    "Boston"
]

const [street, , zip] = address


console.log(`You are in ${street} and in ${zip}`)
