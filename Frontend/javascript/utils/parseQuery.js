const parseQuery = (url) => {
    const query = {};
    url.replace(/([^?&=]+)([^&]+)/g, (_, k, v) => query[k] = v );
    
    return query;
}

a = parseQuery('http://localhost:8080/?a=1&b=2');
console.log(a);