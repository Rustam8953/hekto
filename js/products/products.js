const productsArray = [
    {
        id: 11,
        img: "image\ 9.png",
        title: "Vel elit euismod",
        price: "42.00",
        sale: "26.00",
        type: "shop",
    },
    {
        id: 12,
        img: "image\ 1165.png",
        title: "Ultricies condimentum imperdiet",
        price: "42.00",
        sale: "26.00",
        type: "shop",
    },
    {
        id: 13,
        img: "image\ 1173.png",
        title: "Vitae suspendisse sed",
        price: "42.00",
        sale: "26.00",
        type: "shop",
    },
    {
        id: 14,
        img: "10011\ 1.png",
        title: "Sed at fermentum",
        price: "42.00",
        sale: "26.00",
        type: "shop",
    },
    {
        id: 18,
        img: "unnamed\ 1.png",
        title: "Fusce pellentesque at",
        price: "42.00",
        sale: "26.00",
        type: "shop",
    },
    {
        id: 15,
        img: "1562173100-movado-connect-1562173094\ 2.png",
        title: "Vestibulum magna laoreet",
        price: "42.00",
        sale: "26.00",
        type: "shop",
    },
    {
        id: 16,
        img: "purepng\ 1.png",
        title: "Sollicitudin amet orci",
        price: "42.00",
        sale: "26.00",
        type: "shop",
    },
    {
        id: 17,
        img: "image\ 1164.png",
        title: "Ultrices mauris sit",
        price: "42.00",
        sale: "26.00",
        type: "shop",
    },
    {
        id: 19,
        img: "res_7e24bf6d78bbb2518489d0af847413c9_450x450_fcp0\ 2.png",
        title: "Pellentesque condimentum ac",
        price: "42.00",
        sale: "26.00",
        type: "shop",
    },
    {
        id: 20,
        img: "cam\ 2.png",
        title: "Cras scelerisque velit",
        price: "42.00",
        sale: "26.00",
        type: "shop",
    },
    {
        id: 21,
        img: "czNmcy1wcml2YXRlL3Jhd3BpeGVsX2ltYWdlcy93ZWJzaXRlX2NvbnRlbnQvcGYtczczLXBhaS0xNTgta2FuYXRlLTAxLnBuZw\ 1.png",
        title: "Lectus vulputate faucibus",
        price: "42.00",
        sale: "26.00",
        type: "shop",
    },
    {
        id: 22,
        img: "10011\ 1.png",
        title: "Purus risus, ut",
        price: "42.00",
        sale: "26.00",
        type: "shop",
    },
]

const productsShopWindow = document.querySelector('.products-shop-window');

const productsArrayType = productsArray.filter((item) => {
    if(item.type === "shop") {
        const productsArrayHTML = `
        <div class="container__shop-items-item product-id" data-id=${item.id}>
            <div class="container__shop-items-item-img">
                <div class="container__shop-items-item-img-pic product-img" src="${item.img}" style="background-image: url('./img/product-img/shop/${item.img}')"></div>
            </div>
            <div class="container__shop-items-item-title product-title">${item.title}</div>
            <div class="container__shop-items-item-nav">
                <span class="container__shop-items-item-nav-ball"></span>
                <span class="container__shop-items-item-nav-ball"></span>
                <span class="container__shop-items-item-nav-ball"></span>
            </div>
            <div class="container__shop-items-item-price" data-cart>
                <div class="container__shop-items-item-price-sale product-price" data-cart>$${item.sale}</div>
                <div class="container__shop-items-item-price-real" data-cart>$${item.price}</div>
            </div>
        </div>`
        productsShopWindow.insertAdjacentHTML('beforeend', productsArrayHTML);
    }
})