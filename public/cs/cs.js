function show(){ 
var box = document.getElementById("box"); 
var text = box.innerHTML; 
var newBox = document.createElement("div"); 
var btn = document.createElement("a"); 
newBox.innerHTML = text.substring(0,200); 
btn.innerHTML = text.length > 200 ? "...显示全部" : ""; 
btn.href = "###"; 
btn.onclick = function(){ 
if (btn.innerHTML == "...显示全部"){ 
btn.innerHTML = "收起"; 
newBox.innerHTML = text; 
}else{ 
btn.innerHTML = "...显示全部"; 
newBox.innerHTML = text.substring(0,200); 
} 
} 
box.innerHTML = ""; 
box.appendChild(newBox); 
box.appendChild(btn); 
} 
show(); 