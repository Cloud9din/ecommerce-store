// =====================================================
// SHOPSPHERE — MODERN E-COMMERCE STORE
// =====================================================


// =====================================================
// PRODUCTS
// =====================================================

const products = [

  {
    id: 1,
    name: "Nova Wireless Headphones",
    category: "audio",
    price: 79.99,
    rating: 4.9,
    icon: "🎧",
    badge: "Best Seller",
    description:
      "Premium wireless headphones with comfortable cushioning, clear sound and long battery life."
  },

  {
    id: 2,
    name: "Pulse Mini Speaker",
    category: "audio",
    price: 49.99,
    rating: 4.7,
    icon: "🔊",
    badge: "Popular",
    description:
      "Compact wireless speaker delivering rich sound in a portable modern design."
  },

  {
    id: 3,
    name: "Orbit Smart Watch",
    category: "technology",
    price: 129.99,
    rating: 4.8,
    icon: "⌚",
    badge: "New",
    description:
      "A modern smart watch with activity tracking, notifications and an elegant display."
  },

  {
    id: 4,
    name: "Aero Laptop Stand",
    category: "technology",
    price: 39.99,
    rating: 4.6,
    icon: "💻",
    badge: "",
    description:
      "An adjustable laptop stand designed to improve comfort and create a cleaner workspace."
  },

  {
    id: 5,
    name: "Flux Wireless Charger",
    category: "technology",
    price: 29.99,
    rating: 4.5,
    icon: "🔋",
    badge: "",
    description:
      "Fast and convenient wireless charging with a minimal desk-friendly design."
  },

  {
    id: 6,
    name: "Studio Everyday Hoodie",
    category: "fashion",
    price: 54.99,
    rating: 4.8,
    icon: "🧥",
    badge: "Trending",
    description:
      "A comfortable everyday hoodie with a clean contemporary style."
  },

  {
    id: 7,
    name: "Classic Urban Cap",
    category: "fashion",
    price: 24.99,
    rating: 4.5,
    icon: "🧢",
    badge: "",
    description:
      "A simple everyday cap designed for casual wear and effortless styling."
  },

  {
    id: 8,
    name: "Metro Travel Backpack",
    category: "fashion",
    price: 44.99,
    rating: 4.7,
    icon: "🎒",
    badge: "Popular",
    description:
      "A practical backpack with spacious compartments for work, travel and daily use."
  },

  {
    id: 9,
    name: "Halo Desk Lamp",
    category: "home",
    price: 59.99,
    rating: 4.8,
    icon: "💡",
    badge: "New",
    description:
      "A contemporary desk lamp with soft lighting and a modern minimal shape."
  },

  {
    id: 10,
    name: "Cloud Comfort Cushion",
    category: "home",
    price: 27.99,
    rating: 4.6,
    icon: "🛋️",
    badge: "",
    description:
      "A soft decorative cushion designed to bring extra comfort to your living space."
  },

  {
    id: 11,
    name: "Nordic Coffee Mug",
    category: "home",
    price: 18.99,
    rating: 4.7,
    icon: "☕",
    badge: "",
    description:
      "A simple ceramic mug inspired by clean Scandinavian design."
  },

  {
    id: 12,
    name: "Echo Wireless Earbuds",
    category: "audio",
    price: 64.99,
    rating: 4.8,
    icon: "🎵",
    badge: "Best Seller",
    description:
      "Compact wireless earbuds offering clear audio, comfortable fit and easy everyday use."
  }

];


// =====================================================
// DOM ELEMENTS
// =====================================================

const productGrid =
  document.getElementById(
    "product-grid"
  );

const productSearch =
  document.getElementById(
    "product-search"
  );

const productCount =
  document.getElementById(
    "product-count"
  );

const sortProducts =
  document.getElementById(
    "sort-products"
  );

const noProducts =
  document.getElementById(
    "no-products"
  );


const categoryButtons =
  document.querySelectorAll(
    ".category-card"
  );


const cartButton =
  document.getElementById(
    "cart-button"
  );

const cartDrawer =
  document.getElementById(
    "cart-drawer"
  );

const closeCartButton =
  document.getElementById(
    "close-cart"
  );

const cartItems =
  document.getElementById(
    "cart-items"
  );

const emptyCart =
  document.getElementById(
    "empty-cart"
  );

