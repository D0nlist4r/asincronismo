async function* anotherFuction(){
    yield await Promise.resolve(1);
    yield await Promise.resolve(2);
    yield await Promise.resolve(3);
}
const another = anotherFuction();
another.next().then(response => console.log(response.value));
another.next().then(response => console.log(response.value));
another.next().then(response => console.log(response.value));
another.next().then(response => console.log(response.value));
console.log('Revisando ando');

async function anothery(array){
    for await (let value of array) {
        console.log(value)
    }
}
anothery(['sebastian','oscar','anna']);