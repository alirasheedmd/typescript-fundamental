//exaustive switch is when we have multiple types option we can use if else to switch it.

let y = 4 as string | number

if (typeof y === "string") {
  y.split(",")
} else if (typeof y === "number") {
  y.toFixed(2)
} else {
  throw new UnreachableError(y, "y Should be a string or number") //here the y is never becuase all the types are in the case. you cant leave any option here becuase typescript will give error.
}
