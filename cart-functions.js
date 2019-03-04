// ************************************************* 
// Shopping Cart functions

var happaCart = {};
happaCart.cart = [];     // cart belongs to happaCart var (is attached)

happaCart.Item = function (img, name, price, count) {   // define item ARRAY to hold cart items(objs)
    this.img = img
    this.name = name;
    this.price = price;    // define an object to represent cart item
    this.count = count;    // count = count ?? pas maikla taip maciau
};

happaCart.addItemToCart = function (img, name, price, count) {
    for (var i in this.cart) {
        if (this.cart[i].name === name){
            this.cart[i].count += count;
            this.saveCart();
            return;
        }
    }
    var item = new this.Item(img, name, price, count);
    this.cart.push(item);
    this.saveCart();
    location.reload();  //darasiau kad atnaujintu: YOUR CART IS EMPTY 
};

happaCart.setCountForItem = function(name, count) {
    for (var i in this.cart) {
        if (this.cart[i].name === name) {
            this.cart[i].count = count;
            break;
        }
    }
    this.saveCart();
};

happaCart.removeItemFromCart = function(name) {
    for (var i in this.cart) {
        if (this.cart[i].name === name) {
            this.cart[i].count --;
            if (this.cart[i].count === 0) {
                this.cart.splice(i, 1);
            }
            break;
        }
    }
    this.saveCart();
};

happaCart.removeItemFromCartAll = function(name) {
    for (var i in this.cart) {
        if (this.cart[i].name === name) {
            this.cart.splice(i, 1);
            break;
        }
    }
    this.saveCart();    //pati darasiau
    location.reload();  //darasiau kad atnaujintu: YOUR CART IS EMPTY 
};

happaCart.clearCart = function () {
    this.cart = []; 
    this.saveCart();  
    location.reload();  //darasiau kad atnaujintu: YOUR CART IS EMPTY 

}

happaCart.countCart = function() {
    var totalCount = 0;
    for (var i in this.cart) {
        totalCount += this.cart[i].count;
    }
    return totalCount;
}

happaCart.totalCart = function() {
    var totalCost = 0;
    for (var i in this.cart) {
        totalCost += this.cart[i].price * this.cart[i].count;
    }
    return totalCost.toFixed(2);
}

happaCart.listCart = function() {
    var cartCopy = []; 
    for (var i in this.cart) {
        var item = this.cart[i];
        var itemCopy = {};
        for (var p in item) {
            itemCopy[p] = item[p];
        }
        itemCopy.total = (item.price * item.count).toFixed(2);   ////PRIDEJAU///
        cartCopy.push(itemCopy);
    }
    return cartCopy;
}

happaCart.saveCart = function() {
    localStorage.setItem("HappaShoppingCart", JSON.stringify(this.cart)); 
}

happaCart.loadCart = function() {
    this.cart = JSON.parse (localStorage.getItem("HappaShoppingCart"));
}

happaCart.loadCart();


// ************************************************* 
    //MANO PARASYTOS FJOS:











