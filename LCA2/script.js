let cart = [];
let total = 0;

function scrollToProducts() {
    document.getElementById('products').scrollIntoView({ behavior: 'smooth' });
}

function addToCart(productName, price) {
    cart.push({ name: productName, price: price });
    updateCart();
    showToast(`${productName} has been added to your cart!`);

    // Change style by modifying class list
    const cartSection = document.getElementById('cart');
    if (cartSection) {
        cartSection.classList.add('highlight');
        setTimeout(() => {
            cartSection.classList.remove('highlight');
        }, 1500);
    }
}

function updateCart() {
    const cartItems = document.getElementById('cart-items');
    const cartCount = document.getElementById('cart-count');
    const cartTotal = document.getElementById('cart-total');

    if (!cartItems || !cartCount || !cartTotal) return;

    cartItems.innerHTML = "";
    total = 0;

    cart.forEach(item => {
        const li = document.createElement('li');
        li.textContent = `${item.name} - ${item.price.toLocaleString('en-IN', {
            style: 'currency',
            currency: 'INR'
        })}`;
        cartItems.appendChild(li);
        total += item.price;
    });

    cartCount.textContent = cart.length;
    cartTotal.textContent = `Total: ${total.toLocaleString('en-IN', {
        style: 'currency',
        currency: 'INR'
    })}`;

    //  DOM tree navigation property usage
    if (cartItems.firstElementChild) {
        console.log("First cart item:", cartItems.firstElementChild.textContent);
    }
}

const contactForm = document.getElementById('contact-form');
if (contactForm) {
    contactForm.addEventListener('submit', function (event) {
        event.preventDefault();
        alert('Thank you for contacting ShopEase!');
        this.reset();
    });
}

function searchProducts() {
    const input = document.getElementById('searchInput');
    const filter = input.value.toLowerCase();
    const productCards = document.querySelectorAll('#productList .product-card');

    productCards.forEach(card => {
        const productName = card.querySelector('h3').textContent.toLowerCase();
        card.style.display = productName.includes(filter) ? '' : 'none';
    });
}

function showToast(message) {
    const toast = document.getElementById('toast');
    toast.textContent = message;
    toast.classList.add('show');

    setTimeout(() => {
        toast.classList.remove('show');
    }, 3000);
}
