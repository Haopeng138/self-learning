// Acceptar todos los tipos excepto E
type BanType<T,E> = T extends E ? never:T
function log<T>(x:BanType<T,string>){
    console.log(x)
}
// log("gegeg") informará del error