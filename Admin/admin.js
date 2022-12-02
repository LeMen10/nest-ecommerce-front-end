let taikhoannguoidung = []
if (localStorage.getItem("TaiKhoanDangKy")) {
    var json = localStorage.getItem("TaiKhoanDangKy")
    var json1 = JSON.parse(json)
    for (var i = 0; i < json1.length; i++) {
        taikhoannguoidung[i] = json1[i]
    }
}

//do rong menu
var menu = document.getElementsByClassName("menu")[0]
var btn = document.getElementsByClassName("open-close")[0]
var text = document.getElementsByClassName("menu-top-text")[0]
var text_menu = document.getElementsByClassName("menu-bar-text")
var text_footer = document.getElementsByClassName("menu-footer-text")[0]
var bottom_content = document.getElementsByClassName("bottom-content")[0]
var hello = document.getElementsByClassName("hello")
let isBtn = true
btn.addEventListener("click", function () {
    if (isBtn) {
        menu.classList.add("close")
        isBtn = false
        text.style.opacity = "0"
        text_footer.style.opacity = "0"
        bottom_content.style.opacity = "1"
        for (var i = 0; i < text_menu.length; i++) {
            text_menu[i].style.opacity = "0"
        }
        for (var i = 0; i < hello.length; i++) {
            hello[i].style.display = "table-cell"
        }
    }
    else {
        menu.classList.remove("close")
        isBtn = true
        text.style.opacity = "1"
        text_footer.style.opacity = "1"
        bottom_content.style.opacity = "0"
        for (var i = 0; i < text_menu.length; i++) {
            text_menu[i].style.opacity = "1"
        }
        for (var i = 0; i < hello.length; i++) {
            hello[i].style.display = "none"
        }
    }
})
//anh sang
var mode_button = document.getElementsByClassName("button-mode")[0]
var mode_content = document.getElementsByClassName("mode-content")[0]
mode_button.addEventListener("click", function () {
    if (!document.body.classList.contains("dark")) {
        document.body.classList.add("dark")
        mode_button.getElementsByClassName("circle")[0].style.left = "29px"
        mode_content.innerText = "Light mode"
        var check = true;
        localStorage.setItem("mode", check)
    }
    else {
        document.body.classList.remove("dark")
        mode_button.getElementsByClassName("circle")[0].style.left = "2px"
        mode_content.innerText = "Dark mode"
        var check = false;
        localStorage.setItem("mode", check)
    }
})
//logout
var logOut = document.getElementsByClassName("menu-footer")[0]
logOut.addEventListener("click", function () {
    
    window.location.href = "../index.html"
})

//function danh sach

let dangky = [] // chua danh sach user
let currentPage = 1
let perPage = 10 // tong so user
let perUser = []
var page = document.getElementsByClassName("page")[0]

