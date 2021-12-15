$(function() {
	var num = 0;
	var bgImg = ["1-1", "1-2", "1-3", "1-4", "1-2", "1-5", "1-6"]
	var offsetX = 0

	/* 初始化 */
	setTimeout(function() {
		$(".loader-logo").fadeOut(400)
		$(".mouse-hint").fadeIn(1000)
		$(".meun").animate({
			left: "60px",
			opacity: "1"
		}, 600)
		$(".search").animate({
			top: "5%"
		}, 500)
	}, 1500)
	setTimeout(function() {
		$(".fixed-nav").stop().animate({
			"opacity": "1"
		}, 1000, function() {
			$(".copyright").animate({
				left: "4%"
			}, 600)
			$(".section1-title h2").animate({
				opacity: "1"
			}, 600, function() {
				$(".section1-title h3").animate({
					opacity: "1"
				}, 600)
			})
		})
	}, 2500)

	$(".meun").css({
		left: "-60px",
		opacity: "0"
	})

	/* 判断鼠标滚轮是否滚动 */
	/* 滑动鼠标提示消失 */
	$(document).on("mousewheel DOMMouseScroll", function(e) {
		var delta = (e.originalEvent.wheelDelta && (e.originalEvent.wheelDelta > 0 ? 1 : -1)) ||
			(e.originalEvent.detail && (e.originalEvent.detail > 0 ? -1 : 1));
		if (delta != 0) {
			$(".mouse-hint").fadeOut(200)
		}
	});

	$(".mouse-hint").click(function() {
		$(this).fadeOut(20)
	})


	/* 产品与服务背景图变化 */
	$.each(bgImg, function(i, v) {
		$(".pro-ser-nav>li").eq(i).hover(function() {
			$(".pro-ser").css("background", "url(img/home/" + v +
				".jpg) no-repeat center center")
		})
	})



	/* logo变小 */
	function logoChangeSmall() {
		$(".fixed-nav").stop().animate({
			width: "180px"
		}, 600)
		$(".section1-title").stop().animate({
			left: "300px"
		}, 600)
		$(".fixed-nav .logo img").eq(0).css("display", "none")
		$(".fixed-nav .logo img").eq(1).css("display", "block")
		$(".fixed-nav .logo").attr("class", "logo-change")
	}

	/* logo变大 */
	function logoChangeBig() {
		if ($(document.body).width() > 1200) {
			$(".fixed-nav").stop().animate({
				width: "810px"
			}, 600)
			$(".section1-title").stop().animate({
				left: "870px"
			}, 600)
		}
		if ($(document.body).width() < 1200) {
			$(".fixed-nav").stop().animate({
				width: "576px"
			}, 600)
			$(".section1-title").stop().animate({
				left: "650px"
			}, 600)
		}
		$(".fixed-nav .logo-change").attr("class", "logo")
		$(".fixed-nav .logo img").eq(1).css("display", "none")
		$(".fixed-nav .logo img").eq(0).css("display", "block")
	}

	/* 导航按钮开 */
	function meunOn() {
		$(".meun span").eq(0).css({
			transform: "rotate(45deg) translateX(-7px) translateY(-6px)"
		})
		$(".meun span").eq(1).css({
			opacity: "0"
		})
		$(".meun span").eq(2).css({
			transform: "rotate(-45deg) translateX(6px) translateY(-7px)"
		})
	}

	/* 导航按钮关 */
	function meunOff() {
		$(".meun span").eq(0).css({
			transform: "translateX(calc(-50% - 6px)) translateY(-50%)"
		})
		$(".meun span").eq(1).css({
			opacity: "1"
		})
		$(".meun span").eq(2).css({
			transform: "translateX(calc(-50% + 6px)) translateY(-50%)"
		})
	}
	/* 按钮向下移动 */
	function meunDown() {
		$(".meun").css("bottom", "50px")
	}

	/* 按钮回原位置 */
	function meunUp() {
		$(".meun").css("bottom", "50%")
	}

	/* 导航打开 */
	function navOpen() {
		$(".nav,.covering").css({
			"width": "100%"
		})
		$(".left-bg").animate({
			width: "6%"
		}, 100, function() {
			$(".about").animate({
				width: "30%"
			}, 100, function() {
				$(".pro-ser").animate({
					width: "40%"
				}, 100, function() {
					$(".news span").animate({
						left: "90px"
					}, 600)
					$(".news").animate({
						width: "100%"
					}, 80, function() {
						$(".cases").animate({
							width: "100%"
						}, 80)
						$(".cases span").animate({
							left: "90px"
						}, 600)
					})
				})
			})
		})
	}

	/* 导航关闭 */
	function navOff() {
		$(".right-bar").css("background", "none")
		$(".cases").animate({
			width: "0"
		}, 100, function() {
			$(".news").animate({
				width: "0"
			}, 100, function() {
				$(".pro-ser").animate({
					width: "0"
				}, 100, function() {
					$(".about").animate({
						width: "0"
					}, 100, function() {
						$(".left-bg").animate({
							width: "0px"
						}, 100)
					})
				})
			})
		})
		setTimeout(function() {
			$(".nav").css("width", "180px")
			$(".news-cases span").css("left", "34px")
		}, 800)
	}
	/* 左侧导航显示 */
	function navLeftShow() {
		$(".nav").css({
				display: "flex",
				opacity: "0"
			})
			.stop().animate({
				opacity: "1"
			}, 600)
		$(".nav-all li").stop().fadeIn(500)
	}

	/* 左侧导航隐藏 */
	function navLeftHide() {
		$(".nav-all li").stop().fadeOut(500)
	}


	/* 鼠标经过展开后导航效果 */

	$(".right-bar").hover(function() {
		$(this).css("background", "#333")
	})
	$(".pro-ser").hover(function() {
		$(".about").css({
			width: "22%"
		})
		$(this).find(".covering").stop().fadeOut(10)
	}, function() {
		$(".about").css({
			width: "30%"
		})
		$(this).find(".covering").stop().fadeIn(10)
	})
	$(".news-cases").hover(function() {
		$(".pro-ser").css({
			width: "32%"
		})
	}, function() {
		$(".pro-ser").css({
			width: "40%"
		})
	})
	$(".news-cases>div").hover(function() {
		$(this).css({
				height: "65%"
			})
			.siblings().css({
				height: "35%"
			})
	}, function() {
		$(".news-cases>div").css("height", "50%")
	})

	$(".pro-ser-nav>li").hover(function() {
		$(this).find("i").css({
			top: "calc(50% - 10px)"
		})
		$(this).find("ul").stop().fadeIn(10)
			.animate({
				right: "30px"
			}, 300)
	}, function() {
		$(this).find("i").css({
			top: "50%"
		})
		$(this).find("ul").stop().fadeOut(10)
			.animate({
				right: "20px"
			}, 300)
	})

	/* 初始化屏幕滚动效果 */
	function section() {
		var t = setInterval(function() {
			offsetX = $(".section-1").offset().left
			if (offsetX < 0) {
				clearInterval(t)
				meunDown()
				set()
				$(".copyright").stop().fadeOut(300)
				logoChangeSmall()
				navLeftShow()
				$(".fixed-nav,.section1-title h2,.section1-title h3").animate({
					"opacity": "1"
				}, 10)
				$(".copyright").animate({
					left: "4%"
				}, 600)
			}
		}, 10)
	}
	section()

	function set() {
		var setTime = setInterval(function() {
			offsetX = $(".section-1").offset().left
			if (offsetX == 0) {
				clearInterval(setTime)
				section()
				logoChangeBig()
				navLeftHide()
				meunUp()
				$(".copyright").stop().fadeIn(800)
			}
		}, 10)
	}

	/* 点击导航按钮 */
	$(".meun").click(function() {
		num++
		if (num % 2 == 1) {
			$(".meun").css("transform", "rotate(90deg)")
			$(".nav-all-item,.copyright").stop().fadeOut(100)
			meunOn()
			if (offsetX == 0 && $(".fixed-nav").children().eq(0).is($(".logo"))) {
				logoChangeSmall()
				meunDown()
				navLeftShow()
				setTimeout(function() {
					navOpen()
				}, 500)
			} else {
				navOpen()
				if (offsetX == 0 && $(".fixed-nav").children().eq(0).is($(".logo")) == false) {
					meunDown()
					navLeftShow()
				}
			}
		} else {
			$(".nav-all-item").stop().fadeIn(100)
			meunOff()
			navOff()
			$(".meun").css("transform", "rotate(0)")
			if (offsetX == 0) {
				navLeftHide()
				meunUp()
			}
		}
	})


	/* 滚动时部分动画显示 */
	var $screenWidth
	setInterval(function() {
		$screenWidth = $(document.body).width()
		$.each($(".moveleft"), function(i, v) {
			var MarginL = $(".moveleft").eq(i).offset().left
			var distance_right = $(".moveleft").eq(i).attr("distance-right")
			var delay_data = $(".moveleft").eq(i).attr("data-delay")
			if (($screenWidth - MarginL) > distance_right) {
				var t = setTimeout(function() {
					$(".moveleft").eq(i).addClass("show")
					clearTimeout(t)
				}, delay_data)
			}
			if (($screenWidth - MarginL) < -100) {
				$(".moveleft").eq(i).removeClass("show")
			}
		})
	}, 100)

	var countTime = setInterval(function() {
		if ($(".section-2 .section2-data ul li").hasClass("show")) {
			count()
			clearInterval(countTime)
		}
	}, 10)
	var setTime = setInterval(function() {
		var $set = $(".section-2").offset().left
		var $cases = $(".section-4").offset().left
		var screenWidth = $(document.body).width()
		var setMove = (screenWidth - $set) / 5
		var $cases_content = (screenWidth - $cases) / 7
		if ($set < screenWidth) {
			$(".section-2").stop().animate({
				marginLeft: -setMove
			}, 100)
		}
		if ($cases < screenWidth) {
			$(".section-4 .item-content").css({
				transform: "translateX(-" + $cases_content + "px) translateY(-33px)"
			})
			$(".section-4 div.more").css({
				transform: "translateX(" + ((screenWidth - $cases) / 9) + "px)"
			})
		}
		if ($set < 0) {
			$(".fixed_right").fadeIn(500)
		} else if ($set > 0) {
			$(".fixed_right").fadeOut(500)
		}
	}, 100)

	/* 数字滚动 */
	function count() {
		var countCXArr = [];
		var countCX = function() {
			$('.section2-data').each(function(i, dom) {
				if (countCXArr[i] && countCXArr[i] === true) {
					return;
				}
				var sT;
				var ncTop;
				sT = $(window).scrollTop();
				ncTop = $(dom).offset().top;
				var id, decimals, startVal, endVal, duration;
				if (sT > ncTop - $(window).height() && sT < ncTop) {
					$(dom).find('.numCX').each(function() {
						id = $(this).attr('id');
						decimals = $(this).attr('data-decimals'),
							startVal = $(this).attr('data-startVal'),
							endVal = $(this).attr('data-endVal'),
							duration = $(this).attr('data-speed');
						new CountUp(id, startVal, endVal, decimals, duration, {
								useEasing: true, //效果
								separator: '' //数字分隔符
							})
							.start(); // target：目标元素id, startVal：你想要开始的值, endVal：你想要到达的值, decimals：小数位数，默认值为0, duration：动画持续时间为秒，默认值为2, options：选项的可选对象
						countCXArr[i] = true;
					})
				}
			})
		}
		countCX();
	}

	/* section-3部分内容 */
	$.getJSON("json/data.json", function(data) {
		$.each(data, function(i, k) {
			var $section3_item = $("<div class='section3-item'></div>")
			var $section3_item_bg = $("<div class='section3-item-bg'><span></span></div>")
			var $section3_item_content = $("<div class='section3-item-content'></div>")
			var $section3_item_title = $(
				"<div class='section3-item-title'><h2><a href='#'></a></h2><i></i><span><a href='#'></a></span></div>"
			)
			var $section3_item_label = $(
				"<div class='section3-item-label'><p><a href='#'></a></p><span></span></div>"
			)
			var $section3_item_nav = $("<ul class='section3-item-nav'></ul>")
			$(".section-3").append($section3_item)
			$section3_item.append($section3_item_bg)
			$section3_item.append($section3_item_content)
			$section3_item_content.append($section3_item_title)
			$section3_item_content.append($section3_item_label)
			$section3_item_content.append($section3_item_nav)
			$(".section3-item-title h2 a").eq(i).text(data[i].title_h2)
			$(".section3-item-title span a").eq(i).text(data[i].title_span)
			$(".section3-item-label p a").eq(i).text(data[i].label_p)
			$(".section3-item-label span").eq(i).text(data[i].label_span)
			$(".section3-item-bg").eq(i).children("span").css("background", data[i].item_bg)
			$.each(data[i].item_nav, function(i, v) {
				var $liObj = $("<li><a href='#'>" + v + "</a></li>")
				$section3_item_nav.append($liObj)
			})
		})
	})



	/* 搜索框动画 */
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

	$(window).resize(function() {
		if ($(document.body).width() < 992) {
			window.location.href = "mobile-index.html"
		}
		if ($(document.body).width() > 1200 && $(".fixed-nav").children().eq(0).is($(".logo"))) {
			$(".fixed-nav").css("width", "810px")
			$(".section1-title").css("left", "870px")
		}
		if ($(document.body).width() < 1200 && $(".fixed-nav").children().eq(0).is($(".logo"))) {
			$(".fixed-nav").css("width", "576px")
			$(".section1-title").css("left", "650px")
		}
	})
	if ($(document.body).width() < 992) {
		window.location.href = "mobile-index.html"
	}

	$(".nav a").click(function() {
		var $a = $(this).attr("href")
		if ($(".meun span").eq(1).css("opacity") == "0") {
			navOff()
		} else {
			$(".loader-logo").addClass("change").fadeIn()
		}
		setTimeout(function() {
			window.location.href = $a
		}, 800)
		return false
	})
	$("#home_page").click(function() {
		var $scrollLeft = $(".section-1").offset().left
		if ($(".meun span").eq(1).css("opacity") == "0") {
			if ($scrollLeft != "0") {
				setTimeout(function() {
					$(".transverse").getNiceScroll(0).doScrollLeft(1)
				}, 500)
				home()
			} else {
				home()
				setTimeout(function() {
					logoChangeBig()
				}, 1500)
			}
			num++
			$(".meun").css("transform", "rotate(0)")
			meunOff()
		} else {
			setTimeout(function() {
				$(".transverse").getNiceScroll(0).doScrollLeft(1)
			}, 500)
			home()
		}

		function home() {
			$(".loader-logo").addClass("change").fadeIn()
			meunUp()
			navLeftHide()
			$(".copyright").css("left", "-380px")
			setTimeout(function() {
				$(".fixed-nav .logo-change img").eq(0).css("display", "block")
				$(".fixed-nav .logo-change img").eq(1).css("display", "none")
				$(".section1-title h2,.section1-title h3").css("opacity", "0")
				$(".search").animate({
					"top": "-30px"
				}, 400)
			}, 700)
			setTimeout(function() {
				$(".transverse").getNiceScroll(0).doScrollLeft(0)
				$(".loader-logo").fadeOut(400)
				$(".mouse-hint").css("zIndex", "6").fadeIn(500).fadeOut(500)
				$(".mouse-hint").children().remove()
				$(".search").animate({
					"top": "5%"
				}, 400)
			}, 1500)
			setTimeout(function() {
				$(".section1-title h2").animate({
					opacity: "1"
				}, 300, function() {
					$(".section1-title h3").animate({
						opacity: "1"
					}, 300, function() {
						$(".copyright").fadeIn(1).animate({
							"left": "4%"
						}, 400)
					})
				})
			}, 2300)
		}
		return false
	})
})
