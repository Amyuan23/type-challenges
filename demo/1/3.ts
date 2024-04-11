// Array.from() 静态方法从可迭代或类数组对象创建一个新的浅拷贝的数组实例。

Array.from('foo') // ["f", "o", "o"]
Array.from({ length: 3 }) // Array [undefined, undefined, undefined]
Array.from(new Set(['foo', 'bar', 'baz', 'foo'])) // ["foo", "bar", "baz"]
