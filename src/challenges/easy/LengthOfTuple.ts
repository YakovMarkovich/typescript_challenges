/*
For given a tuple, you need create a generic Length, 
pick the length of the tuple

For example:

type tesla = ['tesla', 'model 3', 'model X', 'model Y']
type spaceX = ['FALCON 9', 'FALCON HEAVY', 'DRAGON', 'STARSHIP', 'HUMAN SPACEFLIGHT']

type teslaLength = Length<tesla>  // expected 4
type spaceXLength = Length<spaceX> // expected 5
*/

//solution

type tesla = ["tesla", "model 3", "model X", "model Y"];
type spaceX = [
  "FALCON 9",
  "FALCON HEAVY",
  "DRAGON",
  "STARSHIP",
  "HUMAN SPACEFLIGHT",
];

//best
//type Length<T extends readonly unknown[]> = T["length"];

type Length<T extends readonly unknown[]> = T extends { length: infer L }
  ? L
  : never;

type teslaLength = Length<tesla>; // expected 4
type spaceXLength = Length<spaceX>; // expected 5
let arr = [2, 5, "ggg"] as const;
type bbb = Length<typeof arr>;
