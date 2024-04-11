type A = never extends never ? 'yes' : 'no'

type IsNever<T> = T extends never ? 'yes' : 'no'

type B = IsNever<never>



type C = 1 extends number ? true : false
type IsNumber<T> = T extends number ? true : false

type D = IsNumber<never>

export {}
