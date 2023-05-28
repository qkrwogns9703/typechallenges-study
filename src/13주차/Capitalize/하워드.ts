type AlphabetMap = { "a": "A", "b": "B", "c": "C", "d": "D", "e": "E", "f": "F", "g": "G", "h": "H", "i": "I", "j": "J", "k": "K", "l": "L", "m": "M", "n": "N", "o": "O", "p": "P", "q": "Q", "r": "R", "s": "S", "t": "T", "u": "U", "v": "V", "w": "W", "x": "X", "y": "Y", "z": "Z" }
type MyCapitalize<T extends string> = T extends `${infer first}${infer U}` ? (first extends keyof AlphabetMap ? `${AlphabetMap[first]}${U}` : T) : T;

type capitalized = MyCapitalize<'hello world'> // expected to be 'Hello world'
