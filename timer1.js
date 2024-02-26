function alarmClock (times) {
  for (let i = 0; i < times.length; i++) {
    if (isNaN(times[i])) {
      console.log('Error: No numbers detected');
      return; 
    }
  }


  for (let i = 0; i < times.length; i++) {
    if (times[i] < 0) {
      console.log('Error: Cannot provide negative numbers');
      return;
    }
  }
  
  times.sort((a, b) => a - b);
  
  let index = 0; 

  function alarmRing() {
    process.stdout.write('.');
    index++;

    if (index < times.length) {
      const delay = times[index] - times[index - 1];
      setTimeout(alarmRing, delay * 1000);
    } else {
      console.log('\nNo further alarms');
    }
  }

  console.log('Alarms are set.')
  setTimeout(alarmRing, times[index] * 1000);
}

alarmClock([10, 3, 5, 15, 9 ]); 


