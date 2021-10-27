$(function(){
	$(".section3-content ul li").mouseover(function(){
		$(this).children(".hide").stop().fadeIn()
	})
	$(".section3-content ul li").mouseout(function(){
		$(this).children(".hide").stop().fadeOut()
	})
	
	/* 众多服务客户部分 */
	$.getJSON("../json/logoImg.json", function(data) {
		$.each(data, function(i, k) {
			$.each(k.big_data, function(i, v) {
				var $liObj = $("<li></li>")
				var $imgBg = $("<div class='imgBg'><span>" + v.name +
					"</span></div>")
				var $logo = $("<div class='logo'></div>")
				var $logoImg = $("<img src=" + v.img + " />")
				$(".section-5 ul").append($liObj)
				$liObj.append($imgBg)
				$liObj.append($logo)
				$logo.append($logoImg)
				if (i < 10) {
					var $aObj = $("<a href='#'></a>")
					$liObj.append($aObj)
				}
	
			})
		})
	})
})