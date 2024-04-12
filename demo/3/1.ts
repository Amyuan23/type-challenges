type X1 = {
  a: () => 22
  b: string
  c: boolean
  d: {
    e: boolean
    f: {
      i: true
      j: 'string'
    }
  }
}

type X2 = { a: string } | { b: number }

type DeepReadonly<T> = {
  readonly [K in keyof T]: keyof T[K] extends object ? DeepReadonly<T[K]> : T[K]
}

type D_X1 = DeepReadonly<X1>
type D_X2 = DeepReadonly<X2>

type A<T> = keyof T extends never ? true : false

type B = A<string>

type C = keyof string

export {}
