const latestBlogWindow = document.querySelector('.container__blog-items');

const blogItems = [
    {
        id: 1,
        text: "More off this less hello samlande lied much over tightly circa horse taped mightly",
        title: "Top esssential Trends in 2021",
        user: "SaberAli",
        data: "21 August,2020",
        img: "JIUjvqe2ZHg.png",
        type: "latest"
    },
    {
        id: 2,
        text: "More off this less hello samlande lied much over tightly circa horse taped mightly",
        title: "Top esssential Trends in 2021",
        user: "Surfauxion",
        data: "1 August,2020",
        img: "JIUjvqe2ZHg.png",
        type: "latest"
    },
    {
        id: 3,
        text: "More off this less hello samlande lied much over tightly circa horse taped mightly",
        title: "Top esssential Trends in 2021",
        user: "SaberAli",
        data: "17 August,2020",
        img: "JIUjvqe2ZHg.png",
        type: "latest"
    },
    
]

blogItems.forEach((item) => {
    const latestBlogHTML = `
        <div class="container__blog-items-item" data-id="${item.id}">
            <div class="container__blog-items-item-img"style="background-image: url('./img/latest-blog/${item.img}');"></div>
            <div class="container__blog-items-info">
                <div class="container__blog-items-item-data">
                    <div class="container__blog-items-item-data-user">${item.user}</div>
                    <div class="container__blog-items-item-data-date">${item.data}</div>
                </div>
                <div class="container__blog-items-item-info">
                    <div class="container__blog-items-item-info-title">${item.title}</div>
                    <div class="container__blog-items-item-info-text">${item.text}</div>
                    <a href="./blog.html" class="container__blog-items-item-info-link">Read More</a>
                </div>
            </div>
            
        </div>`;
    latestBlogWindow.insertAdjacentHTML('beforeend', latestBlogHTML);
    
})