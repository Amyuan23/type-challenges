// 深究一下联合类型会被extends 这件事

type A = { name: string }

type B = { name: string, age: number }

type E = { sex: string }

type C = A | B

// type D = keyof C

type F = A | E

type X = C extends { name: string, age: number } ? true : false

type Y = F extends A ? 'yes' : 'no'

type Z = 'x' | 'y' extends 'x' ? 'yes' : 'no'

type V = string | number

type U<T> = T extends string ? 'yes' : 'no'

type W = U<V>

type G<T> = T extends never ? 'yes' : 'no'

type H = G<string | never>

type L<T> = T extends 'x' ? 'yes' : 'no'

type M = L<'x' | 'y'>
