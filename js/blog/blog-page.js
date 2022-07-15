const blogMenuWindow = document.querySelector('.blog-menu-window');

const blogMenuWindowHTML = `
    <div class="container__blog-menu-list">
        <div class="container__blog-menu-list-item">
            <div class="container__blog-menu-list-item-title">Search</div>
            <form>
                <div class="container__blog-menu-list-item-search">
                    <input type="search container__blog-menu-list-item-search-input">
                    <button class="container__blog-menu-list-item-search-button"></button>
                </div>
            </form>
        </div>
        <div class="container__blog-menu-list-item">
            <div class="container__blog-menu-list-item-title">Categories</div>
            <div class="container__blog-menu-list-item-block">
                <div class="container__blog-menu-list-item-block-page container__blog-menu-list-item-block-page__active" data-id="1">Hobbies (14)</div>
                <div class="container__blog-menu-list-item-block-page" data-id="2">Women (21)</div>
                <div class="container__blog-menu-list-item-block-page" data-id="3">Women (21)</div>
                <div class="container__blog-menu-list-item-block-page" data-id="4">Women (21)</div>
                <div class="container__blog-menu-list-item-block-page" data-id="5">Women (21)</div>
                <div class="container__blog-menu-list-item-block-page" data-id="6">Women (21)</div>
            </div>
        </div>
        <div class="container__blog-menu-list-item">
            <div class="container__blog-menu-list-item-title">Recent Post</div>
            <div class="container__blog-menu-list-item-post recent-window">
                
            </div>
        </div>
        <div class="container__blog-menu-list-item">
            <div class="container__blog-menu-list-item-title">Sale Product</div>
            <div class="container__blog-menu-list-item-post sale-window">
                
            </div>
        </div>
        <div class="container__blog-menu-list-item">
            <div class="container__blog-menu-list-item-title">Offer product</div>
            <div class="container__blog-menu-list-item-offer offer-window">
                
            </div>
        </div>
        <div class="container__blog-menu-list-item">
            <div class="container__blog-menu-list-item-title">Follow</div>
            <div class="container__blog-menu-list-item-follow">
                <div class="container__blog-menu-list-item-follow-ball container__blog-menu-list-item-follow-blue"></div>
                <div class="container__blog-menu-list-item-follow-ball container__blog-menu-list-item-follow-pink"></div>
                <div class="container__blog-menu-list-item-follow-ball container__blog-menu-list-item-follow-green"></div>
            </div>
        </div>
        <div class="container__blog-menu-list-item"></div>
    </div>`;
blogMenuWindow.insertAdjacentHTML('beforeend', blogMenuWindowHTML);

const sectionWindow1 = document.querySelector('.section-window-1');

const recentWindow = document.querySelector('.recent-window');

const saleWindow = document.querySelector('.sale-window');

const offerWindow = document.querySelector('.offer-window');

const pageSection1 = [
    {
        id: 4,
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Velit facilisis quis auctor pretium ipsum, eu rutrum. Condimentum eu malesuada vitae ultrices in in neque, porta dignissim. Adipiscing purus, cursus vulputate id id dictum at.",
        title: "Mauris at orci non vulputate diam tincidunt nec.",
        user: "Surf Auxion",
        data: "Aug 09 2020",
        img: "bruce-mars-FWVMhUa_wbY-unsplash\ 2.png",
        type: "page-section-1"
    },
    {
        id: 5,
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Velit facilisis quis auctor pretium ipsum, eu rutrum. Condimentum eu malesuada vitae ultrices in in neque, porta dignissim. Adipiscing purus, cursus vulputate id id dictum at.",
        title: "Aenean vitae in aliquam ultrices lectus. Etiam.",
        user: "Surf Auxion",
        data: "Aug 09 2020",
        img: "bruce-mars-FWVMhUa_wbY-unsplash\ 3.png",
        type: "page-section-1"
    },
    {
        id: 6,
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Velit facilisis quis auctor pretium ipsum, eu rutrum. Condimentum eu malesuada vitae ultrices in in neque, porta dignissim. Adipiscing purus, cursus vulputate id id dictum at.",
        title: "Sit nam congue feugiat nisl, mauris amet nisi.",
        user: "Surf Auxion",
        data: "Aug 09 2020",
        img: "bruce-mars-FWVMhUa_wbY-unsplash\ 4.png",
        type: "page-section-1"
    },
]

const pageSection2 = [
    {
        id: 7,
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Velit facilisis quis auctor pretium ipsum, eu rutrum. Condimentum eu malesuada vitae ultrices in in neque, porta dignissim. Adipiscing purus, cursus vulputate id id dictum at.",
        title: "Mauris at orci non vulputate diam tincidunt nec.",
        user: "Surf Auxion",
        data: "Aug 09 2020",
        img: "bruce-mars-FWVMhUa_wbY-unsplash\ 2.png",
        type: "page-section-2"
    },
    {
        id: 8,
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Velit facilisis quis auctor pretium ipsum, eu rutrum. Condimentum eu malesuada vitae ultrices in in neque, porta dignissim. Adipiscing purus, cursus vulputate id id dictum at.",
        title: "Aenean vitae in aliquam ultrices lectus. Etiam.",
        user: "Surf Auxion",
        data: "Aug 09 2020",
        img: "bruce-mars-FWVMhUa_wbY-unsplash\ 3.png",
        type: "page-section-2"
    },
    {
        id: 9,
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Velit facilisis quis auctor pretium ipsum, eu rutrum. Condimentum eu malesuada vitae ultrices in in neque, porta dignissim. Adipiscing purus, cursus vulputate id id dictum at.",
        title: "Sit nam congue feugiat nisl, mauris amet nisi.",
        user: "Surf Auxion",
        data: "Aug 09 2020",
        img: "bruce-mars-FWVMhUa_wbY-unsplash\ 4.png",
        type: "page-section-2"
    },
]

