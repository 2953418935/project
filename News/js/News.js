$(function(){
	$.getJSON("../json/newsData.json", function(data) {
		$.each(data, function(i, k) {
			var $liObj = $("<li></li>")
			var $Img = $("<i><a href='#'><img src=" + k.img + " /></a></i>")
			var $h4 = $("<h4><a href='#'>" + k.title + "</a></h4>")
			var $p = $("<p><span>"+ k.time +"</span><span>"+ k.page_view +"</span></p>")
			var $more = $("<a class='more' href='#'>more</a>")
			$(".section-2 .section2-content").append($liObj)
			$liObj.append($Img, $h4, $p, $more)
		})
		var $liObj = $(".section-2 .section2-content li")
		var $pageNum = Math.ceil($(".section2-content li").length / 14)
		for (var i = 0; i < $pageNum; i++) {
			var $span = $("<span>" + (i + 1) + "</span>")
			$(".section-2 .paging .next").before($span)
			var $ul = $("<ul></ul>")
			$(".section-2 .section2-content").append($ul)
			$ul.append($liObj.slice((i * 14), (i + 1) * 14))
		}
		 $(".section-2 .section2-content ul").eq(0).addClass("active")
		 $(".section-2 .paging-box span").eq(0).addClass("active")
		 
		 $(".section-2 .paging span").click(function() {
		 	console.log($(this).index())
		 	var $index = $(this).index() - 1
		 	$(".section2-content ul").eq($index).addClass("active").siblings()
		 		.removeClass("active")
		 	$(this).addClass("active").siblings().removeClass("active")
		 })
		 
		 $(".section-2 .paging .prev").click(function() {
		 	console.log("a")
		 	if ($(".section2-content ul").eq(0).hasClass("active")) {
		 		return
		 	} else {
		 		$(".section2-content ul.active").removeClass("active").prev().addClass(
		 			"active")
		 		$(".section-2 .paging .active").removeClass("active").prev().addClass(
		 			"active")
		 	}
		 })
		 
		 $(".section-2 .paging .next").click(function() {
		 	if ($(this).prev().hasClass("active")) {
		 		return
		 	} else {
		 		$(".section2-content ul.active").removeClass("active").next().addClass(
		 			"active")
		 		$(".section-2 .paging .active").removeClass("active").next().addClass(
		 			"active")
		 	}
		 })
	})
})