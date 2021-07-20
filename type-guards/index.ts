function logError(error: string | Error): void {
  if (typeof error === "string") {
    //this is typeguard
    console.log(error)
  } else {
    console.log(error.message)
  }
}

export class Rectangle {
  constructor(public width: number, public height: number) {}
}

export class Circle {
  constructor(public radius: number) {}
}

function getArea(geometry: Rectangle | Circle): number {
  if (geometry instanceof Circle) {
    //Instanceof is also a type guard in typescript
    return Math.PI * Math.pow(geometry.radius, 2)
  } else {
    return geometry.height * geometry.width
  }
}
