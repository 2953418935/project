$(function() {

	$.getJSON("../json/caseData.json", function(data) {
		$.each(data, function(i, k) {
			var $liObj = $("<li></li>")
			var $Img = $("<i><a href='#'><img src=" + k.img + " /></a></i>")
			var $h4 = $("<h4><a href='#'>" + k.title + "</a></h4>")
			var $p = $("<p>" + k.content + "</p>")
			var $go = $("<a class='go' href='#'><span></span></a>")
			$(".section-2 .section2-content ul").append($liObj)
			$liObj.append($Img, $h4, $p, $go)
		})
		var $liObj = $(".section-2 .section2-content ul li")
		var $pageNum = Math.ceil($(".section2-content ul li").length / 9)
		for (var i = 0; i < $pageNum; i++) {
			var $span = $("<span>" + (i + 1) + "</span>")
			$(".section2-content .paging .next").before($span)
			var $item = $("<div class='item'></div>")
			$(".section-2 .section2-content ul").append($item)
			$item.append($liObj.slice((i * 9), (i + 1) * 9))
		}
		$(".section2-content .item").eq(0).addClass("active")
		$(".section2-content .paging span").eq(0).addClass("active")
		$(".section2-content .paging span").click(function() {
			console.log($(this).index())
			var $index = $(this).index() - 1
			$(".section2-content ul .item").eq($index).addClass("active").siblings()
				.removeClass("active")
			$(this).addClass("active").siblings().removeClass("active")
		})
	})

	$(".section-2 .section2-nav ul li").click(function() {
		var $alt = $(this).attr("alt")
		$(".section-2 .section2-content ul").children().remove()
		$(".paging").children("span").remove()
		$.getJSON("../json/caseData.json", function(data) {
			$.each(data, function(i, k) {
				if (k.vest_in.indexOf($alt) != -1) {
					var $liObj = $("<li></li>")
					var $Img = $("<i><a href='#'><img src=" + k.img + " /></a></i>")
					var $h4 = $("<h4><a href='#'>" + k.title + "</a></h4>")
					var $p = $("<p>" + k.content + "</p>")
					var $go = $("<a class='go' href='#'><span></span></a>")
					$(".section-2 .section2-content ul").append($liObj)
					$liObj.append($Img, $h4, $p, $go)
				}
			})
			var $liObj = $(".section-2 .section2-content ul li")
			var $pageNum = Math.ceil($(".section2-content ul li").length / 9)
			if ($pageNum <= 1) {
				$(".paging-box").fadeOut(1)
			} else {
				$(".paging-box").fadeIn(1)
			}
			for (var i = 0; i < $pageNum; i++) {
				var $span = $("<span>" + (i + 1) + "</span>")
				$(".section2-content .paging .next").before($span)
				var $item = $("<div class='item'></div>")
				$(".section-2 .section2-content ul").append($item)
				$item.append($liObj.slice((i * 9), (i + 1) * 9))
			}
			$(".section2-content .item").eq(0).addClass("active")
			$(".section2-content .paging span").eq(0).addClass("active")
			$(".section2-content .paging span").click(function() {
				console.log($(this).index())
				var $index = $(this).index() - 1
				$(".section2-content ul .item").eq($index).addClass("active").siblings()
					.removeClass("active")
				$(this).addClass("active").siblings().removeClass("active")
			})
		})
	})

	$(".section2-content .paging .prev").click(function() {
		console.log("a")
		if ($(".section2-content .item").eq(0).hasClass("active")) {
			return
		} else {
			$(".section2-content .item.active").removeClass("active").prev().addClass(
				"active")
			$(".section2-content .paging .active").removeClass("active").prev().addClass(
				"active")
		}
	})
	$(".section2-content .paging .next").click(function() {
		if ($(this).prev().hasClass("active")) {
			return
		} else {
			$(".section2-content .item.active").removeClass("active").next().addClass(
				"active")
			$(".section2-content .paging .active").removeClass("active").next().addClass(
				"active")
		}
	})

	setInterval(function() {
		if($(document.body).width()>998){
			if (scrollY - $(".section-2").offset().top > 0) {
				$(".section2-nav").addClass("fixed")
			} else {
				$(".section2-nav").removeClass("fixed")
			}
		}else{
			if (scrollY - $(".section-2").offset().top > -64) {
				$(".section2-nav").addClass("fixed")
			} else {
				$(".section2-nav").removeClass("fixed")
			}
		}
		
	}, 100)
	$(".section2-nav ul li").click(function(){
		$(this).addClass("active").siblings().removeClass("active")
	})
	
	
	$(".search>span").click(function() {
		$(".telep").css("display", "none")
		$(".search-input").css({
				display: "block"
			})
			.addClass("show")
	})
	$(".search-input span").click(function() {
		$(".search-input").removeClass("show")
		setTimeout(function() {
			$(".search-input").css("display", "none")
			$(".telep").fadeIn(400)
		}, 600)
	
	})


})
