// import generateToken from "./tool.js";
function generateToken() {
    return (Math.random() + 1).toString(36).substring(7);
}
// slider
function sliderHome() {
    var count = 1;
    setInterval(function () {
        const checkIdRadio = document.getElementById("radio" + count);
        if (checkIdRadio != null) {
            checkIdRadio.checked = true;
            count++;
            if (count > 2) {
                count = 1;
            }
        }
    }, 3000);
}

const btnComeBackPageHomes = document.querySelectorAll('.js-page-home');
function openPageHome() {
    for (const btnComeBackPageHome of btnComeBackPageHomes) {
        btnComeBackPageHome.addEventListener('click', function () {
            localStorage.removeItem('pageShop')
        })
    }
}
window.onload = function () {
    var newAdmin = {
        username: 'admin',
        password: '12345678',
    }
    var json = JSON.stringify(newAdmin)
    localStorage.setItem('admin', json)
    changeProducts();
    openPageHome();
    // activeItem();
    if (localStorage.getItem("ContentCart")) {
        var json = localStorage.getItem("ContentCart")
        var json1 = JSON.parse(json)
        var cart_dropdown_list = document.getElementsByClassName("cart-dropdown-list")[0]
        cart_dropdown_list.innerHTML = ""
        for (var i = 0; i < json1.length; i++) {
            cart_dropdown_list.innerHTML += `
            <li class="cart-dropdown-item">
                <div class="cart-dropdown-img">
                    <a href="">
                        <img class="img-product-img" src="${json1[i].img}" alt="">
                    </a>
                    </div>
                    <div>
                        <h4 class="cart-dropdown-title">${json1[i].title}</h4>
                        <p class="cart-dropdown-price">
                            <span><input class="cart-quantity" type="number" value="1" style="width: 80px;"> ×</span>
                            $<span class="price-product">${json1[i].price}</span>
                        </p>
                    </div>
                    <div class="cart-dropdown-delete" onclick="remove_product()">
                        <i class="fa-solid fa-xmark"></i>
                </div>
            </li>
            `
        }
        update()
    }
}



// Modal register & modal login 
const registerBtn = document.querySelector('.js-register');
const modalRegister = document.querySelector('.js-modal-register');
const modalContainer = document.querySelector('.js-modal-container')

function showModalRegister() {
    modalLogin.classList.remove('open-modal-login');
    modalRegister.classList.add('open-modal-register');
}
function hindeModalRegister() {
    modalRegister.classList.remove('open-modal-register');
}

registerBtn.addEventListener('click', showModalRegister);

modalRegister.addEventListener('click', hindeModalRegister);
modalContainer.addEventListener('click', function (e) {
    e.stopPropagation();
});

//mở modal lúc đầu
const loginBtnInitial = document.querySelector('.js-login-btn');
loginBtnInitial.addEventListener('click', showModalLogin);
const modalCloses = document.querySelectorAll('.js-modal-close');
for (const modalClose of modalCloses) {
    modalClose.addEventListener('click', function (e) {
        e.preventDefault();
        modalRegister.classList.remove('open-modal-register');
        modalLogin.classList.remove('open-modal-login');
    });
}


const loginBtn = document.querySelector('.js-login');
const modalLogin = document.querySelector('.js-modal-login');
const modalContainerLogin = document.querySelector('.js-modal-container-login')

function showModalLogin() {
    modalRegister.classList.remove('open-modal-register');
    modalLogin.classList.add('open-modal-login');
}
function hindeModalLogin() {
    modalLogin.classList.remove('open-modal-login');
}
loginBtn.addEventListener('click', showModalLogin);

modalLogin.addEventListener('click', hindeModalLogin);
modalContainerLogin.addEventListener('click', function (e) {
    e.stopPropagation();
})


function checkInputPassWord() {
    alert("Nhập password đủ 8 ký tự...");
}

var formRegister = document.querySelector('#form-register');
const Taikhoan_Dangky = [];
if (localStorage.getItem("TaiKhoanDangKy")) {
    var taikhoan = localStorage.getItem("TaiKhoanDangKy");
    var json = JSON.parse(taikhoan);

    for (var i = 0; i < json.length; i++) {
        Taikhoan_Dangky[i] = json[i];
    }
}

