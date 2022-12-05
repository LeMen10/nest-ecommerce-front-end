//luu mang sp
var json = localStorage.getItem("PRODUCTDATA")
var json1 = JSON.parse(json)
for(var i = 0 ; i < json1.length ; i++) {
    PRODUCTDATA[i] = json1[i]
}

//render product
function renderProduct() {
    var kq = ` <div class="content---ne">
    <div class="filter-product">
        <div class="price-filter">
            <div class="nameprice">Price</div>
                <select name="filter-price" id="filter-price" class="filter-search">
                    <option value="0">Price</option>
                    <option value="1">from 1 dollar to 20 dollars</option>
                    <option value="2">from 20 dollar to 40 dollars</option>
                    <option value="4">from 40 dollar to 60 dollars</option>
                    <option value="6">from 60 dollar to 80 dollars</option>
                    <option value="8">from 80 dollar to 100 dollars</option>
                    <option value="10">over 100 dollars</option>
                </select>
            </div>
        <div class="price-filter">
            <div class="nameprice">Category</div>
            <select name="filter-category" id="filter-category" class="filter-search">
                <option value="0">Category</option>
                <option value="snack">Snack</option>
                <option value="vegetable">Vegetable</option>
                <option value="freshfruit">FreshFruit</option>
                <option value="coffee">Coffee</option>
            </select>
        </div>
        <button class="btn-btn-filter" onclick="filter_search()">
            Search
        </button>
    </div>
    <div class="btn-add-product" onclick = "renderAdd()">
    + Add product
    </div>
    <table class="table-product">
    <tr>
    <th width="10%">ID</th>
    <th width="30%">Name product</th>
    <th width="15%">Price</th>
    <th width="20%">Category</th>
    <th width="15%">Picture</th>
    <th width="10%">Info</th>
    </tr>
    `
    for (var i = 0; i < PRODUCTDATA.length; i++) {
        if (i >= begin && i <= end) {
            kq += `
        <tr>
        <td class="id" data="ID">${PRODUCTDATA[i].id}</td>
        <td class="name" data="Name Product">${PRODUCTDATA[i].title}</td>
        <td class="price" data="Price">$${PRODUCTDATA[i].price}</td>
        <td class="category" data="Category">${PRODUCTDATA[i].category}</td>
        <td class="image" data="Image"><img class="img" src="..${PRODUCTDATA[i].img}" alt=""></td>
        <td><button class="update" onclick = "update(${i})">Update</button>
        <button class="delete" onclick="deleteP(${i})">Delete</button>
        <button class="detail" onclick="detailP(${i})">Detail</button></td>
        </tr>
        `
        }
    }
    kq += `</table> </div>
    </div>`
    content.innerHTML = kq;
}



const btn_add_product = document.getElementsByClassName("btn-add-product")[0]
const add_update_product = document.getElementsByClassName('add-update-product')[0]
const close_add_update = document.getElementsByClassName("close-add-update")[0]

function product() {
    for (var i = 0; i < menu_bar_color.length; i++) {
        menu_bar_color[i].classList.remove("menu-bar-link-color")
    }
    menu_bar_color[2].classList.add("menu-bar-link-color")
    searchName.style.display = "block"
    analytic_info.style.display = "none"
    header_home.style.display = "none"
    Text_home.innerText = "PRODUCT"
    Text_home_2.innerText = "Page " + 1
    begin = 0
    end = 9
    renderProduct()
    total_page()
    page_number[0].classList.add("active-color")
    index = 0
    page.style = `transform: translateX(0px)`
    page_number_length = page_number[0].offsetWidth + 10
    positionX = 0
}

//bien input
const id = document.getElementById("id-product")
const img = document.getElementById("picture-product")
const title = document.getElementById("name-product")
const price = document.getElementById("price-product")
const category = document.getElementById("category-product")
const detail = document.getElementById("detail-product")

//bien tieu de
const tieude = document.getElementsByClassName("Tieude")[0]



