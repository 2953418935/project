$(function() {
	$(".right-slide").mouseover(function() {
		$(".carousel-right .slick-current").removeClass("slick-current slick-center")
		$(this).parents(".slick-slide").addClass("slick-current")
		
		var index = $(this).parents(".slick-slide").attr("data-slick-index")
		
		if(index<0){
			index = parseInt(index)+6
		}
		if(index==6){
			index=0
		}
		$(".carousel-left .slick-slide").eq(index).css("opacity","1").siblings().css("opacity","0")
	})
})