var email = document.getElementById("auth-form__email");
var username = document.getElementById("auth-form__username");
var password = document.getElementById("auth-form__password");
var confirmPassword = document.getElementById("auth-form__confirm-password");

var kiemtra = false;
const btn = email.addEventListener("keyup", function () {
    var form = email.parentElement
    var email_value = email.value
    var error = form.getElementsByClassName("error")[0]
    var check = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
    if (email_value.match(check)) {
        error.innerHTML = "Email hợp lệ"
        error.style.color = "green"
        kiemtra = true
    }
    else {
        error.innerHTML = "Email không hợp lệ"
        error.style.color = "red"
        kiemtra = false
    }

    if (email_value == "") {
        error.innerHTML = ""
        error.style.color = "#fff"
        kiemtra = false
    }
})

var kiemtra1 = false
username.addEventListener("keyup", function () {
    var form = username.parentElement
    var user_value = username.value
    var error = form.getElementsByClassName("error")[0]
    var check = /^[a-zA-Z0-9\-]{6,12}$/
    if (user_value.match(check)) {
        error.innerHTML = "Username hợp lệ"
        error.style.color = "green"
        kiemtra1 = true
    }
    else {
        error.innerHTML = "Username không hợp lệ. Username chứa 6-12 ký tự và không chứa khoảng trắng"
        error.style.color = "red"
        kiemtra1 = false
    }

    if (user_value == "") {
        error.innerHTML = ""
        error.style.color = "#fff"
        kiemtra1 = false
    }
})
var kiemtra2 = false
password.addEventListener("keyup", function () {
    var form = password.parentElement
    var pass_value = password.value
    var error = form.getElementsByClassName("error")[0]
    var check = /^[a-zA-Z0-9\-]{8,12}$/
    if (pass_value.match(check)) {
        error.innerHTML = "Mật khẩu hợp lệ"
        error.style.color = "green"
        kiemtra2 = true
    }
    else {
        error.innerHTML = "Mật khẩu không hợp lệ. Mật khẩu từ 8-12 ký tự và không có khoảng trắng"
        error.style.color = "red"
        kiemtra2 = false
    }

    if (pass_value == "") {
        error.innerHTML = ""
        error.style.color = "#fff"
        kiemtra2 = false
    }
})
var kiemtra3 = false
confirmPassword.addEventListener("keyup", function () {
    var form = confirmPassword.parentElement
    var pass2_value = confirmPassword.value
    var pass_value = password.value
    var error = form.getElementsByClassName("error")[0]
    var check = /^[a-zA-Z0-9\-]{1,12}$/
    if (pass2_value != pass_value) {
        error.innerHTML = "Mật khẩu xác nhận không đúng"
        error.style.color = "red"
        kiemtra3 = false
    }
    else {
        error.innerHTML = "Mật khẩu xác nhận hợp lệ"
        error.style.color = "green"
        kiemtra3 = true
    }
    if (pass2_value == "") {
        error.innerHTML = ""
        error.style.color = "#fff"
        kiemtra3 = false
    }
})

function register() {

    var user = localStorage.getItem(username.value);
    var checkUser = JSON.parse(user);

    if (username.value != "" && email.value != "" && password.value != "" && confirmPassword.value != "") {


        if (password.value.length != 8) {
            checkInputPassWord();
        }
        else {
            if (password.value == confirmPassword.value) {
                //check local co trong hay khong neu khong check thi checkUser tai else if se loi (null)
                if (checkUser == null) {
                    var day = new Date();
                    var Day = day.getDate();
                    var month = day.getMonth() + 1;
                    var year = day.getFullYear();

                    var newUser = {
                        email: email.value,
                        username: username.value,
                        // password: password.value,
                        day: Day,
                        month: month,
                        year: year,
                    }
                    var taiKhoanDk = {
                        email: email.value,
                        username: username.value,
                        password: password.value,
                    }
                    Taikhoan_Dangky.push(newUser);
                    var Taikhoan = JSON.stringify(Taikhoan_Dangky);
                    localStorage.setItem("TaiKhoanDangKy", Taikhoan);

                    var json = JSON.stringify(taiKhoanDk)
                    localStorage.setItem(username.value, json)
                    alert("Đăng ký thành công.")
                    showModalLogin();
                    username.value = "";
                    email.value = "";
                    password.value = "";
                    confirmPassword.value = "";
                    form.getElementsByClassName("error").innerHTML = "";
                }
                else if (username.value == checkUser.username) {
                    alert("Tài khoản có người đăng ký.")
                    username.value = ""
                    username.focus()
                }
            }
            else {
                alert("Mật khẩu không khớp.")
                confirmPassword.value = ""
                confirmPassword.focus()
            }
        }

    }
    else {

    }
}

