function digitalClock(){
  let date = new Date();

  /*-------Time-------*/
  let hours   = date.getHours();
  let minutes = date.getMinutes();
  let seconds = date.getSeconds();
  let timeFormate = 'AM';

  if (hours < 12) {
    hours;
  }else if ((hours > 12)){
    hours = hours - 12;
    timeFormate = 'PM';
  }

  hours   = setValue(hours);
  minutes = setValue(minutes);
  seconds = setValue(seconds);

  function setValue(data){
    data = data < 10 ? '0' + data : data; //turnary operator
    return data;
  }

  let finalTime = `${hours}:${minutes}:${seconds}`

  document.getElementById('time').innerText = finalTime;
  document.querySelector('small').innerText = timeFormate;

  setInterval(digitalClock, 1000);
}
digitalClock();