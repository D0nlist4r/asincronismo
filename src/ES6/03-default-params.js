// Parametros por defecto "metodo antiguo"
function favoriteColor (color){
    let colorFav = color || 'red';
    console.log(colorFav);
}
favoriteColor();
favoriteColor('blue');

// Metodo moderno 

function colorlove (color = 'red'){
    console.log(color)
}
colorlove();
colorlove('blue');