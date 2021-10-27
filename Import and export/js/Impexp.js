$(function(){
	
	/* 众多服务客户部分 */
	$.getJSON("../json/logoImg.json", function(data) {
		$.each(data, function(i, k) {
			$.each(k.Import, function(i, v) {
				var $liObj = $("<li></li>")
				var $imgBg = $("<div class='imgBg'><span>" + v.name +
					"</span></div>")
				var $logo = $("<div class='logo'></div>")
				var $logoImg = $("<img src=" + v.img + " />")
				$(".section-5 ul").append($liObj)
				$liObj.append($imgBg)
				$liObj.append($logo)
				$logo.append($logoImg)
			})
		})
	})
	
})