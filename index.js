var cart = [];
alert(console.log("test"));
function setCart(newCart) {
  cart = newCart;
}

function getCart(){
  return cart
}

function addToCart(item){
  var price = Math.floor(Math.random() * 100);
  var newItem = {[item]: price};
  cart.push(newItem);
  console.log(item + " has been added to your cart.");
  return cart
}

function viewCart(){
  var new_array = [];
  if (cart.length >= 1){
    for (var i = 0; i < cart.length; i++){
      var item = cart[i];
      for  (var key in item){
        new_array.push(key + " at $" + item[key]);
      }
    }
    console.log("In your cart, you have " + new_array.join(", ") + ".");
  }
  else {
    console.log("Your shopping cart is empty.");
  }
}

function removeFromCart(item_to_remove){
  var itemFound = false;
  for (var key in cart){
    if (cart[key].hasOwnProperty(item_to_remove)){
      cart.splice(key, 1);
      itemFound = true;
    }
  }
  if (!itemFound) {
    console.log("That item is not in your cart.");
  }
}

function total() {
  let t = 0

  for (var i = 0, l = cart.length; i < l; i++) {
    for (var item in cart[i]) {
      t += cart[i][item]
    }
  }

  return t
}


function placeOrder(cardNumber){
  if (cardNumber == undefined){
    console.log("We don't have a credit card on file for you to place your order.")
  }
  else {
    console.log(`Your total cost is $${total()}, which will be charged to the card ${cardNumber}.`);
    cart = [];
  }
}
