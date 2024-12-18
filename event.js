const EventEmit = require("events");

const myEmitter = new EventEmit();


myEmitter.on('birthday', () => {
    console.log('Happy birthday to you');
});

myEmitter.on('birthday', (gift) => {
    console.log(`Here is your ${gift}`);
});


myEmitter.emit('birthday', 'Bike');