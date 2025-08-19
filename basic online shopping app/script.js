const products = [
  {
    id: 1,
    name: "T-Shirt",
    price: 20,
    image: "images/shirt.jpg"
  },
  {
    id: 2,
    name: "Jeans",
    price: 40,
    image: "images/jeans.jpg"
  },
  {
    id: 3,
    name: "Sneakers",
    price: 60,
    image: "images/sneakers.jpg"
  },
  {
    id: 4,
    name: "Hat",
    price: 15,
    image: "images/hat.jpg"
  }
];

let cart = [];

function displayProducts() {
  const productContainer = document.getElementById('products');
  productContainer.innerHTML = '';
  products.forEach(product => {
    const div = document.createElement('div');
    div.className = 'product';
    div.innerHTML = `
      <img src="${product.image}" alt="${product.name}" />
      <h3>${product.name}</h3>
      <p>Price: $${product.price}</p>
      <button onclick="addToCart(${product.id})">Add to Cart</button>
    `;
    productContainer.appendChild(div);
  });
}

function addToCart(productId) {
  const product = products.find(p => p.id === productId);
  cart.push(product);
  updateCart();
}

function updateCart() {
  const cartItems = document.getElementById('cart-items');
  const totalDisplay = document.getElementById('total');
  cartItems.innerHTML = '';
  let total = 0;

  cart.forEach(item => {
    const li = document.createElement('li');
    li.innerHTML = `
      <div class="cart-item">
        <img src="${item.image}" alt="${item.name}" />
        <div>
          <p>${item.name} - $${item.price}</p>
        </div>
      </div>
    `;
    cartItems.appendChild(li);
    total += item.price;
  });

  totalDisplay.textContent = total;
}


// Initialize
displayProducts();

