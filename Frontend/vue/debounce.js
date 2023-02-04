import { customRef } from "vue";

export function debounceRef(value,delay=1000) {
    return customRef((track,trigger)=>{
        return {
            get(){
                track();
                return value;
            },
            set(val){
                value = val;
                trigger()
            }
        }
    })
}