const cartCount =
  document.getElementById(
    "cart-count"
  );

const cartSubtotal =
  document.getElementById(
    "cart-subtotal"
  );

const checkoutButton =
  document.getElementById(
    "checkout-button"
  );


const wishlistButton =
  document.getElementById(
    "wishlist-button"
  );

const wishlistDrawer =
  document.getElementById(
    "wishlist-drawer"
  );

const closeWishlistButton =
  document.getElementById(
    "close-wishlist"
  );

const wishlistItems =
  document.getElementById(
    "wishlist-items"
  );

const emptyWishlist =
  document.getElementById(
    "empty-wishlist"
  );

const wishlistCount =
  document.getElementById(
    "wishlist-count"
  );


const drawerOverlay =
  document.getElementById(
    "drawer-overlay"
  );


const productModal =
  document.getElementById(
    "product-modal"
  );

const productModalContent =
  document.getElementById(
    "product-modal-content"
  );

const closeProductModal =
  document.getElementById(
    "close-product-modal"
  );


const searchToggle =
  document.getElementById(
    "search-toggle"
  );

const searchOverlay =
  document.getElementById(
    "search-overlay"
  );

const closeSearch =
  document.getElementById(
    "close-search"
  );

const globalSearchInput =
  document.getElementById(
    "global-search-input"
  );


const mobileMenuButton =
  document.getElementById(
    "mobile-menu-button"
  );

const mobileMenu =
  document.getElementById(
    "mobile-menu"
  );


const toast =
  document.getElementById(
    "toast"
  );


// =====================================================
// STORAGE
// =====================================================

const CART_KEY =
  "shopsphereCart";

const WISHLIST_KEY =
  "shopsphereWishlist";


// =====================================================
// APP STATE
// =====================================================

let selectedCategory =
  "all";

let searchTerm =
  "";

let sortMode =
  "featured";

let cart =
  loadStorage(
    CART_KEY,
    []
  );

let wishlist =
  loadStorage(
    WISHLIST_KEY,
    []
  );

let toastTimer;


// =====================================================
// STORAGE HELPERS
// =====================================================

function loadStorage(
  key,
  fallback
) {

  try {

    const data =
      JSON.parse(
        localStorage.getItem(
          key
        )
      );

    return data || fallback;

  }

  catch {

    return fallback;

  }

}


function saveCart() {

  localStorage.setItem(
    CART_KEY,
    JSON.stringify(
      cart
    )
  );

}


function saveWishlist() {

  localStorage.setItem(
    WISHLIST_KEY,
    JSON.stringify(
      wishlist
    )
  );

}


// =====================================================
// FORMAT PRICE
// =====================================================

function formatPrice(
  price
) {

  return new Intl.NumberFormat(
    "en-GB",
    {
      style: "currency",
      currency: "GBP"
    }
  ).format(price);

}


// =====================================================
// GET PRODUCT
// =====================================================

function getProduct(
  productId
) {

  return products.find(
    product =>
      product.id ===
      Number(productId)
  );

}


// =====================================================
// PRODUCT FILTERING
// =====================================================

function getFilteredProducts() {

  let filtered =
    [...products];


  if (
    selectedCategory !==
    "all"
  ) {

    filtered =
      filtered.filter(
        product =>
          product.category ===
          selectedCategory
      );

  }


  if (searchTerm) {

    const value =
      searchTerm.toLowerCase();


    filtered =
      filtered.filter(
        product =>

          product.name
            .toLowerCase()
            .includes(value)

          ||

          product.category
            .toLowerCase()
            .includes(value)

          ||

          product.description
            .toLowerCase()
            .includes(value)

      );

  }


  if (
    sortMode ===
    "price-low"
  ) {

    filtered.sort(
      (a, b) =>
        a.price - b.price
    );

  }


  if (
    sortMode ===
    "price-high"
  ) {

    filtered.sort(
      (a, b) =>
        b.price - a.price
    );

  }


  if (
    sortMode ===
    "rating"
  ) {

    filtered.sort(
      (a, b) =>
        b.rating - a.rating
    );

  }


  return filtered;

}


// =====================================================
// RENDER PRODUCTS
// =====================================================

