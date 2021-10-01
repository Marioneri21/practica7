//var Emitter= require('./emitter');
var Emitter= require('events');
var emtr = new Emitter();
// actividad 7: 
emtr.on(config.events.GREET,() =>  {
    console.log('Somewhere, someone said hello.');
});

emtr.on(config.events.GREET,() =>  {
    console.log('Somewhere, someone said hello.');
});



console.log ("hello!!");
emtr.emit ('greet');

//muestra el hello hello!!somewhere.some said hello A greeting ocurred

emtr.on('jum',() => {
    console.log('someone jumped!');

});

console.log (emtr)
emtr.emit('jump');

//invoca al greet y jum y muestra las funciones de anoymous