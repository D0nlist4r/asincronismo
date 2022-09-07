function* generator(array){
    for(let value of array){
        yield value;
    }
}

const it = generator(['sebas','juan','patricia']);
console.log(it.next().value);
console.log(it.next().value);
console.log(it.next().value);
console.log(it.next().value);