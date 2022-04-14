updateCartTotal()


const removeButtons = document.getElementsByClassName('danger')

for (let i = 0; i < removeButtons.length; i++) {
    removeButtons[i].onclick = deleteProduct
}

const quantityInput = document.getElementsByClassName('cart-quantity-input')
for (let i = 0; i < quantityInput.length; i++) {
    let input = quantityInput[i]
    input.addEventListener('change', quantityChanged)
}

// add to cart code
const addToCartButtons = document.getElementsByClassName('shop-item-button')
for (let i = 0; i < addToCartButtons.length; i++) {
    let addButton = addToCartButtons[i]
    button.addEventListener('click', addToCartClicked)
}

function quantityChanged(event) {
    let input = event.target
    if (isNaN(input.value) || input.value <= 0) {
        input.value = 1
    }
    updateCartTotal()
}

function deleteProduct(e) {
    console.log(e)

    e.target.parentElement.parentElement.remove()
    updateCartTotal()
}


function addToCartClicked(event) {
    let button = event.target
    let shopItem = button.parentElement.parentElement
    let title = shopItem.getElementsByClassName('title text-dark')[0].innerText
    console.log(title)
    let price = shopItem.getElementsByClassName('shop-item-price')[0].innerText
    let imageSrc = shopItem.getElementsByClassName('shop-item-image')[0].src
    console.log(title, price, imageSrc)
    addItemToCart(title, price, imageSrc)
}

function addItemToCart(title, price, imageSrc) {
    let cartRow = document.createElement('div')
    cartRow.classList.add("")
    let cartItems = document.getElementsByClassName('cart-items')[0]
    let cartRowContents = `
         <tr class="cart-items">
             <td>
                 <figure class="itemside align-items-center">
                      <div class="aside"><img src="images/18.png" class="img-sm"></div>
                     <figcaption class="info"> <a href="#" class="title text-dark">Printed White Tshirt</a>
                        <p class="small text-muted">SIZE:<br> Description: </p>
                         </figcaption>
                        </figure>
                         </td>
                         <td>
                        <div class="price-wrap price">$15.00 </div>
                    </td>
                                        
                    <td> <input class="form-control cart-quantity-input" type="number" value="1"></td>
                    <td class="text-right d-none d-md-block">
                    <button class="btn btn-light danger btn-round"> Remove</button></td>
        </tr>`
    cartRow.innerHTML = cartRowContents
    cartItems.append(cartRow)
}


function updateCartTotal() {
    let cartItemContainer = document.getElementsByClassName("table-container")[0]

    console.log('cartItemContainer= ', cartItemContainer)

    let cartRows = cartItemContainer.getElementsByClassName('cart-items')

    let total = 0
    for (let i = 0; i < cartRows.length; i++) {
        let cartRow = cartRows[i]
        let quantityElement = cartRow.getElementsByClassName('cart-quantity-input')[0]
        let priceElement = cartRow.getElementsByClassName('price')[0]



        let price = parseFloat(priceElement.innerText.replace('$', ''))

        console.log('priceElement', priceElement)

        let quantity = quantityElement.value
        console.log('quantity', quantity)

        total = total + (price * quantity)
        console.log(total)

    }
    document.getElementsByClassName('total')[0].innerText = '$' + '' + total;

}