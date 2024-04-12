interface A {
  a: string
  b: number
  c: boolean
  d: () => void
  e: string
}

type T1 = Extract< keyof A, 'a' | 'b' | 'f'>

type B = 'a' | 'b' | 'f' extends 'a' | 'b' | 'c' ? true : false

type T2 = Extract< keyof A, 'a'> | Extract< keyof A, 'b'> | Extract< keyof A, 'f'>

export {}
