const cartIcon = document.querySelector('.header__bar-info-cart-icon');
const cartWrapper = document.querySelector('.cart-wrapper');
const cartLength = document.querySelector('.cart-length');
const cartBlock = document.querySelector('.cart-block');
const cartBlockText = document.querySelector('.cart-block-text');

cartIcon.addEventListener('click', () => {
    cartWrapper.classList.toggle('display-none');
})

// let cartBlockItems = cartBlockItem.length;

window.addEventListener('click', (e) => {
    if(e.target.hasAttribute('data-cart')) {
        console.log('qwerty')
        const itemProduct = e.target.closest('.product-id');

        const productsInfo = {
            id: itemProduct.dataset.id,
            title: itemProduct.querySelector('.product-title').innerText,
            price: itemProduct.querySelector('.product-price').innerText,
            img: itemProduct.querySelector('.product-img').getAttribute('src'),
        }

        const itemInCart = cartBlock.querySelector(`[data-id="${productsInfo.id}"]`);

        if(itemInCart) {
            const counterItem = itemInCart.querySelector('[data-counter]');
            counterItem.innerText = parseInt(counterItem.innerText) + parseInt(productsInfo.counter);
        } else {
            const cartItemHTML = `
            <div class="cart-block-item" data-id="${productsInfo.id}">
                <div class="cart-block-border">
                    <div class="cart-block-item-left">
                        <div class="cart-block-item-img" style="background-image: url('./../img/product-img/${productsInfo.img}')"></div>
                        <div class="cart-block-item-title">${productsInfo.title}</div>
                    </div>
                    
                    <div class="cart-block-item-right">
                        <div class="cart-block-item-current">
                            <div class="cart-block-item-current-block" data-action="minus">-</div>
                            <div class="cart-block-item-current-num" data-counter>1</div>
                            <div class="cart-block-item-current-block" data-action="plus">+</div>
                        </div>
                        <div class="cart-block-item-price">${productsInfo.price}</div>
                    </div>
                </div>
            </div>`
            cartBlock.insertAdjacentHTML('beforeend', cartItemHTML);
        }
    }
    const cartBlockItem = document.querySelectorAll('.cart-block-item');

    if (cartBlockItem.length > 0) {
        cartLength.classList.remove('display-none');
        cartBlockText.classList.add('display-none');
    }else{
        cartLength.classList.add('display-none');
        cartBlockText.classList.remove('display-none');
    }
    console.log(cartBlockItem);

    cartLength.innerText = cartBlockItem.length;

    let totalPriceCart = 0;

    cartBlockItem.forEach((item) => {
        const cartPrice = item.querySelector('.cart-block-item-price');

        totalPriceCart = totalPriceCart + parseInt(cartPrice.innerText);
        console.log(totalPriceCart) 
    })
    
    const totalPrice = document.querySelector('.total-price');

    totalPrice.innerText = totalPriceCart + " $";
})