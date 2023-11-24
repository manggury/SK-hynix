$(function () {
    var didScroll;
    var lastScrollTop = 0;
    var delta = 5;
    var navbarHeight = $("header").outerHeight();

    $(window).scroll(function (event) {
        didScroll = true;
    });

    setInterval(function () {
        if (didScroll) {
            hasScrolled();
            didScroll = false;
        }
    }, 250);

    function hasScrolled() {
        var st = $(this).scrollTop();

        if (Math.abs(lastScrollTop - st) <= delta)
            return;

        if (st > lastScrollTop && st > navbarHeight) {
            $("header").slideUp("fast");
        } else {
            if (st + $(window).height() < $(document).height()) {
                $("header").slideDown("fast");
            }
        }

        lastScrollTop = st;
    }

    $('.news_slide').slick({
        arrows: true,
        centerMode: true,
        centerPadding: '10%',
        slidesToShow: 3,
        touchMove: false,
        autoSlide: false,
    });

    $('.totop').on('click', function () {
        $('html, body').animate({ scrollTop: 0 }, 800)
    });
});