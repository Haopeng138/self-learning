const PENDING = "pending";
const FULFILLED = "fulfilled";
const REJECTED = "rejected";

class MyPromise {
    // #1 Can't use this because the 'this' pointer can cause problems
    // resolve(){
    //     this.then()
    // }
    // reject(){

    // }

    #state = PENDING;
    #result = undefined;
    #handlers = [];
    constructor(excecutor) {
        const resolve = (data) => {
            this.#changeState(FULFILLED, data);
        };
        const reject = (reason) => {
            this.#changeState(REJECTED, reason);
        };
        try {
            excecutor(resolve, reject);
            // #2 Can't catch async errors
        } catch (err) {
            reject(err);
        }
    }

    #changeState(state, result) {
        if (this.#state !== PENDING) return;
        this.#state = state;
        this.#result = result;
        this.#run()
    }

    #run(){
        if(this.#state === PENDING) return;
        while(this.#handlers.length){
            const {
                onFulfilled,
                onRejected,
                resolve,
                reject
            } = this.#handlers.shift();

            if(this.#state === FULFILLED){
                if( typeof onFulfilled === 'function'){
                    onFulfilled(this.#result)
                }
            }
            else {
                if (typeof onRejected === 'function'){
                    onRejected(this.#result)
                }
            }
        }
    }
    then(onFulfilled, onRejected) {

        return new MyPromise((resolve, reject) => {
            this.#handlers.push({
                onFulfilled,
                onRejected,
                resolve,
                reject,
            })

         
        });
    }
}

const p = new MyPromise((resolve, reject) => {
    reject(123);
});

p.then(
    (res) => {
        console.log("promise", res);
    },
    (err) => {
        console.log("error", err);
    }
);