function renderProducts() {

  const filteredProducts =
    getFilteredProducts();


  productGrid.innerHTML =
    "";


  productCount.textContent =
    `${filteredProducts.length} ${
      filteredProducts.length === 1
        ? "product"
        : "products"
    }`;


  if (
    filteredProducts.length === 0
  ) {

    noProducts.classList.add(
      "show"
    );

    return;

  }


  noProducts.classList.remove(
    "show"
  );


  filteredProducts.forEach(
    (
      product,
      index
    ) => {

      const card =
        document.createElement(
          "article"
        );


      card.className =
        "product-card";


      card.style.animationDelay =
        `${index * 0.04}s`;


      const favourite =
        wishlist.includes(
          product.id
        );


      card.innerHTML = `

        <div class="product-image">

          ${
            product.badge
              ? `
                <span class="product-badge">
                  ${product.badge}
                </span>
              `
              : ""
          }

          <button
            type="button"
            class="wishlist-toggle ${
              favourite
                ? "active"
                : ""
            }"
            data-wishlist-id="${product.id}"
            aria-label="Save ${product.name}"
          >
            ${
              favourite
                ? "♥"
                : "♡"
            }
          </button>

          <span class="product-image-icon">
            ${product.icon}
          </span>

        </div>


        <div class="product-info">

          <span class="product-category">
            ${product.category}
          </span>

          <h3>
            ${product.name}
          </h3>

          <div class="product-rating">
            ★ ${product.rating}
          </div>


          <div class="product-bottom">

            <span class="product-price">
              ${formatPrice(product.price)}
            </span>


            <div class="product-actions">

              <button
                type="button"
                class="product-view-button"
                data-view-id="${product.id}"
              >
                View
              </button>

              <button
                type="button"
                class="add-cart-button"
                data-add-id="${product.id}"
              >
                Add
              </button>

            </div>

          </div>

        </div>

      `;


      productGrid.appendChild(
        card
      );

    }
  );


  attachProductEvents();

}


// =====================================================
// PRODUCT CARD EVENTS
// =====================================================

function attachProductEvents() {

  document
    .querySelectorAll(
      "[data-add-id]"
    )
    .forEach(
      button => {

        button.addEventListener(
          "click",
          () => {

            addToCart(
              button.dataset.addId
            );

          }
        );

      }
    );


  document
    .querySelectorAll(
      "[data-view-id]"
    )
    .forEach(
      button => {

        button.addEventListener(
          "click",
          () => {

            openProductModal(
              button.dataset.viewId
            );

          }
        );

      }
    );


  document
    .querySelectorAll(
      "[data-wishlist-id]"
    )
    .forEach(
      button => {

        button.addEventListener(
          "click",
          () => {

            toggleWishlist(
              button.dataset
                .wishlistId
            );

          }
        );

      }
    );

}


// =====================================================
// CATEGORY FILTER
// =====================================================

categoryButtons.forEach(
  button => {

    button.addEventListener(
      "click",
      () => {

        categoryButtons
          .forEach(
            item =>
              item.classList.remove(
                "active"
              )
          );


        button.classList.add(
          "active"
        );


        selectedCategory =
          button.dataset.category;


        renderProducts();


        document
          .getElementById(
            "products"
          )
          .scrollIntoView({
            behavior: "smooth"
          });

      }
    );

  }
);


// =====================================================
// PRODUCT SEARCH
// =====================================================

productSearch.addEventListener(
  "input",
  () => {

    searchTerm =
      productSearch
        .value
        .trim();


    renderProducts();

  }
);


// =====================================================
// SORT PRODUCTS
// =====================================================

sortProducts.addEventListener(
  "change",
  () => {

    sortMode =
      sortProducts.value;


    renderProducts();

  }
);


// =====================================================
// CART
// =====================================================

function addToCart(
  productId
) {

  const id =
    Number(productId);


  const existing =
    cart.find(
      item =>
        item.id === id
    );


  if (existing) {

    existing.quantity +=
      1;

  }

  else {

    cart.push({

      id: id,

      quantity: 1

    });

  }


  saveCart();

  renderCart();

  showToast(
    "Product added to cart"
  );

}


// =====================================================
// UPDATE CART QUANTITY
// =====================================================

