const dayOfYear = (date) => {
    return Math.floor((date - new Date(date.getFullYear(), 0, 0)) / 1000 / 60 / 60 / 24);
    };

a = dayOfYear(new Date()); // 272
console.log(a);