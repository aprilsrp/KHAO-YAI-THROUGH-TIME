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
var count = 0;
function remove(el) {
  var element = el;
  element.remove();
  count = count+1;
  console.log(count);
  if (count == 6){
    alert("เย้! ดีใจด้วย");
  }
}