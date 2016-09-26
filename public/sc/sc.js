



(function(){
  var o = document.getElementById("hutia");
  var s = o.innerHTML;
  var p = document.createElement("span");
  var n = document.createElement("a");
  p.innerHTML = s.substring(0,100);
  n.innerHTML = s.length > 100 ? "..." : "";
  n.href = "###";
  n.onclick = function(){
    if (n.innerHTML == "..."){
      n.innerHTML = "收起";
      p.innerHTML = s;
    }else{
      n.innerHTML = "...";
      p.innerHTML = s.substring(0,100);
    }
  }
  o.innerHTML = "";
  o.appendChild(p);
  o.appendChild(n);
})();

