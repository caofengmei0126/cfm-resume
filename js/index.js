var pageRender = (function () {
    var $cfmCou = $('.cfmCou');
    var pageBgs = document.getElementsByClassName('pageBg');
    var $audio = $('#audio');
    var $cfmBtn = $('.cfmBtn');
    var $cfmSpan = $cfmBtn.children('span');
    var $page3 = $('.page3');
    var mySwiper = null;
    function moveFn(example) {
        var $ols = $('ol');
        $.each($ols, function (m, itemm) {
            var $oLis = $(itemm).find('li');
            $.each($oLis, function (a, item) {
                $(item).css('transform', 'scale(1)')
            })
        });
        var slideAry = example.slides,
            index = example.activeIndex;
       /*console.log(slideAry);
         console.log(index);*/
        $.each(slideAry, function (n, item) {
            item.id = index === n ? 'page' + (index + 1) : null;
            $(item).find('ol')[0].id = index === n ? 'pageBg' : null;
            //console.log($(item).find('ol')[0])
        });
        if (index === 0) {
            var lis = pageBgs[0].getElementsByTagName('li');
            for (i = 0, len = lis.length; i < len; i++) {
                cur = lis[i];
                $(cur).css('transform', 'scale(0)');
            }
        }
        if (index === 1) {
            lis = pageBgs[1].getElementsByTagName('li');
            for (i = 0, len = lis.length; i < len; i++) {
                cur = lis[i];
                $(cur).css('transform', 'scale(0)');
            }
        }
        if (index === 2) {
            $page3.css('opacity',1);
            lis = pageBgs[2].getElementsByTagName('li');
            for (i = 0, len = lis.length; i < len; i++) {
                cur = lis[i];
                $(cur).css('transform', 'scale(0)');
            }
        }
        if (index === 3) {
            lis = pageBgs[3].getElementsByTagName('li');
             for (i = 0, len = lis.length; i < len; i++) {
                 cur = lis[i];
                $(cur).css('transform', 'scale(0)');
            }
            $page3.css('opacity',0);
            $cfmCou.makisu({
                selector: 'dd',
                overlap: 0.6,
                speed: 0.6
            });
            $cfmCou.makisu('open');
        } else {
            //$page3.css('opacity',1);
            //console.log(1)
            $cfmCou.makisu({
                selector: 'dd',
                overlap:0.6,
                speed: 0
            });
            $cfmCou.makisu('close');
        }
        if (index === 4) {
            lis = pageBgs[4].getElementsByTagName('li');
            for (i = 0, len = lis.length; i < len; i++) {
                cur = lis[i];
                $(cur).css('transform', 'scale(0)');
            }
        }
        if (index === 5) {
            lis = pageBgs[5].getElementsByTagName('li');
            for (i = 0, len = lis.length; i < len; i++) {
                cur = lis[i];
                $(cur).css('transform', 'scale(0)');
            }
            var $cfmOnly = $('.cfmOnly');
            //$cfmOnly.css('opacity', 1)
        }
    }

    function bindEvent(ele) {
        var isPlay = false;
        ele.onclick = function () {
            if (isPlay) {
                $audio[0].pause();
                $cfmSpan[0].id =null;
                isPlay = false
            } else {
                $audio[0].play();
                $cfmSpan[0].id = 'cfmSpan';
                isPlay = true;
            }
        }
    }

    return {
        init: function () {
            mySwiper = new Swiper('.swiper-container', {
                effect: 'coverflow',
                //loop:true,
                onInit: moveFn,
                onTransitionEnd: moveFn
            });
            /*$audio[0].play();*/
            $audio[0].pause();
            $cfmSpan[0].id =null;

            /*$cfmSpan[0].id = 'cfmSpan';*/
            bindEvent($cfmSpan[0]);
        }
    }
})();
pageRender.init();