type A<T> = T extends 1 ? 'yes' : 'no'

type B = A<1 | 'x'>

/**
 *
 */

type C<T> = T extends true ? 'yes' : 'no'

type D = C<boolean>

/**
 *
 */

type E<T> = T extends string ? 'yes' : 'no'

type F = E<any>

export {}
