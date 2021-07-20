function logError(error: string | Error): void {
  if (typeof error === "string") {
    //this is typeguard
    console.log(error)
  } else {
    console.log(error.message)
  }
}
