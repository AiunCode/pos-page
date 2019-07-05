function createItemList(allItems, inputs) {
  var list = [];

  for (var i = 0; i < inputs.length; i++) {
    var location = inputs[i].length;

    if(inputs[i].length > 10){
      location = inputs[i].indexOf("-");
    }

    var barcode = inputs[i].substring(0, location)

    for (var k = 0; k < allItems.length; k++) {
      if (barcode === allItems[k].barcode) {
        var newItem = {
          name: allItems[k].name,
          unit: allItems[k].unit,
          price: allItems[k].price,
          barcode: allItems[k].barcode,
          img: allItems[k].img
        }

        list.push(newItem)
      }
    }
  }

  return list;
}

function createCartList(itemList, inputs) {
  var cartList = [];
  for(var i = 0; i < itemList.length; i++) {
    var count = 1;
    var isExit = false;
    if(inputs[i].length > 10) {
      count = parseInt(inputs[i].substring(inputs[i].indexOf("-") + 1));
    }
    for(var j = 0; j < cartList.length; j++) {
      if(cartList[j].barcode === itemList[i].barcode) {
        cartList[j].count += count;
        isExit = true; 
      }
    }
    if(!isExit) {
      var tmp = {
        name: itemList[i].name,
        unit: itemList[i].unit,
        price: itemList[i].price,
        img: itemList[i].img,
        count: count,
        barcode: itemList[i].barcode
      }
      cartList.push(tmp);
    }
  }
  return cartList;
}

function caculateDiscount (cartList, promotions) {
  var promotion = promotions[0];
  var cartItems = [];
  var discountProductList = [];

  for(var i = 0; i < cartList.length; i++) {
    var saveCount = 0;
    for(var j = 0; j < promotion.barcodes.length; j++) {
      if(cartList[i].barcode === promotion.barcodes[j]) {
        saveCount = parseInt(cartList[i].count/3);
        var disCountItem = {
          name: cartList[i].name,
          count: saveCount,
          unit: cartList[i].unit,
          price: cartList[i].price,
        };
        discountProductList.push(disCountItem);
      }
    };
    var totalPrice = (cartList[i].count - saveCount) * cartList[i].price;

    var tmp = {
      name: cartList[i].name,
      count: cartList[i].count,
      unit: cartList[i].unit,
      price: cartList[i].price,
      totalPrice: totalPrice,
      img: cartList[i].img
    };
    cartItems.push(tmp);
  }


  return { cartItems: cartItems, discountProductList: discountProductList };
}

function createSummary (cartItems, discountProductList) {
  var totalPrice = 0;
  var discountPrice = 0;

  for (var i = 0; i < cartItems.length; i++) {
    totalPrice += cartItems[i].totalPrice;
  }

  for (var k = 0; k < discountProductList.length; k++) {
    discountPrice += (discountProductList[k].count * discountProductList[k].price);
  }

  return {
    totalPrice: totalPrice,
    discountPrice: discountPrice
  };
}

function generateOutputs(inputs) {
  // 获取全部的商品
  var allItems = loadAllItems();
  // 获取全部的促销信息
  var promotions = loadPromotions();

  var itemList = createItemList(allItems, inputs)

  var cartList = createCartList(itemList, inputs)

  var discountInfo = caculateDiscount(cartList, promotions)

  var summary = createSummary(discountInfo.cartItems, discountInfo.discountProductList);

  var result = {
    cartItems: discountInfo.cartItems,
    discountProductList: discountInfo.discountProductList,
    summary: summary
  }

  return result
}
