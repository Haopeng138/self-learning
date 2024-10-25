// Acceptar todos los tipos excepto E
type BanType<T, E> = T extends E ? never : T
function log<T>(x: BanType<T, string>) {
    console.log(x)
}
// log("gegeg") informará del error

const fn = (v: boolean) => {
    if (v)
        return 1
    else
        return 2
}
type MyReturnType<T> = T extends (...args: any[]) => infer P ? P : never
type a = MyReturnType<typeof fn> 

const returnType: a = fn(true); // or fn(false) to get the return type value

console.log(typeof returnType === 'number')