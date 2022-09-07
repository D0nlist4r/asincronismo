// Destructuracion de Arrays
const espadas = ['rojo','negro','verde','blanco'];
const [a, b, c, d] = espadas;
console.log(a, d);
// Destructuracion de objetos
const escudos = {
    Bronce:'500 px',
    diamante:'10500 px', 
};

const {Bronce, diamante} = escudos;
console.log(Bronce,escudos.diamante);

// spread Operator

const autos = {
    modelo: 'tesla',
    costo: 3500
}

const bonos = 20;
const data = {...autos,bonos};
console.log(data);

function dataCenter(num,...value){
    console.log(num,value[1]);
}

dataCenter(2,32,3,2,1);