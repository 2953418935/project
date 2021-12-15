$(function() {
	$.getJSON("json/data.json", function(data) {
		$.each(data, function(i, k) {
			var $section3_item = $("<div class='section3-item'></div>")
			var $section3_item_bg = $("<div class='section3-item-bg'><span></span></div>")
			var $section3_item_content = $("<div class='section3-item-content'></div>")
			var $section3_item_title = $(
				"<div class='section3-item-title'><h2><a href='#'></a></h2><i></i><span><a href='#'></a></span></div>"
			)
			var $section3_item_label = $(
				"<div class='section3-item-label'><p><a href='#'>MORE</a></p><span></span></div>"
			)
			$(".section-3").append($section3_item)
			$section3_item.append($section3_item_bg)
			$section3_item.append($section3_item_content)
			$section3_item_content.append($section3_item_label)
			$section3_item_content.append($section3_item_title) 
			$(".section3-item-title h2 a").eq(i).text(data[i].title_h2)
			$(".section3-item-title span a").eq(i).text(data[i].title_span)
			$(".section3-item-label span").eq(i).text(data[i].label_span)
			$(".section3-item-bg").eq(i).children("span").css("background", data[i].item_bg)
		})
	})
	$(window).resize(function() {
		if($(document.body).width() > 992){
			window.location.href="index.html"
		}
	})
	if ($(document.body).width() > 992) {
		window.location.href = ("index.html")
	}
	
})
