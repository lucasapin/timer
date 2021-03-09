const EventEmitter = require('events');
const emitter = new EventEmitter();

function alarm (num) {
  setTimeout(() => {
    console.log('Beep!!!');
   }, num*1000)
};

emitter.on('event', () => {
  const arr = process.argv.slice(2);
for(let num of arr){
  alarm(num);
}
});

emitter.emit('event')

