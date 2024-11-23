// perpindahan gambar $ jumlah produk
let quantity = 1;

function increaseQuantity() {
  const maxQuantity = 63;
  if (quantity < maxQuantity) {
    quantity++;
    updateQuantity();
  }
}

function decreaseQuantity() {
  if (quantity > 1) {
    quantity--;
    updateQuantity();
  }
}

function updateQuantity() {
  document.getElementById("quantity").value = quantity;
}

function changeMainImage(imageUrl) {
  const mainImage = document.getElementById("main-image");
  mainImage.src = imageUrl;
}
