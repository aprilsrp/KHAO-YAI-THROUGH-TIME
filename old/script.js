window.onscroll = function() {scrollFunction()};
function scrollFunction() {
  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
    document.getElementById("elep1").style.left = "-20%";
    if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200){
  	document.getElementById("leo").style.right = "0%";
  	}
  }  
  else {
    document.getElementById("elep1").style.left = "-50%";
    document.getElementById("leo").style.right = "-40%";
  }
}


