/*! 04-slider.js */

(function(global, $){

'use strict';

	// email select choice
	var $str_select = $('.str_select'),
		 $str_email = $('.str_email')
	$str_select.change(function(){
	   $('.str_select option:selected').each(function () {
			
			if($(this).val()== '1'){ //직접입력일 경우
				 $str_email.val('');                    //값 초기화
				 $str_email.attr('readonly',false); //활성화
			}else{ //직접입력이 아닐경우
				 $str_email.val($(this).text());      //선택값 입력
				 $str_email.attr('readonly',true); //비활성화
			}
	   });
	});

})(this, jQuery);

