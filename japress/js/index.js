function mobile_menuclick(event,sel) {
	var $sub = $(sel).parent("li").children(".sub-menu");
	if($sub.css("visibility") == "visible"){
		$sub.css("visibility","hidden");
	}else{
		$sub.css("visibility","visible");
	}
	// $sub.toggle();
}

function topScroll() {
	$('body,html').animate({scrollTop: 0}, 1000);
	return false;
}

function showCharts(){
	$(".charts-content").fadeToggle();
}

$(document).scroll(function () {
            var scrollTop = $(document).scrollTop();

            if (scrollTop > 180) {
                $('.go-top-plane').addClass('go-top-plane-show');
                
            } else {
                $('.go-top-plane').removeClass('go-top-plane-show')
            }
});



