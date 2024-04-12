// 深究一下联合类型会被extends分发 这件事

type A = 'x'

type B = 'y'

type C = A | B

type X = C extends 'x' ? 'yes' : 'no'

type Y = 'x' | 'y' extends 'x' ? 'yes' : 'no'

type Z<T> = T extends 'x' ? 'yes' : 'no'

type U = Z<C>

export {}
