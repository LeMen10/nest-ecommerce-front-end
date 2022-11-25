const innerHistory = document.getElementsByClassName("history-container")[0]
const modalContainerHistory = document.querySelector('.js-modal-container-history')
const title_page = document.getElementsByClassName("title-page")[0]
const SanPhamDaMua = []
if(localStorage.getItem("SanPhamDaMua")){
    var SanPhamKhachHang = localStorage.getItem("SanPhamDaMua")
    var json = JSON.parse(SanPhamKhachHang)
    for(var i = 0 ; i < json.length ; i++){
        SanPhamDaMua[i] = json[i]
    }
}
const btnOrderHistory = document.querySelector('.js-order-history');
btnOrderHistory.addEventListener('click', historyProduct);
function historyProduct() {
    var history = document.getElementsByClassName("js-modal-history")[0]
    history.classList.add("open-modal-history")
    positionX = 0;
    index = 0;
    page.style = `transform: translateX(0px)`
    inner_history()
    totalPageHistory()
}
function closeHistory() {
    var history = document.getElementsByClassName("js-modal-history")[0]
    history.classList.remove("open-modal-history")
    innerHistory.innerHTML = ""
}
const modalHistory = document.querySelector('.js-modal-history')
modalHistory.addEventListener("click", function () {
    modalHistory.classList.remove("open-modal-history")
})
modalContainerHistory.addEventListener("click", function (e) {
    e.stopPropagation();
})


let dem = 0;
let Dem = 5
var page = document.getElementsByClassName("page")[0]

function totalPageHistory() {
    let totalPage
    let arraylength = 0
    var now = localStorage.getItem("Now")
    for (var i = 0; i < SanPhamDaMua.length; i++) {
        if (SanPhamDaMua[i].username == now) {
            arraylength++
        }
    }
    totalPage = Math.ceil(arraylength / 5)
    page.innerHTML = ""
    for (var i = 1; i <= totalPage; i++) {
        page.innerHTML += `<div class="page-number"onclick="num(${i})">${i}</div>`
    }
}

function num(num) {
    var now = localStorage.getItem("Now")
    var kq = `
    <table class="table-history">
        <tr>
            <th width="20%">Picture</th>
            <th width="30%">Name product</th>
            <th width="20%">Quantity</th>
            <th width="10%">Price</th>
            <th width="20%">Total</th>
        </tr>
    `
    for (var i = 0; i < SanPhamDaMua.length; i++) {
        if (SanPhamDaMua[i].username == now) {
            pageNumber_history.style.display = "flex"
            dem++;
            if (dem >= (num * Dem - Dem + 1) && dem <= num * Dem) {
                var total = SanPhamDaMua[i].quantity * SanPhamDaMua[i].price
                kq += `
                    <tr>
                        <td class="historyImg"><img class="history-img" src="${SanPhamDaMua[i].image}" alt=""></td>
                        <td>${SanPhamDaMua[i].title}</td>
                        <td>${SanPhamDaMua[i].quantity}</td>
                        <td>$${SanPhamDaMua[i].price}</td>
                        <td>$${total}</td>
                    </tr>
                `
            }
        }
    }
    dem = 0
    kq + `</table>`
    title_page.innerText = "Page " + num
    innerHistory.innerHTML = kq;
}
var pageNumber_history = document.getElementsByClassName("pageNumber-history")[0]
function inner_history() {
    var now = localStorage.getItem("Now")
    var kq = `
    <table class="table-history">
        <tr>
            <th width="20%">Picture</th>
            <th width="30%">Name product</th>
            <th width="20%">Quantity</th>
            <th width="10%">Price</th>
            <th width="20%">Total</th>
        </tr>
    `
    for (var i = 0; i < SanPhamDaMua.length; i++) {
        if (SanPhamDaMua[i].username == now) {
            pageNumber_history.style.display = "flex"
            dem++;
            if (dem <= Dem) {
                var total = SanPhamDaMua[i].quantity * SanPhamDaMua[i].price
                kq += `
                    <tr>
                        <td class="historyImg"><img class="history-img" src="${SanPhamDaMua[i].image}" alt=""></td>
                        <td>${SanPhamDaMua[i].title}</td>
                        <td>${SanPhamDaMua[i].quantity}</td>
                        <td>$${SanPhamDaMua[i].price}</td>
                        <td>$${total}</td>
                    </tr>
                `
            }
        }
    }
    kq + `</table>`
    innerHistory.innerHTML = kq;
    title_page.innerText = "Page 1"
    dem = 0
}


function inner_delivery() {
    var now = localStorage.getItem("Now")
    var json = localStorage.getItem("SanPhamDaMua")
    var spham = JSON.parse(json)
    var kq = `
    <table class="table-history">
        <tr class="table-delivery">
            <th width="20%">Picture</th>
            <th width="30%">Name product</th>
            <th width="20%">Quantity</th>
            <th width="10%">Price</th>
            <th width="20%">Total</th>
        </tr>
    `
    for (var i = 0; i < spham.length; i++) {
        if (spham[i].username == now && spham[i].tinhtrang == 1) {
            var total = spham[i].quantity * spham[i].price
            kq += `
                <tr>
                    <td class="historyImg"><img class="history-img" src="${spham[i].image}" alt=""></td>
                    <td>${spham[i].title}</td>
                    <td>${spham[i].quantity}</td>
                    <td>$${spham[i].price}</td>
                    <td>$${total}</td>
                </tr>
            `
        }
    }
    kq + `</table>`
    innerDelivery.innerHTML = kq;
}
//delivery
const innerDelivery = document.getElementsByClassName("delivery-container")[0]
const modalContainerDelivery = document.querySelector('.js-modal-container-delivery');

const btnDelivery = document.querySelector('.js-delivery');
btnDelivery.addEventListener('click', delivery);

function delivery(){
    var history = document.getElementsByClassName("js-modal-delivery")[0]
    history.classList.add("open-modal-delivery")
    inner_delivery()
}
function closeDelivery(){
    var delivery = document.getElementsByClassName("js-modal-delivery")[0]
    delivery.classList.remove("open-modal-delivery")
    innerDelivery.innerHTML = ""
}
const modalDelivery = document.querySelector('.js-modal-delivery')
modalDelivery.addEventListener("click",function(){
    modalDelivery.classList.remove("open-modal-delivery")
})
modalContainerDelivery.addEventListener("click",function(e){
    e.stopPropagation();
})
var page_number = document.getElementsByClassName("page-number")
var next = document.getElementsByClassName("next")[0]
var prev = document.getElementsByClassName("prev")[0]
let index = 0

let positionX = 0;
next.addEventListener("click",function(){
    changeSlide(1)
})
prev.addEventListener("click",function(){
    changeSlide(-1)
})
function changeSlide(direction){
    var page_number_length = page_number[0].offsetWidth + 10
    if(direction == 1){ 
        if(index>(page_number.length-3)-1) {
            return
        }
        positionX = positionX - page_number_length
        console.log(positionX)
        page.style = `transform: translateX(${positionX}px)`
        index++;
    }
    else if(direction == -1){
        if(index<=0){
            index=0
            return
        }
        positionX = positionX + page_number_length
        page.style = `transform: translateX(${positionX}px)`
        index--
        console.log(index)
    }
}