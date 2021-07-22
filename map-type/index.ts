type Person = {
  name: string
  age: number
  location: string
}

// function logAccess(object: Person, key: string): Person { // here the key can take in any key so for example if we give ages it will take it. so to fix this issue we will use union intersection
//   return
// }

// function logAccessUnion(object: Person, key: 'name' | 'age' | 'location'): Person {  // to automate this process of defining keys with union we use
//   return
// }

// type PersonKeys = keyof Person

function logAccessKeyOf(object: Person, key: keyof Person): Person {
  return
}

const john: Person = logAccessKeyOf(
  {
    name: "John",
    age: 35,
    location: "karachi",
  },
  "age"
)