function page_page() {
    currentPage = 1
    if (localStorage.getItem("TaiKhoanDangKy")) {
        var user = localStorage.getItem("TaiKhoanDangKy")
        var json = JSON.parse(user)
        for (var i = 0; i < json.length; i++) {
            dangky[i] = json[i]
            // console.log(dangky[i].username)
        }
        perUser = dangky.slice(
            (currentPage - 1) * perPage,
            (currentPage - 1) * perPage + perPage
        )
        var kq = `
            <table class="table-user">
            <tr>
                <th width="10px">Number</th>
                <th width="30px">Username</th>
                <th width="30px">Gmail</th>
                <th width="20px">Date Register</th>
                <th width="10px">Info</th>
            </tr>

        `
        for (var i = 0; i < perUser.length; i++) {
            kq += `
            <tr>
                <td data="Number" width="10px">${i + 1}</td>
                <td data="Username" width="30px">${perUser[i].username}</td>
                <td data="Email" width="30px">${perUser[i].email}</td>
                <td data="Time Register" width="20px">${perUser[i].day}/${perUser[i].month}/${perUser[i].year}</td>
                <td data="info" width="10px"><button>Read</button></td>
            </tr>
            `
        }
    }
    else {
        var kq = `
            <table class="table-user">
            <tr>
                <th width="10px">Number</th>
                <th width="30px">Username</th>
                <th width="30px">Gmail</th>
                <th width="20px">Date Register</th>
                <th width="10px">Info</th>
            </tr>
        `
    }
    return kq + `</table>`;
}
function totalpage() {
    let totalPage = dangky.length / perPage
    totalPage = Math.ceil(totalPage)
    page.innerHTML = ""
    for (var i = 1; i <= totalPage; i++) {
        page.innerHTML += `<div class="page-number"onclick="number(${i})">${i}
        </div>`
    }
}
var page_number = document.getElementsByClassName("page-number")
function number(num) {
    for (var i = 0; i < page_number.length; i++) {
        page_number[i].classList.remove("active-color")
    }
    page_number[num - 1].classList.add("active-color")
    currentPage = num
    perUser = dangky.slice(
        (currentPage - 1) * perPage,
        (currentPage - 1) * perPage + perPage
    )
    if (localStorage.getItem("TaiKhoanDangKy")) {
        var kq = `
            <table class="table-user">
            <tr>
                <th width="10px">Number</th>
                <th width="30px">Username</th>
                <th width="30px">Gmail</th>
                <th width="20px">Date Register</th>
                <th width="10px">Info</th>
            </tr>

        `
        for (var i = 0; i < perUser.length; i++) {
            kq += `
            <tr>
                <td width="10px">${i + 1}</td>
                <td width="30px">${perUser[i].username}</td>
                <td width="30px">${perUser[i].email}</td>
                <td width="20px">${perUser[i].day}/${perUser[i].month}/${perUser[i].year}</td>
                <td width="10px"><button>Read</button></td>
            </tr>
            `
        }
    }
    else {
        var kq = `
            <table class="table-user">
            <tr>
                <th width="10px">Number</th>
                <th width="30px">Username</th>
                <th width="30px">Gmail</th>
                <th width="20px">Date Register</th>
                <th width="10px">Info</th>
            </tr>
        `
    }
    kq + `</table>`;
    content_home.innerHTML = kq
    Text_home_2.innerText = "Page " + num
}


const SanPhamDaMua = []
if (localStorage.getItem("SanPhamDaMua")) {
    var json = localStorage.getItem("SanPhamDaMua")
    var sp = JSON.parse(json)
    for (var i = 0; i < sp.length; i++) {
        SanPhamDaMua[i] = sp[i]
    }
}

