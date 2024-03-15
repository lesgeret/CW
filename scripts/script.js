'use strict'

// $(document).ready(function() {
window.onload = function () {

    // ПЛАВНЫЙ СКРОЛЛ
    $('#pod_link').on('click', function () {
        $('.pod')[0].scrollIntoView({ behavior: 'smooth', block: "center" });
    })
    $('#why_link').on('click', function () {
        $('.why')[0].scrollIntoView({ behavior: 'smooth', block: "center" });
    })
    $('#products_link').on('click', function () {
        $('.products')[0].scrollIntoView({ behavior: 'smooth' });
    })
    $('#order_link').on('click', function () {
        $('.order')[0].scrollIntoView({ behavior: 'smooth', block: "center" });
    })
    $('#reviews_link').on('click', function () {
        $('.reviews')[0].scrollIntoView({ behavior: 'smooth', block: "center" });
    })
    $('#check_fruits').on('click', function () {
        $('.products')[0].scrollIntoView({ behavior: 'smooth' });
    })
    $('#check_fruits2').on('click', function () {
        $('.products')[0].scrollIntoView({ behavior: 'smooth' });
    })


    //   FIXED кнопка появление
    let topBtn = $('.top-button');
    $(window).scroll(function (event) {
        var top = $(window).scrollTop();
        if (top >= 500) {
            topBtn.css('opacity', '0.9');
        } else {
            topBtn.css('opacity', '0');
        }
    });

    // modal menu JS
    let modalMenu = document.getElementById('menu');
    let burgerBtn = document.getElementById('burger');
    let crossBtn = document.getElementById('burger-cross');

    burgerBtn.onclick = function () {   /* бургер открывает */
        modalMenu.classList.add('open');
        burgerBtn.style.display = 'none';
        crossBtn.style.display = 'block';
    }

    crossBtn.onclick = function () {     /* крестик закрывает */
        modalMenu.classList.remove('open');
        burgerBtn.style.display = 'block';
        crossBtn.style.display = 'none';
    }

    document.querySelectorAll('#menu *').forEach((item) => {
        item.onclick = () => {
            modalMenu.classList.remove('open');
            crossBtn.style.display = 'none';
            burgerBtn.style.display = 'block';
        }
    })

    // slider SLICK
    $('.pod-grid').each(function () {     /* выделяем слайдер в блоке Товар дня */

        $('.slider-nav', this).slick({
            infinite: true,
            slidesToShow: 3,
            slidesToScroll: 1,
            vertical: true,
            verticalSwiping: true,
            focusOnSelect: true,
            prevArrow: '<img class="slider-arrow-prev" src="../img/arr-next.png" alt="asasa">',
            nextArrow: '<img class="slider-arrow-next" src="../img/arr-prev.png" alt="asasa">',
            asNavFor: $('.slider-for', this),
            responsive: [
                {
                    breakpoint: 577,
                    settings: {
                        vertical: false,
                        verticalSwiping: false,
                        prevArrow: '<img class="slider-arrow-prev" src="../img/arr-hor-prev.png" alt="asas">',
                        nextArrow: '<img class="slider-arrow-next" src="../img/arr-hor-next.png" alt="asas">',
                    }
                }]
        });

        $('.slider-for', this).slick({
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: false,
            fade: true,
            asNavFor: $('.slider-nav', this)
        });
    });

    $('.reviews').each(function () {    /* выделяем слайдер в блоке Отзывы */
        $('.multiple-items', this).slick({
            infinite: true,
            slidesToShow: 2,
            slidesToScroll: 1,
            focusOnSelect: true,
            prevArrow: '<img class="slider-arrow-prev" src="../img/arr_BIG_prev.png" alt="asasa">',
            nextArrow: '<img class="slider-arrow-next" src="../img/arr_BIG_next.png" alt="asa">',
            responsive: [
                {
                    breakpoint: 1140,
                    settings: {
                        slidesToShow: 1,
                    }
                }
            ]
        });
    });

    // аккордеон
    $(function () {
        let accord = $("#accordion");
        accord.accordion({
            heightStyle: "content"
        });
        accord.accordion({
            collapsible: true,
            active: false
        });
        let icons = {
            header: "ui-icon-caret-1-s",
            activeHeader: ".ui-icon-caret-1-n"
        };
        accord.accordion({
            icons: icons
        });
    });


    //     PRODUCTS-BUTTON
    let btnAll = document.getElementById('btn_all');
    let btnRare = document.getElementById('btn_rare');
    let btnActions = document.getElementById('btn_actions');
    let btnNew = document.getElementById('btn_new');

    btnAll.classList.add('chosen'); /* включаем черную подстветку на кнопках */
    let btnBlock = document.querySelectorAll(".product-select-button");
    for (let btn of btnBlock) {
        btn.addEventListener('click', function () {
            if (this.classList.contains('chosen')) {
                return;
            }
            btnBlock.forEach(i => i.classList.remove('chosen'));
            this.classList.add('chosen');
        })
    }

    //     переключение классов товаров
    let productItems = document.querySelectorAll(".products-grid-item");

    btnAll.addEventListener('click', function () { /* включаем ВСЁ */
        for (let item of productItems) {
            item.style.display = "block";
        }
    })

    btnRare.addEventListener('click', function () { /* включаем РЕДКОЕ */
        for (let item of productItems) {
            if (!item.classList.contains('product-rare')) {
                item.style.display = "none";
            } else {
                item.style.display = "block";
            }
        }
    })

    btnActions.addEventListener('click', function () { /* включаем АКЦИИ */
        for (let item of productItems) {
            if (!item.classList.contains('product-action')) {
                item.style.display = "none";
            } else {
                item.style.display = "block";
            }
        }
    })

    btnNew.addEventListener('click', function () { /* включаем НОВОЕ */
        for (let item of productItems) {
            if (!item.classList.contains('product-new')) {
                item.style.display = "none";
            } else {
                item.style.display = "block";
            }
        }
    })


    // КНОПКА ЗАКАЗАТЬ
    let orderModal = document.getElementById('order-modal');
    let orderSuccess = document.getElementById('order-success');
    let orderModalBlock = document.getElementById('order-modal-block');

    // открыть
    let btnOrderProduct = document.getElementsByClassName('btn-order-product');
    for (let btn of btnOrderProduct) {
        btn.addEventListener('click', function () {
            if (!(orderSuccess.style.display = "block")) {
                orderModal.style.display = "flex";
            } else {
                showForm();
                orderModal.style.display = "flex";
            }
        });
    }


    // закрыть по клику в серой зоне
    orderModal.addEventListener('click', (e) => {
        const withinBoundaries = e.composedPath().includes(orderModalBlock);

        if (!withinBoundaries) {
            orderModal.style.display = 'none';
        }
    })
    // закрыть по ESC
    document.addEventListener('keydown', function (e) {
        if (e.keyCode === 27) {
            orderModal.style.display = 'none';
        }
    })

    //     работа с ФОРМАМИ

    // input number
    document.getElementById('quantity').oninput = (e) => {
        let value = e.target.value;
        if (value.length > 1) {
            value = value.slice(0, 1);
        }
    }

    // hide form() - прячет форму, показывает сообщение
    let hideForm = function () {
        $('#h3-order-modal').hide();
        $('#order-form').hide();
        $('#order-success').css('display', 'block');
    }
    // showform() - показывает форму, прячет сообщение
    let showForm = function () {
        $('#h3-order-modal').show();
        $('#order-form').show();
        $('#order-success').css('display', 'none');
    }


    //     подстановка названия
    let addToCardButton = $('.product-order-button');
    let productSelect = $('.order-select');
    addToCardButton.click((e) => {
        let clickId = e.target.id;     /* проверяем ИД кнопки и вставляем ВАЛЬЮ в селект */
        switch (clickId) {
            case 'btnOrderMango':
                productSelect.val('mango');
                break;
            case 'btnOrderMaracuya':
                productSelect.val('maracuya');
                break;
            case 'btnOrderCocos':
                productSelect.val('cocos');
                break;
            case 'btnOrderPittah':
                productSelect.val('pittah');
                break;
            case 'btnOrderAnanas':
                productSelect.val('ananas');
                break;
            case 'btnOrderPapaya':
                productSelect.val('papaya');
                break;
        }
    })
    //   подстановка названия ТОВАР ДНЯ
    $('.pod-button').click(function () {
        productSelect.val('mango');
    });

    //     маска телефона
    let phone = $('#phone');
    phone.inputmask({ "mask": "+7 (999)999-99-99" });

    /* функция убирает предупреждение при начале ввода в инпут */
    let orderInput = $('.order-input');
    orderInput.on('input', function () {
        $(this).css('borderColor', '#122508');
    })

    let name = $('#name');
    /* основная функция SUBMIT  */
    $('#submit').click(function () {

        let hasError = false;

        if (!productSelect.val()) {
            productSelect.css('borderColor', '#D5135EFF');
            hasError = true;
        }
        if (!name.val()) {
            name.attr('placeholder', 'Введите ваше имя!');
            name.css('borderColor', '#D5135EFF');
            hasError = true;
        }
        if (!phone.val()) {
            phone.attr('placeholder', 'Введите ваш телефон!');
            phone.css('borderColor', '#D5135EFF');
            hasError = true;
        }
        if (!hasError) {
            $.ajax({
                method: "POST",
                url: "https://testologia.site/checkout",
                data: { product: productSelect.val(), name: name.val(), phone: phone.val() }
            })
                .done(function (msg) {
                    if (msg.success) {
                        hideForm();
                    } else {
                        alert("Возникла ошибка при оформлении заказа, позвоните нам и сделайте заказ");
                    }
                });
        }
    });

    //     ТАЙМЕР
    function countdown() {
        let dt = new Date
        let tz = dt.getTimezoneOffset()
        let now = Math.floor(dt / 1000 - tz * 60)
        let next = Math.ceil((dt / 1000 / 60 - tz) / 60 / 24) * 60 * 60 * 24
        let left = next - now
        let hours = ~~(left / 60 / 60)
        let mins = ~~(left / 60 % 60)
        let secs = ~~(left % 60)
        document.getElementById("hours").innerHTML = hours;
        document.getElementById("minutes").innerHTML = mins;
        document.getElementById("seconds").innerHTML = secs;
    }

    countdown()
    setInterval(countdown, 1000)

    // wow js
    new WOW({
        animateClass: 'animate__animated',
    }).init();

    // onload
}


