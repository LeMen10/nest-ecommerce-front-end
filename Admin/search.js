let trang_hien_tai
const check_trang = document.getElementsByClassName("text-home")[0]
let search_value = document.getElementById("search")


// lay dieu kien filter
function checkSearch(value) {
    var ngay_dang_ky = value.day + "/" + value.month + "/" + value.year
    if (value.username.toLowerCase().includes(search_value.value.toLowerCase())) {
        return value.username.toLowerCase().includes(search_value.value.toLowerCase())
    }
    else if (value.email.toLowerCase().includes(search_value.value.toLowerCase())) {
        return value.email.toLowerCase().includes(search_value.value.toLowerCase())
    }
    else if (ngay_dang_ky.includes(search_value.value)) {
        return ngay_dang_ky.includes(search_value.value)
    }
}

function search_user() {
    let taikhoannguoidung = dangky.filter(value => checkSearch(value), index)
    return taikhoannguoidung
}

function inner_Search_User() {
    var arrayUserSearch = search_user()
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
    for (var i = 0; i < arrayUserSearch.length; i++) {
        kq += `
        <tr>
            <td data="Number" width="10px">${i + 1}</td>
            <td data="Username" width="30px">${arrayUserSearch[i].username}</td>
            <td data="Email" width="30px">${arrayUserSearch[i].email}</td>
            <td data="Time Register" width="20px">${arrayUserSearch[i].day}/${arrayUserSearch[i].month}/${arrayUserSearch[i].year}</td>
            <td data="info" width="10px"><button>Read</button></td>
        </tr>
        `
    }
    return kq + `</table>`
}

//search theo filter
// function checkSearch1(value) {
//     var ngay_dang_ky = value.date + "/" + value.month + "/" + value.year
//     if(value.username.toLowerCase().includes(search_value.value.toLowerCase())) {
//         return value.username.toLowerCase().includes(search_value.value.toLowerCase())
//     }
//     else if(value.title.toLowerCase().includes(search_value.value.toLowerCase())) {
//         return value.title.toLowerCase().includes(search_value.value.toLowerCase())
//     }
//     else if(ngay_dang_ky.includes(search_value.value)) {
//         return ngay_dang_ky.includes(search_value.value)
//     }
//     else if(search_value.value.includes("chua giao")) {
//         return value.tinhtrang = 0
//     }
//     else if(search_value.value.includes("da giao")) {
//         return value.tinhtrang = 1
//     }

// }
// function search_order() {
//     let ordernguoidung = SanPhamDaMua.filter(value => checkSearch1(value))
//     return ordernguoidung
// }


function inner_Search_Order() {
    var chuagiao = "Chua giao"
    var dagiao = "Da giao"
    // var arrayOrderSearch = search_order()
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
    // for (var i = 0; i < arrayOrderSearch.length; i++) {
    //     var stringGiao
    //     if (arrayOrderSearch[i].tinhtrang == 0) {
    //         stringGiao = "Not Delivery"
    //     }
    //     else {
    //         stringGiao = "Delivered"
    //     }
    //     var total = arrayOrderSearch[i].quantity * arrayOrderSearch[i].price
    //     kq += `
    //         <tr>
    //             <td>${arrayOrderSearch[i].username}</td>
    //             <td class="image-historyy"><img class="image-history" src="${arrayOrderSearch[i].image}" alt=""></td>
    //             <td>${arrayOrderSearch[i].title}</td>
    //             <td>${arrayOrderSearch[i].quantity}</td>
    //             <td>$${arrayOrderSearch[i].price}</td>
    //             <td>$${total}</td>
    //             <td class="hello">${arrayOrderSearch[i].date}/${arrayOrderSearch[i].month}/${arrayOrderSearch[i].year}</td>
    //             <td class="hello hello1"><span class="helloo">${stringGiao}</span>
    //             <button class="btn--1 btn--3" onclick="tinhTrang(${i},${1})">Giao</button>
    //             <button class="btn--1 btn--2" onclick="tinhTrang(${i},${0})">Chua Giao</button>
    //             </td>
    //         </tr>
    //         `
    // }

    for (var i = 0; i < SanPhamDaMua.length; i++) {
        var ngay_dang_ky = SanPhamDaMua[i].date + "/" + SanPhamDaMua[i].month + "/" + SanPhamDaMua[i].year
        var stringGiao
        if (SanPhamDaMua[i].tinhtrang == 0) {
            stringGiao = "Not Delivery"
        }
        else {
            stringGiao = "Delivered"
        }
        if (SanPhamDaMua[i].username.toLowerCase().includes(search_value.value.toLowerCase())
            || SanPhamDaMua[i].title.toLowerCase().includes(search_value.value.toLowerCase())) {
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
        else if (search_value.value.toLowerCase().includes(dagiao.toLowerCase())) {
            if (SanPhamDaMua[i].tinhtrang == 1) {
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
        else if (search_value.value.toLowerCase().includes(chuagiao.toLowerCase())) {
            if (SanPhamDaMua[i].tinhtrang == 0) {
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
        else if (ngay_dang_ky.includes(search_value.value)) {
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


    return kq += `</table>`
}


function inner_Search_Product() {
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
        if (PRODUCTDATA[i].title.toLowerCase().includes(search_value.value.toLowerCase())) {
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
        else if(PRODUCTDATA[i].category.toLowerCase().includes(search_value.value.toLowerCase())) {
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
        else if(PRODUCTDATA[i].price == search_value.value) {
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
    return kq += `</table> </div>
    </div>`
}
function search() {
    switch (check_trang.innerText) {
        case "USER REGISTER LIST":
            if (search_value.value == "") {
                user_inner()
            }
            else {
                content_home.innerHTML = inner_Search_User()
                pageNumber.style.display = "none"
            }
            break;
        case "PRODUCT":
            if (search_value.value == "") {
                product()
            }
            else {
                content.innerHTML = inner_Search_Product()
                pageNumber.style.display = "none"
            }
            break;
        case "ORDER USER LIST":
            if (search_value.value == "") {
                order_inner()
            }
            else {
                content_home.innerHTML = inner_Search_Order()
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
                pageNumber.style.display = "none"
            }
            break;
    }
}
