// =====================================================
// SHOPSPHERE — REALISTIC E-COMMERCE STORE
// =====================================================


// =====================================================
// PRODUCT DATA
// =====================================================

const products = [

  {
    id: 1,

    name:
      "Nova Wireless Headphones",

    category:
      "audio",

    price:
      79.99,

    rating:
      4.9,

    badge:
      "Best Seller",

    image:
      "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=900&q=85",

    description:
      "Comfortable wireless over-ear headphones with rich sound, a clean modern finish and long-lasting battery life."
  },


  {
    id: 2,

    name:
      "Pulse Bluetooth Speaker",

    category:
      "audio",

    price:
      49.99,

    rating:
      4.7,

    badge:
      "Popular",

    image:
      "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?auto=format&fit=crop&w=900&q=85",

    description:
      "Portable wireless speaker designed for clear audio, everyday listening and easy travel."
  },


  {
    id: 3,

    name:
      "Orbit Smart Watch",

    category:
      "technology",

    price:
      129.99,

    rating:
      4.8,

    badge:
      "New",

    image:
      "https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=900&q=85",

    description:
      "A lightweight smart watch with activity tracking, notifications and a clean everyday design."
  },


  {
    id: 4,

    name:
      "Aero Laptop Stand",

    category:
      "technology",

    price:
      39.99,

    rating:
      4.6,

    badge:
      "",

    image:
      "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?auto=format&fit=crop&w=900&q=85",

    description:
      "An adjustable desktop solution designed to improve posture and create a cleaner working environment."
  },


  {
    id: 5,

    name:
      "Flux Wireless Charger",

    category:
      "technology",

    price:
      29.99,

    rating:
      4.5,

    badge:
      "",

    image:
      "https://images.unsplash.com/photo-1587033411391-5d9e51cce126?auto=format&fit=crop&w=900&q=85",

    description:
      "A compact wireless charging solution designed for modern desks, bedside tables and everyday use."
  },


  {
    id: 6,

    name:
      "Studio Everyday Hoodie",

    category:
      "fashion",

    price:
      54.99,

    rating:
      4.8,

    badge:
      "Trending",

    image:
      "https://images.unsplash.com/photo-1556821840-3a63f95609a7?auto=format&fit=crop&w=900&q=85",

    description:
      "A comfortable everyday hoodie with a relaxed fit and clean contemporary styling."
  },


  {
    id: 7,

    name:
      "Classic Urban Cap",

    category:
      "fashion",

    price:
      24.99,

    rating:
      4.5,

    badge:
      "",

    image:
      "https://images.unsplash.com/photo-1521369909029-2afed882baee?auto=format&fit=crop&w=900&q=85",

    description:
      "A lightweight everyday cap designed for casual wear with a simple understated look."
  },


  {
    id: 8,

    name:
      "Metro Travel Backpack",

    category:
      "fashion",

    price:
      44.99,

    rating:
      4.7,

    badge:
      "Popular",

    image:
      "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&w=900&q=85",

    description:
      "A practical backpack with generous storage for commuting, work, university and weekend travel."
  },


  {
    id: 9,

    name:
      "Halo Desk Lamp",

    category:
      "home",

    price:
      59.99,

    rating:
      4.8,

    badge:
      "New",

    image:
      "https://images.unsplash.com/photo-1507473885765-e6ed057f782c?auto=format&fit=crop&w=900&q=85",

    description:
      "A minimal desk lamp providing comfortable ambient lighting for workspaces and reading areas."
  },


  {
    id: 10,

    name:
      "Cloud Comfort Cushion",

    category:
      "home",

    price:
      27.99,

    rating:
      4.6,

    badge:
      "",

    image:
      "https://images.unsplash.com/photo-1584100936595-c0654b55a2e2?auto=format&fit=crop&w=900&q=85",

    description:
      "A soft decorative cushion created to bring comfort and texture to modern living spaces."
  },


  {
    id: 11,

    name:
      "Nordic Ceramic Mug",

    category:
      "home",

    price:
      18.99,

    rating:
      4.7,

    badge:
      "",

    image:
      "https://images.unsplash.com/photo-1514228742587-6b1558fcca3d?auto=format&fit=crop&w=900&q=85",

    description:
      "A clean ceramic mug inspired by Scandinavian styling and made for coffee, tea and everyday use."
  },


  {
    id: 12,

    name:
      "Echo Wireless Earbuds",

    category:
      "audio",

    price:
      64.99,

    rating:
      4.8,

    badge:
      "Best Seller",

    image:
      "https://images.unsplash.com/photo-1606220945770-b5b6c2c55bf1?auto=format&fit=crop&w=900&q=85",

    description:
      "Compact wireless earbuds offering comfortable listening, simple controls and clear everyday audio."
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


// Cart

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


// Wishlist

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


// Overlay

const drawerOverlay =
  document.getElementById(
    "drawer-overlay"
  );


// Product Modal

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


// Search Overlay

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


// Mobile Menu

const mobileMenuButton =
  document.getElementById(
    "mobile-menu-button"
  );


const mobileMenu =
  document.getElementById(
    "mobile-menu"
  );


// Toast

const toast =
  document.getElementById(
    "toast"
  );


// Hero

const heroImage =
  document.querySelector(
    ".hero-product-image img"
  );


// =====================================================
// LOCAL STORAGE
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
// STORAGE
// =====================================================

function loadStorage(
  key,
  fallback
) {

  try {

    const saved =
      localStorage.getItem(
        key
      );


    if (!saved) {

      return fallback;

    }


    return JSON.parse(
      saved
    );

  }

  catch (error) {

    console.error(
      "Storage error:",
      error
    );


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
// PRICE
// =====================================================

function formatPrice(
  price
) {

  return new Intl.NumberFormat(
    "en-GB",
    {

      style:
        "currency",

      currency:
        "GBP"

    }
  ).format(
    price
  );

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
// SAFE IMAGE
// =====================================================

function createProductImage(
  product,
  className = ""
) {

  const image =
    document.createElement(
      "img"
    );


  image.src =
    product.image;


  image.alt =
    product.name;


  image.loading =
    "lazy";


  if (className) {

    image.className =
      className;

  }


  image.addEventListener(
    "error",
    () => {

      image.src =
        "https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=900&q=80";

    },
    {
      once: true
    }
  );


  return image;

}


// =====================================================
// FILTER PRODUCTS
// =====================================================

function getFilteredProducts() {

  let filtered =
    [...products];


  // Category

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


  // Search

  if (
    searchTerm
  ) {

    const value =
      searchTerm
        .toLowerCase();


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


  // Sort

  if (
    sortMode ===
    "price-low"
  ) {

    filtered.sort(
      (a, b) =>
        a.price -
        b.price
    );

  }


  if (
    sortMode ===
    "price-high"
  ) {

    filtered.sort(
      (a, b) =>
        b.price -
        a.price
    );

  }


  if (
    sortMode ===
    "rating"
  ) {

    filtered.sort(
      (a, b) =>
        b.rating -
        a.rating
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
    product => {

      const card =
        document.createElement(
          "article"
        );


      card.className =
        "product-card";


      // Product Image Area

      const imageArea =
        document.createElement(
          "div"
        );


      imageArea.className =
        "product-image";


      const image =
        createProductImage(
          product
        );


      imageArea.appendChild(
        image
      );


      // Badge

      if (
        product.badge
      ) {

        const badge =
          document.createElement(
            "span"
          );


        badge.className =
          "product-badge";


        badge.textContent =
          product.badge;


        imageArea.appendChild(
          badge
        );

      }


      // Wishlist Button

      const favourite =
        wishlist.includes(
          product.id
        );


      const wishlistToggle =
        document.createElement(
          "button"
        );


      wishlistToggle.type =
        "button";


      wishlistToggle.className =
        `wishlist-toggle ${
          favourite
            ? "active"
            : ""
        }`;


      wishlistToggle.textContent =
        favourite
          ? "♥"
          : "♡";


      wishlistToggle.setAttribute(
        "aria-label",
        favourite
          ? `Remove ${product.name} from wishlist`
          : `Add ${product.name} to wishlist`
      );


      wishlistToggle.addEventListener(
        "click",
        () => {

          toggleWishlist(
            product.id
          );

        }
      );


      imageArea.appendChild(
        wishlistToggle
      );


      // Information

      const info =
        document.createElement(
          "div"
        );


      info.className =
        "product-info";


      const category =
        document.createElement(
          "span"
        );


      category.className =
        "product-category";


      category.textContent =
        product.category;


      const title =
        document.createElement(
          "h3"
        );


      title.textContent =
        product.name;


      const rating =
        document.createElement(
          "div"
        );


      rating.className =
        "product-rating";


      rating.textContent =
        `★ ${product.rating}`;


      // Bottom

      const bottom =
        document.createElement(
          "div"
        );


      bottom.className =
        "product-bottom";


      const price =
        document.createElement(
          "span"
        );


      price.className =
        "product-price";


      price.textContent =
        formatPrice(
          product.price
        );


      const actions =
        document.createElement(
          "div"
        );


      actions.className =
        "product-actions";


      // View Button

      const viewButton =
        document.createElement(
          "button"
        );


      viewButton.type =
        "button";


      viewButton.className =
        "product-view-button";


      viewButton.textContent =
        "View";


      viewButton.addEventListener(
        "click",
        () => {

          openProductModal(
            product.id
          );

        }
      );


      // Add Button

      const addButton =
        document.createElement(
          "button"
        );


      addButton.type =
        "button";


      addButton.className =
        "add-cart-button";


      addButton.textContent =
        "Add";


      addButton.addEventListener(
        "click",
        () => {

          addToCart(
            product.id
          );

        }
      );


      actions.append(
        viewButton,
        addButton
      );


      bottom.append(
        price,
        actions
      );


      info.append(
        category,
        title,
        rating,
        bottom
      );


      card.append(
        imageArea,
        info
      );


      productGrid.appendChild(
        card
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
            item => {

              item.classList.remove(
                "active"
              );

            }
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
          .scrollIntoView(
            {
              behavior:
                "smooth"
            }
          );

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
// SORTING
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
// ADD TO CART
// =====================================================

function addToCart(
  productId
) {

  const id =
    Number(
      productId
    );


  const existing =
    cart.find(
      item =>
        item.id === id
    );


  if (
    existing
  ) {

    existing.quantity +=
      1;

  }

  else {

    cart.push(
      {
        id:
          id,

        quantity:
          1
      }
    );

  }


  saveCart();


  renderCart();


  showToast(
    "Added to your cart"
  );

}


// =====================================================
// CART QUANTITY
// =====================================================

function changeQuantity(
  productId,
  change
) {

  const id =
    Number(
      productId
    );


  const item =
    cart.find(
      item =>
        item.id === id
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
        item =>
          item.id !== id
      );

  }


  saveCart();


  renderCart();

}


// =====================================================
// REMOVE FROM CART
// =====================================================

function removeFromCart(
  productId
) {

  const id =
    Number(
      productId
    );


  cart =
    cart.filter(
      item =>
        item.id !== id
    );


  saveCart();


  renderCart();


  showToast(
    "Removed from cart"
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


      // Image

      const imageWrapper =
        document.createElement(
          "div"
        );


      imageWrapper.className =
        "cart-item-image";


      imageWrapper.appendChild(
        createProductImage(
          product
        )
      );


      // Info

      const info =
        document.createElement(
          "div"
        );


      info.className =
        "cart-item-info";


      const name =
        document.createElement(
          "strong"
        );


      name.textContent =
        product.name;


      const price =
        document.createElement(
          "span"
        );


      price.textContent =
        formatPrice(
          product.price
        );


      const quantity =
        document.createElement(
          "div"
        );


      quantity.className =
        "quantity-controls";


      const minus =
        document.createElement(
          "button"
        );


      minus.type =
        "button";


      minus.textContent =
        "−";


      minus.setAttribute(
        "aria-label",
        `Reduce quantity of ${product.name}`
      );


      minus.addEventListener(
        "click",
        () => {

          changeQuantity(
            product.id,
            -1
          );

        }
      );


      const number =
        document.createElement(
          "strong"
        );


      number.textContent =
        item.quantity;


      const plus =
        document.createElement(
          "button"
        );


      plus.type =
        "button";


      plus.textContent =
        "+";


      plus.setAttribute(
        "aria-label",
        `Increase quantity of ${product.name}`
      );


      plus.addEventListener(
        "click",
        () => {

          changeQuantity(
            product.id,
            1
          );

        }
      );


      quantity.append(
        minus,
        number,
        plus
      );


      info.append(
        name,
        price,
        quantity
      );


      // Remove

      const removeButton =
        document.createElement(
          "button"
        );


      removeButton.type =
        "button";


      removeButton.className =
        "remove-item-button";


      removeButton.textContent =
        "×";


      removeButton.setAttribute(
        "aria-label",
        `Remove ${product.name}`
      );


      removeButton.addEventListener(
        "click",
        () => {

          removeFromCart(
            product.id
          );

        }
      );


      cartItem.append(
        imageWrapper,
        info,
        removeButton
      );


      cartItems.appendChild(
        cartItem
      );

    }
  );


  cartSubtotal.textContent =
    formatPrice(
      subtotal
    );

}


// =====================================================
// WISHLIST
// =====================================================

function toggleWishlist(
  productId
) {

  const id =
    Number(
      productId
    );


  if (
    wishlist.includes(id)
  ) {

    wishlist =
      wishlist.filter(
        savedId =>
          savedId !== id
      );


    showToast(
      "Removed from wishlist"
    );

  }

  else {

    wishlist.push(
      id
    );


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


      const imageWrapper =
        document.createElement(
          "div"
        );


      imageWrapper.className =
        "wishlist-item-image";


      imageWrapper.appendChild(
        createProductImage(
          product
        )
      );


      const info =
        document.createElement(
          "div"
        );


      info.className =
        "wishlist-item-info";


      const title =
        document.createElement(
          "strong"
        );


      title.textContent =
        product.name;


      const price =
        document.createElement(
          "span"
        );


      price.textContent =
        formatPrice(
          product.price
        );


      const addButton =
        document.createElement(
          "button"
        );


      addButton.type =
        "button";


      addButton.className =
        "add-cart-button";


      addButton.textContent =
        "Add to cart";


      addButton.style.marginTop =
        "8px";


      addButton.addEventListener(
        "click",
        () => {

          addToCart(
            product.id
          );

        }
      );


      info.append(
        title,
        price,
        addButton
      );


      const removeButton =
        document.createElement(
          "button"
        );


      removeButton.type =
        "button";


      removeButton.className =
        "remove-item-button";


      removeButton.textContent =
        "×";


      removeButton.setAttribute(
        "aria-label",
        `Remove ${product.name} from wishlist`
      );


      removeButton.addEventListener(
        "click",
        () => {

          toggleWishlist(
            product.id
          );

        }
      );


      item.append(
        imageWrapper,
        info,
        removeButton
      );


      wishlistItems.appendChild(
        item
      );

    }
  );

}


// =====================================================
// OPEN CART
// =====================================================

function openCart() {

  closeDrawers();


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
// OPEN WISHLIST
// =====================================================

function openWishlist() {

  closeDrawers();


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

function closeDrawers() {

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
// DRAWER EVENTS
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
  closeDrawers
);


closeWishlistButton.addEventListener(
  "click",
  closeDrawers
);


drawerOverlay.addEventListener(
  "click",
  closeDrawers
);


// =====================================================
// HERO PRODUCT
// =====================================================

const heroButton =
  document.querySelector(
    ".hero-add-button"
  );


if (
  heroButton
) {

  heroButton.addEventListener(
    "click",
    () => {

      addToCart(
        heroButton.dataset.productId
      );


      openCart();

    }
  );

}


// Keep hero photograph matched with product 1

if (
  heroImage
) {

  heroImage.src =
    products[0].image;


  heroImage.alt =
    products[0].name;

}


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


  productModalContent.innerHTML =
    "";


  // Image

  const imageWrapper =
    document.createElement(
      "div"
    );


  imageWrapper.className =
    "modal-product-image";


  imageWrapper.appendChild(
    createProductImage(
      product
    )
  );


  // Information

  const info =
    document.createElement(
      "div"
    );


  info.className =
    "modal-product-info";


  const category =
    document.createElement(
      "span"
    );


  category.className =
    "section-label";


  category.textContent =
    product.category;


  const title =
    document.createElement(
      "h2"
    );


  title.textContent =
    product.name;


  const rating =
    document.createElement(
      "div"
    );


  rating.className =
    "product-rating";


  rating.textContent =
    `★ ${product.rating} / 5`;


  const description =
    document.createElement(
      "p"
    );


  description.textContent =
    product.description;


  const price =
    document.createElement(
      "strong"
    );


  price.className =
    "modal-price";


  price.textContent =
    formatPrice(
      product.price
    );


  const actions =
    document.createElement(
      "div"
    );


  actions.className =
    "hero-actions";


  const addButton =
    document.createElement(
      "button"
    );


  addButton.type =
    "button";


  addButton.className =
    "add-cart-button";


  addButton.textContent =
    "Add to cart";


  addButton.addEventListener(
    "click",
    () => {

      addToCart(
        product.id
      );

    }
  );


  const favouriteButton =
    document.createElement(
      "button"
    );


  favouriteButton.type =
    "button";


  favouriteButton.className =
    "secondary-button";


  favouriteButton.textContent =
    wishlist.includes(
      product.id
    )
      ? "♥ Saved"
      : "♡ Add to wishlist";


  favouriteButton.addEventListener(
    "click",
    () => {

      toggleWishlist(
        product.id
      );


      favouriteButton.textContent =
        wishlist.includes(
          product.id
        )
          ? "♥ Saved"
          : "♡ Add to wishlist";

    }
  );


  actions.append(
    addButton,
    favouriteButton
  );


  info.append(
    category,
    title,
    rating,
    description,
    price,
    actions
  );


  productModalContent.append(
    imageWrapper,
    info
  );


  productModal.classList.add(
    "open"
  );


  document.body.style.overflow =
    "hidden";

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


    searchTerm =
      value;


    productSearch.value =
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
        .scrollIntoView(
          {
            behavior:
              "smooth"
          }
        );

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
  .querySelectorAll(
    "a"
  )
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
// DEMO CHECKOUT
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


    closeDrawers();


    showToast(
      "Checkout ready"
    );


    setTimeout(
      () => {

        alert(
          "ShopSphere Checkout\n\nThis is a portfolio demonstration store. No real payment will be taken."
        );

      },
      300
    );

  }
);


// =====================================================
// TOAST
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


    closeDrawers();


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
// INITIALISE
// =====================================================

function initialiseApp() {

  renderProducts();


  renderCart();


  renderWishlist();

}


initialiseApp();
