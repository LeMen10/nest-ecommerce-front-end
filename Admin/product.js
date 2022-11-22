const PRODUCTDATA = [{
    "id": 1,
    "title": "Seeds of Change Organic Quinoa, Brown, & Red Rice",
    "price": 28,
    "category": "snack",
    "img": "/assets/img/product-1-1.jpg",
}, {
    "id": 2,
    "title": "All Natural Italian-Style Chicken Meatballs",
    "price": 52,
    "category": "snack",
    "img": "/assets/img/product-2-1.jpg",
}, {
    "id": 3,
    "title": "Angie’s Boomchickapop Sweet & Salty Kettle Corn",
    "price": 48,
    "category": "snack",
    "img": "/assets/img/product-3-1.jpg",
}, {
    "id": 4,
    "title": "Foster Farms Takeout Crispy Classic Buffalo Wings",
    "price": 17,
    "category": "snack",
    "img": "/assets/img/product-4-1.jpg",
}, {
    "id": 5,
    "title": "Blue Diamond Almonds Lightly Salted Vegetables",
    "price": 23,
    "category": "vegetable",
    "img": "/assets/img/product-5-1.jpg",
}, {
    "id": 6,
    "title": "Seeds of Change Organic Quinoa, Brown, & Red Rice",
    "price": 53,
    "category": "freshfruit",
    "img": "/assets/img/product-6-1.jpg",
}, {
    "id": 7,
    "title": "All Natural Italian-Style Chicken Meatballs",
    "price": 68,
    "category": "coffee",
    "img": "/assets/img/product-7-1.jpg",
}, {
    "id": 8,
    "title": "Angie’s Boomchickapop Sweet & Salty Kettle Corn",
    "price": 94,
    "category": "freshfruit",
    "img": "/assets/img/product-8-1.jpg",
}, {
    "id": 9,
    "title": "Foster Farms Takeout Crispy Classic Buffalo Wings",
    "price": 36,
    "category": "freshfruit",
    "img": "/assets/img/product-9-1.jpg",
}, {
    "id": 10,
    "title": "Seeds of Change Organic Quinoa, Brown, & Red Rice",
    "price": 74,
    "category": "freshfruit",
    "img": "/assets/img/product-10-1.jpg",
}, {
    "id": 11,
    "title": "Gorton’s Beer Battered Fish Fillets with soft paper",
    "price": 85,
    "category": "coffee",
    "img": "/assets/img/product-11-1.jpg",
}, {
    "id": 12,
    "title": "Haagen-Dazs Caramel Cone Ice Cream Ketchup",
    "price": 47,
    "category": "coffee",
    "img": "/assets/img/product-12-1.jpg",
}, {
    "id": 13,
    "title": "Angie’s Boomchickapop Sweet & Salty Kettle Corn",
    "price": 24,
    "category": "coffee",
    "img": "/assets/img/product-13-1.jpg",
}, {
    "id": 14,
    "title": "Foster Farms Takeout Crispy Classic Buffalo Wings",
    "price": 82,
    "category": "vegetable",
    "img": "/assets/img/product-14-1.jpg",
}, {
    "id": 15,
    "title": "Blue Diamond Almonds Lightly Salted Vegetables",
    "price": 76,
    "category": "vegetable",
    "img": "/assets/img/product-15-1.jpg",
}, {
    "id": 16,
    "title": "Chobani Complete Vanilla Greek Yogurt",
    "price": 35,
    "category": "vegetable",
    "img": "/assets/img/product-16-1.jpg",
},];


//luu mang sp
var json = JSON.stringify(PRODUCTDATA)
localStorage.setItem("PRODUCTDATA", json)
const content = document.getElementsByClassName("content-home")[0]

//render product
function renderProduct() {
    var kq = ` <div class="content---ne">
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
    analytic_info.style.display = "none"
    header_home.style.display = "none"
    Text_home.innerText = "PRODUCT"
    begin = 0
    end = 9
    renderProduct()
    total_page()
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
        renderProduct()
        total_page()
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
        renderProduct()
        total_page()
    }
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
    console.log(page)
    totalPageP = Math.ceil(PRODUCTDATA.length / countPageP)
    for (var i = 1; i <= totalPageP; i++) {
        page.innerHTML += `<div class="page-number"onclick="pageNumberP(${i})">${i}</div>`
    }
}

function pageNumberP(num) {
    currentPageP = num
    begin = num * countPageP - countPageP
    end = begin + 9
    renderProduct()
}