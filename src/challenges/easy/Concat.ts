// Implement the JavaScript Array.concat function in the type system.
// A type takes the two arguments. The output should be a new array
//  that includes inputs in ltr order

// For example:

//type ResultConcat = Concat<[1], [2]> // expected to be [1, 2]

//solution

type Concat<T extends unknown[], U extends unknown[]> = [...T, ...U];

type ResultConcat = Concat<[1], [2]>; // expected to be [1, 2]
type ResultConcat2 = Concat<[1, 2], [false, boolean, 1, "4"]>;
