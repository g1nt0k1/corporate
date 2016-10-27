$(function(){
    // UAがスマホならデフォルト表示
    $(window).scroll(function(){
        var vision_h = $(".vision_content").offset().top;
        var business_h = $(".business_column").offset().top;
        var about_h = $(".about dl").offset().top;
    });

    $('.firstview_slide').panelGallery({
		viewDuration: 3000,
		transitionDuration: 500,
		boxSize: 45,
		boxFadeDuration: 500,
		boxTransitionDuration: 50,
		FX: new Array('boxSouthEast')
	});
});