//bien add va update
const addP = document.getElementsByClassName("add-product")[0]
const updateP = document.getElementsByClassName("update-product")[0]
//xuat hien the add update

function renderAdd() {
    reset()
    tieude.innerText = "ADD PRODUCT"
    add_update_product.style.display = "block"
    id.value = PRODUCTDATA.length + 1
    addP.style.display = "block"
}

close_add_update.addEventListener("click", function () {
    add_update_product.style.display = "none"
})


function reset() {
    id.value = ""
    img.value = ""
    title.value = ""
    price.value = ""
    category.value = ""
    detail.value = ""
    updateP.style.display = "none"
    addP.style.display = "none"
}
//add
function add() {
    if (
        title.value.trim().length == 0 || price.value.trim().length == 0
        || category.value.trim().length == 0
        || detail.value.trim().length == 0
        || img.value.trim().length == 0) {
        alert("Nhap information")
    }
    else {
        var addProduct = {
            id: id.value.trim(),
            img: "/assets/img/" + img.files[0].name,
            title: title.value.trim(),
            price: price.value.trim(),
            category: category.value.trim(),
            detail: detail.value.trim()
        }
        PRODUCTDATA.push(addProduct)
        add_update_product.style.display = "none"
        // var json = JSON.stringify(PRODUCTDATA)
        // localStorage.setItem("PRODUCTDATA", json)
        renderProduct()
        total_page()
        color()
    }
}

//update 
function update(num) {
    add_update_product.style.display = "block"
    tieude.innerText = "UPDATE PRODUCT"
    reset()
    id.value = num + 1
    title.value = PRODUCTDATA[num].title
    price.value = PRODUCTDATA[num].price
    category.value = PRODUCTDATA[num].category
    detail.value = PRODUCTDATA[num].detail
    updateP.style.display = "block"
}

function update_product() {
    if (
        title.value.trim().length == 0 || price.value.trim().length == 0
        || category.value.trim().length == 0
        || detail.value.trim().length == 0
        || img.value.trim().length == 0) {
        alert("Nhap information")
    }
    else {
        var addProduct = {
            id: id.value.trim(),
            img: "/assets/img/" + img.files[0].name,
            title: title.value.trim(),
            price: price.value.trim(),
            category: category.value.trim(),
            detail: detail.value.trim()
        }
        PRODUCTDATA[id.value - 1] = addProduct
        add_update_product.style.display = "none"
        // var json = JSON.stringify(PRODUCTDATA)
        // localStorage.setItem("PRODUCTDATA", json)
        renderProduct()
        total_page()
        color()
    }
}

function color() {
    var colorP = Text_home_2.innerText
    colorP = colorP.split(" ")
    page_number[colorP[1] - 1].classList.add("active-color")
}
//delete
function deleteP(num) {
    var check = confirm("Do you want to delete this product")
    if (check) {
        PRODUCTDATA.splice(num, 1);
        for (var i = 0; i < PRODUCTDATA.length; i++) {
            PRODUCTDATA[i].id = i + 1;
        }
        renderProduct()
        total_page()
        alert("Delete successfully")
        // var json = JSON.stringify(PRODUCTDATA)
        // localStorage.setItem("PRODUCTDATA", json)
        color()
    }
    else {
        alert("Delete failed")
    }
}

//detail
const output = document.getElementsByClassName("output")[0]

