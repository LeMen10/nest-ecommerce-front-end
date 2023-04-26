const PRODUCTDATA = [
    {
        id: 1,
        title: 'Seeds of Change Organic Quinoa, Brown, & Red Rice',
        price: 28,
        category: 'snack',
        img: 'assets/img/product-1-1.jpg',
        detail: 'If you want to have some refreshing and healthy drinks. Choose your favorite taste and enjoy the best from Deliany Juice.',
    },
    {
        id: 2,
        title: 'All Natural Italian-Style Chicken Meatballs',
        price: 52,
        category: 'snack',
        img: 'assets/img/product-2-1.jpg',
        detail: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam.',
    },
    {
        id: 3,
        title: 'Angie’s Boomchickapop Sweet & Kettle Corn',
        price: 48,
        category: 'snack',
        img: 'assets/img/product-3-1.jpg',
        detail: 'Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed qui ratione voluptatem sequi nesciunt.',
    },
    {
        id: 4,
        title: 'Foster Farms Takeout Crispy Classic Buffalo Wings',
        price: 17,
        category: 'snack',
        img: 'assets/img/product-4-1.jpg',
        detail: 'Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, et dolore quaerat voluptatem.',
    },
    {
        id: 5,
        title: 'Blue Diamond Almonds Lightly Salted Vegetables',
        price: 23,
        category: 'vegetable',
        img: 'assets/img/product-5-1.jpg',
        detail: 'Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid commodi consequatur.',
    },
    {
        id: 6,
        title: 'Chobani Complete Vanilla Greek',
        price: 15,
        category: 'freshfruit',
        img: 'assets/img/product-6-1.jpg',
        detail: 'Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, voluptas nulla pariatur.',
    },
    {
        id: 7,
        title: 'All Natural Style Chicken Meatballs',
        price: 68,
        category: 'coffee',
        img: 'assets/img/product-7-1.jpg',
        detail: 'Nor again is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain, but because occasionally.',
    },
    {
        id: 8,
        title: 'Angie’s Boomchickapop Sweet & Salty Kettle Corn',
        price: 94,
        category: 'freshfruit',
        img: 'assets/img/product-8-1.jpg',
        detail: 'At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti cupiditate non provident.',
    },
    {
        id: 9,
        title: 'Canada Dry Ginger Ale – 2 L Bottle - 200ml - 400g',
        price: 36,
        category: 'freshfruit',
        img: 'assets/img/product-9-1.jpg',
        detail: 'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some or randomised words.',
    },
    {
        id: 10,
        title: 'Encore Seafoods Stuffed Alaskan Salmon',
        price: 74,
        category: 'freshfruit',
        img: 'assets/img/product-10-1.jpg',
        detail: 'It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to which looks reasonable.',
    },
    {
        id: 11,
        title: 'Gorton’s Beer Battered Fish Fillets with soft paper',
        price: 13,
        category: 'coffee',
        img: 'assets/img/product-11-1.jpg',
        detail: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.',
    },
    {
        id: 12,
        title: 'Haagen-Dazs Caramel Cone Ice Cream Ketchup',
        price: 47,
        category: 'coffee',
        img: 'assets/img/product-12-1.jpg',
        detail: 'Duis aute irure dolor in reprehenderit doloremque laudantium, in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
    },
    {
        id: 13,
        title: 'Angie’s Boomchickapop Sweet & Salty Kettle Corn',
        price: 102,
        category: 'coffee',
        img: 'assets/img/product-13-1.jpg',
        detail: 'Voluptatem sequi nesciunt. Neque porro quisquam est, quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam.',
    },
    {
        id: 14,
        title: 'Foster Takeout Crispy Classic Buffalo Wings',
        price: 82,
        category: 'vegetable',
        img: 'assets/img/product-14-1.jpg',
        detail: 'Sed ultrices massa non laoreet rutrum. Nullam vestibulum semper. Sed egestas dignissim sem at tempus. In et mollis justo.',
    },
    {
        id: 15,
        title: 'Blue Almonds Lightly Salted Vegetables',
        price: 76,
        category: 'vegetable',
        img: 'assets/img/product-15-1.jpg',
        detail: 'Duis quis nisl leo. Curabitur ut velit pharetra, ullamcorper efficitur nisi. Maecenas volutpat lacus id vehicula malesuada.',
    },
    {
        id: 16,
        title: 'Chobani Complete Vanilla Greek Yogurt',
        price: 85,
        category: 'vegetable',
        img: 'assets/img/product-16-1.jpg',
        detail: 'Sed varius fringilla lectus consequat condimentum. Aliquam turpis lorem, venenatis mauris vitae, vestibulum efficitur neque.',
    },
];

const category = [
    {
        id: 1,
        key: 'cate_id',
        name: 'snack', 
        title: 'Snack',
        count: 4,
        img: 'assets/img/category-1.svg',
    },
    {
        id: 2,
        key: 'cate_id',
        name: 'vegetable',
        title: 'Vegetable',
        count: 4,
        img: 'assets/img/category-9.svg',
    },
    {
        id: 3,
        key: 'cate_id',
        name: 'freshfruit',
        title: 'Fresh Fruit',
        count: 4,
        img: 'assets/img/category-5.svg',
    },
    {
        id: 4,
        key: 'cate_id',
        name: 'coffee',
        title: 'Coffee & Water',
        count: 4,
        img: 'assets/img/category-2.svg',
    },
];

function generateToken() {
    return (Math.random() + 1).toString(36).substring(7);
}

// slider
function sliderHome() {
    var count = 1;
    setInterval(function () {
        const checkIdRadio = document.getElementById('radio' + count);
        if (checkIdRadio != null) {
            checkIdRadio.checked = true;
            count++;
            if (count > 2) {
                count = 1;
            }
        }
    }, 5000);
}

