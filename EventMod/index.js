//  Events Module
// NodeJs has a built-in module, called 'Events', where you can create-, fire-, and listen for events.


const EventsEmitter = require('events'); //EventsEmitter is an object

const event = new EventsEmitter(); // events is the object of class EventsEmitter

event.on('myName',()=>{
    console.log("Shivam");
});

event.emit('myName');

