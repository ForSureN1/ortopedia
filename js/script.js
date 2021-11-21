$('.main-slider__slider').slick({
    autoplay: true,
    arrows: true,
    dots: false,
    fade: true,
    speed: 1500,
    slidesToShow: 1,
    slidesToScroll: 1,
    prevArrow: '<button type="button" class="slick_arrow slick_prev"></button>',
    nextArrow: '<button type="button" class="slick_arrow slick_next"></button>',
})

$('.slider__items').slick({
    autoplay: true,
    arrows: true,
    dots: false,
    speed: 1500,
    slidesToShow: 5,
    slidesToScroll: 1,
    prevArrow: '<button type="button" class="slick_arrow slick_prev"></button>',
    nextArrow: '<button type="button" class="slick_arrow slick_next"></button>',
    responsive: [{
        breakpoint: 550,
        settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
        }
    }]
})

$('.product__bigslider').slick({
    autoplay: true,
    autoplaySpeed: 4000,
    arrows: false,
    dots: false,
    pauseOnHover: false,
    pauseOnFocus: false,
    speed: 1300,
    slidesToShow: 1,
    slidesToScroll: 1,
    pauseOnHover: false,
    pauseOnFocus: false,
    waitForAnimate: false,
});


$('.product__dot').on("click", function() {
    var dot_index = $(this).index();
    if (!$(this).hasClass('active')) {
        $('.product__dot.active').removeClass('active');
        $(this).addClass('active');
        $('.product__bigslider').slick('slickGoTo', dot_index);
    }
});

$('.product__bigslider').on("afterChange", function() {
    var cur_index = $('.product__bigslider').slick('slickCurrentSlide');
    $('.product__dot.active').removeClass('active');
    $('.product__dot').eq(cur_index).addClass('active');
});

let hamb = document.querySelector('.hamb')
let hambbtn = document.getElementById('nav-icon3')
let headerMenu = document.querySelector('.nav__menu')

hamb.addEventListener('click', function() {
    hambbtn.classList.toggle('open')
    headerMenu.classList.toggle('active')
});

