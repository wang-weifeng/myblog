function scrollTitle(changeSpeed,scrollSpeed){
var con = document.getElementById("list_con");
var list = document.getElementById("news_list");
list.innerHTML += list.innerHTML;
var items = list.getElementsByTagName("li");
var timer_1 = setInterval(_scrollTitle,changeSpeed);
var heightAll =0;
for(var i=0;i<items.length;i++){
heightAll += items[i].offsetHeight;
}
var heightHalf = parseInt(heightAll/2);
con.onmouseover = function(){
if(timer_1){
clearInterval(timer_1);
timer_1=null;
}
}
con.onmouseout = function(){
if(timer_1){
clearInterval(timer_1);
timer_1=null;
}
timer_1 = setInterval(_scrollTitle,changeSpeed);
}
function _scrollTitle(){
var timer;
var num = 30;
timer = setInterval(scrollTop,scrollSpeed);
function scrollTop(){
if(con.scrollTop<heightHalf){
con.scrollTop += 3;
num -= 3;
}else{
con.scrollTop = 0;
}
if(num <= 0){
clearInterval(timer);
}
}
}
}