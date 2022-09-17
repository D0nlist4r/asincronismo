const fnasync = () => {
    return new Promise((resolve, reject) => {
        (true)
        ? setTimeout(() => resolve('Async!!'),2000)
        : reject(new Error('Error'));
    });
}

const anothefn = async () => {
    const something = await fnasync();
    console.log(something);
    console.log('hello');
}

console.log('before');
anothefn();
console.log('After');

// Gracias al uso de await al llamar la funcion , permite espera y deja segui la aplicacion.
