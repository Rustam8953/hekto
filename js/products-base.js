const featuredWindowSectionA = document.querySelector('.featured-window-section-a');

const featuredWindowSectionB = document.querySelector('.featured-window-section-b');

const featuredWindowSectionC = document.querySelector('.featured-window-section-c');

const featuredWindowSectionD = document.querySelector('.featured-window-section-d');

const categoriesWindowSectionE = document.querySelector('.top-categories-window-section-e');

const categoriesWindowSectionF = document.querySelector('.top-categories-window-section-f');

const categoriesWindowSectionG = document.querySelector('.top-categories-window-section-g');


const trendingsWindow = document.querySelector('.trending-window');

const latestwindow = document.querySelector('.latest-window');

const offerWindow = document.querySelector('.offer-window')


const featuredItemsSectionA = [
    {
        id: 1,
        title: "Cantilever chair",
        price: "42.00",
        img: "image\ 1168.png"
    },
    {
        id: 2,
        title: "Cantilever chair",
        price: "42.00",
        img: "image\ 1.png"
    },
    {
        id: 3,
        title: "Cantilever chair",
        price: "42.00",
        img: "image\ 1169.png"
    },
    {
        id: 4,
        title: "Cantilever chair",
        price: "42.00",
        img: "image\ 3.png"
    }
]

const featuredItemsSectionB = [
    {
        id: 5,
        title: "Cantilever chair",
        price: "42.00",
        img: "image\ 1168.png"
    },
    {
        id: 6,
        title: "Cantilever chair",
        price: "42.00",
        img: "image\ 1.png"
    },
    {
        id: 7,
        title: "Cantilever chair",
        price: "42.00",
        img: "image\ 1169.png"
    },
    {
        id: 8,
        title: "Cantilever chair",
        price: "42.00",
        img: "image\ 3.png"
    }
]

const featuredItemsSectionC = [
    {
        id: 9,
        title: "Cantilever chair",
        price: "42.00",
        img: "image\ 1168.png"
    },
    {
        id: 10,
        title: "Cantilever chair",
        price: "42.00",
        img: "image\ 1.png"
    },
    {
        id: 11,
        title: "Cantilever chair",
        price: "42.00",
        img: "image\ 1169.png"
    },
    {
        id: 12,
        title: "Cantilever chair",
        price: "42.00",
        img: "image\ 3.png"
    }
]

const trendingsItems = [
    {
        id: 13,
        img: 'image\ 1171.png',
        price: '42.00',
        sale: '22.00',
        title: 'Cantilever chair',
    },
    {
        id: 14,
        img: 'image\ 1170.png',
        price: '42.00',
        sale: '22.00',
        title: 'Cantilever chair',
    },
    {
        id: 15,
        img: 'image\ 31.png',
        price: '42.00',
        sale: '22.00',
        title: 'Cantilever chair',
    },
    {
        id: 16,
        img: 'image\ 32.png',
        price: '42.00',
        sale: '22.00',
        title: 'Cantilever chair',
    }
]

const categoriesSectionEItem = [
    {
        id: 17,
        title: "Mini LCW Chair",
        img: "image\ 1168.png",
        price: "56.00"
    },
    {
        id: 18,
        title: "Mini LCW Chair",
        img: "image\ 1168.png",
        price: "56.00"
    },
    {
        id: 19,
        title: "Mini LCW Chair",
        img: "image\ 1168.png",
        price: "56.00"
    },
    {
        id: 20,
        title: "Mini LCW Chair",
        img: "image\ 1168.png",
        price: "56.00"
    },
]

const categoriesSectionFItem = [
    {
        id: 21,
        title: "Mini LCW Chair",
        img: "image\ 1168.png",
        price: "56.00"
    },
    {
        id: 22,
        title: "Mini LCW Chair",
        img: "image\ 1168.png",
        price: "56.00"
    },
    {
        id: 23,
        title: "Mini LCW Chair",
        img: "image\ 1168.png",
        price: "56.00"
    },
    {
        id: 24,
        title: "Mini LCW Chair",
        img: "image\ 1168.png",
        price: "56.00"
    },
]

const categoriesSectionGItem = [
    {
        id: 25,
        title: "Mini LCW Chair",
        img: "image\ 1168.png",
        price: "56.00"
    },
    {
        id: 26,
        title: "Mini LCW Chair",
        img: "image\ 1168.png",
        price: "56.00"
    },
    {
        id: 27,
        title: "Mini LCW Chair",
        img: "image\ 1168.png",
        price: "56.00"
    },
    {
        id: 28,
        title: "Mini LCW Chair",
        img: "image\ 1168.png",
        price: "56.00"
    },
]


