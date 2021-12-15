var boxObj = document.getElementsByClassName("car-box");
var liObj = document.getElementsByClassName("dot-icon")
var a = -1;
var b = [0, 1 / 3, 2 / 3, 1 / 3]
var d = [0, 1, 2, 1]
for (var j = 0; j < liObj.length; j++) {
	liObj[j].index = j
	liObj[j].onmouseover = function() {
		for (var i = 0; i < liObj.length; i++) {
			liObj[i].style.background = "rgba(255,255,255,1)";
		}
		this.style.background = "rgba(45,158,221,1)"
		boxObj[0].style.transform = "translateY(-" + b[this.index] * 100 + "%)"
		boxObj[1].style.transform = "translateY(-" + b[this.index] * 100 + "%)"
		boxObj[2].style.transform = "translateY(-" + b[this.index] * 100 + "%)"
	}
}
window.onload = function() {
	a++;
	var c = a % 4
	for (var i = 0; i < boxObj.length; i++) {
		boxObj[i].style.transform = "translateY(-" + b[c] * 100 + "%)"
		boxObj[i].style.transition = "all ease-out .8s";
		liObj[i].style.background = "rgba(255,255,255,1)";
	}
	liObj[d[c]].style.background = "rgba(45,158,221,1)"
	liObj[d[c]].onmouseover = function() {
		for (var i = 0; i < liObj.length; i++) {
			liObj[i].style.background = "rgba(255,255,255,1)";
			clearTimeout(t)
		}
		this.style.background = "rgba(45,158,221,1)"
		boxObj[0].style.transform = "translateY(-" + b[c] * 100 + "%)"
		boxObj[1].style.transform = "translateY(-" + b[c] * 100 + "%)"
		boxObj[2].style.transform = "translateY(-" + b[c] * 100 + "%)"
		t = setTimeout(window.onload, 3000)
	}
	t = setTimeout(window.onload, 3000)
}
