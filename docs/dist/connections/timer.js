import {callTime} from './Peer.svelte.js'
export let counter;
let startTime
  
export function resetTimer() {
      callTime.set('0:00');
      clearInterval(counter);
      counter = null;
}
 export function initCounter(){
    startTime = Date.now()

    counter = setInterval(function() {

    // Get today's date and time
    var now = Date.now();

    // Find the distance between now and the count down date
    var distance = now - startTime;

    // Time calculations for days, hours, minutes and seconds
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);

    let d = days===0 ? '' : days+':';
    let h = hours===0 && days===0 ? '' : 
      hours!==0 && days===0 ? hours+':'
      : ('0'+hours).slice(-2)+':';
    let m = minutes ===0 && hours ===0 ? '0:' 
      : minutes!==0 && hours===0 ? minutes+':' 
      : ('0'+minutes).slice(-2)+':';
    let s = ('0'+seconds).slice(-2);

    callTime.set(d+h+m+s)
  }, 1000);
}
