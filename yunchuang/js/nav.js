var menu = document.getElementById("menu")
var nav = document.getElementById("nav")
var aa = document.getElementById("aa")
var bb = document.getElementById("bb")
var cc = document.getElementById("cc")
var box = document.getElementById("box")
var popup = document.getElementById("popup")
var popClose = document.getElementById("pop-close")
var refer = document.getElementById("refer")
var n = 0;

function show() {
	n++;
	aa.style.transition = "all .4s"
	bb.style.transition = "all .4s"
	cc.style.transition = "all .4s"
	menu.style.transition = "all .4s"
	nav.style.transition = "all .6s"
	box.style.transition = "all .4s"
	if (n % 2 == 1) {
		aa.style.transform = "rotate(45deg)"
		cc.style.transform = "rotate(-45deg)"
		bb.style.background = "transparent"
		menu.style.transform = "translate(-200px)"
		nav.style.transform = "translate(-200px)"
		box.style.height = "100vh"
		box.style.transform = "translateY(-50vh)"
		box.style.background = "rgba(0,0,0,0.7)"
	} else {
		aa.style.transform = "rotate(0)"
		cc.style.transform = "rotate(0)"
		bb.style.background = "#FFFFFF"
		menu.style.transform = "translate(0)"
		nav.style.transform = "translate(0)"
		box.style.height = "1px"
		box.style.transform = "translateY(0)"
		box.style.background = "rgba(0,0,0,0)"
	}
}
var aside = document.getElementById("aside")
var on = document.getElementById("on");
var off = document.getElementById("off");
var go = document.getElementById("goto")

function menuOn() {
	on.style.transform = "translate(40px,-25px)"
	on.style.backgroundImage = "url(../img/right-menu-icons.png) -776px -94px"
	off.style.transform = "translate(-80px,-25px)"
	go.style.right = "-40px"
	aside.style.transform = "translateX(40px)"
}
function menuOff() {
	on.style.transform = "translate(0,-25px)"
	off.style.transform = "translate(0,-25px)"
	go.style.right = "0"
	aside.style.transform = "translateX(0)"
}
	on.style.transition = "all .4s"
	off.style.transition = "all .4s"
	go.style.transition = "all .4s"
	aside.style.transition = "all .2s"
	
	
refer.onclick = function(){
	popup.style.right = "40px"
	this.className = "active";
	this.getElementsByTagName("img")[0].src = "img/061.png"
}
popClose.onclick = function(){
	popup.style.right = "-100%"
	refer.className = " ";
	refer.getElementsByTagName("img")[0].src = "img/059.png"
}



window.onload = function() {
	// 获取元素对象
	var goto = document.querySelector(".goto");
	var header = document.getElementById("header")
	//定时器变量
	var timer = null;
	var a = document.documentElement.scrollTop;
	if (a > 0) {
		goto.style.transform = "translateY(-115px)"
		header.style.background = "#257DFF"
	}
	if (a == 0) {
		goto.style.transform = "translateY(115px)"
		header.style.background = "transparent"
	}
	goto.style.transition = "all .4s"
	header.style.transition = "all .4s"
	//绑定点击事件
	goto.onclick = function() {
		// 获取元素顶部被卷起的长度  支持dtd方式
		var s = document.documentElement.scrollTop;
		// 定时器 每10ms执行一次
		timer = window.setInterval(function() {
			// 每次走50
			s -= 40;
			//  到顶部后清除定时器  必须清定时器  不然就死循环了
			if (s < 0) {
				window.clearInterval(timer);
			}
			window.scrollTo(0, s);
		}, 10);
	}
}
setInterval(window.onload, 100)
