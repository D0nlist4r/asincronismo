const anotherFuction = () =>{
    return new Promise ((resolve ,reject) => {
        if(true){
            resolve('Todo esta bien');
        }
        else{
            reject('Hay un Problema');
        }
        })
    };

    anotherFuction()
    .then(resolve => console.log(resolve))
    .catch(err => console.log(err))
    .finally(() => console.log('Finally'));