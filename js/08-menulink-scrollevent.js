/*! 04-slider.js */

(function(global, $){

'use strict';

	// accordion type1
	var $menuLinks,
        $sections,
        positionTops = [];

        $(function() {

            $menuLinks = $('.lft_navi').find('li')
            $sections = $('.section');

            // .section들의 top 위치값들  
            $sections.each(function(idx, elt) {
                positionTops.push($(elt).position().top);
            });

            // lnb 메뉴의 a링크와 section과 매칭 
            $('.lft_navi').find('li a').each(function(idx, elt) {
                $(elt).click(function() {
                	$.fn.scrollTo({target:'#'+$sections.get(idx).id, gap:0});
                });      
            });

            $(window).scroll(function() {
                var sTop = Number($(this).scrollTop()),
                    sHeight = $(window).scrollTop(),
                	len = positionTops.length,
                    endPos =  positionTops[len-1],
                    targetIdx = 0;

                for(var i=0; i<len; i++ ) {
                    if( sTop > 0 && sTop > positionTops[i]) {
                        targetIdx = i
                        if( i < len -1 && sTop <= positionTops[endPos] ) {
                            break;
                        }
                    }
                }
                $.fn.menuOn(targetIdx);
            });
        });



        $.fn.menuOn = function(idx, elt) {

            var elt = elt || $menuLinks.eq(idx).children().get(0), // a link
                    $sub_menu = $(elt).parent().eq(0), // li.link_event
                    $group_menu = $sub_menu.parent().parent().eq(0); // li.menu_event

            if( $sub_menu.hasClass('menu_event') ) {
                $group_menu = $sub_menu;
                $sub_menu = $group_menu.children().children().eq(0);
            }

            $group_menu.addClass('on');
            $sub_menu.addClass('on');

            $menuLinks.each(function() {
                if( this != $sub_menu.get(0) && this != $group_menu.get(0) ) {
                    $(this).removeClass('on');
                }
            });
        }

        $.fn.scrollTo = function( obj ){

            var target = obj.target || '';
            if (!target) {
                return;
            }

            var gap = obj.gap || 0,
                speed = obj.speed || 500,
                variable = obj.variable ? obj.variable : '#fixedLayer',
                variableHeight = variable ? $(variable).height() - 20 : 0;

            $('body,html').animate({scrollTop: ($(target).offset().top - gap - variableHeight), duration : speed});
        }

})(this, jQuery);

