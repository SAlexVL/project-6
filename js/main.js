document.addEventListener('DOMContentLoaded', () => {
    let player;
    $('.video__play').on('click', function onYouTubeIframeAPIReady() {
        player = new YT.Player('player', {
            height: '360',
            width: '100%',
            videoId: 'cTawsSKOGDA',
            events: {
                'onReady': onPlayerReady,
            }
        });

        function onPlayerReady(event) {
            event.target.playVideo();
        }
    });
    $('.video__play2').on('click', function onYouTubeIframeAPIReady() {
        player = new YT.Player('player2', {
            height: '100%',
            width: '100%',
            videoId: 'xjrTEIG-hsg',
            events: {
                'onReady': onPlayerReady
            }
        });

        function onPlayerReady(event) {
            event.target.playVideo();
        }
    });
    let player3;
    $('.video__play3').on('click', function onYouTubeIframeAPIReady() {
        player = new YT.Player('player3', {
            height: '100%',
            width: '100%',
            videoId: '35uUBsRS2Kw',
            events: {
                'onReady': onPlayerReady
            }
        });

        function onPlayerReady(event) {
            event.target.playVideo();
        }
    });
    let player4;
    $('.video__play4').on('click', function onYouTubeIframeAPIReady() {
        player = new YT.Player('player4', {
            height: '100%',
            width: '100%',
            videoId: 'zmOBHYgAebE',
            events: {
                'onReady': onPlayerReady
            }
        });

        function onPlayerReady(event) {
            event.target.playVideo();
        }
    });
    //Первый слайдер
    const oneSwiper = new Swiper('.slider-container', {
        slidesPerView: 1,
        navigation: {
            nextEl: '.places-button-next',
            prevEl: '.places-button-prev',
        },
        breakpoints: {
            1200: {
                slidesPerView: 2,
                spaceBetween: 90,
            }
        }
    });

    const mySwiper = new Swiper('.auto-container', {
        spaceBetween: 1,
        navigation: {
            nextEl: '.auto-button-next',
            prevEl: '.auto-button-prev',
        },
        pagination: {
            el: '.auto-pagination',
            type: 'fraction',
            formatFractionCurrent: function (number) {
                if (number < 10) {
                    number = '0' + number;
                }
                return number;
            },
            formatFractionTotal: function (number) {
                if (number < 10) {
                    number = '0' + number;
                }
                return number;
            },
        },

    });
    const footerSwiper = new Swiper('.footer__container', {
        spaceBetween: 1,
        navigation: {
            nextEl: '.footer-button-next',
            prevEl: '.footer-button-prev',
        },
        pagination: {
            el: '.footer-pagination',
            type: 'fraction',
            currentClass: 'swiper-pagination-footer__current',
            totalClass: 'swiper-pagination-footer__total',
            formatFractionCurrent: function (number) {
                if (number < 10) {
                    number = '0' + number;
                }
                return number;
            },
            formatFractionTotal: function (number) {
                if (number < 10) {
                    number = '0' + number;
                }
                return number;
            },
        },
    });

    $(function () {
        $("buttonUp").hide();

        $(window).scroll(function () {
            if ($(this).scrollTop() > 500) {
                $("#buttonUp").fadeIn();
            } else {
                $("#buttonUp").fadeOut();
            }
        });

        $("#buttonUp").click(function () {
            $("body,html").animate({
                scrollTop: 0
            }, 500);
            return false;
        });
    });

    const menu = document.querySelector('.popup-menu'),
        menuItem = document.querySelectorAll('.nav__link'),
        hamburger = document.querySelector('.hamburger'),
        linkBox = document.querySelector('.nav__wrap-popup');

    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('hamburger_active');
        menu.classList.toggle('popup-menu_active');
        linkBox.classList.toggle('nav__wrap-popup_active');
    });

    menuItem.forEach(item => {
        item.addEventListener('click', () => {
            hamburger.classList.toggle('hamburger_active');
            menu.classList.toggle('popup-menu_active');
            linkBox.classList.toggle('nav__wrap-popup_active');
        });
    });

    $('[type=tel]').mask('+7(000)-000-00-00', {
        placeholder: "Ваш телефон"
    });

    $('.form__main').validate({
        errorClass: "invalid",
        errorElement: "div",
        rules: {
            userPhone: {
                required: true,
                minlength: 17,
            },
            userText: {
                minlength: 4,
            }
        },
        messages: {
            userPhone: {
                required: "Телефон обязателен",
                minlength: "Номер телефона введен не корректно",
            },
            userText: {
                minlength: "Промокод не менее 4 символов",
            }
        },
        submitHandler: function (form) {
            $.ajax({
                type: "POST",
                url: "send.php",
                data: $(form).serialize(),
                success: function (response) {
                    $(form)[0].reset();
                    const popUp = $('.popUp'),
                          closeBtn = $('.popUp__dialog > img');
                    closeBtn.click(function() {
                        popUp.removeClass('popUp--visable');
                    });
                    popUp.addClass('popUp--visable');
                    setTimeout(function () {
                        popUp.removeClass('popUp--visable');
                    }, 3000);
                }
            });
        }
    });
    (function ($) {
        $(function () {

            $('input, select, span').styler();

        });
    })(jQuery);

    const promo = document.querySelector('.promocode'),
        promoInput = document.querySelector('.input-promocode');

    promo.addEventListener('click', (e) => {
        e.preventDefault();
        if (e.target === promo) {
            promoInput.classList.toggle('input-promocode-active');
        }
    });
    /*$('#form1').change(function(){
        $('div.form__price').slideUp();
        $('#p_'+$(this).val()).slideDown();
    });*/
});