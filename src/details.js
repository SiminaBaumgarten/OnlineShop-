import { http } from './http.js';
import { ui } from './ui.js';
// Get Products on DOM load


const id = window.location.search.split('=')[1];

window.onload = () => {
    if (window.location.search !== "") {

        http
            .get("http://localhost:3000/products/" + id)
            .then((product) => ui.showProductDetails(product));

    }
};