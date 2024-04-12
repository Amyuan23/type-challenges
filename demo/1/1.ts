type myObj = {
  x: number
  y: number
  z: number
}

function getSum(obj: myObj) {
  let sum = 0

  Object.keys(obj).forEach((num) => {
    sum += obj[num as keyof myObj]
  })

  return sum
}

export {}
