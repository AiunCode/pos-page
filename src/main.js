function generatorTemplate(cartItems) {
    var template = ''
    cartItems.forEach(function (cartItem) {
        template += '<tr>' +
            '<td><img src="' + cartItem.img + '"></td>' +
            '<td>' + cartItem.name + '</td>' +
            '<td>' + cartItem.count + cartItem.unit + '</td>' +
            '<td>' + cartItem.price.toFixed(2) + '(元)</td>' +
            '<td>' + cartItem.totalPrice.toFixed(2) + '(元)</td></tr>';
    })
    return template
}

function generatorDiscountProductListTemplate(discountProductList) {
    var template = ''
    discountProductList.forEach(function (product) {
        template += '<li class="discount-product-item">' +
            '<div class="item"><span class="name">名称：</span><span class="value">' + product.name + '</span></div>' +
            '<div class="item"><span class="name">数量：</span><span class="value">' + product.count + product.unit + '</span></div>' +
            '</li>'
    })
    return template
}

function renderTable(cartItems) {
    document.querySelector('.order-table-tbody').innerHTML = generatorTemplate(cartItems);
}

function renderDiscountProductList(discountProductList) {
    document.querySelector('.discount-product').innerHTML = generatorDiscountProductListTemplate(discountProductList)
}

function setTotlePrice(totalPrice) {
    document.querySelector('.total-price').textContent = totalPrice.toFixed(2) + '(元)'
}

function setDiscountPrice(discountPrice) {
    document.querySelector('.discount-price').textContent = discountPrice.toFixed(2) + '(元)'
}

function renderView(result) {
    renderTable(result.cartItems)
    renderDiscountProductList(result.discountProductList)
    setTotlePrice(result.summary.totalPrice)
    setDiscountPrice(result.summary.discountPrice)
}

document.addEventListener('DOMContentLoaded', () => {
    document.querySelector('.confirm').addEventListener('click', function() {
        var userInput = document.querySelector('#user-input').value.split(',').map(item => item.trim())

        var result = generateOutputs(userInput)
        renderView(result)
    })
})