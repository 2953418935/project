$(function() {
	var num = 0
	var Imgarr = ["yz", "yz1", "yz2", "yz3"]
	/* 导航按钮开 */
	function meunOn() {
		$(".fixed-nav .meun span").eq(0).css({
			transform: "rotate(45deg) translateX(-7px) translateY(-6px)"
		})
		$(".fixed-nav .meun span").eq(1).css({
			opacity: "0"
		})
		$(".fixed-nav .meun span").eq(2).css({
			transform: "rotate(-45deg) translateX(6px) translateY(-7px)"
		})
	}
	/* 导航按钮关 */
	function meunOff() {
		$(".fixed-nav .meun span").eq(0).css({
			transform: "translateX(calc(-50% - 6px)) translateY(-50%)"
		})
		$(".fixed-nav .meun span").eq(1).css({
			opacity: "1"
		})
		$(".fixed-nav .meun span").eq(2).css({
			transform: "translateX(calc(-50% + 6px)) translateY(-50%)"
		})
	}
	$(".fixed-nav .meun").click(function() {
		num++
		if (num % 2 == 1) {
			meunOn()
			$(this).css("transform", "rotate(90deg)")
			$(".nav-right").animate({
				"width": "60px"
			}, 500)
		} else {
			meunOff()
			$(this).css("transform", "rotate(0)")
			$(".nav-right").animate({
				"width": "0"
			}, 500)
		}
	})
	$("header .meun").click(function() {
		num++
		if (num % 2 == 1) {
			$(this).css({
				transform: "rotate(180deg)"
			})
			$(this).children(".meun-bg").stop().animate({
				width: "100%",
				height: "100%",
				left: "0",
				top: "0"
			}, 300)
			$(this).children("span").eq(0).css({
				transform: "rotate(45deg) translateX(3.5px) translateY(-5px)",
				background: "#fff"
			})
			$(this).children("span").eq(1).css("opacity", "0")
			$(this).children("span").eq(2).css({
				transform: "rotate(-45deg) translateX(-4px) translateY(-5px)",
				background: "#fff"
			})
			$("header .nav").stop().animate({
				left: "0"
			})
			$("header .nav>ul>li").removeClass("active")
		} else {
			$(this).css({
				transform: "rotate(0)"
			})
			$(this).children(".meun-bg").stop().animate({
				width: "0",
				height: "0",
				left: "50%",
				top: "50%"
			}, 300)
			$(this).children("span").eq(0).css({
				transform: "none",
				background: "#000"
			})
			$(this).children("span").eq(1).css("opacity", "1")
			$(this).children("span").eq(2).css({
				transform: "none",
				background: "#000"
			})
			$("header .nav").stop().animate({
				left: "-100%"
			})
		}


	})
	$("header .nav>ul>li>a").click(function() {
		if ($(this).siblings().is("div")) {
			$(this).parent().addClass("active").siblings().removeClass("active")
		} else {
			$(this).parent().siblings().removeClass("active")
		}
	})

	setInterval(function() {
		if (scrollY - $(".section-2").offset().top > -250) {
			$(".fixed_right").fadeIn()
		} else {
			$(".fixed_right").fadeOut()
		}
	}, 100)

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

	setInterval(function() {
		if ($(document.body).width() < 992) {
			var footTop = document.getElementsByTagName("footer")[0].getBoundingClientRect().top
			if (footTop < 800) {
				$(".tool").fadeOut(400)
			} else {
				$(".tool").fadeIn(400)
			}
		}

	}, 10)

	$(".message_board>span").click(function() {
		if ($(".from").css("display") == "block") {
			$(".from").fadeOut(1)
			$(".from").attr("title", "1")
			$(this).attr("class", "open")
		}
		if ($(".result").css("display") == "block") {
			$(".result").fadeOut(1)
			$(".result").attr("title", "1")
			$(this).attr("class", "open")
		}
		if ($(".from").css("display") == "none" && $(".from").attr("title") == "1") {
			$(".from").fadeIn(1)
			$(".from").attr("title", "")
			$(this).attr("class", "close")
		}
		if ($(".result").css("display") == "none" && $(".result").attr("title") == "1") {
			$(".result").fadeIn(1)
			$(".result").attr("title", "")
			$(this).attr("class", "close")
		}

	})

	$(".message_board button").click(function() {
		if ($("#details").val() == "") {
			$("#details").next().fadeIn(1)
		}
		if (($("#details").val() != "") && ($("#phone").val() == "")) {
			$("#phone").next().fadeIn("电话不能为空")
		}
		if (($("#phone").val() != "") && !/^[1][3,4,5,7,8][0-9]{9}$/.test($("#phone").val())) {
			$("#phone").next().fadeIn().html("请输入正确的电话号码")
		}
		if (($("#phone").val() != "") && /^[1][3,4,5,7,8][0-9]{9}$/.test($("#phone").val())) {
			$(".message_board").fadeOut(1)
			$(".verify").fadeIn(1)
			$(".from input,.from textarea").val("")
		}
		var n = Math.floor(Math.random() * 4)
		var rot = Math.round(Math.random() * 360)
		if (rot < 90) {
			rot = rot + 90
		}
		$(".pic #rot").css("transform", "rotate(-" + rot + "deg)")
		$(".pic #rot").attr("src", "../img/public/" + Imgarr[n] + ".jpg")
		$(".bot").css("marginLeft", "0")

	})
	$("#details,#phone").click(function() {
		$(this).next().fadeOut(1)
	})

	var mouDown, mouMove, Imgrot;
	var rot = Math.round(Math.random() * 360)
	if (rot < 90) {
		rot = rot + 90
	}
	$(".pic #rot").css("transform", "rotate(-" + rot + "deg)")
	$(".bot").mousedown(function(e) {
		$(this).addClass("active")
		var ev = e || window.e; //实现浏览器兼容
		mouDown = ev.clientX //鼠标相对于浏览器左上角x轴的坐标
		document.body.onmousemove = function(e) {
			var ev = e || window.e;
			mouMove = ev.clientX 
			e.preventDefault() //阻止元素发生默认行为
			var marginLeft = mouMove - mouDown
			if (marginLeft < 0) {
				marginLeft = 0
			} else if (marginLeft > 220) {
				marginLeft = 220
			}
			$(".bot").css("marginLeft", marginLeft)

			Imgrot = Math.abs(rot - marginLeft * 2)
			if (rot - marginLeft * 2 > 0) {
				$(".pic #rot").css("transform", "rotate(-" + Imgrot + "deg)")
			} else {
				$(".pic #rot").css("transform", "rotate(" + Imgrot + "deg)")
			}
		}
		if ($(".bot").css("marginLeft") == "0px") {
			$("body").mouseup(function() {
				$(".bot").removeClass("active")
				document.body.onmousemove = null
			})
		}
	})
	
	document.body.onmouseup = function() {
		if ($(".bot").css("marginLeft") != "0px" && $(".bot").attr("class") != "bot") {
			var n = Math.floor(Math.random() * 4)
			$(".bot").removeClass("active")
			console.log(Imgrot)
			if (Imgrot > -10 && Imgrot < 10) {
				$("#ImgRight").fadeIn(400)
				$("#ImgError").fadeOut(1)
				setTimeout(function() {
					$(".verify").fadeOut(1)
					$(".message_board .from").fadeOut(1)
					$(".message_board .result").fadeIn(1)
					$(".message_board").fadeIn(1)
					$("#ImgRight").fadeOut(1)
				}, 600)
			} else {
				$("#ImgRight").fadeOut(1)
				$("#ImgError").fadeIn(400)
				setTimeout(function() {
					var rot = Math.round(Math.random() * 360)
					if (rot < 90) {
						rot = rot + 90
					}
					$("#ImgError").fadeOut(1)
					$(".pic #rot").css("transform", "rotate(-" + rot + "deg)")
					$(".pic #rot").attr("src", "../img/public/" + Imgarr[n] + ".jpg")
					$(".bot").css("marginLeft", "0")

				}, 600)

			}
			document.body.onmousemove = null
		}
	}
	$(".verify .off").click(function() {
		$(this).parent().fadeOut(1)
		$(".message_board").fadeIn(1)
	})
	$(".result span").click(function() {
		$(".result").fadeOut(1)
		$(".from").fadeIn(1)
	})

})
