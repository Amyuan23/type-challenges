type A = {
  id: number
  name: string
}

type B = {
  id: number
  name: string
}

type C = {
  id: number
  name: string
  age: number
}

let a: A = { id: 1, name: 'x' }
let b: B = { id: 2, name: 'y' }
let c: C = { id: 3, name: 'z', age: 18 }

a = b
b = a

a = c
c = a

export {}