let total_sum
let order
if (localStorage.getItem("total")) {
    var json = localStorage.getItem("total");
    total_sum = json
}
if (localStorage.getItem("order-count")) {
    var json = localStorage.getItem('order-count')
    order = json
}
var menu_bar_color = document.getElementsByClassName("menu-bar-link")
function hienthi_home() {
    for(var i = 0 ; i < menu_bar_color.length ; i++){
        menu_bar_color[i].classList.remove("menu-bar-link-color")
    }
    menu_bar_color[0].classList.add("menu-bar-link-color")
    searchName.style.display = "none"
    analytic_info.style.display = "none"
    var total_sum = 0
    var order_sum = 0
    var tk_sum = 0
    if (localStorage.getItem("SanPhamDaMua")) {
        var json = localStorage.getItem("SanPhamDaMua")
        var json1 = JSON.parse(json)
        var SPham = json1
        for (var i = 0; i < SPham.length; i++) {
            if (SPham[i].tinhtrang == 1) {
                total_sum += (SPham[i].quantity * SPham[i].price)
                order_sum++
            }
        }
    }
    if (localStorage.getItem("TaiKhoanDangKy")) {
        var json = localStorage.getItem("TaiKhoanDangKy")
        var json1 = JSON.parse(json)
        var TKhoan = json1
        for (var i = 0; i < TKhoan.length; i++) {
            tk_sum++
        }
    }
    var kq = `
    <table class="table-home" cellspacing="20px" width="100%">
                    <tr>
                        <td width="25%" class="td-1">
                            <div class="td-text">
                                Products
                            </div>
                            <div class="td-number">
                                ${PRODUCTDATA.length}
                            </div>
                            <div class="td-bottom">
                                <span class="percent percent-1">
                                    3.65%
                                </span>
                                <span class="note">
                                    Since last weak
                                </span>
                            </div>
                        </td>
                        <td width="25%" class="td-2">
                            <div class="td-text">
                                Earnings
                            </div>
                            <div class="td-number">
                                $${total_sum}
                            </div>
                            <div class="td-bottom">
                                <span class="percent percent-2">
                                    6.65%
                                </span>
                                <span class="note">
                                    Since last weak
                                </span>
                            </div>
                        </td>
                        <td width="50%" rowspan="2" class="helloooo">
                            <div class="chart">
                                <div class="chart-1"><div class="thang1"></div><Span>Jan</span></div>
                                <div class="chart-1"><div class="thang2"></div><Span>Feb</span></div>
                                <div class="chart-1"><div class="thang3"></div><Span>Mar</span></div>
                                <div class="chart-1"><div class="thang4"></div><Span>Apr</span></div>
                                <div class="chart-1"><div class="thang5"></div><Span>May</span></div>
                                <div class="chart-1"><div class="thang6"></div><Span>Jun</span></div>
                                <div class="chart-1"><div class="thang7"></div><Span>Jul</span></div>
                                <div class="chart-1"><div class="thang8"></div><Span>Aug</span></div>
                                <div class="chart-1"><div class="thang9"></div><Span>Sep</span></div>
                                <div class="chart-1"><div class="thang10"></div><Span>Oct</span></div>
                                <div class="chart-1"><div class="thang11"></div><Span>Now</span></div>
                                <div class="chart-1"><div class="thang12"></div><Span>Dec</span></div>
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td class="td-3">
                            <div class="td-text">
                                Visitors
                            </div>
                            <div class="td-number">
                                ${tk_sum}
                            </div>
                            <div class="td-bottom">
                                <span class="percent precent-3">
                                    5.25%
                                </span>
                                <span class="note">
                                    Since last weak
                                </span>
                            </div>
                        </td>
                        <td class="td-4">
                            <div class="td-text">
                                Orders
                            </div>
                            <div class="td-number">
                                ${order_sum}
                            </div>
                            <div class="td-bottom">
                                <span class="percent percent-4">
                                    -2.25%
                                </span>
                                <span class="note">
                                    Since last weak
                                </span>
                            </div>
                        </td>
                    </tr>
                </table>
    `
    return kq
}
var header_home = document.getElementsByClassName("header-home")[0]
var content_home = document.getElementsByClassName("content-home")[0]
var Text_home = document.getElementsByClassName("text-home")[0]
var pageNumber = document.getElementsByClassName("pageNumber")[0]
var Text_home_2 = document.getElementsByClassName("text-home2")[0]
var searchName = document.getElementsByClassName("searchName")[0]
function user_inner() {
    for(var i = 0 ; i < menu_bar_color.length ; i++){
        menu_bar_color[i].classList.remove("menu-bar-link-color")
    }
    menu_bar_color[1].classList.add("menu-bar-link-color")
    searchName.style.display = "block"
    analytic_info.style.display = "none"
    header_home.style.display = "none"
    Text_home.innerText = "USER REGISTER LIST"
    if (localStorage.getItem("TaiKhoanDangKy")) {
        pageNumber.style.display = "flex"
    }
    content_home.innerHTML = page_page()
    Text_home_2.innerText = "Page 1"
    totalpage()
    page_number[0].classList.add("active-color")
    index = 0
    page.style = `transform: translateX(0px)`
    page_number_length = page_number[0].offsetWidth + 10
    positionX = 0
}
function order_inner() {
    for(var i = 0 ; i < menu_bar_color.length ; i++){
        menu_bar_color[i].classList.remove("menu-bar-link-color")
    }
    menu_bar_color[4].classList.add("menu-bar-link-color")
    searchName.style.display = "block"
    analytic_info.style.display = "none"
    header_home.style.display = "none"
    Text_home.innerText = "ORDER USER LIST"
    content_home.innerHTML = page1Buy()
    if (menu.classList.contains("close")) {
        for (var i = 0; i < hello.length; i++) {
            hello[i].style.display = "table-cell"
        }
    }
    else {
        for (var i = 0; i < hello.length; i++) {
            hello[i].style.display = "none"
        }
    }
    if (localStorage.getItem("SanPhamDaMua")) {
        pageNumber.style.display = "flex"
    }
    Text_home_2.innerText = "Page 1"
    totalPage_Buy()
    page_number[0].classList.add("active-color")
    index = 0
    page.style = `transform: translateX(0px)`
    page_number_length = page_number[0].offsetWidth + 10
    positionX = 0
}
function home_inner() {
    header_home.style.display = "flex"
    Text_home.innerText = "DASHBOARD"
    content_home.innerHTML = hienthi_home()
    pageNumber.style.display = "none"
}