var formLogin = document.querySelector('#form-login');
let isLogin = !!localStorage.getItem("Now");

function logIn() {
    var logInUsername = document.getElementById("auth-form__user-login")
    var logInPassword = document.getElementById("auth-form__password-login")
    var user = localStorage.getItem(logInUsername.value)
    var checkUser = JSON.parse(user);

    if (logInUsername.value != "" && logInPassword.value != "") {
        if (checkUser == null) {
            alert("Chưa có tài khoản.")
        }
        else {
            if (logInUsername.value == 'admin' && logInPassword.value == '12345678') {
                alert("Đăng nhập admin thành công.")
                hindeModalLogin();
                localStorage.setItem("Now", logInUsername.value);
                localStorage.setItem('sessionID', generateToken());
                localStorage.setItem('sessionUser', checkUser.username);
                window.location.href = 'http://127.0.0.1:5500/index.html';
            }
            else if (logInUsername.value == checkUser.username && logInPassword.value == checkUser.password) {
                alert("Đăng nhập thành công.")
                location.reload();
                hindeModalLogin();
                localStorage.setItem("Now", logInUsername.value);
                localStorage.setItem('sessionID', generateToken());
                localStorage.setItem('sessionUser', checkUser.username);
                window.location.href = 'http://127.0.0.1:5500/index.html';
            }
            else {
                if (!(logInUsername.value == checkUser.email)) {
                    alert("Bạn nhập chưa đúng gmail...")
                    logInUsername.focus();
                }
                else if (!(logInPassword.value == checkUser.password)) {
                    alert("Bạn nhập chưa đúng password...")
                    logInPassword.focus();
                }
            }
        }
    }

    else {
        if (logInUsername.value == "" && logInPassword.value == "") {
            alert("Bạn chưa nhập gmail và password...")
            logInUsername.focus();
        }
        else if (logInUsername.value == "") {
            alert("Chưa nhập gmail.")
            logInUsername.focus();
        }
        else if (logInPassword.value == "") {
            alert("Chưa nhập password.")
            logInPassword.focus();
        }
    }
}

formRegister.addEventListener('submit', function (e) {
    e.preventDefault();
    register();
})
formLogin.addEventListener('submit', function (e) {
    e.preventDefault();
    logIn();
})

function isLogined() {
    return localStorage.getItem('sessionID') != null && localStorage.getItem('sessionUser') != null;
}
// isLogined();

//Thay đổi icon user
const changeUser = document.querySelector('.header-action-logged');
const accountUser = document.getElementById('js-accout-user');

if (isLogined()) {
    changeUser.classList.add('js-change-icon-user');
    loginBtnInitial.classList.add('js-remove-icon-user-init');
    const sessionUser = localStorage.getItem('sessionUser');
    accountUser.innerText = `${sessionUser}`
}

if (localStorage.getItem("Now") != "admin") {
    document.querySelector('.js-icon-admin').classList.add('close-icon-admin');
}
//end thay đổi icon user


//log out
const btnLogout = document.querySelector('.js-log-out');
function logOut() {
    location.reload();
    localStorage.removeItem("pageShop");
    localStorage.removeItem('sessionID');
    localStorage.removeItem('sessionUser');
    localStorage.removeItem('Now');
    localStorage.removeItem("ContentCart")
    window.location.href = 'http://127.0.0.1:5500/';
}
btnLogout.addEventListener('click', logOut);
//end log out


//thay doi content
var btnPageProducts = document.querySelectorAll('.js-page-description-product');
const btnContent = document.querySelector('.js-change-content');





//z-index cho deader
const changeHeader = document.querySelector('.header-top');
function scrolled() {
    if ((window.pageYOffset) > 31) {
        changeHeader.classList.add('header-top-z-index');
    }
    else {
        changeHeader.classList.remove('header-top-z-index');
    }
}
window.addEventListener('scroll', scrolled);