const latestItems = [
    {
        id: 29,
        title: "Comfort Handy Craft",
        price: "65.00",
        sale: "42.00",
        img: "image\ 1166.png",
    },
    {
        id: 30,
        title: "Comfort Handy Craft",
        price: "65.00",
        sale: "42.00",
        img: "image\ 1168.png",
    },
    {
        id: 31,
        title: "Comfort Handy Craft",
        price: "65.00",
        sale: "42.00",
        img: "image\ 32.png",
    },
    {
        id: 32,
        title: "Comfort Handy Craft",
        price: "65.00",
        sale: "42.00",
        img: "image\ 23.png",
    },
    {
        id: 33,
        title: "Comfort Handy Craft",
        price: "65.00",
        sale: "42.00",
        img: "image\ 32.png",
    },
    {
        id: 34,
        title: "Comfort Handy Craft",
        price: "65.00",
        sale: "42.00",
        img: "image\ 15.png",
    },

]

const offerItems = [
    {
        id: 35,
        img: "free-delivery\ 1.png"
    },
    {
        id: 36,
        img: "cashback\ 1.png"
    },
    {
        id: 37,
        img: "premium-quality\ 1.png"
    },
    {
        id: 38,
        img: "24-hours-support\ 1.png"
    }
]

featuredItemsSectionA.forEach((item) => {
    const featuredHTML = `
    <div class="container__products-featured-items-item product-id" data-id="${item.id}">
        <div class="container__products-featured-items-item-vis">
            <div class="container__products-featured-items-item-vis-img product-img" src="${item.img}" style="background-image: url('./img/product-img/${item.img}');"></div>
        </div>
        <div class="container__products-featured-items-item-info">
            <div class="container__products-featured-items-item-info-title product-title">Cantilever chair</div>
            <div class="container__products-featured-items-item-info-line"><div class="line"></div><div class="line"></div><div class="line"></div></div>
            <div class="container__products-featured-items-item-info-code">Code - Y523201</div>
            <div class="container__products-featured-items-item-info-price product-price" data-cart>${item.price} $</div>
        </div>
    </div>`
    featuredWindowSectionA.insertAdjacentHTML('beforeend', featuredHTML);
})

featuredItemsSectionB.forEach((item) => {
    const featuredHTML = `
    <div class="container__products-featured-items-item product-id" data-id="${item.id}">
        <div class="container__products-featured-items-item-vis">
            <div class="container__products-featured-items-item-vis-img product-img" src="${item.img}" style="background-image: url('./img/product-img/${item.img}');"></div>
        </div>
        <div class="container__products-featured-items-item-info">
            <div class="container__products-featured-items-item-info-title product-title">Cantilever chair</div>
            <div class="container__products-featured-items-item-info-line"><div class="line"></div><div class="line"></div><div class="line"></div></div>
            <div class="container__products-featured-items-item-info-code">Code - Y523201</div>
            <div class="container__products-featured-items-item-info-price product-price" data-cart>$${item.price}</div>
        </div>
    </div>`
    featuredWindowSectionB.insertAdjacentHTML('beforeend', featuredHTML);
})

featuredItemsSectionC.forEach((item) => {
    const featuredSectionCHTML = `
    <div class="container__products-featured-items-item product-id" data-id="${item.id}">
        <div class="container__products-featured-items-item-vis">
            <div class="container__products-featured-items-item-vis-img product-img" src="${item.img}" style="background-image: url('./img/product-img/${item.img}');"></div>
        </div>
        <div class="container__products-featured-items-item-info">
            <div class="container__products-featured-items-item-info-title product-title">Cantilever chair</div>
            <div class="container__products-featured-items-item-info-line"><div class="line"></div><div class="line"></div><div class="line"></div></div>
            <div class="container__products-featured-items-item-info-code">Code - Y523201</div>
            <div class="container__products-featured-items-item-info-price product-price" data-cart>$${item.price}</div>
        </div>
    </div>`
    featuredWindowSectionC.insertAdjacentHTML('beforeend', featuredSectionCHTML)
})