function changeQuantity(
  productId,
  change
) {

  const item =
    cart.find(
      cartItem =>
        cartItem.id ===
        Number(productId)
    );


  if (!item) {
    return;
  }


  item.quantity +=
    change;


  if (
    item.quantity <= 0
  ) {

    cart =
      cart.filter(
        cartItem =>
          cartItem.id !==
          Number(productId)
      );

  }


  saveCart();

  renderCart();

}


// =====================================================
// REMOVE CART ITEM
// =====================================================

function removeFromCart(
  productId
) {

  cart =
    cart.filter(
      item =>
        item.id !==
        Number(productId)
    );


  saveCart();

  renderCart();


  showToast(
    "Product removed"
  );

}


// =====================================================
// RENDER CART
// =====================================================

function renderCart() {

  cartItems.innerHTML =
    "";


  const totalItems =
    cart.reduce(
      (
        total,
        item
      ) =>
        total +
        item.quantity,
      0
    );


  cartCount.textContent =
    totalItems;


  let subtotal =
    0;


  if (
    cart.length === 0
  ) {

    emptyCart.classList.add(
      "show"
    );

    cartItems.style.display =
      "none";

  }

  else {

    emptyCart.classList.remove(
      "show"
    );

    cartItems.style.display =
      "grid";

  }


  cart.forEach(
    item => {

      const product =
        getProduct(
          item.id
        );


      if (!product) {
        return;
      }


      subtotal +=
        product.price *
        item.quantity;


      const cartItem =
        document.createElement(
          "article"
        );


      cartItem.className =
        "cart-item";


      cartItem.innerHTML = `

        <div class="cart-item-image">
          ${product.icon}
        </div>


        <div class="cart-item-info">

          <strong>
            ${product.name}
          </strong>

          <span>
            ${formatPrice(product.price)}
          </span>


          <div class="quantity-controls">

            <button
              type="button"
              data-minus-id="${product.id}"
              aria-label="Decrease quantity"
            >
              −
            </button>

            <strong>
              ${item.quantity}
            </strong>

            <button
              type="button"
              data-plus-id="${product.id}"
              aria-label="Increase quantity"
            >
              +
            </button>

          </div>

        </div>


        <button
          type="button"
          class="remove-item-button"
          data-remove-id="${product.id}"
          aria-label="Remove ${product.name}"
        >
          ×
        </button>

      `;


      cartItems.appendChild(
        cartItem
      );

    }
  );


  cartSubtotal.textContent =
    formatPrice(
      subtotal
    );


  attachCartEvents();

}


// =====================================================
// CART EVENTS
// =====================================================

function attachCartEvents() {

  document
    .querySelectorAll(
      "[data-plus-id]"
    )
    .forEach(
      button => {

        button.addEventListener(
          "click",
          () => {

            changeQuantity(
              button.dataset.plusId,
              1
            );

          }
        );

      }
    );


  document
    .querySelectorAll(
      "[data-minus-id]"
    )
    .forEach(
      button => {

        button.addEventListener(
          "click",
          () => {

            changeQuantity(
              button.dataset.minusId,
              -1
            );

          }
        );

      }
    );


  document
    .querySelectorAll(
      "[data-remove-id]"
    )
    .forEach(
      button => {

        button.addEventListener(
          "click",
          () => {

            removeFromCart(
              button.dataset
                .removeId
            );

          }
        );

      }
    );

}


// =====================================================
// OPEN CART
// =====================================================

function openCart() {

  closeAllDrawers();


  cartDrawer.classList.add(
    "open"
  );


  drawerOverlay.classList.add(
    "open"
  );


  document.body.style.overflow =
    "hidden";

}


// =====================================================
// WISHLIST
// =====================================================

function toggleWishlist(
  productId
) {

  const id =
    Number(productId);


  if (
    wishlist.includes(id)
  ) {

    wishlist =
      wishlist.filter(
        itemId =>
          itemId !== id
      );


    showToast(
      "Removed from wishlist"
    );

  }

  else {

    wishlist.push(id);


    showToast(
      "Saved to wishlist"
    );

  }


  saveWishlist();

  renderWishlist();

  renderProducts();

}


// =====================================================
// RENDER WISHLIST
// =====================================================

