const PENDING = 'pending'
const FULFILLED = 'fulfilled'
const REJECTED = 'rejected'

class MyPromise {
    // #1 Can't use this because the 'this' pointer can cause problems
    // resolve(){
    //     this.then()
    // }
    // reject(){

    // }

    #state = PENDING;
    #result = undefined;
    constructor(excecutor) {
        const resolve = (data) => {
            this.#changeState(FULFILLED,data);
        };
        const reject = (reason) => {
            this.#changeState(REJECTED,reason);
        };
        try {
            excecutor(resolve, reject);
            // #2 Can't catch async errors
        }catch(err){
            reject(err)
        }
        
    }

    #changeState(state,result){
        if(this.#state !== PENDING) return
        this.#state = state;
        this.#result = result;
    }
}