const recentItems = [
    {
        id: 1,
        title: "It is a long established fact",
        date: "Aug 09 2020",
        img: "Rectangle\ 126.png"
    },
    {
        id: 2,
        title: "It is a long established fact",
        date: "Aug 09 2020",
        img: "Rectangle\ 126\ (1).png"
    },
    {
        id: 3,
        title: "It is a long established fact",
        date: "Aug 09 2020",
        img: "Rectangle\ 126\ (2).png"
    },
    {
        id: 4,
        title: "It is a long established fact",
        date: "Aug 09 2020",
        img: "Rectangle\ 126\ (3).png"
    },
]

const saleItems = [
    {
        id: 1,
        title: "Elit ornare in enim mauris.",
        date: "Aug 09 2020",
        img: "Rectangle\ 126\ (4).png",
    },
    {
        id: 2,
        title: "Viverra pulvinar et enim.",
        date: "Aug 09 2020",
        img: "Rectangle\ 126\ (5).png",
    },
    {
        id: 3,
        title: "Mattis varius donec fdsfd",
        date: "Aug 09 2020",
        img: "Rectangle\ 126\ (6).png",
    },
]

const offerItems = [
    {
        id: 1,
        title: "Duis lectus est.",
        price: "$12.00 - $15.00",
        img: "Mask\ Group.png",
    },
    {
        id: 2,
        title: "Sed placerat.",
        price: "$12.00 - $15.00",
        img: "Mask\ Group\ (1).png",
    },
    {
        id: 3,
        title: "Netus proin.",
        price: "$12.00 - $15.00",
        img: "Mask\ Group\ (2).png",
    },
    {
        id: 4,
        title: "Platea in.",
        price: "$12.00 - $15.00",
        img: "Mask\ Group\ (3).png",
    },
]

pageSection1.forEach((item) => {
    const pageSection1HTML = `
    <div class="container__blog-page-items-item-page" data-id="${item.id}">
        <div class="container__blog-page-items-item-page-img" style="background-image: url('./img/blog-img/${item.img}' );height: 453px;"></div>
        <div class="container__blog-page-items-item-page-par">
            <div class="container__blog-page-items-item-page-par-user">${item.user}</div>
            <div class="container__blog-page-items-item-page-par-date">${item.date}</div>
        </div>
        <div class="container__blog-page-items-item-page-info">
            <div class="container__blog-page-items-item-page-info-title">${item.title}</div>
            <div class="container__blog-page-items-item-page-info-text">${item.text}</div>
            <a href="" class="container__blog-page-items-item-page-info-link">Read More </a>
        </div>
    </div>`;
    sectionWindow1.insertAdjacentHTML('beforeend', pageSection1HTML);
})

recentItems.forEach((item) => {
    const recentItemHTML = `
    <div class="container__blog-menu-list-item-post-item">
        <div class="container__blog-menu-list-item-post-item-img" style="background-image: url('./../img/blog-img/${item.img}')"></div>
        <div class="container__blog-menu-list-item-post-item-info">
            <div class="container__blog-menu-list-item-post-title">${item.title}</div>
            <div class="container__blog-menu-list-item-post-date">${item.date}</div>
        </div>
        
    </div>`;
    recentWindow.insertAdjacentHTML('beforeend', recentItemHTML)
})

saleItems.forEach((item) => {
    const saleItemHTML = `
    <div class="container__blog-menu-list-item-post-item">
        <div class="container__blog-menu-list-item-post-item-img" style="background-image: url('./../img/blog-img/${item.img}')"></div>
        <div class="container__blog-menu-list-item-post-item-info">
            <div class="container__blog-menu-list-item-post-title">${item.title}</div>
            <div class="container__blog-menu-list-item-post-date">${item.date}</div>
        </div>
        
    </div>`;
    saleWindow.insertAdjacentHTML('beforeend', saleItemHTML);
})

offerItems.forEach((item) => {
    const offerItemHTML = `
    <div class="container__blog-menu-list-item-offer-item" data-id="${item.id}">
        <div class="container__blog-menu-list-item-offer-item-img" style="background-image: url('./img/blog-img/blog-product/${item.img}');"></div>
        <div class="container__blog-menu-list-item-offer-item-info">
            <div class="container__blog-menu-list-item-post-title">${item.title}</div>
            <div class="container__blog-menu-list-item-post-date">${item.price}</div>
        </div>
    </div>`;
    offerWindow.insertAdjacentHTML('beforeend', offerItemHTML);
})