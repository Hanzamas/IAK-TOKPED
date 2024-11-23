document.addEventListener("DOMContentLoaded", () => {
  const wrapper = document.getElementById("categoryWrapper");
  const prevBtn = document.getElementById("categoryPrevBtn");
  const nextBtn = document.getElementById("categoryNextBtn");
  const items = document.querySelectorAll(".category-item");
  const itemWidth = items[0].offsetWidth + 10; // Include gap
  let currentIndex = 0;

  prevBtn.addEventListener("click", () => {
    if (currentIndex > 0) {
      currentIndex--;
      wrapper.style.transform = `translateX(-${currentIndex * itemWidth}px)`;
    }
  });

  nextBtn.addEventListener("click", () => {
    const visibleItems = Math.floor(wrapper.parentElement.offsetWidth / itemWidth);
    if (currentIndex < items.length - visibleItems) {
      currentIndex++;
      wrapper.style.transform = `translateX(-${currentIndex * itemWidth}px)`;
    }
  });
});

// ----------------------------------------------------------------

const cardContainer = document.getElementById("cardContainer");
const arrowDown = document.getElementById("arrowDown");

function generateCards() {
  for (let i = 0; i < 4; i++) {
    const col = document.createElement("div");
    col.className = "col fade-in";
    col.innerHTML = `
  <div class="card h-100">
    <a href="detail-produk.html" class="stretched-link"></a>
    <img src="assets/img/card/samsung3.jpg" alt="Gambar Produk Baru">
    <div class="card-body">
      <h5 class="card-title">Nama Produk Baru yang Sangat Panjang abcdefghijklmnopqrst</h5>
      <p class="card-text">Rp 1.500.000</p>
      <p class="card-text"><i class="bi bi-geo-alt-fill"></i> Lokasi Toko</p>
    </div>
    <div class="card-footer">
      <p class="mb-0"><i class="bi bi-star-fill"></i> 500+ Terjual</p>
    </div>
  </div>`;
    cardContainer.appendChild(col);
  }
}

arrowDown.addEventListener("click", () => {
  generateCards();
});
