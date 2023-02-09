// Conseguir potencias de 2 :

1 << 2 // --> 4 
1 << 3 // --> 8

// Conseguir la parte entera

~~3.14 // 3
3.14 << 0  // 3
3.14 >> 0 // 3
3.14 | 0 // 3 

// Mismo signo 

(3 ^ -5) >= 0 // false
(-3 ^ -5 ) >= 0 // true

// Tratamiento de error 

try {
    // any code
}catch(e){
    location.href = 'https://stackoverflow.com/search?q=js+'+e.message 
}

// Saber si en un objeto existe un elemento 
/**
 * 
 * @param {Object} obj 
 * @param {String} key 
 * @returns True: if is 
 * False: no
 */

function hasProperty(obj,key){
    return key in obj;
}

var x = /[0-9]/;

