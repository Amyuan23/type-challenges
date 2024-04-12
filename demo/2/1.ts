type A = never extends never ? 'yes' : 'no'

type IsNever<T> = [T] extends [never] ? 'yes' : 'no'

type B = IsNever<never>

export {}
