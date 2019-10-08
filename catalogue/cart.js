var total = 0;
var delivery = 650;
var coupon = 3000;

// this code gets the total amount the user purchased and stores it in the variable called total
var total = parseInt(sessionStorage.getItem("Amount"));
document.getElementById("itemTotal").append(total);

// this code gets the items the user purchased and stores it in the variable called total
var itemsArray = JSON.parse(sessionStorage.getItem("Items"));
var items = document.getElementById("Stuff");
console.log(itemsArray);
console.log(total);
// this code gets the items from variable a and for each item the user purchased create a div and display these items
itemsArray.forEach(function(z) {
    var div = document.createElement("div");
    items.appendChild(div);
    var br = document.createElement("div");
    br.innerHTML = z.name + " for " + " R" + z.price + "<br>" + "<hr>";
    div.appendChild(br);
});

// this code calculates the discount the user wants on thier total amount
function getPrice() {
    document.getElementById("total").value = "R"+total.toFixed(2);
}

// check if the radio button delivery is click if so add this delivery cost to the total
function radio() {
    if (document.getElementById("delivery").checked) {
        total = total += delivery;
        console.log(total);
    }
}

function discount(){
    if (document.getElementById("coupon").checked) {
        total = total -= coupon;
        console.log(total);
    }
}

// once purchase is confirmed provide the user with a reference number for them to call or query about their items
function confirm() {
    alert("your purchase for R" + total +" was succesfull, here is your reference number: " + Math.floor(100000 + Math.random() * 900000))
    window.parent.caches.delete("call")
}

