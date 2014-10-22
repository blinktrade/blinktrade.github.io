$(document).ready(function() {
    $(".slide-nav").responsiveSlides({
        nav: true,
        pause: true
    });

    // -------------------------------------------------------------
	//   Basic Navigation
	// -------------------------------------------------------------
	(function () {
		var $frame  = $('#media-sly');
		var $slidee = $frame.find('.media-sly-nav');
		var $wrap   = $frame.parent();

		// Call Sly on frame
		$frame.sly({
			horizontal: 1,
			itemNav: 'basic',
			smart: 1,
			activateOn: 'click',
			mouseDragging: 1,
			touchDragging: 1,
			releaseSwing: 1,
			scrollBar: $wrap.find('.scrollbar'),
			scrollBy: 1,
			pagesBar: $wrap.find('.pages'),
			activatePageOn: 'click',
			speed: 300,
			elasticBounds: 1,
			dragHandle: 1,
			dynamicHandle: 1,
			clickBar: 1,

			// Buttons
			forward: $wrap.find('.forward'),
			backward: $wrap.find('.backward'),
			prev: $wrap.find('.prev'),
			next: $wrap.find('.next'),
			prevPage: $wrap.find('.prevPage'),
			nextPage: $wrap.find('.nextPage')
		});

        $(window).resize(function() {
            $frame.sly('reload');
        });
	}());
});
