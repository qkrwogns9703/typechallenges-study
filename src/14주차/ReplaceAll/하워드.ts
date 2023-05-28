type ReplaceAll<S extends string, T extends string, R extends string> =
    S extends `${infer before}${T}${infer after}` ? ReplaceAll<`${before}${R}${after}`, T, R> : S;

type replaced = ReplaceAll<'t y p e s', ' ', ''> // expected to be 'types'
