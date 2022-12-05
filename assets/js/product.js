const PRODUCTDATA = [{
    "id": 1,
    "title": "Seeds of Change Organic Quinoa, Brown, & Red Rice",
    "price": 28,
    "category": "snack",
    "img": "/assets/img/product-1-1.jpg",
    "detail":"If you want to have some refreshing and healthy drinks. Choose your favorite taste and enjoy the best from Deliany Juice.",
}, {
    "id": 2,
    "title": "All Natural Italian-Style Chicken Meatballs",
    "price": 52,
    "category": "snack",
    "img": "/assets/img/product-2-1.jpg",
    "detail":"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam."
}, {
    "id": 3,
    "title": "Angie’s Boomchickapop Sweet & Kettle Corn",
    "price": 48,
    "category": "snack",
    "img": "/assets/img/product-3-1.jpg",
    "detail":"Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed qui ratione voluptatem sequi nesciunt.",
}, {
    "id": 4,
    "title": "Foster Farms Takeout Crispy Classic Buffalo Wings",
    "price": 17,
    "category": "snack",
    "img": "/assets/img/product-4-1.jpg",
    "detail":"Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, et dolore quaerat voluptatem.",
}, {
    "id": 5,
    "title": "Blue Diamond Almonds Lightly Salted Vegetables",
    "price": 23,
    "category": "vegetable",
    "img": "/assets/img/product-5-1.jpg",
    "detail":"Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid commodi consequatur.",
}, {
    "id": 6,
    "title": "Chobani Complete Vanilla Greek",
    "price": 15,
    "category": "freshfruit",
    "img": "/assets/img/product-6-1.jpg",
    "detail":"Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, voluptas nulla pariatur.",
}, {
    "id": 7,
    "title": "All Natural Style Chicken Meatballs",
    "price": 68,
    "category": "coffee",
    "img": "/assets/img/product-7-1.jpg",
    "detail":"Nor again is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain, but because occasionally.",
}, {
    "id": 8,
    "title": "Angie’s Boomchickapop Sweet & Salty Kettle Corn",
    "price": 94,
    "category": "freshfruit",
    "img": "/assets/img/product-8-1.jpg",
    "detail":"At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti cupiditate non provident.",
}, {
    "id": 9,
    "title": "Canada Dry Ginger Ale – 2 L Bottle - 200ml - 400g",
    "price": 36,
    "category": "freshfruit",
    "img": "/assets/img/product-9-1.jpg",
    "detail":"There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some or randomised words.",
}, {
    "id": 10,
    "title": "Encore Seafoods Stuffed Alaskan Salmon",
    "price": 74,
    "category": "freshfruit",
    "img": "/assets/img/product-10-1.jpg",
    "detail":"It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to which looks reasonable.",
}, {
    "id": 11,
    "title": "Gorton’s Beer Battered Fish Fillets with soft paper",
    "price": 13,
    "category": "coffee",
    "img": "/assets/img/product-11-1.jpg",
    "detail":"It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
}, {
    "id": 12,
    "title": "Haagen-Dazs Caramel Cone Ice Cream Ketchup",
    "price": 47,
    "category": "coffee",
    "img": "/assets/img/product-12-1.jpg",
    "detail":"Duis aute irure dolor in reprehenderit doloremque laudantium, in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
}, {
    "id": 13,
    "title": "Angie’s Boomchickapop Sweet & Salty Kettle Corn",
    "price": 102,
    "category": "coffee",
    "img": "/assets/img/product-13-1.jpg",
    "detail":"Voluptatem sequi nesciunt. Neque porro quisquam est, quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam.",
}, {
    "id": 14,
    "title": "Foster Takeout Crispy Classic Buffalo Wings",
    "price": 82,
    "category": "vegetable",
    "img": "/assets/img/product-14-1.jpg",
    "detail":"Sed ultrices massa non laoreet rutrum. Nullam vestibulum semper. Sed egestas dignissim sem at tempus. In et mollis justo.",
}, {
    "id": 15,
    "title": "Blue Almonds Lightly Salted Vegetables",
    "price": 76,
    "category": "vegetable",
    "img": "/assets/img/product-15-1.jpg",
    "detail":"Duis quis nisl leo. Curabitur ut velit pharetra, ullamcorper efficitur nisi. Maecenas volutpat lacus id vehicula malesuada.",
}, {
    "id": 16,
    "title": "Chobani Complete Vanilla Greek Yogurt",
    "price": 85,
    "category": "vegetable",
    "img": "/assets/img/product-16-1.jpg",
    "detail":"Sed varius fringilla lectus consequat condimentum. Aliquam turpis lorem, venenatis mauris vitae, vestibulum efficitur neque.",
},];

var json = JSON.stringify(PRODUCTDATA)
localStorage.setItem("PRODUCTDATA", json)

// if(localStorage.getItem("PRODUCTDATA")){
//     var json = localStorage.getItem("PRODUCTDATA")
//     var product_product_product = JSON.parse(json)
//     for(var i = 0 ; i < product_product_product.length ; i++){
//             PRODUCTDATA[i] = product_product_product[i]
//     }
// }





