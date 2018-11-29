/* JavaScript Document */
$ (document).ready(function(){
	$('nav a.mobile_menu').on('click', function() {
		var currentNavHeight = $('nav').height();
		if( currentNavHeight < 5){
			var newNavHeight = $('nav > ul').height() + 15;
			$('nav').animate({'height': newNavHeight + 'px'}, 750);
		} else {
			$('nav').animate({'height':'0px'}, 750, function () {
				$(this).removeAttr('style');
			});
		}
	});

	$(window).resize(function(){
		if ( $(this).width() > 768) {
			// was 625 edit in media query CSS - TODO
			 $('nav').removeAttr('style');
		}
	});
});