window.onload = function () {
    if (!!localStorage.getItem("mode")) {
        var mode_value = localStorage.getItem("mode")
        var value = JSON.parse(mode_value)
        if (value == true) {
            document.body.classList.add("dark")
            mode_button.getElementsByClassName("circle")[0].style.left = "29px"
            mode_content.innerText = "Light mode"
        }
        else {
            document.body.classList.remove("dark")
            mode_button.getElementsByClassName("circle")[0].style.left = "2px"
            mode_content.innerText = "Dark mode"
        }
    }
    Text_home.innerText = "DASHBOARD"
    content_home.innerHTML = hienthi_home()
    pageNumber.style.display = "none"
}

//slide
var page_number = document.getElementsByClassName("page-number")
var next = document.getElementsByClassName("next")[0]
var prev = document.getElementsByClassName("prev")[0]
let index = 0

let positionX = 0;
next.addEventListener("click", function () {
    changeSlide(1)
})
prev.addEventListener("click", function () {
    changeSlide(-1)
})
function changeSlide(direction) {
    if (direction == 1) {
        if (index > (page_number.length - 3) - 1) {
            return
        }
        positionX = positionX - page_number_length
        // console.log(positionX)
        page.style = `transform: translateX(${positionX}px)`
        index++;
    }
    else if (direction == -1) {
        if (index <= 0) {
            index = 0
            return
        }
        positionX = positionX + page_number_length
        page.style = `transform: translateX(${positionX}px)`
        index--
        // console.log(index)
    }
}
//page buy
let currentPageBuy = 1
let Count = 10
let count = 0

function page1Buy() {
    var kq = `
    <table class="table-buy">
        <tr>
            <th width="15%">Username</th>
            <th width="10%">Picture</th>
            <th width="25%">Name Product</th>
            <th width="10%">Quantity</th>
            <th width="10%">Price</th>
            <th width="10%">Total</th>
            <th class="hello" width="10%">Time</th>
            <th class="hello" width="10%">Info</th>
        </tr>
    `
    if (localStorage.getItem("SanPhamDaMua")) {
        var json = localStorage.getItem("SanPhamDaMua")
        var sp = JSON.parse(json)
        for (var i = 0; i < sp.length; i++) {
            SanPhamDaMua[i] = sp[i]
        }
        for (var i = 0; i < SanPhamDaMua.length; i++) {
            var stringGiao
            if (SanPhamDaMua[i].tinhtrang == 0) {
                stringGiao = "Not Delivery"
            }
            else {
                stringGiao = "Delivered"
            }
            var total = SanPhamDaMua[i].quantity * SanPhamDaMua[i].price
            kq += `
                <tr>
                    <td>${SanPhamDaMua[i].username}</td>
                    <td class="image-historyy"><img class="image-history" src="${SanPhamDaMua[i].image}" alt=""></td>
                    <td>${SanPhamDaMua[i].title}</td>
                    <td>${SanPhamDaMua[i].quantity}</td>
                    <td>$${SanPhamDaMua[i].price}</td>
                    <td>$${total}</td>
                    <td class="hello">${SanPhamDaMua[i].date}/${SanPhamDaMua[i].month}/${SanPhamDaMua[i].year}</td>
                    <td class="hello hello1"><span class="helloo">${stringGiao}</span>
                    <button class="btn--1 btn--3" onclick="tinhTrang(${i},${1})">Giao</button>
                    <button class="btn--1 btn--2" onclick="tinhTrang(${i},${0})">Chua Giao</button>
                    </td>
                </tr>
                `
            count++
            if (count == Count) {
                break
            }
        }
    }
    count = 0
    return kq += `</table>`
}
function totalPage_Buy() {
    let totalPageBuy
    let arraylength = 0
    for (var i = 0; i < SanPhamDaMua.length; i++) {
        arraylength++
    }
    totalPageBuy = Math.ceil(arraylength / Count)
    page.innerHTML = ""
    for (var i = 1; i <= totalPageBuy; i++) {
        page.innerHTML += `<div class="page-number"onclick="num(${i})">${i}</div>`
    }
}
function num(num) {
    for (var i = 0; i < page_number.length; i++) {
        page_number[i].classList.remove("active-color")
    }
    var kq = `
        <table class="table-buy">
            <tr>
                <th width="15%">Username</th>
                <th width="10%">Picture</th>
                <th width="25%">Name Product</th>
                <th width="10%">Quantity</th>
                <th width="10%">Price</th>
                <th width="10%">Total</th>
                <th class="hello" width="10%">Time</th>
                <th class="hello" width="10%">Info</th>
            </tr>
    `
    for (var i = 0; i < SanPhamDaMua.length; i++) {
        count++
        if (count >= (num * Count - Count + 1) && count <= num * Count) {
            var stringGiao
            if (SanPhamDaMua[i].tinhtrang == 0) {
                stringGiao = "Not Delivery"
            }
            else {
                stringGiao = "Delivered"
            }
            var total = SanPhamDaMua[i].quantity * SanPhamDaMua[i].price
            kq += `
            <tr>
                <td>${SanPhamDaMua[i].username}</td>
                <td class="image-historyy"><img class="image-history" src="${SanPhamDaMua[i].image}" alt=""></td>
                <td>${SanPhamDaMua[i].title}</td>
                <td>${SanPhamDaMua[i].quantity}</td>
                <td>$${SanPhamDaMua[i].price}</td>
                <td>$${total}</td>
                <td class="hello">${SanPhamDaMua[i].date}/${SanPhamDaMua[i].month}/${SanPhamDaMua[i].year}</td>
                <td class="hello hello1"><span class="helloo">${stringGiao}</span>
                <button class="btn--1 btn--3" onclick="tinhTrang(${i},${1})">Giao</button>
                <button class="btn--1 btn--2" onclick="tinhTrang(${i},${0})">Chua Giao</button>
                </td>
            </tr>
            `
        }
    }
    count = 0
    kq += `</table>`
    content_home.innerHTML = kq
    if (menu.classList.contains("close")) {
        for (var i = 0; i < hello.length; i++) {
            hello[i].style.display = "table-cell"
        }
    }
    else {
        for (var i = 0; i < hello.length; i++) {
            hello[i].style.display = "none"
        }
    }
    Text_home_2.innerText = "Page " + num
    page_number[num - 1].classList.add("active-color")
    var URL = window.location.href
    var text = URL.split("#")
    window.location.href = text[0] + "#text-home2"
}
var analytic_info = document.getElementsByClassName("analytic-info")[0]
var product__name = document.getElementsByClassName("product__name")[0]



