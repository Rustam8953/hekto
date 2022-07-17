const headerWindow = document.querySelector('.header-window');

const headerHTML = `
<div class="header-item">
    <div class="header__bar">
        <div class="box box-flex">
            <div class="header__bar-contacts">
                <a href="mailto:mhhasanul@gmail.com" class="header__bar-contacts-mail">mhhasanul@gmail.com</a>
                <a href="tel:(12345)67890" class="header__bar-contacts-tel">(12345)67890</a>
            </div>
            <div class="header__bar-menu"></div>
            <div class="header__bar-info">
                <div class="header__bar-info-language header__bar-info header__bar-info-down">English</div>
                <div class="header__bar-info-nominal header__bar-info header__bar-info-down">USD</div>
                <a href="./account.html" class="header__bar-info-login header__bar-info">Log-in</a>
                <div class="header__bar-info-wishlist header__bar-info">Wishlist  </div>
                <div class="header__bar-info-cart">
                    <div class="header__bar-info-cart-icon"></div>
                    <div class="cart-length display-none"></div>
                    <div class="cart-wrapper display-none">
                        <div class="cart-block-text">Корзина пуста</div>
                        <div class="cart-block"></div>
                        <div class="cart-fun">
                            <div class="cart-fun-total total-price">0</div>
                            <a href=""><button class="cart-btn btn">Submit</div></a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="header__nav">
        <div class="box box-flex">
            <div class="header__nav-info">
                <div class="header__nav-info-logo"></div>
                <div class="header__nav-info-menu-close"></div>
                <div class="header__nav-info-navigate">
                    <a href="./index.html" class="header__nav-info-navigate-item">Home</a>
                    <a href="./error.html" class="header__nav-info-navigate-item">Pages</a>
                    <span class="header__nav-info-navigate-item">Products</span>
                    <a href="./blog.html" class="header__nav-info-navigate-item">Blog </a>
                    <a href="./shop.html" class="header__nav-info-navigate-item">Shop</a>
                    <a href="./contact.html" class="header__nav-info-navigate-item">Contact</a>
                </div>
            </div>
            <div class="header__nav-searcher">
                <form action=""><input type="text" class="header__nav-searcher-search"></form>
                
                <div class="header__nav-searcher-icon"></div>
            </div>
        </div>
    </div>
</div>`;

headerWindow.insertAdjacentHTML('beforeend', headerHTML);

const menuIcon = document.querySelector('.header__nav-info-menu-close');

const menuBlock = document.querySelector('.header__nav');

const menuUnactive = document.querySelector('.header__bar-menu');

menuUnactive.addEventListener('click', () => {
    menuBlock.classList.toggle('menu-active');
})

menuIcon.addEventListener('click', () => {
    menuBlock.classList.remove('menu-active');
})