document.addEventListener('DOMContentLoaded', () => {

    window.addEventListener('scroll', hiddenHeader)
    hiddenHeader();

    function hiddenHeader() {
        let header = document.querySelector('.header__top')
        let body = document.querySelector('body').offsetWidth
        if (document.body.scrollTop > 140 || document.documentElement.scrollTop > 140) {
            header.classList.add('hidden')
        } else {
            header.classList.remove('hidden')
        }
    }


    let catalog = document.querySelector('.header__catalog-btn')
    catalog.addEventListener('click', showMenu)

    function showMenu() {
        let menu = document.querySelector('.header__catalog-menu')
        catalog.classList.toggle('active')
        menu.classList.toggle('active')
    }

    // let podmenu = document.querySelector('.header__catalog-list')
    // podmenu.addEventListener('click', showPodmenu)

    // function showPodmenu(e) {
    //     if (e.target.classList.contains('active')) {
    //         $(e.target.parentNode.querySelector('.podmenu__item')).slideUp();
    //         e.target.classList.remove('active')
    //     } else {
    //         $('.header__catalog-link.active').removeClass('active');
    //         $('.podmenu__item').slideUp();
    //         $('.header__catalog-link').removeClass('active')
    //         e.target.classList.add('active')
    //         e.target.closest('.header__catalog-item').classList.add('active')
    //         e.target.parentNode.querySelector('.podmenu__item').slideDown();
    //     }
    // }

    $('.header__catalog-link').on("click", function() {
        if ($(this).hasClass('active')) {
            $(this).siblings('.podmenu__item').slideUp(700);
            $(this).removeClass('active');
            setTimeout(function(item) {
                $('.header__catalog-item.active').removeClass('active');
            }, 500);
        } else {
            $('.header__catalog-link.active').removeClass('active');
            $('.podmenu__item').slideUp(700);
            $('.header__catalog-item').removeClass('active');
            $(this).addClass('active');
            $(this).parent('.header__catalog-item').addClass('active');
            $(this).siblings('.podmenu__item').slideDown(700);
        }
    });


    $('.podmenu__link').on("click", function(e) {
        const target = e.target
        if (target.classList.contains('active')) {
            $(target.nextElementSibling).slideUp();
            target.classList.remove('active')
        } else {
            $('.podmenu__block-children').slideUp();
            $(target.nextElementSibling).slideDown();
            $('.podmenu__link').removeClass('active')
            target.classList.add('active')
        }
    });


    // show select Catalog

    // let select = document.querySelector('.filter__select')
    // if (select) {
    //     select.addEventListener('click', showCategories)
    // }

    // function showCategories() {
    //     let categories = document.querySelector('.filter__select-items')
    //     categories.classList.toggle('active')
    // }


    //Left sidebar catalog
    let sidebar = document.querySelector('.sidebar__list')
    if (sidebar) {
        sidebar.addEventListener('click', showSidebarPodmenu)
    }

    function showSidebarPodmenu(e) {

    }




    //Внутр. Табы
    let listinner = document.querySelector('.product__tabs')

    if (listinner) {
        productTabs();
        productItemTabs();
        productListTabs();
        productListItemTabs();
    }

    function productTabs() {
        let btn = document.querySelectorAll('.product__tab');
        let block = document.querySelectorAll('.product__info')
        btn.forEach((key, index, array) => {
            key.addEventListener('click', function() {
                block.forEach((item, itemindex) => {
                    item.classList.toggle('active', index === itemindex)
                })
            })
        })
    }

    function productItemTabs() {
        let list = document.querySelector('.product__tabs')
        let items = document.querySelectorAll('.product__tab')
        list.addEventListener('click', (e) => {
            const target = e.target
            if (target.classList.contains('product__tab')) {
                // console.log(target)
                items.forEach(item => {
                    item.classList.remove('active')
                })
            }
            target.classList.add('active')
        })
    }

    function productListTabs() {
        let btn = document.querySelectorAll('.product__info-item');
        let block = document.querySelectorAll('.product__info-tabs')
        btn.forEach((key, index) => {
            key.addEventListener('click', function() {
                block.forEach((item, itemindex) => {
                    item.classList.toggle('active', index === itemindex)
                })
            })
        })
    }


    function productListItemTabs() {
        let list = document.querySelector('.product__info-list')
        let items = document.querySelectorAll('.product__info-item')
        list.addEventListener('click', (e) => {
            const target = e.target
            if (target.classList.contains('product__info-item')) {

                console.log(target)
                items.forEach(item => {
                    item.classList.remove('active')
                })
            }
            target.classList.add('active')
        })
    }


    //Табы Доставка
    let delivtab = document.querySelector('.delivery__tabs')
    if (delivtab) {
        delivtab.addEventListener('click', delivTabs)
    }

    function delivTabs(e) {
        console.log(e.target)
        let tabs = document.querySelectorAll('.delivery__text')
        let items = document.querySelectorAll('.delivery__tab-title')
        tabs.forEach(block => { block.classList.remove('active') })
        items.forEach(item => { item.classList.remove('active') })
        if (e.target.classList.contains('delivery__tab-title')) {
            e.target.classList.add('active')
            e.target.nextElementSibling.classList.toggle('active')
        }
    }

    //Form Service Inputs
    let formservice = document.querySelector('.form-service')
    if (formservice) {
        unlockBtnForm();
    }

    function unlockBtnForm() {
        let phone = document.querySelector('.form__service-input.tel')
        let pasport = document.querySelector('.form__service-input.pasport')
        let btn = document.querySelector('.form__service-next')
        let block1 = document.querySelector('.form__service-block1')
        let block2 = document.querySelector('.form__service-block2')
        let flag1 = 0;
        let flag2 = 0;
        phone.addEventListener('input', () => {
            flag1 = 1;
            phone.classList.remove('required')
            checkInputs();
        })
        pasport.addEventListener('input', () => {
            flag2 = 1;
            pasport.classList.remove('required')
            checkInputs();
        })

        function checkInputs() {
            if (flag1 === 1 && flag2 === 1) {
                btn.classList.add('active')
            }
        }

        btn.addEventListener('click', () => {
            if (flag1 === 0) {
                phone.classList.add('required')
            } else {
                phone.classList.remove('required')
            }
            if (flag2 === 0) {
                pasport.classList.add('required')
            } else {
                pasport.classList.remove('required')
            }
            if (flag1 === 1 && flag2 === 1) {
                block1.classList.add('remove')
                block2.classList.add('active')
            }
        })

    }

    //Добавление фото на странице Сервис
    let photoform = document.querySelector('.form__service-inputs.photo')

    if (photoform) {
        photoform.addEventListener('change', attachPhoto)
    }

    function attachPhoto(e) {
        const target = e.target
        if (target.classList.contains('js-photo')) {
            // console.log(target)
            // console.log(target.files[0].name)
            // console.log(target.nextElementSibling)
            let reader = new FileReader();
            reader.onloadend = function() {
                target.nextElementSibling.src = reader.result;
            }
            let file = target.files[0]
            if (file) {
                target.nextElementSibling.classList.remove('remove')
                reader.readAsDataURL(target.files[0]);
            } else {
                target.nextElementSibling.classList.add('remove')
                target.nextElementSibling.src = "";
            }
        }
    }

    //Смена языка
    let lang = document.querySelector('.header__lang-link')
    if (lang) {
        lang.addEventListener('click', showLang)
    }


    function showLang() {
        let langblock = document.querySelector('.lang__choice')
        langblock.classList.toggle('active')
    }

    //Корзина магазина
    function requestCart() {

        const cartDOMElement = document.querySelector('.js-cart')
        const cartItemsCounterDOMElement = document.querySelectorAll('.js-cart-total-count-items')
        const cartTotalPriceDOMElement = document.querySelectorAll('.js-cart-total-summa')
            // const cartTotalSummaDOMElement = document.querySelector('.js-cart-total-price')
        const totalSumma = document.querySelector('.js-all-summa')

        const cart = JSON.parse(localStorage.getItem('cart')) || {};


        const clearBusket = () => {
            const table = document.querySelector('.busket')
                // const total = document.querySelector('.count')
                // const form = document.querySelector('.feedback__container')
            const empty = document.querySelector('.empty')
            if (Object.keys(cart).length == 0) {
                table.classList.add('disabled');
                // total.classList.add('disabled');
                // form.classList.add('disabled');
                empty.classList.add('active');
            }
        }
        const busketpage = document.querySelector('.busket')
        if (busketpage) {
            clearBusket();
        }


        //отображаем добавленный товар в корзине
        const renderCartItem = ({ id, articul, name, totalprice, size, price, src, quantity, href }) => {
            const cartItemDOMElement = document.createElement('div');
            if (articul === null) {
                articul = '';
            }
            const cartItemTemplate = `
            <div class="busket__card-left">
                <a href="${href}" class="busket__card-img"><img src="${src}" alt=""></a>
            </div>
            <div class="busket__card-right">
                <div class="busket__card-row">
                    <div class="busket__card-title">
                        <a href="${href}" class="busket__title-link">${name}</a>
                    </div>
                    <a href="javascript:;" class="busket__card-remove remove" title="Удалить товар">
                        <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <circle cx="15" cy="15" r="14.5" stroke="#031D38"/>
                            <path d="M18.5355 19.714L15 16.1785L11.4645 19.714L10.286 18.5355L13.8215 15L10.286 11.4645L11.4645 10.286L15 13.8215L18.5355 10.286L19.714 11.4645L16.1785 15L19.714 18.5355L18.5355 19.714Z" fill="#031D38"/>
                        </svg>
                    </a>
                </div>
                <div class="busket__card-row">
                    <span class="busket__card-price">${price} тг</span>
                    <span class="js-cart-item-totalprice">${totalprice} тг</span>
                    <span class="busket__card-size">${size}</span>
                    <div class="count-items">
                        <button class="js-minus" title="Убавить"><img src="img/minus.svg" alt="" ></button>
                        <p class="js-cart-item-quantity">${quantity}</p>
                        <button class="js-plus" title="Прибавить"><img src="img/plusbusket.svg" alt="" ></button>
                    </div>
                </div>
                <div class="busket__card-row">
                    <div class="busket__card-articul"></div>
                </div>
                </div>
        `;

            cartItemDOMElement.innerHTML = cartItemTemplate;
            cartItemDOMElement.setAttribute('data-id', id);
            cartItemDOMElement.classList.add('busket__card', 'shadow');
            cartDOMElement.appendChild(cartItemDOMElement);
            totalBusket();
            updateCart();
        }


        //сохраняем товар в LocalStorage
        const saveCart = () => {
            localStorage.setItem('cart', JSON.stringify(cart));
        }


        // подсчитываение колличества и суммы товара

        const totalBusket = () => {
            let totalcount = 0;
            const ids = Object.keys(cart);
            for (let i = 0; i < ids.length; i++) {
                const id = ids[i]
                totalcount += +(cart[id].quantity);
            }

            let totalAll = 0;
            const price = document.querySelectorAll('.js-cart-item-totalprice');
            for (let i = 0; i < price.length; i++) {
                totalAll = totalAll + parseInt(price[i].innerHTML);
            }

            cartTotalPriceDOMElement.textContent = totalAll + ' тг';
            // cartTotalSummaDOMElement.textContent = total + ' тг';
            cartItemsCounterDOMElement.forEach(elem => {
                elem.textContent = totalcount;
            })
            cartTotalPriceDOMElement.forEach(elem => {
                elem.textContent = totalAll + ' тг'
            })
            $('.js-cart-total-summa').attr('data-summ', totalAll);

            if (ids.length == 0) {
                cartTotalPriceDOMElement.forEach(elem => {
                        elem.textContent = totalAll + ' тг'
                    })
                    // cartTotalSummaDOMElement.textContent = 0;
                $('.js-cart-total-summa').attr('data-summ', 0);
            }
            updateCart();
            checkSelectDeliv();
        }


        function totalBusketHeader() {
            let busket = document.querySelector('.count__busket')
            let totalcount = 0;
            const ids = Object.keys(cart);
            for (let i = 0; i < ids.length; i++) {
                const id = ids[i]
                totalcount += +(cart[id].quantity);
            }
            console.log(totalcount)
            busket.innerHTML = totalcount;
            if (totalcount > 1) {
                busket.classList.add('active')
            } else {
                busket.classList.remove('active')
            }
        }
        totalBusketHeader();


        //Проверка выбранного селекта для доставки товара
        let select = document.getElementById('deliv')
        if (select) {
            select.addEventListener('input', checkSelectDeliv)
        }

        function checkSelectDeliv() {
            let summa = document.querySelector('.js-all-summa')
            let deliv = document.querySelector('.deliv')
            let select = document.getElementById('deliv')
            let value = select.value
            let totalAll = 0;
            let price = document.querySelectorAll('.js-cart-item-totalprice');
            for (let i = 0; i < price.length; i++) {
                totalAll = totalAll + parseInt(price[i].innerHTML);
            }
            if (value === 'cash') {
                summa.innerHTML = totalAll + 2000 + ' тг';
                deliv.classList.add('active')
            } else {
                summa.innerHTML = totalAll + ' тг'
                deliv.classList.remove('active')
            }
            // console.log(value)
        }




        //Обновляем данные в LocalStorage
        const updateCart = () => {
            // console.log(cart);
            saveCart();
            // updateCartTotalPrice();
        }


        //Удаление из корзины
        const deleteCartItem = (id) => {
            const cartItemDOMElement = cartDOMElement.querySelector(`[data-id="${id}"]`);
            // const tableElement = tableDOMElement.querySelector(`[data-product-articul="${articul}"]`);
            cartDOMElement.removeChild(cartItemDOMElement);
            // tableDOMElement.removeChild(tableElement);
            delete cart[id];
            updateCart();
            totalBusket();
        }

        //Добавление в корзину
        const addCartItem = (data) => {
            const { id } = data;
            cart[id] = data;
            updateCart();
            if (cartDOMElement) {
                renderCartItem(data);
            }
        }

        //Обновление количества товара и итоговой суммы
        const updateQuantityTotalPrice = (id, quantity) => {
            const cartItemDOMElement = cartDOMElement.querySelector(`[data-id="${id}"`);
            const cartItemQuantityDOMElement = cartItemDOMElement.querySelector('.js-cart-item-quantity');
            const cartTotalPriceDOMElement = document.querySelector('.js-cart-total-price')
            const cartItemPriceDOMElement = cartItemDOMElement.querySelector('.js-cart-item-totalprice');

            const ids = Object.keys(cart);
            cart[id].quantity = quantity;
            cartItemQuantityDOMElement.textContent = quantity;
            cart[id].totalprice = cart[id].quantity * cart[id].price;
            cartItemPriceDOMElement.textContent = cart[id].totalprice + ' тг';
            console.log(cart[id].totalprice)

            // tableQuantity.textContent = quantity;
            cart[id].totalprice = cart[id].quantity * cart[id].price;
            // tableTotal.textContent = cart[articul].totalprice;

            updateCart();
        }

        //Увеличение количества товара и итоговой суммы
        const increaseQuantity = (id) => {
            const newQuantity = cart[id].quantity + 1;
            updateQuantityTotalPrice(id, newQuantity);
        }

        //Уменьшение количества товара и итоговой суммы
        const decreaseQuantity = (id) => {
            const newQuantity = cart[id].quantity - 1;
            if (newQuantity >= 1) {
                updateQuantityTotalPrice(id, newQuantity);
            }
        }




        //Получаем данные для объекта
        const getProductData = (productDOMElement) => {
            const button = document.querySelector('.buy__product')
            const id = productDOMElement.getAttribute('data-id')
            const name = productDOMElement.getAttribute('data-product-name');
            // const desc = productDOMElement.getAttribute('data-product-desc');
            const articul = productDOMElement.getAttribute('data-product-articul');
            const size = productDOMElement.getAttribute('data-product-size');
            // const color = productDOMElement.getAttribute('data-product-color');
            const price = productDOMElement.getAttribute('data-product-price');
            const src = productDOMElement.getAttribute('data-product-img');
            let href = productDOMElement.getAttribute('data-product-href');
            if (button) {
                href = window.location.href;
            }
            const quantity = 1;
            const totalprice = quantity * +(price);
            return { id, name, articul, size, price, totalprice, src, quantity, href };
        }

        const renderCart = () => {
            const ids = Object.keys(cart);
            // console.log(ids);
            ids.forEach((id) => renderCartItem(cart[id]));
        };


        const disabledButton = () => {
            // console.log(cart)
            const test = document.querySelectorAll('.js-product')
            const button = document.querySelector('.buy__product')
            for (let i = 0; i < test.length; i++) {
                const attr = (test[i].getAttribute('data-id'))
                const parent = test[i].querySelector('.js-buy')
                    // console.log(parent)
                    // console.log(cart.hasOwnProperty(attr))
                if (cart.hasOwnProperty(attr)) {
                    parent.classList.add('disabled')
                    parent.innerHTML = 'Товар в корзине'
                    parent.disabled = true;
                    if (button) {
                        button.innerHTML = 'Товар в корзине'
                    }
                }

            }

        }
        disabledButton();


        //Вызов popup
        // function showPopup() {
        //     let popup = document.querySelector('.popup-busket')
        //     let body = document.querySelector('body')
        //     let btn = document.querySelector('.popup-busket__link.js')
        //     popup.classList.remove('hidden')
        //     body.style.overflow = 'hidden'
        //     setTimeout(() => { popup.classList.add('active') }, 50)
        //     btn.addEventListener('click', closePopup)
        //     popup, addEventListener('click', (e) => {
        //         if (e.target == popup) {
        //             closePopup();
        //         }
        //     })

        //     function closePopup() {
        //         popup.classList.remove('active')
        //         body.style.overflow = 'unset'
        //         setTimeout(() => { popup.classList.add('hidden') }, 300)
        //     }
        // }


        //Инициализация
        const cartInit = () => {
            if (cartDOMElement) {
                renderCart();
            }

            document.querySelector('body').addEventListener('click', (e) => {
                const target = e.target;
                //В корзину
                if (target.classList.contains('js-buy')) {
                    e.preventDefault();
                    const productDOMElement = target.closest('.js-product');
                    const data = getProductData(productDOMElement);
                    addCartItem(data);
                    disabledButton();
                    totalBusketHeader();
                    // showPopup();
                }

                //Удалить из корзины
                if (target.classList.contains('remove')) {
                    e.preventDefault();
                    const cartItemDOMElement = target.closest('.busket__card');
                    const productId = cartItemDOMElement.getAttribute('data-id');
                    deleteCartItem(productId);
                    clearBusket();
                    requestTable();
                    totalBusketHeader();
                }

                //Увеличить
                if (target.classList.contains('js-plus')) {
                    e.preventDefault();
                    const cartItemDOMElement = target.closest('.busket__card');
                    const productId = cartItemDOMElement.getAttribute('data-id');
                    increaseQuantity(productId);
                    totalBusket();
                    // requestTable();
                    totalBusketHeader();
                }

                //Уменьшить
                if (target.classList.contains('js-minus')) {
                    e.preventDefault();
                    const cartItemDOMElement = target.closest('.busket__card');
                    const productId = cartItemDOMElement.getAttribute('data-id');
                    decreaseQuantity(productId);
                    totalBusket();
                    // requestTable();
                    totalBusketHeader();
                }


            });
        }

        cartInit();
    }

    requestCart();

    function setSize() {
        const size = document.querySelectorAll('.card__size-elem')
        const jsproduct = document.querySelector('.js-product')
        for (let i = 0; i < size.length; i++) {
            size[i].addEventListener('click', () => {
                jsproduct.setAttribute('data-product-size', size[i].getAttribute('data-product-size'));
                for (let j = 0; j < size.length; j++) {
                    if (jsproduct.getAttribute('data-product-size') == size[j].getAttribute('data-product-size')) {
                        size[j].classList.add('active');
                    } else {
                        size[j].classList.remove('active');
                    }
                }
            })
        }

    }
    setSize();

    function setSizeClass() {
        const size = document.querySelectorAll('.card__size-elem')
        const jsproduct = document.querySelector('.js-product')
        size.forEach((elem, i) => {

            console.log()
            if (elem.getAttribute('data-product-size') === jsproduct.getAttribute('data-product-size')) {
                elem.classList.add('active')
            }

        })
    }
    setSizeClass()
})