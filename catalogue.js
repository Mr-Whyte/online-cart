var img1 = 'img/camera.jpg';
var img2 = 'img/jfc65.jfif';
var img3 = 'img/rolex.jpg';
var img4 = 'img/supercomputer.jfif';
var img5 = 'img/xbox.jfif';

function item(name, price, image) {
    this.name = name
    this.price = price;
    this.image = image;
};

// all items in the catalogue
let item1 = new item("Canon EOS 4000D DSLR", 6495.00, img1);
let item2 = new item("JVC 65inch Plasma", 9499.00, img2);
let item3 = new item("Rolex", 780719.16, img3);
let item4 = new item("Super Computer", 564832.00, img4);
let item5 = new item("Xbox one", 9000.00, img5);

// store all the items in session storage
sessionStorage.setItem("CatalogueItems", JSON.stringify([item1, item2, item3, item4, item5]));

var amount = parseInt(sessionStorage.getItem("Amount"));
if (!amount) {
    amount = 0;
    var items = [];
    sessionStorage.setItem("Items", JSON.stringify(items));
} else {
    var items = JSON.parse(sessionStorage.getItem("Items"));
};

sessionStorage.setItem("Amount", amount);

// all cart functions gets sets the items and stores it then pushes it to cart page
function cart(i) {
    var itemList = JSON.parse(sessionStorage.getItem("CatalogueItems"));
    var item = JSON.parse(sessionStorage.getItem("Items"));
    var c = parseInt(sessionStorage.getItem("Amount"));
    console.log(item);
    // console.log(c);
    if (item == null) {
        item = [itemList[i]];
    } else {
        item.push(itemList[i]);
    };

    sessionStorage.setItem("Items", JSON.stringify(item));

    sessionStorage.setItem("Amount", c += itemList[i].price);
    alert("The current total of the items is R" + c);
    document.location.reload();
}

