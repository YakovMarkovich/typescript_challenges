/*
If we have a type which is a wrapped type like Promise, 
how can we get the type which is inside the wrapped type?

For example: if we have Promise<ExampleType> how to get ExampleType?

type ExampleType = Promise<string>

type Result = MyAwaited<ExampleType> // string
*/

// solution

type ExampleType = Promise<string>;
type ExampleTypeInner = Promise<Promise<string | number>>;
type ExampleTypeNotpromise = ["fff", "fdd"];

type MyAwaited<T> = T extends Promise<infer U> ? MyAwaited<U> : T;
//type MyAwaited<T> = T extends PromiseLike<infer U> ? MyAwaited<U> : T;

type Result = MyAwaited<ExampleType>; // string
type ResultInner = MyAwaited<ExampleTypeInner>; // string | number
type ResultNotPromise = MyAwaited<ExampleTypeNotpromise>; // string | number