var productLists = document.querySelector('.js-product-lists');


function getRenderProducts(products, category, search, pageNum) {
    var resultProducts = []

    // console.log(products)
    if (!category && !search && !pageNum) {
        return products
    }

    var stringFilter = ""
    if (category) {
        stringFilter += "item.category == category";
        // stringFilter += "(item.category == category) ? item.category == category : category.toLowerCase().includes(item.category)"
    }
    if (search) {
        stringFilter += (stringFilter ? "&&" : "") + "item.title.toLowerCase().includes(search)"
    }
    if (pageNum) {
        stringFilter += "(pageNum > 0 && pageNum <2) ? item.id <= (pageNum*8) : ((item.id > (pageNum-1)*8) && (item.id <= (pageNum*8)))";
    }
    if (stringFilter) {
        products.forEach((item) => {
            if (eval(stringFilter)) {
                resultProducts.push(item)
            }
        })

        return resultProducts
    }
    else {
        return products
    }
}
var data = '';
function renderProductLists(category, search, pageNum) {
    if (data === '') {
        const resultProducts = getRenderProducts(PRODUCTDATA, category, search, pageNum);
        resultProducts.forEach((item) => {
            if (item) {
                data += `<div class="col col-3 col-4 col-6 col-12 mb-24">
                <div class="popular-product-cart-wrap js-page-description-product" onclick="pageDescription()">
                    <div class="product-card-header">
                        <img class="js-product-cart-src img-product-box" src="${item.img}"
                            alt="">
                    </div>

                    <div class="product-cart-content">
                        <a class="product-cart-title js-product-cart-title" >${item.title}</a>
                        <p class="product-cart-description">${item.description}</p>
                        <div class="product-card-bottom">
                            <span class="js-product-cart-price current-price">$${item.price}</span>
                            <div class="add-cart" onclick="addCartPageShop(event)">
                                <a class="btn">Add</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>`
            }
        })
        productLists.innerHTML = data;

    }

}
// console.log(btnPageProducts)


const getNameOfParam = window.location.href.split("?");

function checkValueParam() {

    if (getNameOfParam[1]) {
        var data = getNameOfParam[1];
        var cateId;

        if (data.includes("pageNum")) {
            cateId = getNameOfParam[1].split('=');
            if (cateId) {
                renderProductLists('', '', cateId[1]);
            }
        }

        if (!data.includes("&")) {

            cateId = getNameOfParam[1].split('=');
            if (cateId[0] === 'cate_id') {
                renderProductLists(cateId[1]);
            }
            else if (cateId[0] === 'search') {
                renderProductLists('', cateId[1], '');
            }
        }
        else if (data.includes("&")) {
            cateId = getNameOfParam[1].split('&');
            renderProductLists((cateId[0].split('='))[1], (cateId[1].split('='))[1])
        }
    }

}

const pageController = document.querySelector('.js-page-controller');
var pageNum = '';
function renderPageNumber(resultProducts) {
    if (pageNum === '') {
        if (resultProducts) {
            for (var i = 0; i < (resultProducts.length) / 8; i++) {
                pageNum += `<li class="pagination-item js-active">
                                <a class="js-load-page-shop" href="/index.html?pageNum=${i + 1}" >${i + 1}</a>
                            </li>
                        `
            }
        }
        for (var i = 0; i < (PRODUCTDATA.length) / 8; i++) {
            pageNum += `<li class="pagination-item js-active">
                    <a class="js-load-page-shop" href="/index.html?pageNum=${i + 1}" >${i + 1}</a>
                </li>
            `
        }

        pageController.innerHTML = pageNum;
    }
}


const titleProductList = document.querySelector('.title-product-list');
var s1 = '';
function renderCategory() {
    if (s1 === '') {
        category.forEach((item) => {
            s1 += `<li class="title-product-item">
                    <div class="product-item">
                        <img src="${item.img}" alt="">
                        <a href="?${item.key}=${item.name}">${item.title}</a>

                    </div>
                <div class="count-product">${item.count}</div>
            </li>`
        })
        titleProductList.innerHTML = s1;
    }

}

