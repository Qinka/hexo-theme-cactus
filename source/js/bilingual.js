var leftParagraphs = $('.content-bil .bil-first-column').find('p, h1, h2, h3, h4, h5, h6');
var rightParagraphs = $('.content-bil .bil-second-column').find('p, h1, h2, h3, h4, h5, h6');

var bil_align = () => {
    /* 如果页面宽度大于 800px，进行段落对齐，见下一节 */
    if(window.matchMedia('screen and (min-width: 480px)').matches) {
        leftParagraphs.each((i, thiz) => {
            if (i < rightParagraphs.length) {
                var left = $(thiz);
                var right = rightParagraphs.eq(i);

                left.removeAttr('style'), right.removeAttr('style');

                /* 取对应两段高度的最大值 */
                var maxHeight = Math.max(left.height(), right.height());
                left.height(maxHeight), right.height(maxHeight);
            }
        });
    } else {
        leftParagraphs.removeAttr('style'), rightParagraphs.removeAttr('style');
    }
}

var resizeHandler = 0;
/* 监听窗口大小变化 */
$(window).resize(() => {
    if(resizeHandler) {
        clearTimeout(resizeHandler);
    }
    resizeHandler = setTimeout(bil_align, 500);
});
if($('.content img').length) {
    $('.content img').load(bil_align);
} else {
   $(bil_align);
}

if(document.fonts) {
    document.fonts.ready.then(function () {
        bil_align();
    });
}