const btnComeBackPageHomes = document.querySelectorAll('.js-page-home');
function openPageHome() {
    for (const btnComeBackPageHome of btnComeBackPageHomes) {
        btnComeBackPageHome.addEventListener('click', function () {
            localStorage.removeItem('pageShop');
        });
    }
}

var valueProductData = localStorage.getItem('PRODUCTDATA');
console.log(valueProductData)
const arrProductData = JSON.parse(valueProductData);
console.log(arrProductData)

const container__loading = document.querySelector('.container__loading');
function hide__loading() {
    container__loading.style.display = 'none';
}
window.onload = function () {
    container__loading.style.display = 'flex';
    setTimeout(hide__loading, 400);
    var json = JSON.stringify(PRODUCTDATA);
    localStorage.setItem('PRODUCTDATA', json);

    if (localStorage.getItem('PRODUCTDATA')) {
        var json = localStorage.getItem('PRODUCTDATA');
        var product_product_product = JSON.parse(json);
        for (var i = 0; i < product_product_product.length; i++) {
            PRODUCTDATA[i] = product_product_product[i];
        }
    }

    var json = JSON.stringify(category);
    localStorage.setItem('Category', json);

    var newAdmin = {
        username: 'admin',
        password: '12345678',
    };

    var json = JSON.stringify(newAdmin);
    localStorage.setItem('admin', json);
    changeProducts();
    openPageHome();
    // activeItem();
    if (localStorage.getItem('ContentCart')) {
        var json = localStorage.getItem('ContentCart');
        var json1 = JSON.parse(json);
        var cart_dropdown_list = document.getElementsByClassName('cart-dropdown-list')[0];
        cart_dropdown_list.innerHTML = '';
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
            `;
        }
        update();
    }
};

// Modal register & modal login
const registerBtn = document.querySelector('.js-register');
const modalRegister = document.querySelector('.js-modal-register');
const modalContainer = document.querySelector('.js-modal-container');

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
const modalContainerLogin = document.querySelector('.js-modal-container-login');

function showModalLogin() {
    modalRegister.classList.remove('open-modal-register');
    modalLogin.classList.add('open-modal-login');
    // modalQuen.classList.remove('open-modal-quen');
    logInUsername.value = '';
    logInPassword.value = '';
}
function hindeModalLogin() {
    modalLogin.classList.remove('open-modal-login');
}
loginBtn.addEventListener('click', showModalLogin);

modalLogin.addEventListener('click', hindeModalLogin);
modalContainerLogin.addEventListener('click', function (e) {
    e.stopPropagation();
});

const Taikhoan_Dangky = [];
if (localStorage.getItem('TaiKhoanDangKy')) {
    var taikhoan = localStorage.getItem('TaiKhoanDangKy');
    var json = JSON.parse(taikhoan);

    for (var i = 0; i < json.length; i++) {
        Taikhoan_Dangky[i] = json[i];
    }
}

var formRegister = document.querySelector('#form-register');
var email = document.getElementById('auth-form__email');
var username = document.getElementById('auth-form__username');
var password = document.getElementById('auth-form__password');
var confirmPassword = document.getElementById('auth-form__confirm-password');

var kiemtra = false;
const btn = email.addEventListener('keyup', function () {
    var form = email.parentElement;
    var email_value = email.value;
    var error = form.getElementsByClassName('error')[0];
    var check = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
    if (email_value.match(check)) {
        error.innerHTML = 'Email hợp lệ';
        error.style.color = 'green';
        kiemtra = true;
    } else {
        error.innerHTML = 'Email không hợp lệ';
        error.style.color = 'red';
        kiemtra = false;
    }

    if (email_value == '') {
        error.innerHTML = '';
        error.style.color = '#fff';
        kiemtra = false;
    }
});

var kiemtra1 = false;
username.addEventListener('keyup', function () {
    var form = username.parentElement;
    var user_value = username.value;
    var error = form.getElementsByClassName('error')[0];
    var check = /^[a-zA-Z0-9\-]{6,8}$/;
    if (user_value.match(check)) {
        error.innerHTML = 'Username hợp lệ';
        error.style.color = 'green';
        kiemtra1 = true;
    } else {
        error.innerHTML = 'Username có 6-8 ký tự, không chứa khoảng trắng và dấu.';
        error.style.color = 'red';
        kiemtra1 = false;
    }

    if (user_value == '') {
        error.innerHTML = '';
        error.style.color = '#fff';
        kiemtra1 = false;
    }
});
var kiemtra2 = false;
password.addEventListener('keyup', function () {
    var form = password.parentElement;
    var pass_value = password.value;
    var error = form.getElementsByClassName('error')[0];
    var check = /^[a-zA-Z0-9\-]{8,12}$/;
    if (pass_value.match(check)) {
        error.innerHTML = 'Mật khẩu hợp lệ';
        error.style.color = 'green';
        kiemtra2 = true;
    } else {
        error.innerHTML = 'Mật khẩu không hợp lệ. Mật khẩu từ 8-12 ký tự và không có khoảng trắng';
        error.style.color = 'red';
        kiemtra2 = false;
    }

    if (pass_value == '') {
        error.innerHTML = '';
        error.style.color = '#fff';
        kiemtra2 = false;
    }
});
var kiemtra3 = false;
confirmPassword.addEventListener('keyup', function () {
    var form = confirmPassword.parentElement;
    var pass2_value = confirmPassword.value;
    var pass_value = password.value;
    var error = form.getElementsByClassName('error')[0];
    var check = /^[a-zA-Z0-9\-]{8,12}$/;
    if (pass2_value != pass_value) {
        error.innerHTML = 'Mật khẩu xác nhận không đúng';
        error.style.color = 'red';
        kiemtra3 = false;
    } else {
        error.innerHTML = 'Mật khẩu xác nhận hợp lệ';
        error.style.color = 'green';
        kiemtra3 = true;
    }
    if (pass2_value == '') {
        error.innerHTML = '';
        error.style.color = '#fff';
        kiemtra3 = false;
    }
});

function register() {
    var user = localStorage.getItem(username.value);
    var checkUser = JSON.parse(user);

    if (username.value != '' && email.value != '' && password.value != '' && confirmPassword.value != '') {
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
                };
                var taiKhoanDk = {
                    email: email.value,
                    username: username.value,
                    password: password.value,
                };
                Taikhoan_Dangky.push(newUser);
                var Taikhoan = JSON.stringify(Taikhoan_Dangky);
                localStorage.setItem('TaiKhoanDangKy', Taikhoan);

                var json = JSON.stringify(taiKhoanDk);
                localStorage.setItem(username.value, json);
                toast({
                    title: 'Thành công!',
                    message: 'Bạn đã đăng ký thành công &#128526',
                    type: 'success',
                    duration: 2000,
                });
                showModalLogin();
                username.value = '';
                email.value = '';
                password.value = '';
                confirmPassword.value = '';
                console.log(form);
                form.getElementsByClassName('error')[0].style.color = '#fff';
            } else if (username.value == checkUser.username) {
                toast({
                    title: 'Thông báo!',
                    message: 'Tài khoản đã có người đăng ký &#128524',
                    type: 'warning',
                    duration: 2000,
                });
                username.value = '';
                username.focus();
            }
        }
    }
}

var formLogin = document.querySelector('#form-login');
let isLogin = !!localStorage.getItem('Now');

var logInUsername = document.getElementById('auth-form__user-login');
var logInPassword = document.getElementById('auth-form__password-login');

logInUsername.addEventListener('keydown', function (e) {
    if (e.keyCode == 13) {
        logIn();
    }
});

logInPassword.addEventListener('keydown', function (e) {
    if (e.keyCode == 13) {
        logIn();
    }
});

function logIn() {
    var user = localStorage.getItem(logInUsername.value);
    var checkUser = JSON.parse(user);

    if (logInUsername.value != '' && logInPassword.value != '') {
        if (checkUser == null) {
            toast({
                title: 'Thông báo!',
                message: 'Bạn chưa có tài khoản! Mời bạn đăng ký &#128521',
                type: 'warning',
                duration: 2000,
            });
        } else {
            if (logInUsername.value == 'admin' && logInPassword.value == '12345678') {
                // location.reload();
                hindeModalLogin();
                localStorage.setItem('Now', logInUsername.value);
                localStorage.setItem('sessionID', generateToken());
                localStorage.setItem('sessionUser', checkUser.username);
                // logInUsername = '';
                // logInPassword = '';
                window.location.href = 'http://127.0.0.1:5500/index.html';
            } else if (logInUsername.value == checkUser.username && logInPassword.value == checkUser.password) {
                location.reload();
                hindeModalLogin();
                localStorage.setItem('Now', logInUsername.value);
                localStorage.setItem('sessionID', generateToken());
                localStorage.setItem('sessionUser', checkUser.username);
                // logInUsername = '';
                // logInPassword = '';
                window.location.href = 'http://127.0.0.1:5500/index.html';
            } else {
                if (!(logInPassword.value == checkUser.password)) {
                    toast({
                        title: 'Thông báo!',
                        message: 'Password chưa đúng &#128566&#128566',
                        type: 'warning',
                        duration: 2000,
                    });
                    logInPassword.focus();
                }
            }
        }
    } else {
        if (logInUsername.value == '' && logInPassword.value == '') {
            toast({
                title: 'Thông báo!',
                message: 'Bạn chưa nhập Username và Password &#128566&#128566',
                type: 'warning',
                duration: 2000,
            });
            logInUsername.focus();
        } else if (logInUsername.value == '') {
            toast({
                title: 'Thông báo!',
                message: 'Bạn chưa nhập Username &#128566&#128566',
                type: 'warning',
                duration: 2000,
            });
            logInUsername.focus();
        } else if (logInPassword.value == '') {
            toast({
                title: 'Thông báo!',
                message: 'Bạn chưa nhập Password &#128566&#128566',
                type: 'warning',
                duration: 2000,
            });
            logInPassword.focus();
        }
    }
}

formRegister.addEventListener('submit', function () {
    register();
});
formLogin.addEventListener('submit', function () {
    logIn();
});

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
    accountUser.innerText = `${sessionUser}`;
}

if (localStorage.getItem('Now') != 'admin') {
    document.querySelector('.js-icon-admin').classList.add('close-icon-admin');
}
//end thay đổi icon user

// quen mat khau
const quenBtns = document.querySelectorAll('.auth-form__help-forgot');
const modalCloseQuen = document.querySelector('.js-modal-close-quen');
const modalContainerQuen = document.querySelector('.js-modal-container-quen');
const modalQuen = document.querySelector('.js-modal-quen');
const email_quen = document.getElementById('email-quen');
const user_quen = document.getElementById('user-quen');
const pass_quen = document.getElementById('pass-quen');
pass_quen.parentElement.style.display = 'none';
const pass2_quen = document.getElementById('pass2-quen');
pass2_quen.parentElement.style.display = 'none';
const code_quen = document.getElementById('code-quen');
code_quen.parentElement.style.display = 'none';
const xacnhan1 = document.getElementById('xacnhan');
xacnhan1.style.display = 'none';
user_quen.addEventListener('keyup', function () {
    if (user_quen.value != '') {
        user_quen.parentElement.getElementsByClassName('error')[0].innerHTML = '';
    } else {
        user_quen.parentElement.getElementsByClassName('error')[0].innerHTML = '';
    }
});
email_quen.addEventListener('keyup', function () {
    if (email_quen.value != '') {
        email_quen.parentElement.getElementsByClassName('error')[0].innerHTML = '';
    } else {
        email_quen.parentElement.getElementsByClassName('error')[0].innerHTML = '';
    }
});

code_quen.addEventListener('keyup', function () {
    if (code_quen.value != '') {
        code_quen.parentElement.getElementsByClassName('error')[0].innerHTML = '';
    } else {
        code_quen.parentElement.getElementsByClassName('error')[0].innerHTML = '';
    }
});
pass_quen.addEventListener('keyup', function () {
    var form = pass_quen.parentElement;
    var pass_value = pass_quen.value;
    var error = form.getElementsByClassName('error')[0];
    var check = /^[a-zA-Z0-9\-]{8,12}$/;
    if (pass_value.match(check)) {
        error.innerHTML = 'Mật khẩu hợp lệ';
        error.style.color = 'green';
        kiemtra = true;
    } else {
        error.innerHTML = 'Mật khẩu không hợp lệ. Mật khẩu chứa 8-12 ký tự,không chứa khoảng trắng';
        error.style.color = 'red';
        kiemtra = false;
    }

    if (pass_value == '') {
        error.innerHTML = '';
        error.style.color = '#fff';
        kiemtra = false;
    }
});
pass2_quen.addEventListener('keyup', function () {
    var form = pass2_quen.parentElement;
    var pass2_value = pass2_quen.value;
    var pass_value = pass_quen.value;
    var error = form.getElementsByClassName('error')[0];
    var check = /^[a-zA-Z0-9\-]{8,12}$/;
    if (pass2_value != pass_value) {
        error.innerHTML = 'Mật khẩu xác nhận không đúng';
        error.style.color = 'red';
        kiemtra = false;
    } else {
        error.innerHTML = 'Mật khẩu xác nhận hợp lệ';
        error.style.color = 'green';
        kiemtra = true;
    }
    if (pass2_value == '') {
        error.innerHTML = '';
        error.style.color = '#fff';
        kiemtra = false;
    }
});

const nhap_xac_nhan = document.getElementById('nhapnhap');
let code_quen_rand;

function xacnhan() {
    if (email_quen.value == '') {
        var error = email_quen.parentElement.getElementsByClassName('error')[0];
        error.innerHTML = 'Chưa nhập email';
        error.style.color = 'red';
    }
    if (user_quen.value == '') {
        var error = user_quen.parentElement.getElementsByClassName('error')[0];
        error.innerHTML = 'Chưa nhập username';
        error.style.color = 'red';
    }

    if (email_quen.value != '' && user_quen.value != '') {
        var user = localStorage.getItem(user_quen.value);
        var data = JSON.parse(user);
        if (user == null) {
            alert('Không tìm thấy tài khoản này');
            pass_quen.value = '';
            pass2_quen.value = '';
            code_quen.value = '';
        } else if (user_quen.value != data.username || email_quen.value != data.email) {
            alert('Email hoặc Username không đúng');
            user_quen.value = '';
            email_quen.value = '';
        } else {
            const randString = '0123456789qwertyuiopasdfghjklzxcvbnmQWERTYUIOPASDFGHJKLZXCVBNM';
            const getRandomInt = (min, max) => {
                return Math.floor(Math.random() * (max - min)) + min;
            };
            const getRandomString = (length, base) => {
                let result = '';
                const baseLength = base.length;
                for (let i = 0; i < length; i++) {
                    const randomIndex = getRandomInt(0, baseLength);
                    result += base[randomIndex];
                }
                return result;
            };

            code_quen_rand = `${getRandomString(6, randString)}`;
            console.log(code_quen_rand);
            nhap_xac_nhan.style.display = 'none';
            pass_quen.parentElement.style.display = 'block';
            pass2_quen.parentElement.style.display = 'block';
            code_quen.parentElement.style.display = 'block';
            xacnhan1.style.display = 'block';
        }
    }
}

function quen() {
    if (pass_quen.value == '') {
        var error = pass_quen.parentElement.getElementsByClassName('error')[0];
        error.innerHTML = 'Chưa nhập mật khẩu mới';
        error.style.color = 'red';
    }

    if (pass2_quen.value == '') {
        var error = pass2_quen.parentElement.getElementsByClassName('error')[0];
        error.innerHTML = 'Chưa nhập mật khẩu xác nhận';
        error.style.color = 'red';
    }

    if (code_quen.value == '') {
        var error = code_quen.parentElement.getElementsByClassName('error')[0];
        error.innerHTML = 'Chưa nhập mã code';
        error.style.color = 'red';
    }
    if (pass_quen.value != '' && pass2_quen != '' && code_quen != '' && kiemtra == true) {
        if (code_quen.value == code_quen_rand) {
            var user = {
                email: email_quen.value,
                username: user_quen.value,
                password: pass_quen.value,
            };
            var json = JSON.stringify(user);
            localStorage.setItem(user_quen.value, json);
            toast({
                title: 'Thành công!',
                message: 'Bạn đã đổi mật khẩu thành công &#128521',
                type: 'success',
                duration: 2000,
            });
            hideModalQuen();
            nhap_xac_nhan.style.display = 'block';
            xacnhan1.style.display = 'none';
            user_quen.value = '';
            email_quen.value = '';
            pass_quen.value = '';
            pass2_quen.value = '';
            code_quen.value = '';
            pass_quen.parentElement.style.display = 'none';
            pass2_quen.parentElement.style.display = 'none';
            code_quen.parentElement.style.display = 'none';
        } else {
            alert('Code sai vui lòng xem console');
            code_quen.value = '';
            code_quen.focus();
        }
    }
}

function showModalQuen() {
    modalLogin.classList.remove('open-modal-login');
    modalQuen.classList.add('open-modal-quen');
}
function hideModalQuen() {
    modalQuen.classList.remove('open-modal-quen');
    nhap_xac_nhan.style.display = 'block';
    pass_quen.parentElement.style.display = 'none';
    pass2_quen.parentElement.style.display = 'none';
    code_quen.parentElement.style.display = 'none';
    xacnhan1.style.display = 'none';
    user_quen.value = '';
    pass_quen.value = '';
    pass2_quen.value = '';
    code_quen.value = '';
    email_quen.value = '';
}

for (const quenBtn of quenBtns) {
    quenBtn.addEventListener('click', showModalQuen);
}

modalCloseQuen.addEventListener('click', hideModalQuen);
modalQuen.addEventListener('click', hideModalQuen);
modalContainerQuen.addEventListener('click', function (e) {
    e.stopPropagation();
});

//log out
const btnLogout = document.querySelector('.js-log-out');
let historyLength = history.length;
function logOut() {
    location.reload();
    localStorage.removeItem('pageShop');
    localStorage.removeItem('sessionID');
    localStorage.removeItem('sessionUser');
    localStorage.removeItem('Now');
    localStorage.removeItem('ContentCart');
}

// for (var i = 0; i <= history.length; i++) {
//     history.back()
// }
// window.location.href = 'http://127.0.0.1:5500/';
btnLogout.addEventListener('click', logOut);
//end log out

//toTop
const totop = document.querySelector('.toTop');
totop.addEventListener('click', toHeader);
function toHeader() {
    window.scrollTo(0, 0);
}

//thay doi content
var btnPageProducts = document.querySelectorAll('.js-page-description-product');
const btnContent = document.querySelector('.js-change-content');

//z-index cho deader
const changeHeader = document.querySelector('.header-top');
function scrolled() {
    if (window.pageYOffset > 31) {
        changeHeader.classList.add('header-top-z-index');
    } else {
        changeHeader.classList.remove('header-top-z-index');
    }
}
window.addEventListener('scroll', scrolled);

var productLists = document.querySelector('.js-product-lists');

const getNameOfParam = window.location.href.split('?');
const pageController = document.querySelector('.js-page-controller');
var pageNum = '';
function renderPageNumber(resultFilter) {
    if (pageNum === '') {
        if (resultFilter) {
            for (var i = 1; i < resultFilter.length / 8 + 1; i++) {
                pageNum += `<li class="pagination-item js-active">
                                <a class="js-load-page-shop" onclick="changePage()" >${i}</a>
                            </li>
                        `;
            }
        }
    }
    pageController.innerHTML = pageNum;
    pageNum = '';
}
function renderPageNumberSearch(resultFilter) {
    if (pageNum === '') {
        if (resultFilter) {
            for (var i = 1; i < resultFilter.length / 8 + 1; i++) {
                pageNum += `<li class="pagination-item js-active">
                                <a class="js-load-page-shop" onclick="changePageSearch()" >${i}</a>
                            </li>
                        `;
            }
        }
    }
    pageController.innerHTML = pageNum;
    pageNum = '';
}
const dataSearch = document.querySelector('.js-search-product');

function changePageSearch() {
    window.scrollTo(0, 0);
    var resultProducts = [];
    const numberPage = event.target.innerText;
    var resultSearch = searchProduct();
    var length = resultSearch.length;
    if (resultSearch.length != 0) {
        for (var i = 0; i < length; i++) {
            if (numberPage == 1) {
                if (i < 8) {
                    resultProducts.push(resultSearch[i]);
                }
            } else {
                if (i >= (numberPage - 1) * 8 && i <= numberPage * 8) {
                    resultProducts.push(resultSearch[i]);
                }
            }
        }
    }
    renderProductFilter(resultProducts);
}

function changePage() {
    window.scrollTo(0, 0);
    var resultProducts = [];
    const numberPage = event.target.innerText;
    arrProductData.forEach((item) => {
        if (numberPage == 1) {
            if (item.id <= 8) {
                resultProducts.push(item);
            }
        } else {
            if (item.id > (numberPage - 1) * 8 && item.id <= numberPage * 8) {
                resultProducts.push(item);
            }
        }
    });
    renderProductFilter(resultProducts);
}
const titleProductList = document.querySelector('.title-product-list');
var arrCategogys = JSON.parse(localStorage.getItem('Category'));
// console.log(arrCategogys)
var s1 = '';
function renderCategory() {
    freshfruit();
    snack();
    coffee();
    vegetable();
    if (s1 === '') {
        arrCategogys.forEach((item) => {
            s1 += `<li class="title-product-item">
                    <div class="product-item">
                        <img src="${item.img}" alt="">
                        <a  class="render-by-category" onclick="renderByCategory()">${item.title}</a>
                    </div>
                <div class="count-product ">${item.count}</div>
            </li>`;
        });
        titleProductList.innerHTML = s1;
    }
}

function freshfruit() {
    var length = arrProductData.length,
        dem = 0;
    for (var i = 0; i < length; i++) {
        if (arrProductData[i].category == 'freshfruit') {
            dem++;
        }
    }

    for (var i = 0; i < arrCategogys.length; i++) {
        if (arrCategogys[i].name == 'freshfruit') {
            arrCategogys[i].count = dem;
        }
    }
    var json = JSON.stringify(arrCategogys);
    localStorage.setItem('Category', json);
}

function vegetable() {
    var length = arrProductData.length,
        dem = 0;
    for (var i = 0; i < length; i++) {
        if (arrProductData[i].category == 'vegetable') {
            dem++;
        }
    }
    for (var i = 0; i < arrCategogys.length; i++) {
        if (arrCategogys[i].name == 'vegetable') {
            arrCategogys[i].count = dem;
        }
    }
    var json = JSON.stringify(arrCategogys);
    localStorage.setItem('Category', json);
}
function snack() {
    var length = arrProductData.length,
        dem = 0;
    for (var i = 0; i < length; i++) {
        if (arrProductData[i].category == 'snack') {
            dem++;
        }
    }
    for (var i = 0; i < arrCategogys.length; i++) {
        if (arrCategogys[i].name == 'snack') {
            arrCategogys[i].count = dem;
        }
    }
    var json = JSON.stringify(arrCategogys);
    localStorage.setItem('Category', json);
}
function coffee() {
    var length = arrProductData.length,
        dem = 0;
    for (var i = 0; i < length; i++) {
        if (arrProductData[i].category == 'coffee') {
            dem++;
        }
    }
    for (var i = 0; i < arrCategogys.length; i++) {
        if (arrCategogys[i].name == 'coffee') {
            arrCategogys[i].count = dem;
        }
    }
    var json = JSON.stringify(arrCategogys);
    localStorage.setItem('Category', json);
}

function renderByCategory() {
    window.scrollTo(0, 0);
    var resultFilter = [];
    var elementCategory = event.target;
    var nameCategory = elementCategory.innerText.toLowerCase().replace(/\s/g, '');
    arrProductData.forEach((item) => {
        if (nameCategory.includes(item.category)) {
            resultFilter.push(item);
        }
    });
    renderProductFilter(resultFilter);
    renderPageNumber(resultFilter);
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
    renderPageNumber();
    renderCategory();
}
for (const btnPageShop of btnPageShops) {
    btnPageShop.addEventListener('click', function () {
        var resultFilter = [];
        openPageShop();
        for (var i = 0; i < 8; i++) {
            resultFilter.push(arrProductData[i]);
        }
        renderProductFilter(resultFilter);
        renderPageNumber(arrProductData);
    });
}

function openPageAbout() {
    btnContent.classList.add('close-content');
    btnOpenPageShop.classList.remove('open-page');
    btnOpenPageContact.classList.remove('open-page');
    btnOpenPageAbout.classList.add('open-page');
    window.scrollTo(0, 0);
}
for (const btnPageAbout of btnPageAbouts) {
    btnPageAbout.addEventListener('click', function () {
        openPageAbout();
    });
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
    btnPageContact.addEventListener('click', function () {
        openPageContact();
    });
}

if (!getNameOfParam[1]) {
    localStorage.removeItem('pageShop');
    btnContent.classList.remove('close-content');
    sliderHome();
    btnOpenPageShop.classList.remove('open-page');
}

//page about

function searchProduct() {
    var resultProducts = [];
    if (dataSearch.value != '') {
        localStorage.setItem('pageShop', 'pageShop');
        openPageShop();
        arrProductData.forEach((item) => {
            if (item.title.toLowerCase().includes(dataSearch.value)) {
                resultProducts.push(item);
            }
        });

        renderPageNumberSearch(resultProducts);
        renderProductFilter(resultProducts);
        if (resultProducts.length == 0) {
            productLists.innerText = 'Không có sản phẩm bạn cần tìm.';
        }
    }
    console.log(resultProducts);
    // return resultProducts
}

dataSearch.addEventListener('keydown', function (e) {
    if (e.keyCode == 13) {
        searchProduct();
    }
});

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
});
btnCloseModalMini.addEventListener('click', function () {
    modalMini.classList.remove('open-modal-menu-mb');
});

overlayMenu.addEventListener('click', function () {
    modalMini.classList.remove('open-modal-menu-mb');
});
// end modal mini
const btnNavLinks = document.querySelectorAll('.nav-link-pc');
for (const btnNavLink of btnNavLinks) {
    btnNavLink.addEventListener('click', () => {
        modalMini.classList.remove('open-modal-menu-mb');
    });
}

//thông báo
function toast({ title = '', message = '', type = 'info', duration = 2000 }) {
    const main = document.getElementById('toast');
    if (main) {
        const toast = document.createElement('div');

        const autoRemove = setTimeout(function () {
            main.removeChild(toast);
        }, duration + 1000);

        toast.onclick = function (e) {
            if (e.target.closest('.toast__close')) {
                main.removeChild(toast);
                clearTimeout(autoRemove);
            }
        };
        const icons = {
            success: 'fa-solid fa-circle-check',
            info: 'fa-solid fa-circle-info',
            warning: 'fa-solid fa-circle-exclamation',
        };
        const icon = icons[type];
        const delay = (duration / 1000).toFixed(2);
        toast.classList.add('toast', `toast--${type}`);
        toast.style.animation = `slideInleft ease .6s, fadeOut linear 1s ${delay}s forwards`;

        toast.innerHTML = `
                <div class="toast__icon">
                    <i class="${icon}"></i>
                </div>
                <div class="toast__body">
                    <h3 class="toast__title">${title}</h3>
                    <p class="toast__msg">${message}</p>
                </div>
                <div class="toast__close">
                    <i class="fa-solid fa-xmark"></i>
                </div>
            `;
        main.appendChild(toast);
    }
}

var datafilter = '';
function renderProductFilter(resultFilter) {
    var dem = 0;
    if (datafilter === '') {
        resultFilter.forEach((item) => {
            if (dem < 8) {
                datafilter += `<div class="col col-3 col-4 col-6 col-12 mb-24">
                <div class="popular-product-cart-wrap js-page-description-product" onclick="pageDescription()">
                    <div class="product-card-header">
                        <img class="js-product-cart-src img-product-box" src="${item.img}"
                            alt="">
                    </div>

                    <div class="product-cart-content">
                        <a class="product-cart-title js-product-cart-title" >${item.title}</a>
                        <p class="product-cart-description">${item.detail}</p>
                        <div class="product-card-bottom">
                            <span class="js-product-cart-price current-price">$${item.price}</span>
                            <div class="add-cart" onclick="addCartPageShop(event)">
                                <a class="btn">Add</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>`;
            }
            dem++;
        });
        productLists.innerHTML = datafilter;
        datafilter = '';
    }
}

//lọc sản phẩm theo giá
const elementFilter = document.querySelector('.js-filter-by-price');
function filterByPrice() {
    var resultFilter = [];

    arrProductData.forEach((item) => {
        if (elementFilter.value == 1) {
            if (item.price > 0 && item.price <= 20) {
                resultFilter.push(item);
                return resultFilter;
            }
        }
        if (elementFilter.value == 2) {
            if (item.price > 20 && item.price <= 40) {
                resultFilter.push(item);
                return resultFilter;
            }
        } else if (elementFilter.value == 3) {
            if (item.price > 40 && item.price <= 60) {
                resultFilter.push(item);
            }
        } else if (elementFilter.value == 4) {
            if (item.price > 60 && item.price <= 80) {
                resultFilter.push(item);
            }
        } else if (elementFilter.value == 5) {
            if (item.price > 80 && item.price <= 100) {
                resultFilter.push(item);
            }
        } else if (elementFilter.value == 6) {
            if (item.price > 100) {
                resultFilter.push(item);
            }
        }
    });
    renderProductFilter(resultFilter);
    renderPageNumber(resultFilter);

    if (elementFilter.value == 0) {
        for (var i = 0; i < 8; i++) {
            resultFilter.push(arrProductData[i]);
        }
        renderProductFilter(resultFilter);
        renderPageNumber(arrProductData);
    }
}
//end lọc

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
    </div>`;
    window.scrollTo(0, 0);
}

for (var btnPageProduct of btnPageProducts) {
    btnPageProduct.addEventListener('click', getValueProducts);
}

function getValueProducts(event) {
    const btnPageDescription = event.target;
    var elementSmall = btnPageDescription.parentElement;
    var valueTitleProduct = elementSmall.parentElement.querySelector('.js-product-cart-title').innerText;
    var srcImageProduct = elementSmall.parentElement.querySelector('.js-product-cart-src').src;
    var description = elementSmall.parentElement.querySelector('.product-cart-description').innerText;
    var priceProduct = elementSmall.parentElement.querySelector('.js-product-cart-price').innerText;

    pageDescriptionProduct(valueTitleProduct, srcImageProduct, description, priceProduct);
}

//hello
function pageDescription() {
    btnContent.classList.remove('close-content');
    localStorage.removeItem('pageShop');
    document.querySelector('.js-open-page-shop').classList.remove('open-page');
    getValueProducts(event);
}

//THÊM SẢN PHẨM BÊN TRANG SHOP
function addCartPageShop(event) {
    event.stopPropagation();
    var button = event.target;
    var product = button.parentElement.parentElement.parentElement.parentElement;
    var title = product.getElementsByClassName('product-cart-title')[0].innerText;
    var img = product.getElementsByClassName('js-product-cart-src')[0].src;
    var price = product.getElementsByClassName('current-price')[0].innerText.replace('$', '');
    add_to_cart(title, img, price);
    var abc = document.querySelector('.amount-product');
    abc.style.animation = 'abc .5s ease-in-out';
    updateTotal();
}
function addCartPageDescription() {
    if (isLogined()) {
        var button = event.target;
        var product = button.parentElement.parentElement.parentElement.parentElement;
        var title = product.getElementsByClassName('title-detail')[0].innerText;
        var img = product.getElementsByClassName('src-src-src')[0].src;
        var price = product.getElementsByClassName('current-price')[0].innerText.replace('$', '');
        add_to_cart(title, img, price);
        updateTotal();
    } else {
        showModalLogin();
    }
}

function update() {
    var cart_dropdown_item = document.getElementsByClassName('cart-dropdown-item');
    var amount_product = document.getElementsByClassName('amount-product')[0];
    amount_product.innerText = cart_dropdown_item.length;
}
function updateTotal() {
    var cart_dropdown_item = document.getElementsByClassName('cart-dropdown-item');
    var total = 0;
    for (var i = 0; i < cart_dropdown_item.length; i++) {
        var quantity = cart_dropdown_item[i].getElementsByClassName('cart-quantity')[0].value;
        var price = cart_dropdown_item[i].getElementsByClassName('price-product')[0];
        price = parseFloat(price.innerText);
        total = total + quantity * price;
    }
    document.getElementsByClassName('cart-dropdown-total-bill')[0].innerText = '$' + Math.round(total * 100) / 100;
}
const ContentCart = [];
if (localStorage.getItem('ContentCart')) {
    var json = localStorage.getItem('ContentCart');
    var json1 = JSON.parse(json);
    for (var i = 0; i < json1.length; i++) {
        ContentCart[i] = json1[i];
    }
}
function add_to_cart(title, img, price) {
    var abc = document.querySelector('.amount-product');
    abc.style.animation = 'abc .5s ease-in-out';
    var cart_dropdown_list = document.getElementsByClassName('cart-dropdown-list')[0];
    var cart_dropdown_title = cart_dropdown_list.getElementsByClassName('cart-dropdown-title');
    for (var i = 0; i < cart_dropdown_title.length; i++) {
        if (cart_dropdown_title[i].innerText == title) {
            toast({
                title: 'Thông báo!',
                message: 'Sản phẩm này đã có trong giỏ hàng &#128578&#128578',
                type: 'warning',
                duration: 4000,
            });
            return;
        }
    }
    var newProductCart = {
        title: title,
        img: img,
        price: price,
    };
    ContentCart.push(newProductCart);
    var json = JSON.stringify(ContentCart);
    localStorage.setItem('ContentCart', json);
    var li = document.createElement('li');
    li.classList.add('cart-dropdown-item');
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
    `;
    li.innerHTML = content;
    cart_dropdown_list.append(li);
    update();
    var cart_quantity = cart_dropdown_list.getElementsByClassName('cart-quantity');
    for (var i = 0; i < cart_quantity.length; i++) {
        cart_quantity[i].addEventListener('change', function () {
            var input = event.target;
            if (isNaN(input.value) || input.value <= 0) {
                input.value = 1;
            }
            updateTotal();
        });
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
    var button = event.target;
    var img = button.parentElement.parentElement.getElementsByClassName('img-product-img')[0].src;
    var title = button.parentElement.parentElement.getElementsByClassName('cart-dropdown-title')[0].innerText;
    var price = button.parentElement.parentElement.getElementsByClassName('price-product')[0].innerText;
    // var json = localStorage.getItem("ContentCart")
    // var json1 = JSON.parse(json)
    // for(var i = 0 ; i < json1.length ; i++) {
    //     ContentCart[i] = json1[i]
    // }
    for (var i = 0; i < ContentCart.length; i++) {
        if (ContentCart[i].img == img && ContentCart[i].title == title && ContentCart[i].price == price) {
            ContentCart.splice(i, 1);
            var json = JSON.stringify(ContentCart);
            localStorage.setItem('ContentCart', json);
            break;
        }
    }
    button.parentElement.parentElement.remove();
    update();
    updateTotal();
}

// const SanPhamDaMua = []
if (localStorage.getItem('SanPhamDaMua')) {
    var SanPhamKhachHang = localStorage.getItem('SanPhamDaMua');
    var json = JSON.parse(SanPhamKhachHang);
    for (var i = 0; i < json.length; i++) {
        SanPhamDaMua[i] = json[i];
    }
}
const btnCheckOut = document.querySelector('.js-check-out');
btnCheckOut.addEventListener('click', buy);
function buy() {
    var cart_dropdown_list = document.getElementsByClassName('cart-dropdown-list')[0];
    var now = localStorage.getItem('Now');
    if (cart_dropdown_list.innerText == '') {
        toast({
            title: 'Thông báo!',
            message: 'Giỏ hàng trống. Vui lòng thêm sản phẩm &#128522&#128522',
            type: 'warning',
            duration: 2000,
        });
    } else if (localStorage.getItem('Now')) {
        localStorage.removeItem('ContentCart');
        var date = new Date();
        var cart_dropdown_item = cart_dropdown_list.getElementsByClassName('cart-dropdown-item');
        for (var i = 0; i < cart_dropdown_item.length; i++) {
            var title = cart_dropdown_item[i].getElementsByClassName('cart-dropdown-title')[0].innerText;
            var img = cart_dropdown_item[i].getElementsByClassName('img-product-img')[0].src;
            var quantity = cart_dropdown_item[i].getElementsByClassName('cart-quantity')[0].value;
            var price = cart_dropdown_item[i].getElementsByClassName('price-product')[0].innerText;
            var productBuy = {
                username: now,
                image: img,
                title: title,
                quantity: quantity,
                price: price,
                date: date.getDate(),
                month: date.getMonth() + 1,
                year: date.getFullYear(),
                tinhtrang: 0,
            };
            SanPhamDaMua.push(productBuy);
        }
        for (var i = 0; i < SanPhamDaMua.length - 1; i++) {
            for (var j = i + 1; j < SanPhamDaMua.length; j++) {
                if (SanPhamDaMua[i].year < SanPhamDaMua[j].year) {
                    var temp = SanPhamDaMua[i];
                    SanPhamDaMua[i] = SanPhamDaMua[j];
                    SanPhamDaMua[j] = temp;
                } else if (SanPhamDaMua[i].year == SanPhamDaMua[j].year) {
                    if (SanPhamDaMua[i].month < SanPhamDaMua[j].month) {
                        var temp = SanPhamDaMua[i];
                        SanPhamDaMua[i] = SanPhamDaMua[j];
                        SanPhamDaMua[j] = temp;
                    } else if (SanPhamDaMua[i].month == SanPhamDaMua[j].month) {
                        if (SanPhamDaMua[i].date < SanPhamDaMua[j].date) {
                            var temp = SanPhamDaMua[i];
                            SanPhamDaMua[i] = SanPhamDaMua[j];
                            SanPhamDaMua[j] = temp;
                        }
                    }
                }
            }
        }

        var sanpham = JSON.stringify(SanPhamDaMua);
        localStorage.setItem('SanPhamDaMua', sanpham);
        toast({
            title: 'Thành công!',
            message: 'Chúc mừng! Bạn mua hàng thành công &#128525&#129297&#129297',
            type: 'success',
            duration: 2000,
        });
        cart_dropdown_list.innerHTML = '';
        updateTotal();
        update();
    } else {
        showModalLogin();
        return;
    }
}

window.addEventListener('scroll', load_animate);
function load_animate() {
    var load__animate = document.querySelectorAll('.load__animate');
    for (var i = 0; i < load__animate.length; i++) {
        var windowheigth = window.innerHeight;
        var load__animateTop = load__animate[i].getBoundingClientRect().top;
        if (load__animateTop < windowheigth) {
            load__animate[i].classList.add('active__load');
        } else {
            load__animate[i].classList.remove('active__load');
        }
    }
}
