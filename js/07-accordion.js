/*! 04-slider.js */

(function(global, $){

'use strict';

	// accordion type1
	(function accordion_type1 () {
		
		$('.accordion_type1').children('li').first().children('a').addClass('active')
			.next().addClass('is_open').show();
			
		$('.accordion_type1').on('click', '.subject_link', function(e) {
		e.preventDefault();
			
		  if (!$(this).hasClass('active')) {

			$('.accordion_type1 .is_open').removeClass('is_open').hide();
			$(this).next().toggleClass('is_open').toggle();			  
			
			$('.accordion_type1').find('.active').removeClass('active');			
			$(this).addClass('active');			
			
		 } else {
			$('.accordion_type1 .is_open').removeClass('is_open').hide();
			$(this).removeClass('active');
		  }
	   });
	})();
	
	// accordion type2
	(function accordion_type2 () {		
		$('.accordion_type2').children('li').first().children('a').addClass('active')
			.next().addClass('is_open').show();
		
		var $subject_link = $('.accordion_type2 .subject_link');		
		for (var i = 0, l=$subject_link.length; i < l ; i++) {				
			$subject_link[i].onclick = function(e) {
				e.preventDefault();			
				$(this).toggleClass('active');
				$(this).next().toggleClass('is_open');
			};		
		}		
	})();

})(this, jQuery);

