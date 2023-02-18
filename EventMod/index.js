//  Events Module
// NodeJs has a built-in module, called 'Events', where you can create-, fire-, and listen for events.

//eg-1 Registering for the event to be fired only one time
//eg-2 Create an event emitter instance and register a couple of callbacks.
//eg-3 Registering for the event with callbacks parameters.


const EventsEmitter = require('events'); //EventsEmitter is an object

const event = new EventsEmitter(); // events is the object of class EventsEmitter

event.on('checkPage',(statusCode,msg)=>{
    console.log(`Status code is ${statusCode} and the page is ${msg}`)
});

event.emit('checkPage',200,'Valid');