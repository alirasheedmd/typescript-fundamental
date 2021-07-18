let calc: (a: number, b: number, c: string) => number

calc = (numOne: number, numTwo: number, operation: string) => {
  if (operation === "add") {
    return numOne + numTwo
  } else return 0
}

console.log(calc(5, 5, "add"))
