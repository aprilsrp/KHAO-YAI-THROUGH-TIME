AOS.init();
window.addEventListener('scroll', function() {
  document.getElementById('showScroll').innerHTML = window.pageYOffset + 'px';
});

window.onscroll = function() {
  scrollFunction()
  scrollFunctiontree()
  scrollFunctionhouse()
  scrollFunctionleo1()
  scrollFunctionleo2()
  scrollFunctionchangP12()
  scrollFunctionchangP16()
};
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

function scrollFunctiontree() {
  if (document.body.scrollTop > 5150 || document.documentElement.scrollTop > 5150) {
    document.getElementById("tree").style.top = 47+'vw';
  }
  else {
    document.getElementById("tree").style.top = 10+'vw';
  }
}

function scrollFunctionhouse() {
  if (document.body.scrollTop > 5150 || document.documentElement.scrollTop > 5150) {
    document.getElementById("house").style.top = 10+'vw';
  }
  else {
    document.getElementById("house").style.top = 47+'vw';
  }
}

function scrollFunctionleo1() {
  if (document.body.scrollTop > 5000 || document.documentElement.scrollTop > 5000) {
    document.getElementById("fadebluecloudleopard-p6").style.right = "-8%";
  }  
  else {
    document.getElementById("fadebluecloudleopard-p6").style.right = "-40%";
  }
}

function scrollFunctionleo2() {
  if (document.body.scrollTop > 7500 || document.documentElement.scrollTop > 7500) {
    document.getElementById("fadebluecloudleopard-p9").style.right = "5%";
  }
  else {
    document.getElementById("fadebluecloudleopard-p9").style.right = "-40%";
  }
}

function scrollFunctionchangP12() {
  if (document.body.scrollTop > 9000 || document.documentElement.scrollTop > 9000) {
    document.getElementById("changP12").style.right = -13+'vw';
  }
  else {
    document.getElementById("changP12").style.right = -40+'vw';
  }
}

function scrollFunctionchangP16() {
  if (document.body.scrollTop > 14000 || document.documentElement.scrollTop > 14000) {
    document.getElementById("changP16").style.right = -8+'vw';
  }
  else {
    document.getElementById("changP16").style.right = -55+'vw';
  }
}

var count = 0;
function remove(el) {
  var element = el;
  element.remove();
  count = count+1;
  console.log(count);
  if (count == 6){
    alert("คุณเก็บขยะหมดแล้ว ขอบคุณที่ช่วยกันรักษาระบบนิเวศนะ!");
  }
}
function openNav() {
  document.getElementById("mySidenav").style.width = "20vw";
}

function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
}

let count_tab = 0
function arrow_click(num) {
    count_tab += num
    chage_page()
}

function chage_page() {
    if (count == 0) {
        p6_page1.style.opacity = "1"
        p6_page2.style.opacity = "0"
        p6_page3.style.opacity = "0"
        p6_page1.style.left = "0%"
        p6_page2.style.left = "100%"
        p6_page3.style.left = "100%"
        r_arrow_p6.style.display = "block"
        l_arrow_p6.style.display = "none"

    }
    if (count == 1) {
        p6_page1.style.opacity = "0"
        p6_page2.style.opacity = "1"
        p6_page3.style.opacity = "0"
        p6_page1.style.left = "-100%"
        p6_page2.style.left = "0%"
        p6_page3.style.left = "100%"
        r_arrow_p6.style.display = "block"
        l_arrow_p6.style.display = "block"
    }
    if (count == 2) {
        p6_page1.style.opacity = "0"
        p6_page2.style.opacity = "0"
        p6_page3.style.opacity = "1"
        p6_page1.style.left = "-100%"
        p6_page2.style.left = "-100%"
        p6_page3.style.left = "0%"
        r_arrow_p6.style.display = "none"
        l_arrow_p6.style.display = "block"
    }
}