const btnPageShops = document.querySelectorAll('.js-page-shop');
const btnOpenPageShop = document.querySelector('.js-open-page-shop');

const btnPageAbouts = document.querySelectorAll('.js-page-about');
const btnOpenPageAbout = document.querySelector('.js-open-page-about');


function openPageShop() {
    btnContent.classList.add('close-content');
    btnOpenPageAbout.classList.remove('open-page');
    btnOpenPageShop.classList.add('open-page');
    window.scrollTo(0, 0);
    checkValueParam();
    renderPageNumber();
    renderCategory();
}
for (const btnPageShop of btnPageShops) {
    btnPageShop.addEventListener('click', function (e) {
        e.preventDefault();
        window.history.replaceState(null, null, "?pageShop");
        localStorage.setItem('pageShop', 'pageShop');
        openPageShop();
        renderProductLists('', '', 1);
    })
}

if (localStorage.getItem('pageShop')) {
    openPageShop();
}
function openPageAbout() {
    btnContent.classList.add('close-content');
    btnOpenPageShop.classList.remove('open-page');
    btnOpenPageContact.classList.remove('open-page');
    btnOpenPageAbout.classList.add('open-page');
    window.scrollTo(0, 0);
}
for (const btnPageAbout of btnPageAbouts) {
    btnPageAbout.addEventListener('click', function (e) {
        window.history.replaceState(null, null, "?pageAbout");
        localStorage.removeItem('pageShop');
        e.preventDefault();
        openPageAbout();
    })
}
const btnPageContacts = document.querySelectorAll('.js-page-contact');
const btnOpenPageContact = document.querySelector('.js-open-page-contact');

function openPageContact() {
    btnContent.classList.add('close-content');
    btnOpenPageShop.classList.remove('open-page');
    btnOpenPageAbout.classList.remove('open-page');
    btnOpenPageContact.classList.add('open-page');
    window.scrollTo(0, 0);
}
for (const btnPageContact of btnPageContacts) {
    btnPageContact.addEventListener('click', function (e) {
        window.history.replaceState(null, null, "?pageContact");
        localStorage.removeItem('pageShop');
        e.preventDefault();
        openPageContact();
    })
}



if (!getNameOfParam[1]) {
    localStorage.removeItem('pageShop');
    btnContent.classList.remove('close-content');
    sliderHome();
    btnOpenPageShop.classList.remove('open-page');
}

//page about
const dataSearch = document.querySelector('.js-search-product');
const submitSearch = document.querySelector('.js-submit-search');


submitSearch.addEventListener('click', function (e) {
    if (dataSearch.value != "") {
        localStorage.setItem('pageShop', 'pageShop');
        window.history.replaceState(null, null, `?search=${dataSearch.value}`);
        openPageShop();
    }

});

dataSearch.addEventListener('keydown', function (e) {
    if (e.keyCode == 13) {
        if (dataSearch.value != "") {
            localStorage.setItem('pageShop', 'pageShop');
            window.history.replaceState(null, null, `?search=${dataSearch.value}`);
            openPageShop();
            location.reload();
        }

    }
})




const slideLeftPopular = document.querySelector('.js-arrow-left');
const slideRightPopular = document.querySelector('.js-arrow-right');

function changeProducts() {
    slideLeftPopular.addEventListener('click', function () {
        document.querySelector('.list-product-2').classList.remove('show-products');
        document.querySelector('.list-product-1').classList.add('show-products');
    });
    slideRightPopular.addEventListener('click', function () {
        document.querySelector('.list-product-1').classList.remove('show-products');
        document.querySelector('.list-product-1').classList.add('remove-product');
        document.querySelector('.list-product-2').classList.add('show-products');
    });
}



// modal mini
const btnCloseModalMini = document.querySelector('.js-close-modal-mini');
const modalMini = document.querySelector('.js-modal-menu-mini');
const btnOpenModalMini = document.querySelector('.js-icon-navbar');
const overlayMenu = document.querySelector('.modal-menu-overlay');
btnOpenModalMini.addEventListener('click', function () {
    modalMini.classList.add('open-modal-menu-mb');
})
btnCloseModalMini.addEventListener('click', function () {
    modalMini.classList.remove('open-modal-menu-mb')
})