function renderOutput(num) {
    var kq = `
    <div class="detailProduct-main">
    <h3 class="Tieude">DETAIL PRODUCT</h3>
    <div class="close-detail" onclick="close_detaill()">
        &times;
    </div>
    <table class="detail-detail" cellpadding=10px>
        <tr>
            <td rowspan="2" class="img-img">
                <div class="imgDetail">
                    <img src="..${PRODUCTDATA[num].img}" alt="">
                </div>
            </td>
            <td>
                <div class="titleDetail">
                    <span>Name product:</span> ${PRODUCTDATA[num].title}
                </div>
            </td>
            <td>
                <div class="priceDetail">
                    <span>Price:</span> $${PRODUCTDATA[num].price}
                </div>
                <div class="categoryDetail">
                    <span>Category</span> ${PRODUCTDATA[num].category}
                </div>
            </td>
        </tr>
        <tr>
            <td colspan="2" class="detail-no">
                <div class="idDetail">
                    <span>Id: </span>${PRODUCTDATA[num].id}
                </div>
                <div class="detail-no-main">
                    <span>Detail:</span> ${PRODUCTDATA[num].detail}
                </div>
            </td>
        </tr>
    </table>
    </div>
    `
    output.innerHTML = kq
}
function detailP(num) {
    renderOutput(num)
}

const close_detail = document.getElementsByClassName("close-detail")[0]

function close_detaill() {
    output.innerHTML = ""
}
let begin = 0
let end = 9
let currentPageP = 1
const countPageP = 10
let totalPageP
function total_page() {
    page.innerHTML = ""
    pageNumber.style.display = "flex"
    totalPageP = Math.ceil(PRODUCTDATA.length / countPageP)
    for (var i = 1; i <= totalPageP; i++) {
        page.innerHTML += `<div class="page-number"onclick="pageNumberP(${i})">${i}</div>`
    }
}

function pageNumberP(num) {
    currentPageP = num
    begin = num * countPageP - countPageP
    end = begin + 9
    for (var i = 0; i < page_number.length; i++) {
        page_number[i].classList.remove("active-color")
    }
    page_number[num - 1].classList.add("active-color")
    renderProduct()
    var URL = window.location.href
    var text = URL.split("#")
    window.location.href = text[0] + "#text-home2"
    Text_home_2.innerText = "Page " + num
}