function renderWishlist() {

  wishlistItems.innerHTML =
    "";


  wishlistCount.textContent =
    wishlist.length;


  if (
    wishlist.length === 0
  ) {

    emptyWishlist.classList.add(
      "show"
    );

    wishlistItems.style.display =
      "none";

    return;

  }


  emptyWishlist.classList.remove(
    "show"
  );


  wishlistItems.style.display =
    "grid";


  wishlist.forEach(
    productId => {

      const product =
        getProduct(
          productId
        );


      if (!product) {
        return;
      }


      const item =
        document.createElement(
          "article"
        );


      item.className =
        "wishlist-item";


      item.innerHTML = `

        <div class="wishlist-item-image">
          ${product.icon}
        </div>


        <div class="wishlist-item-info">

          <strong>
            ${product.name}
          </strong>

          <span>
            ${formatPrice(product.price)}
          </span>

          <button
            type="button"
            class="add-cart-button wishlist-cart-button"
            data-wishlist-cart="${product.id}"
          >
            Add to cart
          </button>

        </div>


        <button
          type="button"
          class="remove-item-button"
          data-wishlist-remove="${product.id}"
          aria-label="Remove ${product.name}"
        >
          ×
        </button>

      `;


      wishlistItems.appendChild(
        item
      );

    }
  );


  attachWishlistEvents();

}


// =====================================================
// WISHLIST EVENTS
// =====================================================

function attachWishlistEvents() {

  document
    .querySelectorAll(
      "[data-wishlist-remove]"
    )
    .forEach(
      button => {

        button.addEventListener(
          "click",
          () => {

            toggleWishlist(
              button.dataset
                .wishlistRemove
            );

          }
        );

      }
    );


  document
    .querySelectorAll(
      "[data-wishlist-cart]"
    )
    .forEach(
      button => {

        button.addEventListener(
          "click",
          () => {

            addToCart(
              button.dataset
                .wishlistCart
            );

          }
        );

      }
    );

}


// =====================================================
// OPEN WISHLIST
// =====================================================

function openWishlist() {

  closeAllDrawers();


  wishlistDrawer.classList.add(
    "open"
  );


  drawerOverlay.classList.add(
    "open"
  );


  document.body.style.overflow =
    "hidden";

}


// =====================================================
// CLOSE DRAWERS
// =====================================================

function closeAllDrawers() {

  cartDrawer.classList.remove(
    "open"
  );


  wishlistDrawer.classList.remove(
    "open"
  );


  drawerOverlay.classList.remove(
    "open"
  );


  document.body.style.overflow =
    "";

}


// =====================================================
// DRAWER BUTTONS
// =====================================================

cartButton.addEventListener(
  "click",
  openCart
);


wishlistButton.addEventListener(
  "click",
  openWishlist
);


closeCartButton.addEventListener(
  "click",
  closeAllDrawers
);


closeWishlistButton.addEventListener(
  "click",
  closeAllDrawers
);


drawerOverlay.addEventListener(
  "click",
  closeAllDrawers
);


// =====================================================
// HERO ADD BUTTON
// =====================================================

document
  .querySelectorAll(
    ".hero-add-button"
  )
  .forEach(
    button => {

      button.addEventListener(
        "click",
        () => {

          addToCart(
            button.dataset
              .productId
          );

          openCart();

        }
      );

    }
  );


// =====================================================
// PRODUCT MODAL
// =====================================================

function openProductModal(
  productId
) {

  const product =
    getProduct(
      productId
    );


  if (!product) {
    return;
  }


  const favourite =
    wishlist.includes(
      product.id
    );


  productModalContent.innerHTML = `

    <div class="modal-product-image">
      ${product.icon}
    </div>


    <div class="modal-product-info">

      <span class="section-label">
        ${product.category}
      </span>

      <h2>
        ${product.name}
      </h2>

      <div class="product-rating">
        ★ ${product.rating}
      </div>

      <p>
        ${product.description}
      </p>

      <strong class="modal-price">
        ${formatPrice(product.price)}
      </strong>


      <div class="hero-actions">

        <button
          type="button"
          class="add-cart-button"
          id="modal-add-cart"
        >
          Add to cart
        </button>

        <button
          type="button"
          class="secondary-button"
          id="modal-wishlist"
        >
          ${
            favourite
              ? "♥ Saved"
              : "♡ Add to wishlist"
          }
        </button>

      </div>

    </div>

  `;


  productModal.classList.add(
    "open"
  );


  document.body.style.overflow =
    "hidden";


  document
    .getElementById(
      "modal-add-cart"
    )
    .addEventListener(
      "click",
      () => {

        addToCart(
          product.id
        );

      }
    );


  document
    .getElementById(
      "modal-wishlist"
    )
    .addEventListener(
      "click",
      () => {

        toggleWishlist(
          product.id
        );


        openProductModal(
          product.id
        );

      }
    );

}


