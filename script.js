const products = [
    { id: 1, name: "Single Rose", price: 40, imgSrc: "image1.jpeg" },
    { id: 2, name: "Single Rose", price: 40, imgSrc: "image2.jpeg" },
    { id: 3, name: "Single Rose", price: 40, imgSrc: "image3.jpeg" },
    { id: 4, name: "Single Rose with Design", price: 60, imgSrc: "image4.jpeg" },
    { id: 5, name: "Single Rose with Design", price: 60, imgSrc: "image5.jpeg" },
    { id: 6, name: "Single Rose with Design", price: 60, imgSrc: "image6.jpeg" },
    { id: 7, name: "Single Rose with Design", price: 60, imgSrc: "image7.jpeg" },
    { id: 8, name: "Single Rose with Balloon", price: 70, imgSrc: "image8.jpeg" },
    { id: 9, name: "Single Rose with Balloon ", price: 70, imgSrc: "image9.jpeg" },
    { id: 10, name: "Single Rose with Balloon", price: 70, imgSrc: "image10.jpeg" },
    { id: 11, name: "Three Roses", price: 150, imgSrc: "image11.jpeg" }
];

const productsContainer = document.getElementById('products');

// Dynamically generate product listings
products.forEach(product => {
    const productElement = document.createElement('div');
    productElement.classList.add('product');
    productElement.innerHTML = `
        <img src="${product.imgSrc}" alt="${product.name}" class="product-image">
        <div class="product-details">
            <h2 class="product-title">${product.name}</h2>
            <p class="product-price">₱${product.price}</p>
            <button class="add-to-cart-btn" data-product-id="${product.id}">Add to Cart</button>
        </div>
    `;
    productsContainer.appendChild(productElement);
});

// Add to cart functionality
document.querySelectorAll('.add-to-cart-btn').forEach(button => {
    button.addEventListener('click', function() {
        const productId = this.dataset.productId;
        const product = products.find(p => p.id == productId);

        const item = document.createElement('li');
        item.classList.add('cart-item');
        item.innerHTML = `
            <img src="${product.imgSrc}" alt="${product.name}" class="cart-item-image">
            <div class="cart-item-details">
                ${product.name} - ₱${product.price}
            </div>
            <button class="delete-btn" data-product-id="${product.id}">Delete</button>
        `;
        document.querySelector('.cart-items').appendChild(item);

        // Delete functionality
        item.querySelector('.delete-btn').addEventListener('click', function() {
            item.remove();
        });
    });
});