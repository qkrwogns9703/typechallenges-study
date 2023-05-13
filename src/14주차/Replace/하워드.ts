type Replace<S extends string, T extends string, R extends string> =
    S extends `${infer before}${T}${infer after}` ? `${before}${R}${after}` : S;

type replaced = Replace<'types are fun!', 'fun!', 'awesome'> // expected to be 'types are awesome!'