// =====================================================
// CLOSE PRODUCT MODAL
// =====================================================

function closeModal() {

  productModal.classList.remove(
    "open"
  );


  document.body.style.overflow =
    "";

}


closeProductModal.addEventListener(
  "click",
  closeModal
);


productModal.addEventListener(
  "click",
  event => {

    if (
      event.target ===
      productModal
    ) {

      closeModal();

    }

  }
);


// =====================================================
// SEARCH OVERLAY
// =====================================================

function openSearchOverlay() {

  searchOverlay.classList.add(
    "open"
  );


  document.body.style.overflow =
    "hidden";


  setTimeout(
    () => {

      globalSearchInput.focus();

    },
    200
  );

}


function closeSearchOverlay() {

  searchOverlay.classList.remove(
    "open"
  );


  document.body.style.overflow =
    "";

}


searchToggle.addEventListener(
  "click",
  openSearchOverlay
);


closeSearch.addEventListener(
  "click",
  closeSearchOverlay
);


searchOverlay.addEventListener(
  "click",
  event => {

    if (
      event.target ===
      searchOverlay
    ) {

      closeSearchOverlay();

    }

  }
);


// =====================================================
// GLOBAL SEARCH
// =====================================================

globalSearchInput.addEventListener(
  "input",
  () => {

    const value =
      globalSearchInput
        .value
        .trim();


    productSearch.value =
      value;


    searchTerm =
      value;


    selectedCategory =
      "all";


    categoryButtons
      .forEach(
        button => {

          button.classList.toggle(
            "active",
            button.dataset.category ===
              "all"
          );

        }
      );


    renderProducts();

  }
);


globalSearchInput.addEventListener(
  "keydown",
  event => {

    if (
      event.key ===
      "Enter"
    ) {

      closeSearchOverlay();


      document
        .getElementById(
          "products"
        )
        .scrollIntoView({
          behavior: "smooth"
        });

    }

  }
);


// =====================================================
// MOBILE MENU
// =====================================================

mobileMenuButton.addEventListener(
  "click",
  () => {

    mobileMenu.classList.toggle(
      "open"
    );


    mobileMenuButton.textContent =
      mobileMenu.classList
        .contains("open")
        ? "×"
        : "☰";

  }
);


mobileMenu
  .querySelectorAll("a")
  .forEach(
    link => {

      link.addEventListener(
        "click",
        () => {

          mobileMenu.classList.remove(
            "open"
          );


          mobileMenuButton.textContent =
            "☰";

        }
      );

    }
  );


// =====================================================
// CHECKOUT
// =====================================================

checkoutButton.addEventListener(
  "click",
  () => {

    if (
      cart.length === 0
    ) {

      showToast(
        "Your cart is empty"
      );

      return;

    }


    closeAllDrawers();


    showToast(
      "Demo checkout ready"
    );


    setTimeout(
      () => {

        alert(
          "ShopSphere Checkout\n\nThis is a portfolio demonstration. No real payment will be taken."
        );

      },
      350
    );

  }
);


// =====================================================
// TOAST MESSAGE
// =====================================================

function showToast(
  message
) {

  clearTimeout(
    toastTimer
  );


  toast.textContent =
    message;


  toast.classList.add(
    "show"
  );


  toastTimer =
    setTimeout(
      () => {

        toast.classList.remove(
          "show"
        );

      },
      2200
    );

}


// =====================================================
// ESCAPE KEY
// =====================================================

document.addEventListener(
  "keydown",
  event => {

    if (
      event.key !==
      "Escape"
    ) {

      return;

    }


    closeAllDrawers();

    closeModal();

    closeSearchOverlay();


    mobileMenu.classList.remove(
      "open"
    );


    mobileMenuButton.textContent =
      "☰";

  }
);


// =====================================================
// INITIALISE SHOPSPHERE
// =====================================================

function initialiseApp() {

  renderProducts();

  renderCart();

  renderWishlist();

}


initialiseApp();