overlayMenu.addEventListener('click', function () {
    modalMini.classList.remove('open-modal-menu-mb')
})
// end modal mini


function pageDescriptionProduct(valueTitleProduct, srcImageProduct, descriptionProduct, priceProduct) {

    btnContent.innerHTML = `<div class="product-description-wrap ">
        <div class="container">
            <div class="row">
                <div class="product-description m-auto">
                    <div class="product-description-img">
                        <img class="src-src-src" src="${srcImageProduct}" alt="">
                    </div>
                    <div class="detailed-info">
                        <span class="stock-status btn-sale-off">Sale Off</span>
                        <h2 class="title-detail">${valueTitleProduct}</h2>
                        <div class="product-price">
                            <div class="current-price">
                                <span>${priceProduct}</span>
                            </div>
                        </div>
                        <div class="short-desc">
                            <p>${descriptionProduct}</p>
                        </div>
                        <div class="btn-submit add-cart">
                            <button type="submit" class="btn" onclick="addCartPageDescription()">
                                <i class="fa-solid fa-cart-shopping icon-cart-mr-8"></i>
                                Add to cart
                            </button>
                        </div>
                    </div>
    
                </div>
                <div class="description-long-wrap  m-auto">
                    <div class="description-long">
                        <a class="description-categori">Description</a>
                        <div class="description-text">
                            <p>Uninhibited carnally hired played in whimpered dear gorilla koala depending and much
                                yikes off far quetzal goodness and from for grimaced goodness unaccountably and
                                meadowlark near unblushingly crucial scallop tightly neurotic hungrily some and dear
                                furiously this apart.
                            </p>
    
                            <p>Spluttered narrowly yikes left moth in yikes bowed this that grizzly much hello on
                                spoon-fed that alas rethought much decently richly and wow against the frequent
                                fluidly
                                at formidable acceptably flapped besides and much circa far over the bucolically hey
                                precarious goldfinch mastodon goodness gnashed a jellyfish and one however because.
                            </p>
                        </div>
    
                        <ul class="product-more-infor">
                            <li>
                                <span>Type Of Packing</span>
                                Bottle
                            </li>
                            <li>
                                <span>Color</span>
                                Green, Pink, Powder Blue, Purple
                            </li>
                            <li>
                                <span>Quantity Per Case</span>
                                100ml
                            </li>
                            <li>
                                <span>Ethyl Alcohol</span>
                                70%
                            </li>
                            <li>
                                <span>Piece In One</span>
                                Carton
                            </li>
                        </ul>
                        <p class="description-text">Laconic overheard dear woodchuck wow this outrageously taut
                            beaver hey hello far meadowlark
                            imitatively egregiously hugged that yikes minimally unanimous pouted flirtatiously as
                            beaver
                            beheld above forward energetic across this jeepers beneficently cockily less a the
                            raucously
                            that magic upheld far so the this where crud then below after jeez enchanting drunkenly
                            more
                            much wow callously irrespective limpet.</p>
                    </div>
    
                </div>
                
            </div>
        </div>
    </div>`
    window.scrollTo(0, 0);
}

for (var btnPageProduct of btnPageProducts) {
    btnPageProduct.addEventListener('click', getValueProducts);
}

function getValueProducts(event) {
    const btnPageDescription = event.target;
    var elementSmall = btnPageDescription.parentElement;
    var valueTitleProduct = ((elementSmall.parentElement).querySelector('.js-product-cart-title')).innerText;
    var srcImageProduct = ((elementSmall.parentElement).querySelector('.js-product-cart-src')).src;
    var description = ((elementSmall.parentElement).querySelector('.product-cart-description')).innerText
    var priceProduct = ((elementSmall.parentElement).querySelector('.js-product-cart-price')).innerText;

    pageDescriptionProduct(valueTitleProduct, srcImageProduct, description, priceProduct);
}

//hello
function pageDescription() {
    btnContent.classList.remove("close-content")
    localStorage.removeItem("pageShop");
    document.querySelector(".js-open-page-shop").classList.remove('open-page');
    getValueProducts(event);
}

