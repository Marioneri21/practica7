let obj = {
    nombre: 'carlos',
    edad: 44 ,
    apellido: 'ulibarri',
keypress: function (){
    console.log('se ha presinado una tecla');

},
mouseOver: function(){
    console.log('El puntero del mouse esta arriba');

}
}

console.log (obj.nombre);
console.log(obj['nombre']);

let myKey='nombre'
console.log(obj[myKey]);

myKey='keypress';
console.log(obj[myKey]());
myKey = 'mouseOver';
console.log(obj[myKey]());
//se imprime el nombre de carlos 3 veces y se imprime  se ha precionado una tecla y el puntero del mouse esta arriba

let myArray = [];
 
myArray.push(4);
myArray.push('una cadena');
myArray.push(obj);
myArray.push(function () {
   console.log("hola desde el array");
})
console.log(myArray);
// me imprime nombre,edad ya apellido de carlos ulibarri




let funcArray = [];
 
funcArray.push(() => {
   console.log("Function 1");
});
 
funcArray.push(() => {
   console.log("Function 2");
});
 
funcArray.push(() => {
   console.log("Function 3");
});

funcArray.forEach((item) =>{
    item();
})

//aparece las function  1,2 y 3 

