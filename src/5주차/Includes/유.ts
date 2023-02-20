type Includes<T extends any[], K> = K extends T[number] ? true : false;

type isPillarMen = Includes<["Kars", "Esidisi", "Wamuu", "Santana"], "Dio">; // expected to be `false`
type isAsia = Includes<["Korea", "Japan", "China"], "USA">;
type isAsia2 = Includes<["Korea", "Japan", "China"], "Korea">;
