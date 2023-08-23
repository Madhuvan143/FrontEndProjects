function displayTime(){
    var dateTime = new Date();
    var hrs = dateTime.getHours();
    var min = dateTime.getMinutes();
    var sec = dateTime.getSeconds();
    var milli = dateTime.getMilliseconds();
    var session = document.getElementById('session');
    if(hrs>=12){
        session.innerHTML = 'PM';
    }
    else{
        session.innerHTML = 'AM';
    }
    if(hrs>12){
        hrs = hrs- 12;
    }
    document.getElementById('hours').innerHTML = hrs;
    document.getElementById('minutes').innerHTML = min;
    document.getElementById('seconds').innerHTML = sec;
    document.getElementById('millisec').innerHTML = milli;
}
setInterval(displayTime,500)