//THÊM SẢN PHẨM BÊN TRANG SHOP
function addCartPageShop(event) {
    event.stopPropagation();
    var button = event.target
    var product = button.parentElement.parentElement.parentElement.parentElement
    var title = product.getElementsByClassName("product-cart-title")[0].innerText
    var img = product.getElementsByClassName("js-product-cart-src")[0].src
    var price = product.getElementsByClassName("current-price")[0].innerText.replace("$", "")
    add_to_cart(title, img, price)
    updateTotal()
}
function addCartPageDescription() {
    if (isLogined()) {
        var button = event.target
        var product = button.parentElement.parentElement.parentElement.parentElement
        var title = product.getElementsByClassName("title-detail")[0].innerText
        var img = product.getElementsByClassName("src-src-src")[0].src
        var price = product.getElementsByClassName("current-price")[0].innerText.replace("$", "")
        add_to_cart(title, img, price);
        updateTotal()
    }
    else {
        showModalLogin();
    }
}

function update() {
    var cart_dropdown_item = document.getElementsByClassName("cart-dropdown-item")
    var amount_product = document.getElementsByClassName("amount-product")[0]
    amount_product.innerText = cart_dropdown_item.length
}
function updateTotal() {
    var cart_dropdown_item = document.getElementsByClassName("cart-dropdown-item")
    var total = 0;
    for (var i = 0; i < cart_dropdown_item.length; i++) {
        var quantity = cart_dropdown_item[i].getElementsByClassName("cart-quantity")[0].value
        var price = cart_dropdown_item[i].getElementsByClassName("price-product")[0]
        price = parseFloat(price.innerText)
        total = total + (quantity * price)
    }
    document.getElementsByClassName("cart-dropdown-total-bill")[0].innerText = "$" + Math.round(total * 100) / 100
}
const ContentCart = []
if (localStorage.getItem("ContentCart")) {
    var json = localStorage.getItem("ContentCart")
    var json1 = JSON.parse(json)
    for (var i = 0; i < json1.length; i++) {
        ContentCart[i] = json1[i]
    }
}
function add_to_cart(title, img, price) {
    var cart_dropdown_list = document.getElementsByClassName("cart-dropdown-list")[0]
    var cart_dropdown_title = cart_dropdown_list.getElementsByClassName("cart-dropdown-title")
    for (var i = 0; i < cart_dropdown_title.length; i++) {
        if (cart_dropdown_title[i].innerText == title) {
            alert("Sản phẩm đã có trong giỏ hàng.")
            return
        }
    }
    var newProductCart = {
        title: title,
        img: img,
        price: price,
    }
    ContentCart.push(newProductCart)
    var json = JSON.stringify(ContentCart)
    localStorage.setItem("ContentCart", json)
    var li = document.createElement("li")
    li.classList.add("cart-dropdown-item")
    var content = `
    <div class="cart-dropdown-img">
        <a href="">
            <img class="img-product-img" src="${img}" alt="">
        </a>
        </div>
        <div>
            <h4 class="cart-dropdown-title">${title}</h4>
            <p class="cart-dropdown-price">
                <span><input class="cart-quantity" type="number" value="1"  style="width: 80px;"> ×</span>
                $<span class="price-product">${price}</span>
            </p>
        </div>
        <div class="cart-dropdown-delete" onclick="remove_product()">
            <i class="fa-solid fa-xmark"></i>
    </div>
    `
    li.innerHTML = content
    cart_dropdown_list.append(li)
    update()
    var cart_quantity = cart_dropdown_list.getElementsByClassName("cart-quantity")
    for (var i = 0; i < cart_quantity.length; i++) {
        cart_quantity[i].addEventListener("change", function () {
            var input = event.target
            if (isNaN(input.value) || input.value <= 0) {
                input.value = 1
            }
            updateTotal()
        })
    }

    // var remover_cart = cart_dropdown_list.getElementsByClassName("fa-solid fa-xmark")
    // for (var i = 0; i < remover_cart.length; i++) {
    //     remover_cart[i].addEventListener("click", function () {
    //         var button = event.target;
    //         console.log(button.parentElement.parentElement)
    //         for(var i = 0 ; i < ContentCart.length ; i++) {
    //             if(ContentCart[i].img == img && ContentCart[i].title == title && ContentCart[i].price == price) {
    //                 alert("dung")
    //                 ContentCart.splice(i,1);
    //                 var json = JSON.stringify(ContentCart)
    //                 localStorage.setItem("ContentCart",json)
    //                 break;
    //             }
    //         }
    //         button.parentElement.parentElement.remove();
    //         update()
    //         updateTotal()
    //     })
    // }

}
function remove_product() {
    var button = event.target
    var img = button.parentElement.parentElement.getElementsByClassName("img-product-img")[0].src
    var title = button.parentElement.parentElement.getElementsByClassName("cart-dropdown-title")[0].innerText
    var price = button.parentElement.parentElement.getElementsByClassName("price-product")[0].innerText
    // var json = localStorage.getItem("ContentCart")
    // var json1 = JSON.parse(json)
    // for(var i = 0 ; i < json1.length ; i++) {
    //     ContentCart[i] = json1[i]
    // }
    for (var i = 0; i < ContentCart.length; i++) {
        if (ContentCart[i].img == img && ContentCart[i].title == title && ContentCart[i].price == price) {
            ContentCart.splice(i, 1);
            var json = JSON.stringify(ContentCart)
            localStorage.setItem("ContentCart", json)
            break;
        }
    }
    button.parentElement.parentElement.remove()
    update()
    updateTotal()
}

