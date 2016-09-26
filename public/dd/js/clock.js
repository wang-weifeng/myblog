var hour=document.getElementById('hour');
var minute=document.getElementById('minute');
var second=document.getElementById('second');
 
function showTime(){
     
    var oDate=new Date(); 
    var iHours=oDate.getHours();
    var iMinute=oDate.getMinutes();
    var iSecond=oDate.getSeconds();
     
    hour.innerHTML=AddZero(iHours);
    minute.innerHTML=AddZero(iMinute);
    second.innerHTML=AddZero(iSecond);
     
}
 
showTime();
 
setInterval(showTime,1000);
 
function AddZero(n){
     
    if(n<10){
         
        return '0'+n;
         
    }
     
    return ''+n;
}