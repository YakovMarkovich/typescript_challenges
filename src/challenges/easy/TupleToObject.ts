/**
 Given an array, transform it into an object type and the key/value must
be in the provided array.

For example:

const tuple = ['tesla', 'model 3', 'model X', 'model Y'] as const

type result = TupleToObject<typeof tuple> // expected { 'tesla': 'tesla', 
'model 3': 'model 3', 'model X': 'model X', 'model Y': 'model Y'}
 */

// Solution

const tuple = ["tesla", "model 3", "model X", 5] as const;

//or also type TupleToObject<T extends readonly PropertyKey[]> = {
type TupleToObject<T extends readonly (string | number | symbol)[]> = {
  [K in T[number]]: K;
};

type result = TupleToObject<typeof tuple>; // expected { 'tesla': 'tesla', 'model 3': 'model 3', 'model X': 'model X', 'model Y': 'model Y'}
