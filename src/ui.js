class UI {
    constructor() {
        this.productsDiv = document.getElementById('products');
        this.title = document.getElementById('title');
        this.price = document.getElementById('price');
        this.image = document.getElementById('image');
        this.description = document.getElementById('description');
        this.productDetailsDiv = document.getElementById('detailsDiv');
    }

    showProducts(products) {
        let output = '';
        products.forEach((product) => {
            output += `
         <div class="card m-3" style="width: 18rem;">
            <div class="card-body">
               <img src="${product.image}" class="card-img-top" alt="..." width="240", height="350">
               <br>
               <h4 class="card-title">${product.title}</h4>
               <p class="card-text">${product.description}</p>
               <p class="card-text">${product.dimensions}</p>
               <p class="card-text">Pret: ${product.price} ron</p>
               <button 
               class="btn btn-secondary btn-info" 
               onclick="location.href='details?id=${product.id}';" 
               id="${product.id}">Details</button>
            </div>
         </div>
         `;
            this.productsDiv.innerHTML = output;
        });
    }

    showProductsAdminPage(products) {
        let output = '';
        products.forEach((product) => {
            output += `
         <div class="card m-3" style="width: 18rem;">
            <div class="card-body">
               <img src="${product.image}" class="card-img-top" alt="..." width="240", height="350">
               <br>
               <h4 class="card-title">${product.title}</h4>
               <p class="card-text">${product.description}</p>
               <p class="card-text">${product.dimensions}</p>
               <p class="card-text">Pret: ${product.price} ron</p>
               <button 
               class="btn btn-secondary delete" 
               id="${product.id}">Delete</button>
            </div>
         </div>
         `;
            this.productsDiv.innerHTML = output;
        });
    }

    showProductDetails(product) {

        this.productDetailsDiv.innerHTML = `
            <div class="shop-item">
                <div class="card mb-3" style="max-width: 940px;">
                <div class="row g-0">
                <div class="col-md-5">
                    <img src="${product.image}" alt="..." width="340", height="450">
                </div>
                <div class="col-md-7">
                    <div class="card-body">
                    <br>
                        <div class="card-text">
                            <h5 class="card-title">${product.title}</h5>
                            <p class="card-text">Descriere: ${product.description}</p>
                            <p class="card-text">Dimensiune: ${product.dimensions}</p>
                            <p class="card-text">Pret: ${product.price} ron</p>
                            <button class="btn btn-secondary btn-info add-to-cart" id="${product.id}" onclick="location.href='cart.html?id=${product.id}';">Add to cart</button>
                        </div>
                    </div>
                </div>
                </div>
                </div>
            </div>`;
    }
}
export const ui = new UI();