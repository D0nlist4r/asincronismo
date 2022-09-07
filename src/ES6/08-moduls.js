import anotherFuction from "./06-promise.js";

anotherFuction()
.then(resolve => console.log(resolve))
.catch(err => console.log(err));

// Nota para que pueda funcionar toca editar 
//el package.json y decirle 'type = module' con esto ya puede funcionar el modulo.