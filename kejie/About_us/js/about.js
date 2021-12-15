$(function() {
	var movie = document.getElementById("movie")
	$("#video_on").click(function() {
		$("#movie").attr("src", "../video/video.mp4")
		movie.play()
		$(".video_layer").fadeIn()
	})
	$("#video_off").click(function() {
		$(".video_layer").fadeOut()
		$("#movie").attr("src", "")
	})

	$(".swiper-slide ul li").click(function() {
		if ($(this).attr("alt") && ($(document.body).width() > 992)) {
			$(".honor_box").css("display", "block")
			$(".close_honor").click(function() {
				$(".honor_box").css("display", "none")
			})
			var alt = $(this).attr("alt")
			$.getJSON("../json/honor.json", function(data) {
				$.each(data, function(i, k) {
					if (alt == i) {
						$(".carousel_top").remove()
						$(".carousel_bot").remove()
						var $carousel_top = $("<div class='carousel_top'></div>")
						var $carousel_bot = $("<div class='carousel_bot'></div>")
						$(".honor_carousel").append($carousel_top, $carousel_bot)
						$.each(k, function(i, v) {
							var $Slide = $("<div class='slide'></div>")
							var $Img1 = $("<div class='img'><img src=" + v.img +
								" /></div>")
							var $Img2 = $("<div class='slide_bot'><img src=" + v
								.img + " /></div>")
							var $Content = $(
								"<div class='honor_content'><div class='txt'><span class='date'>" +
								v.date + "</span><h2>" + v.title +
								"</h2><p>" +
								v.content + "</p></div></div>")
							$(".carousel_top").append($Slide)
							$Slide.append($Img1)
							$Slide.append($Content)
							$(".carousel_bot").append($Img2)
						})
						$('.carousel_top').slick({
							slidesToShow: 1,
							slidesToScroll: 1,
							arrows: false,
							fade: false,
							asNavFor: '.carousel_bot'
						});
						$('.carousel_bot').slick({
							slidesToShow: 4,
							slidesToScroll: 1,
							asNavFor: '.carousel_top',
							dots: false,
							centerMode: true,
							focusOnSelect: true,
							centerPadding: "0",
							centerMode: false,
							arrows: true
						});
					}
				})
			})
		}
	})

	function change() {
		var bodyHeight = parseInt($(".fixed-nav").css("height")) / 2 //浏览器可视窗口高度的一半
		var course = document.getElementById("section5_course")
		var courseTop = course.getBoundingClientRect().top - bodyHeight //course盒子顶部到窗口中间的距离
		var courseHeight = $(".section5-course").css("height") //course盒子高度
		var $val
		var spTop1 = document.getElementById("span1").getBoundingClientRect().top
		if (courseTop > 0) {
			courseTop = 0
		} else {
			courseTop = Math.abs(course.getBoundingClientRect().top - bodyHeight)
		}
		if (spTop1 - bodyHeight < 0 && courseTop < parseInt(courseHeight) && $(
				".section-5 .course-event .event-left span").html() != " ") {
			$(".course-event").css("display", "flex")
		} else {
			$(".course-event").css("display", "none")
		}

		$(".course_top").css("height", courseTop + "px")
		$.each($(".section-5 .course_bg span"), function(i, v) {
			var spanTop = this.getBoundingClientRect().top
			if (spanTop - bodyHeight >= 0) {
				this.style.height = "0"
			} else {
				this.style.height = bodyHeight - spanTop + "px"
			}

			if (i < $(".section-5 .course_bg span").length - 1) {
				var spanNext = document.getElementsByClassName("course_bg")[0].getElementsByTagName(
					"span")[i + 1]
				var spanNextTop = spanNext.getBoundingClientRect().top
			}
			if (spanTop - bodyHeight < 0 && spanNextTop - bodyHeight > 0) {
				$val = v.innerHTML
			}
		})

		$.getJSON("../json/about_us.json", function(data) {
			$.each(data, function(i, k) {
				if (k.date == $val) {
					$(".section-5 .course-event .event-left span").html(k.date)
					$(".section-5 .course-event .event-right p").html(k.content)
				}
			})
		})
	}
	window.onscroll = function() {
		change()
	}
	$.getJSON("../json/about_us.json", function(data) {
		var $spanValue
		var $pValue
		var $val
		change()
		$("#event-next").click(function() {
			$.each(data, function(i, k) {
				if (k.date == $(".section-5 .course-event .event-left span").html()) {
					if (i == data.length - 1) {
						$pValue = data[i].content
						$spanValue = data[i].date
					} else {
						$pValue = data[i + 1].content
						$spanValue = data[i + 1].date
						var nextTop = $(".course_bg span").eq(i+1).offset().top
						var thisTop = $(".course_bg span").eq(i).offset().top
						window.scrollTo(0,scrollY+(nextTop-thisTop))
					}
				}
			})
			$(".section-5 .course-event .event-left span").html($spanValue)
			$(".section-5 .course-event .event-right p").html($pValue)
		})
		$("#event-prev").click(function() {
			$.each(data, function(i, k) {
				if (k.date == $(".section-5 .course-event .event-left span").html()) {
					if (i == 0) {
						$pValue = data[i].content
						$spanValue = data[i].date
					} else {
						$pValue = data[i - 1].content
						$spanValue = data[i - 1].date
						var prevTop = $(".course_bg span").eq(i-1).offset().top
						var thisTop = $(".course_bg span").eq(i).offset().top
						var ax= $(window).scrollTop()
						scrollTo(0,ax-(thisTop-prevTop))
						
						console.log(ax,prevTop)
					}
				}
			})
			$(".section-5 .course-event .event-left span").html($spanValue)
			$(".section-5 .course-event .event-right p").html($pValue)
		})
	})

	$.getJSON("../json/about_us.json", function(data) {
		$.each(data, function(i, k) {
			var $div = $("<div class='mobile-page'></div>")
			var $h3 = $("<h3>" + k.date + "<span>年<span></h3>")
			var $p = $("<p>" + k.content + "</p>")
			$(".course-mobile").append($div)
			$div.append($h3, $p)

		})
	})



})