function innerSelect() {
    var product__name = document.getElementsByClassName("product__name")[0]
    var kq = `<select name="protxt" id="product__name" onchange="changeName()">
    <option value="1">Choose your selection</option>
    <option value="0">ALL product</option>`

    for (var i = 0; i < PRODUCTDATA.length; i++) {
        kq += `<option value="${PRODUCTDATA[i].title}">${i + 1}. ${PRODUCTDATA[i].title}</option>
        `
    }

    kq += `</select>`
    product__name.innerHTML = kq

}

function changeName() {
    let date1 = document.getElementById("date1").value
    let date = date1 + ""
    var dateArray = date.split("-")

    let date2 = document.getElementById("date2").value
    let Date = date2 + ""
    var dateArray1 = Date.split("-")
    let kt = false

    // kiem tra dung sai input
    if (dateArray[0] == dateArray1[0]) {
        if (dateArray[1] == dateArray1[1]) {
            if (dateArray[2] <= dateArray1[2]) {
                kt = true
            }
            else {
                kt = false
            }
        }
        else if (dateArray[1] < dateArray1[1]) {
            kt = true
        }
        else if (dateArray[1] > dateArray1[1]) {
            kt = false
        }
    }
    else if (dateArray[0] > dateArray1[0]) {
        kt = false
    }
    else {
        kt = true
    }

    let temp = []
    let productChange = document.getElementById("product__name")
    console.log(productChange.value)
    if (date1 == "" && date2 == "") {
        if (productChange.value == 0) {
            for (var i = 0; i < SanPhamDaMua.length; i++) {
                temp.push(SanPhamDaMua[i])
            }
        }
        else if (productChange.value != 0) {
            for (var i = 0; i < SanPhamDaMua.length; i++) {
                if (SanPhamDaMua[i].title == productChange.value) {
                    temp.push(SanPhamDaMua[i])
                }
            }
        }
    }
    else {
        if (kt) {
            if (productChange.value == 0) {
                for (var i = 0; i < SanPhamDaMua.length; i++) {
                    if (SanPhamDaMua[i].year > dateArray[0] && SanPhamDaMua[i].year < dateArray1[0]) {
                        temp.push(SanPhamDaMua[i])
                    }
                    else if (SanPhamDaMua[i].year == dateArray[0] && SanPhamDaMua[i].year == dateArray1[0]) {
                        if (SanPhamDaMua[i].month > dateArray[1] && SanPhamDaMua[i].month <= dateArray1[1]) {
                            temp.push(SanPhamDaMua[i])
                        }
                        else if (SanPhamDaMua[i].month == dateArray[1] && SanPhamDaMua[i].month == dateArray1[1]) {
                            if (SanPhamDaMua[i].date >= dateArray[2] && SanPhamDaMua[i].date <= dateArray1[2]) {
                                temp.push(SanPhamDaMua[i])
                            }
                        }
                    }
                    else if (SanPhamDaMua[i].year == dateArray[0] && SanPhamDaMua[i].year < dateArray1[0]) {
                        if (SanPhamDaMua[i].month > dateArray[1]) {
                            temp.push(SanPhamDaMua[i])
                        }
                        else if (SanPhamDaMua[i].month == dateArray[1]) {
                            if (SanPhamDaMua[i].date >= dateArray[2]) {
                                temp.push(SanPhamDaMua[i])
                            }
                        }
                    }
                    else if (SanPhamDaMua[i].year > dateArray[0] && SanPhamDaMua[i].year == dateArray1[0]) {
                        if (SanPhamDaMua[i].month < dateArray1[1]) {
                            temp.push(SanPhamDaMua[i])
                        }
                        else if (SanPhamDaMua[i].month == dateArray1[1]) {
                            if (SanPhamDaMua[i].date <= dateArray1[2]) {
                                temp.push(SanPhamDaMua[i])
                            }
                        }
                    }
                }
            }
            else {
                for (var i = 0; i < SanPhamDaMua.length; i++) {
                    if (SanPhamDaMua[i].title == productChange.value) {
                        if (SanPhamDaMua[i].year > dateArray[0] && SanPhamDaMua[i].year < dateArray1[0]) {
                            temp.push(SanPhamDaMua[i])
                        }
                        else if (SanPhamDaMua[i].year == dateArray[0] && SanPhamDaMua[i].year == dateArray1[0]) {
                            if (SanPhamDaMua[i].month > dateArray[1] && SanPhamDaMua[i].month <= dateArray1[1]) {
                                temp.push(SanPhamDaMua[i])
                            }
                            else if (SanPhamDaMua[i].month == dateArray[1] && SanPhamDaMua[i].month == dateArray1[1]) {
                                if (SanPhamDaMua[i].date >= dateArray[2] && SanPhamDaMua[i].date <= dateArray1[2]) {
                                    temp.push(SanPhamDaMua[i])
                                }
                            }
                        }
                        else if (SanPhamDaMua[i].year == dateArray[0] && SanPhamDaMua[i].year < dateArray1[0]) {
                            if (SanPhamDaMua[i].month > dateArray[1]) {
                                temp.push(SanPhamDaMua[i])
                            }
                            else if (SanPhamDaMua[i].month == dateArray[1]) {
                                if (SanPhamDaMua[i].date >= dateArray[2]) {
                                    temp.push(SanPhamDaMua[i])
                                }
                            }
                        }
                        else if (SanPhamDaMua[i].year > dateArray[0] && SanPhamDaMua[i].year == dateArray1[0]) {
                            if (SanPhamDaMua[i].month < dateArray1[1]) {
                                temp.push(SanPhamDaMua[i])
                            }
                            else if (SanPhamDaMua[i].month == dateArray1[1]) {
                                if (SanPhamDaMua[i].date <= dateArray1[2]) {
                                    temp.push(SanPhamDaMua[i])
                                }
                            }
                        }
                    }
                }
            }
        }
    }



    container_analytic.innerHTML = ""
    var kq = `<table class="table-analytic">`
    let total_tong1 = 0
    let order1 = 0
    for (var i = 0; i < temp.length; i++) {
        if (temp[i].tinhtrang == 1) {
            var total = temp[i].quantity * temp[i].price
            total_tong1 += total
            order1++
            kq += ` 
            <tr>
                <td class="img-analytic"><img src="${temp[i].image}" alt=""></td>
                <td class="text-analytic-container"><div class="text-analytic">
                    <div class="text-analytic-name">
                        <span>Name Product:</span> ${temp[i].title}
                    </div>
                    <div class="text-analytic-price">
                        <span>Price:</span> $${temp[i].price}
                    </div>
                </div></td>
                <td class="quantity-analytic"><span>Quantity:</span> ${temp[i].quantity}</td>
                <td class="username-analytic"><span>By:</span> ${temp[i].username}</td>
                <td class="total-analytic"><span>Total:</span> $${total}</td>
            </tr>
            `
        }
    }
    kq += `</table>`
    container_analytic.innerHTML = kq
    total_analytic_sum.innerText = "Total revenue: $" + total_tong1
    order_analytic_sum.innerText = "Total order: " + order1
}

