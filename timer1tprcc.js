const EventEmitter = require('events');
const emitter = new EventEmitter();

emitter.once('event', (event) => {
  if(event === 'event') {
    emitter.on('event', () => {
  setTimeout(() => {
    console.log('Beep!!!');
   }, ('event'*1000))
}
})

emitter.emit('event')