function inner_filter_search() {
    let filterPrice = document.getElementById("filter-price")
    let filterCategory = document.getElementById("filter-category")
    var kq = `
    <tr>
    <th width="10%">ID</th>
    <th width="30%">Name product</th>
    <th width="15%">Price</th>
    <th width="20%">Category</th>
    <th width="15%">Picture</th>
    <th width="10%">Info</th>
    </tr>
    `
    for (var i = 0; i < PRODUCTDATA.length; i++) {
        if (filterCategory.value == 0) {
            if (filterPrice.value == 0) {
                kq += `
                <tr>
                    <td class="id" data="ID">${PRODUCTDATA[i].id}</td>
                    <td class="name" data="Name Product">${PRODUCTDATA[i].title}</td>
                    <td class="price" data="Price">$${PRODUCTDATA[i].price}</td>
                    <td class="category" data="Category">${PRODUCTDATA[i].category}</td>
                    <td class="image" data="Image"><img class="img" src="..${PRODUCTDATA[i].img}" alt=""></td>
                    <td><button class="update" onclick = "update(${i})">Update</button>
                    <button class="delete" onclick="deleteP(${i})">Delete</button>
                    <button class="detail" onclick="detailP(${i})">Detail</button></td>
                </tr>
                `
            }
            else {
                if (filterPrice.value == 1) {
                    if (PRODUCTDATA[i].price >= 1 && PRODUCTDATA[i].price <= 20) {
                        kq += `
                        <tr>
                            <td class="id" data="ID">${PRODUCTDATA[i].id}</td>
                            <td class="name" data="Name Product">${PRODUCTDATA[i].title}</td>
                            <td class="price" data="Price">$${PRODUCTDATA[i].price}</td>
                            <td class="category" data="Category">${PRODUCTDATA[i].category}</td>
                            <td class="image" data="Image"><img class="img" src="..${PRODUCTDATA[i].img}" alt=""></td>
                            <td><button class="update" onclick = "update(${i})">Update</button>
                            <button class="delete" onclick="deleteP(${i})">Delete</button>
                            <button class="detail" onclick="detailP(${i})">Detail</button></td>
                        </tr>
                        `
                    }
                }
                else {
                    if (PRODUCTDATA[i].price >= filterPrice.value * 10 && PRODUCTDATA[i].price <= (filterPrice.value * 10 + 20)) {
                        kq += `
                        <tr>
                            <td class="id" data="ID">${PRODUCTDATA[i].id}</td>
                            <td class="name" data="Name Product">${PRODUCTDATA[i].title}</td>
                            <td class="price" data="Price">$${PRODUCTDATA[i].price}</td>
                            <td class="category" data="Category">${PRODUCTDATA[i].category}</td>
                            <td class="image" data="Image"><img class="img" src="..${PRODUCTDATA[i].img}" alt=""></td>
                            <td><button class="update" onclick = "update(${i})">Update</button>
                            <button class="delete" onclick="deleteP(${i})">Delete</button>
                            <button class="detail" onclick="detailP(${i})">Detail</button></td>
                        </tr>
                        `
                    }
                }
            }
        }
        else if (PRODUCTDATA[i].category == filterCategory.value) {
            if (filterPrice.value == 0) {
                kq += `
                <tr>
                    <td class="id" data="ID">${PRODUCTDATA[i].id}</td>
                    <td class="name" data="Name Product">${PRODUCTDATA[i].title}</td>
                    <td class="price" data="Price">$${PRODUCTDATA[i].price}</td>
                    <td class="category" data="Category">${PRODUCTDATA[i].category}</td>
                    <td class="image" data="Image"><img class="img" src="..${PRODUCTDATA[i].img}" alt=""></td>
                    <td><button class="update" onclick = "update(${i})">Update</button>
                    <button class="delete" onclick="deleteP(${i})">Delete</button>
                    <button class="detail" onclick="detailP(${i})">Detail</button></td>
                </tr>
                `
            }
            else {
                if (filterPrice.value == 1) {
                    if (PRODUCTDATA[i].price >= 1 && PRODUCTDATA[i].price <= 20) {
                        kq += `
                        <tr>
                            <td class="id" data="ID">${PRODUCTDATA[i].id}</td>
                            <td class="name" data="Name Product">${PRODUCTDATA[i].title}</td>
                            <td class="price" data="Price">$${PRODUCTDATA[i].price}</td>
                            <td class="category" data="Category">${PRODUCTDATA[i].category}</td>
                            <td class="image" data="Image"><img class="img" src="..${PRODUCTDATA[i].img}" alt=""></td>
                            <td><button class="update" onclick = "update(${i})">Update</button>
                            <button class="delete" onclick="deleteP(${i})">Delete</button>
                            <button class="detail" onclick="detailP(${i})">Detail</button></td>
                        </tr>
                        `
                    }
                }
                else {
                    if (PRODUCTDATA[i].price >= filterPrice.value * 10 && PRODUCTDATA[i].price <= (filterPrice.value * 10 + 20)) {
                        kq += `
                        <tr>
                            <td class="id" data="ID">${PRODUCTDATA[i].id}</td>
                            <td class="name" data="Name Product">${PRODUCTDATA[i].title}</td>
                            <td class="price" data="Price">$${PRODUCTDATA[i].price}</td>
                            <td class="category" data="Category">${PRODUCTDATA[i].category}</td>
                            <td class="image" data="Image"><img class="img" src="..${PRODUCTDATA[i].img}" alt=""></td>
                            <td><button class="update" onclick = "update(${i})">Update</button>
                            <button class="delete" onclick="deleteP(${i})">Delete</button>
                            <button class="detail" onclick="detailP(${i})">Detail</button></td>
                        </tr>
                        `
                    }
                }
            }
        }

    }
    return kq += `</table> </div>
    </div>`
}

function filter_search() {
    var tableproduct = document.getElementsByClassName("table-product")[0]
    var filterPrice = document.getElementById("filter-price")
    var filterCategory = document.getElementById("filter-category")
    if (filterPrice.value == 0 && filterCategory.value == 0) {
        product()
    }
    else {
        tableproduct.innerHTML = inner_filter_search()
        pageNumber.style.display = "none"
    }
}