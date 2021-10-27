$(function(){
	
	/* 众多服务客户部分 */
	$.getJSON("../json/logoImg.json", function(data) {
		$.each(data, function(i, k) {
			$.each(k.B2C, function(i, v) {
				var $liObj = $("<li></li>")
				var $imgBg = $("<div class='imgBg'><span>" + v.name +
					"</span></div>")
				var $logo = $("<div class='logo'></div>")
				var $logoImg = $("<img src=" + v.img + " />")
				$(".section-8 ul").append($liObj)
				$liObj.append($imgBg)
				$liObj.append($logo)
				$logo.append($logoImg)
				if (i < 2) {
					var $aObj = $("<a href='#'></a>")
					$liObj.append($aObj)
				}
	
			})
		})
	})
	
	
	
	
	
	
	setInterval(function(){
		if($(document.body).width()<992){
			$("#three_bg").attr("src","")
			$("#threejs").attr("src","")
		}
		if($(document.body).width()>992){
			$("#three_bg").attr("src","./js/three-bg.js")
			$("#threejs").attr("src","../js/three.min.js")
		}
	},10)
	
	
	
	
	
})