function analytic() {
    for(var i = 0 ; i < menu_bar_color.length ; i++){
        menu_bar_color[i].classList.remove("menu-bar-link-color")
    }
    menu_bar_color[3].classList.add("menu-bar-link-color")
    searchName.style.display = "none"
    Text_home.innerText = "ANALYTICS"
    header_home.style.display = "none"
    pageNumber.style.display = "none"
    analytic_info.style.display = "block"
    content_home.innerHTML = `
    <div class="analytic">
        <p>View monthly statistics <i>(day, time period):</i></p>
        <div class="date-1">
            <span>From</span><input type="date" name="" id="date1" onchange="changeDate()">
        </div>
        <div class="date-1">
            <span>To</span><input type="date" name="" id="date2" onchange="changeDate()">
        </div>
    </div>
    `
    total_analytic_sum.innerText = ""
    order_analytic_sum.innerText = ""
    container_analytic.innerHTML = ""
    innerSelect()
}


const container_analytic = document.getElementsByClassName("container-analytic")[0]
const total_analytic_sum = document.getElementsByClassName("total-analytic-sum")[0]
const order_analytic_sum = document.getElementsByClassName("order-analytic-sum")[0]
function changeDate() {
    let date1 = document.getElementById("date1").value
    let date = date1 + ""
    let dateArray = date.split("-")

    let date2 = document.getElementById("date2").value
    let Date = date2 + ""
    let dateArray1 = Date.split("-")
    let kt = false
    var namename = document.getElementById("product__name")
    // kiem tra dung sai input
    if (dateArray[0] == dateArray1[0]) {
        if (dateArray[1] == dateArray1[1]) {
            if (dateArray[2] <= dateArray1[2]) {
                kt = true
            }
            else {
                kt = false
            }
        }
        else if (dateArray[1] < dateArray1[1]) {
            kt = true
        }
        else if (dateArray[1] > dateArray1[1]) {
            kt = false
        }
    }
    else if (dateArray[0] > dateArray1[0]) {
        kt = false
    }
    else {
        kt = true
    }

    temp = []
    if (kt) {
        if (namename.value == 0 || namename.value == 1) {
            for (var i = 0; i < SanPhamDaMua.length; i++) {
                if (SanPhamDaMua[i].year > dateArray[0] && SanPhamDaMua[i].year < dateArray1[0]) {
                    temp.push(SanPhamDaMua[i])
                }
                else if (SanPhamDaMua[i].year == dateArray[0] && SanPhamDaMua[i].year == dateArray1[0]) {
                    if (SanPhamDaMua[i].month > dateArray[1] && SanPhamDaMua[i].month <= dateArray1[1]) {
                        temp.push(SanPhamDaMua[i])
                    }
                    else if (SanPhamDaMua[i].month == dateArray[1] && SanPhamDaMua[i].month == dateArray1[1]) {
                        if (SanPhamDaMua[i].date >= dateArray[2] && SanPhamDaMua[i].date <= dateArray1[2]) {
                            temp.push(SanPhamDaMua[i])
                        }
                    }
                }
                else if (SanPhamDaMua[i].year == dateArray[0] && SanPhamDaMua[i].year < dateArray1[0]) {
                    if (SanPhamDaMua[i].month > dateArray[1]) {
                        temp.push(SanPhamDaMua[i])
                    }
                    else if (SanPhamDaMua[i].month == dateArray[1]) {
                        if (SanPhamDaMua[i].date >= dateArray[2]) {
                            temp.push(SanPhamDaMua[i])
                        }
                    }
                }
                else if (SanPhamDaMua[i].year > dateArray[0] && SanPhamDaMua[i].year == dateArray1[0]) {
                    if (SanPhamDaMua[i].month < dateArray1[1]) {
                        temp.push(SanPhamDaMua[i])
                    }
                    else if (SanPhamDaMua[i].month == dateArray1[1]) {
                        if (SanPhamDaMua[i].date <= dateArray1[2]) {
                            temp.push(SanPhamDaMua[i])
                        }
                    }
                }
            }
        }
        else {
            for (var i = 0; i < SanPhamDaMua.length; i++) {
                if (SanPhamDaMua[i].title == namename.value) {
                    if (SanPhamDaMua[i].year > dateArray[0] && SanPhamDaMua[i].year < dateArray1[0]) {
                        temp.push(SanPhamDaMua[i])
                    }
                    else if (SanPhamDaMua[i].year == dateArray[0] && SanPhamDaMua[i].year == dateArray1[0]) {
                        if (SanPhamDaMua[i].month > dateArray[1] && SanPhamDaMua[i].month <= dateArray1[1]) {
                            temp.push(SanPhamDaMua[i])
                        }
                        else if (SanPhamDaMua[i].month == dateArray[1] && SanPhamDaMua[i].month == dateArray1[1]) {
                            if (SanPhamDaMua[i].date >= dateArray[2] && SanPhamDaMua[i].date <= dateArray1[2]) {
                                temp.push(SanPhamDaMua[i])
                            }
                        }
                    }
                    else if (SanPhamDaMua[i].year == dateArray[0] && SanPhamDaMua[i].year < dateArray1[0]) {
                        if (SanPhamDaMua[i].month > dateArray[1]) {
                            temp.push(SanPhamDaMua[i])
                        }
                        else if (SanPhamDaMua[i].month == dateArray[1]) {
                            if (SanPhamDaMua[i].date >= dateArray[2]) {
                                temp.push(SanPhamDaMua[i])
                            }
                        }
                    }
                    else if (SanPhamDaMua[i].year > dateArray[0] && SanPhamDaMua[i].year == dateArray1[0]) {
                        if (SanPhamDaMua[i].month < dateArray1[1]) {
                            temp.push(SanPhamDaMua[i])
                        }
                        else if (SanPhamDaMua[i].month == dateArray1[1]) {
                            if (SanPhamDaMua[i].date <= dateArray1[2]) {
                                temp.push(SanPhamDaMua[i])
                            }
                        }
                    }
                }
            }
        }
    }
    else {
        container_analytic.innerHTML = ""
    }
    let total_tong = 0
    let order = 0
    var kq = `<table class="table-analytic">`
    for (var i = 0; i < temp.length; i++) {
        if (temp[i].tinhtrang == 1) {
            var total = temp[i].quantity * temp[i].price
            total_tong += total
            order++
            kq += ` 
            <tr>
                <td class="img-analytic"><img src="${temp[i].image}" alt=""></td>
                <td class="text-analytic-container"><div class="text-analytic">
                    <div class="text-analytic-name">
                        <span>Name Product:</span> ${temp[i].title}
                    </div>
                    <div class="text-analytic-price">
                        <span>Price:</span> $${temp[i].price}
                    </div>
                </div></td>
                <td class="quantity-analytic"><span>Quantity:</span> ${temp[i].quantity}</td>
                <td class="username-analytic"><span>By:</span> ${temp[i].username}</td>
                <td class="total-analytic"><span>Total:</span> $${total}</td>
            </tr>
            `
        }
    }
    kq += `</table>`
    container_analytic.innerHTML = kq
    total_analytic_sum.innerText = "Total revenue: $" + total_tong
    order_analytic_sum.innerText = "Total order: " + order
}

function tinhTrang(i, num) {
    SanPhamDaMua[i].tinhtrang = num
    var button = event.target
    var btn_btn = button.parentElement.getElementsByClassName("helloo")[0]
    if (num == 1) {
        btn_btn.innerText = "Delivered"
    }
    else {
        btn_btn.innerText = "Not Delivered"
    }
    var json = JSON.stringify(SanPhamDaMua)
    localStorage.setItem("SanPhamDaMua", json)
}