// const SanPhamDaMua = []
if (localStorage.getItem("SanPhamDaMua")) {
    var SanPhamKhachHang = localStorage.getItem("SanPhamDaMua")
    var json = JSON.parse(SanPhamKhachHang)
    for (var i = 0; i < json.length; i++) {
        SanPhamDaMua[i] = json[i]
    }
}
const btnCheckOut = document.querySelector('.js-check-out');
btnCheckOut.addEventListener('click', buy)
function buy() {
    var cart_dropdown_list = document.getElementsByClassName("cart-dropdown-list")[0]
    var now = localStorage.getItem("Now")
    if (cart_dropdown_list.innerText == "") {
        alert("Gio hang trong")
    }
    else if (localStorage.getItem("Now")) {
        localStorage.removeItem("ContentCart")
        var date = new Date()
        var cart_dropdown_item = cart_dropdown_list.getElementsByClassName("cart-dropdown-item")
        for (var i = 0; i < cart_dropdown_item.length; i++) {
            var title = cart_dropdown_item[i].getElementsByClassName("cart-dropdown-title")[0].innerText
            var img = cart_dropdown_item[i].getElementsByClassName("img-product-img")[0].src
            var quantity = cart_dropdown_item[i].getElementsByClassName("cart-quantity")[0].value
            var price = cart_dropdown_item[i].getElementsByClassName("price-product")[0].innerText
            var productBuy = {
                username: now,
                image: img,
                title: title,
                quantity: quantity,
                price: price,
                date: date.getDate(),
                month: (date.getMonth() + 1),
                year: date.getFullYear(),
                tinhtrang: 0,
            }
            SanPhamDaMua.push(productBuy)
        }
        for (var i = 0; i < SanPhamDaMua.length - 1; i++) {
            for (var j = i + 1; j < SanPhamDaMua.length; j++) {
                if (SanPhamDaMua[i].year < SanPhamDaMua[j].year) {
                    var temp = SanPhamDaMua[i]
                    SanPhamDaMua[i] = SanPhamDaMua[j]
                    SanPhamDaMua[j] = temp
                }
                else if (SanPhamDaMua[i].year == SanPhamDaMua[j].year) {
                    if (SanPhamDaMua[i].month < SanPhamDaMua[j].month) {
                        var temp = SanPhamDaMua[i]
                        SanPhamDaMua[i] = SanPhamDaMua[j]
                        SanPhamDaMua[j] = temp
                    }
                    else if (SanPhamDaMua[i].month == SanPhamDaMua[j].month) {
                        if (SanPhamDaMua[i].date < SanPhamDaMua[j].date) {
                            var temp = SanPhamDaMua[i]
                            SanPhamDaMua[i] = SanPhamDaMua[j]
                            SanPhamDaMua[j] = temp
                        }
                    }
                }
            }
        }


        var sanpham = JSON.stringify(SanPhamDaMua)
        localStorage.setItem("SanPhamDaMua", sanpham)
        alert("Thank you")
        cart_dropdown_list.innerHTML = ""
        updateTotal()
        update()
    }
    else {
        alert("moi dang nhap")
        showModalLogin();
        return
    }
}