latestItems.forEach((item) => {
    const latestHTML =`
    <div class="container__products-latest-items-item product-id" data-id="${item.id}">
        <div class="container__products-latest-items-item-vis">
            <div class="container__products-latest-items-item-vis-img product-img" src="${item.img}" style="background-image: url('./img/product-img/${item.img}');"></div>
        </div>
        <div class="container__products-latest-items-item-info">
            <div class="container__products-latest-items-item-info-title product-title">Comfort Handy Craft</div>
            <div class="container__products-latest-items-item-info-price" data-cart>
                <div class="container__products-latest-items-item-info-price-sale product-price" data-cart>$${item.sale}</div>
                <div class="container__products-latest-items-item-info-price-full" data-cart>$${item.price}</div>
            </div>
        </div>
    </div>`
    latestwindow.insertAdjacentHTML('beforeend', latestHTML);
})

offerItems.forEach((item) => {
    const offerHTML = `
    <div class="container__products-offer-items-item">
        <div class="container__products-offer-items-item-img" style="background-image: url('./img/icon/container__offer/${item.img}');"></div>
        <div class="container__products-offer-items-item-text">24/7 Support</div>
        <div class="container__products-offer-items-item-info">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa purus gravida.</div>
    </div>`
    offerWindow.insertAdjacentHTML('beforeend', offerHTML);
})

trendingsItems.forEach((item) => {
    const trendingsHTML =`
    <div class="container__products-trendings-items-item product-id" data-id="${item.id}">
        <div class="container__products-trendings-items-item-img product-img" src="${item.img}" style="background-image: url('./img/product-img/trending/${item.img}');"></div>
        <div class="container__products-trendings-items-item-info">
            <div class="container__products-trendings-items-item-info-title product-title">Cantilever chair</div>
            <div class="container__products-trendings-items-item-info-price" data-cart>
                <div class="container__products-trendings-items-item-info-price-sale product-price" data-cart>$${item.sale}</div>
                <div class="container__products-trendings-items-item-info-price-full" data-cart>$${item.price}</div>
            </div>
        </div>
    </div>`
    trendingsWindow.insertAdjacentHTML('beforeend', trendingsHTML);
})

categoriesSectionEItem.forEach((item) => {
    const categoriesSectionEHTML = `
    <div class="container__products-categ-sections-items-item product-id" data-id=${item.id}>
        <div class="container__products-categ-sections-items-item-img">
            <div class="container__products-categ-sections-items-item-img-backg" style="display: none;"></div>
            <div class="container__products-categ-sections-items-item-img-ball"></div>
            <div class="container__products-categ-sections-items-item-img-pic product-img" src="${item.img}" style="background-image: url('./img/product-img/${item.img}')"></div>
        </div>
        <div class="container__products-categ-sections-items-item-info">
            <div class="container__products-categ-sections-items-item-info-title product-title">${item.title}</div>
            <div class="container__products-categ-sections-items-item-info-price product-price" data-cart>$${item.price}</div>
        </div>
    </div>`;
    categoriesWindowSectionE.insertAdjacentHTML('beforeend', categoriesSectionEHTML);
})

categoriesSectionFItem.forEach((item) => {
    const categoriesSectionFHTML = `
    <div class="container__products-categ-sections-items-item product-id" data-id=${item.id}>
        <div class="container__products-categ-sections-items-item-img">
            <div class="container__products-categ-sections-items-item-img-backg" style="display: none;"></div>
            <div class="container__products-categ-sections-items-item-img-ball"></div>
            <div class="container__products-categ-sections-items-item-img-pic product-img" src="${item.img}" style="background-image: url('./img/product-img/${item.img}')"></div>
        </div>
        <div class="container__products-categ-sections-items-item-info">
            <div class="container__products-categ-sections-items-item-info-title product-title">${item.title}</div>
            <div class="container__products-categ-sections-items-item-info-price product-price" data-cart>$${item.price}</div>
        </div>
    </div>`;
    categoriesWindowSectionF.insertAdjacentHTML('beforeend', categoriesSectionFHTML);
})

categoriesSectionGItem.forEach((item) => {
    const categoriesSectionGHTML = `
    <div class="container__products-categ-sections-items-item product-id" data-id=${item.id}>
        <div class="container__products-categ-sections-items-item-img">
            <div class="container__products-categ-sections-items-item-img-backg" style="display: none;"></div>
            <div class="container__products-categ-sections-items-item-img-ball"></div>
            <div class="container__products-categ-sections-items-item-img-pic product-img" src="item.img" style="background-image: url('./img/product-img/${item.img}')"></div>
        </div>
        <div class="container__products-categ-sections-items-item-info">
            <div class="container__products-categ-sections-items-item-info-title product-title">${item.title}</div>
            <div class="container__products-categ-sections-items-item-info-price product-price" data-cart>$${item.price}</div>
        </div>
    </div>`;
    categoriesWindowSectionG.insertAdjacentHTML('beforeend', categoriesSectionGHTML);
})