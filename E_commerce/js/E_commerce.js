$(function() {
	var num = 0
	$(".carousel-left .prev").click(function() {
		if (num > 0) {
			num--
			if (num < 0) {
				num = 0
			}
			$(this).next().children("ul").stop(true, true).animate({
				marginLeft: "+=304px"
			})
			$(".carousel-right .img div").stop(true, true).animate({
				marginLeft: "+=100%"
			})
		}
	})
	$(".carousel-left .next").click(function() {
		if (num < 7) {
			num++
			if (num >= 8) {
				num = 8
			}
			$(this).prev().children("ul").stop(true, true).animate({
				marginLeft: "-=304px"
			})
			$(".carousel-right .img div").stop(true, true).animate({
				marginLeft: "-=100%"
			})
		}
	})
	$(".section3-carousel .carousel-right ul li span").click(function() {
		var $index = $(this).parent().index()
		console.log($index)
		num = $index
		$(".carousel-left .left-content ul").stop(true, true).animate({
			marginLeft: -$index * 304 + "px"
		})
		$(".carousel-right .img div").stop(true, true).animate({
			marginLeft: -$index * 100 + "%"
		})
	})

	$(".section-4>ul li").mouseover(function() {
		var $index = $(this).index()
		$(this).addClass("active").siblings().removeClass("active")
		$(".section4-computer .img-box img").eq($index).addClass("active").siblings().removeClass(
			"active")
		$(".section4-content p").eq($index).addClass("active").siblings().removeClass("active")
	})

	$(".section5-tab .item").mouseover(function() {
		var $index = $(this).index()
		$(this).addClass("active").siblings().removeClass("active")
		$(".section5-content>div").eq($index).addClass("active").siblings().removeClass("active")
	})

})
