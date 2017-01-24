/*! 08-thumbnail-list.js */

var JUI = JUI || {};

(function(global, $) {
    
    JUI.gallery = function (container) {
        
        if (!container.length) {
            return;
        }
        
        var detect = {};
        
        function init() {
            detect.thumbnailBox = container.find('.thumbnail'); // div.thumbnail
            detect.thumbnailView = container.find('.image > li'); // ul.image > li
            detect.next = '.next'; // div.next
            detect.thumbnailOuter = detect.thumbnailBox.find('.thumb-list'); // div.thumbnail > div.thumb-list
            detect.thumbnailInner = detect.thumbnailOuter.find('ul'); // div.thumb-list > ul
            detect.thumbnailList = detect.thumbnailInner.find('> li'); // div.thumb-list > ul > li
            detect.thumbViewlWidth = detect.thumbnailOuter.width(); // 가시적인 썸네일 비주얼 영역 너비
            detect.thumbMaxSize = detect.thumbnailList.length; // 썸네일 갯수
            detect.listMarginRight = parseInt(detect.thumbnailList.css('margin-right'));
            detect.thumbShowSize = 6;
            detect.currentIndex = 0;
            detect.maxIndex = Math.ceil(detect.thumbMaxSize / detect.thumbShowSize) -1;
            detect.min = 0;
            detect.prev = '.prev';
            detect.next = '.next';
            detect.thumbnail = '.thumb-list li';
        }
        
                
        function showNextList() {
            if (detect.currentIndex < detect.maxIndex) {
                detect.currentIndex++;
                 console.log(detect.currentIndex, detect.maxIndex);
            }
            slideThumbnail();
        }
        
        function showPrevList() {
            if (detect.currentIndex > detect.min) {
                detect.currentIndex--;
            }
            slideThumbnail();
        }
        
        function slideThumbnail() {
            
            if (detect.thumbnailInner.is(':animated')) {
                return;
            }
            // 기시적인 썸네일 영역 + 썸네일 간 마진 고려
            var offset = ((detect.thumbViewlWidth * detect.currentIndex) + (detect.currentIndex * detect.listMarginRight)) * -1;
            
            detect.thumbnailInner
                .stop()
                .animate({left: offset}, 400)
        }
        
        function thumbnailShow() {
            detect.thumbnailView.css('display', 'none');
            var index = $(this).index();
            detect.thumbnailView.eq(index).fadeIn(600);
        }
        
        init();
        
        $(document)
            .on('click.gallery.next', detect.next, showNextList)
            .on('click.gallery.prev', detect.prev, showPrevList)
            .on('click.gallery.thumbnail', detect.thumbnail, thumbnailShow)
        
    };
    
})(window, window.jQuery);

$(function () {
    /**
     * @param1 type : jQuery Selector
     * ex) JUI.gallery($('selector'));
     */
    JUI.gallery($('.gallery'));
});
