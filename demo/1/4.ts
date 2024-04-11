// TS 为了保持js 的灵活性，还做了一些看上去反直觉的事

interface T {
  [prop: string]: number
}

type KeyT = keyof T
