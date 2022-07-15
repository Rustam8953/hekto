const footerWindow = document.querySelector('.footer-window');

const footerHTML = `
<div class="footer-item">
    <div class="box">
        <div class="footer-main">
            <div class="footer__contact">
                <div class="footer__contact-logo"></div>
                <form>
                    <div class="footer__contact-searcher">
                        <input type="text" class="footer__contact-searcher-search" placeholder="Enter Email Address">
                        <button class="footer__contact-searcher-btn btn">Sign Up</button>
                    </div>
                </form>
                <div class="footer__contact-info">
                    <p>Contact Info</p>
                    <p>17 Princess Road, London, Greater London NW1 8JR, UK</p>
                </div>
            </div>
            <div class="footer__filter">
                <div class="footer__filter-list">
                    <div class="footer__filter-list-title">Catagories</div>
                    <ul class="footer__filter-list-item">
                        <a href="./error.html" class="footer__filter-list-item-link">Laptops & Computers</a>
                        <a href="./error.html" class="footer__filter-list-item-link">Cameras & Photography</a>
                        <a href="./error.html" class="footer__filter-list-item-link">Smart Phones & Tablets</a>
                        <a href="./error.html" class="footer__filter-list-item-link">Video Games & Consoles</a>
                        <a href="./error.html" class="footer__filter-list-item-link">Waterproof Headphones</a>
                    </ul>
                </div>
                <div class="footer__filter-list">
                    <div class="footer__filter-list-title">Customer Care</div>
                    <ul class="footer__filter-list-item">
                        <a href="./account.html" class="footer__filter-list-item-link">My Account</a>
                        <a href="./error.html" class="footer__filter-list-item-link">Discount</a>
                        <a href="./error.html" class="footer__filter-list-item-link">Returns</a>
                        <a href="./error.html" class="footer__filter-list-item-link">Orders History</a>
                        <a href="./error.html" class="footer__filter-list-item-link">Order Tracking</a>
                    </ul>
                </div>
                <div class="footer__filter-list">
                    <div class="footer__filter-list-title">Pages</div>
                    <ul class="footer__filter-list-item">
                        <a href="./blog.html" class="footer__filter-list-item-link">Blog</a>
                        <a href="./error.html" class="footer__filter-list-item-link">Browse the Shop</a>
                        <a href="./error.html" class="footer__filter-list-item-link">Category</a>
                        <a href="./error.html" class="footer__filter-list-item-link">Pre-Built Pages</a>
                        <a href="./error.html" class="footer__filter-list-item-link">Visual Composer Elements</a>
                        <a href="./error.html" class="footer__filter-list-item-link">WooCommerce Pages</a>
                    </ul>
                </div>
            </div>
        </div>
    </div>
    <div class="footer__link">
        <div class="box">
            <div class="footer__link-box">
                <div class="footer__link-text">©Webecy - All Rights Reserved</div>
                <div class="footer__link-socials">
                    <div class="footer__link-socials-item1"><div class="footer__link-socials-item1-icon"></div></div>
                    <div class="footer__link-socials-item2"></div>
                    <div class="footer__link-socials-item3"></div>
                </div>
            </div>
        </div>
    </div>
</div>`;

footerWindow.insertAdjacentHTML('beforeend', footerHTML);