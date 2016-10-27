$(function(){
    // UAがスマホならデフォルト表示
    $(window).scroll(function(){
        var vision_h = $(".vision_content").offset().top;
        var business_h = $(".business_column").offset().top;
        var about_h = $(".about dl").offset().top;
    });

    $('.firstview_slide').panelGallery({
		viewDuration: 2000,
		transitionDuration: 300,
		boxSize: 40,
		boxFadeDuration: 300,
		boxTransitionDuration: 50,
		// FX: new Array('boxSouthEast')
        FX: new Array('panelZipperDown,true','panelZipperRight,true','panelTeethDown,true','panelTeethRightReveal')
	});
});
