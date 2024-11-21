// Navigasi antara Informasi Toko dan Produk
const navLinks = document.querySelectorAll("#main-nav a");
const sections = document.querySelectorAll("section");

// Fungsi untuk menyembunyikan semua section
function hideAllSections() {
  sections.forEach((section) => section.classList.add("hidden"));
}

// Fungsi untuk menampilkan section berdasarkan ID
function showSection(sectionId) {
  document.getElementById(sectionId).classList.remove("hidden");
}

// Event listener untuk navigasi
navLinks.forEach((link) => {
  link.addEventListener("click", (e) => {
    e.preventDefault();
    hideAllSections();
    const sectionId = link.getAttribute("data-section");
    showSection(sectionId);
  });
});

// Default tampilkan informasi toko saat halaman dimuat
hideAllSections();
showSection("informasi-toko");

// Fitur Informasi Produk
const productList = document.getElementById("product-list");
const productModal = document.getElementById("product-modal");
const modalTitle = document.getElementById("modal-title");
const productForm = document.getElementById("product-form");
const addProductBtn = document.getElementById("add-product-btn");
const closeModalBtn = document.getElementById("close-modal");

let products = [];
let editIndex = null;

function renderProducts() {
  productList.innerHTML = products
    .map(
      (product, index) => `
        <tr>
          <td><img src="${product.image}" alt="Product Image"></td>
          <td>${product.name}</td>
          <td>${product.description}</td>
          <td>$${product.price}</td>
          <td>
            <button onclick="editProduct(${index})">Edit</button>
            <button onclick="deleteProduct(${index})">Delete</button>
          </td>
        </tr>
      `
    )
    .join("");
}

function openModal(isEdit = false) {
  productModal.style.display = "flex";
  modalTitle.textContent = isEdit ? "Edit Produk" : "Tambah Produk";
}

function closeModal() {
  productModal.style.display = "none";
  productForm.reset();
  editIndex = null;
}

function addProduct(product) {
  products.push(product);
  renderProducts();
}

function editProduct(index) {
  editIndex = index;
  const product = products[index];
  document.getElementById("product-name").value = product.name;
  document.getElementById("product-description").value = product.description;
  document.getElementById("product-price").value = product.price;
  openModal(true);
}

function deleteProduct(index) {
  products.splice(index, 1);
  renderProducts();
}

productForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const name = document.getElementById("product-name").value;
  const description = document.getElementById("product-description").value;
  const price = document.getElementById("product-price").value;
  const image = URL.createObjectURL(
    document.getElementById("product-image").files[0]
  );

  const product = { name, description, price, image };

  if (editIndex !== null) {
    products[editIndex] = product;
  } else {
    addProduct(product);
  }

  closeModal();
});

addProductBtn.addEventListener("click", () => openModal(false));
closeModalBtn.addEventListener("click", closeModal);

// Informasi Toko
const storeForm = document.getElementById("store-info-form");
const namaToko = document.getElementById("nama-toko");
const deskripsiToko = document.getElementById("deskripsi-toko");
const kategoriProduk = document.getElementById("kategori-produk");
const alamatToko = document.getElementById("alamat-toko");
const ekspedisiCheckboxes = document.querySelectorAll(
  "#store-info-form input[type='checkbox']"
);
const kirimBtn = document.getElementById("kirim-btn");

// Simpan data toko
let storeData = null;

// Validasi form
function validateStoreForm() {
  const isNamaTokoValid = namaToko.value.trim() !== "";
  const isDeskripsiTokoValid = deskripsiToko.value.trim() !== "";
  const isKategoriProdukValid = kategoriProduk.value !== "";
  const isAlamatTokoValid = alamatToko.value.trim() !== "";
  const isEkspedisiChecked = Array.from(ekspedisiCheckboxes).some(
    (checkbox) => checkbox.checked
  );

  return (
    isNamaTokoValid &&
    isDeskripsiTokoValid &&
    isKategoriProdukValid &&
    isAlamatTokoValid &&
    isEkspedisiChecked
  );
}

// Tampilkan data toko sebagai tampilan non-editable
function displayStoreData() {
  storeForm.innerHTML = `
    <div>
      <label>Nama Toko</label>
      <p>${storeData.namaToko}</p>
    </div>
    <div>
      <label>Deskripsi Toko</label>
      <p>${storeData.deskripsiToko}</p>
    </div>
    <div>
      <label>Kategori Produk</label>
      <p>${storeData.kategoriProduk}</p>
    </div>
    <div>
      <label>Alamat Toko</label>
      <p>${storeData.alamatToko}</p>
    </div>
    <div>
      <label>Pilih Ekspedisi</label>
      <p>${storeData.ekspedisi.join(", ")}</p>
    </div>
  `;
  kirimBtn.textContent = "Update";
}

// Event handler untuk tombol Kirim/Update
kirimBtn.addEventListener("click", (e) => {
  e.preventDefault();

  if (storeData) {
    // Jika sudah ada data, ubah kembali ke mode edit
    storeForm.innerHTML = `
      <div>
        <label for="nama-toko">Nama Toko</label>
        <input type="text" id="nama-toko" value="${storeData.namaToko}" />
      </div>
      <div>
        <label for="deskripsi-toko">Deskripsi Toko</label>
        <textarea id="deskripsi-toko">${storeData.deskripsiToko}</textarea>
      </div>
      <div>
        <label for="kategori-produk">Kategori Produk</label>
        <select id="kategori-produk">
          <option value="" disabled>Pilih kategori</option>
          <option value="fashion" ${
            storeData.kategoriProduk === "fashion" ? "selected" : ""
          }>Fashion</option>
          <option value="elektronik" ${
            storeData.kategoriProduk === "elektronik" ? "selected" : ""
          }>Elektronik</option>
          <option value="rumah-tangga" ${
            storeData.kategoriProduk === "rumah-tangga" ? "selected" : ""
          }>Rumah Tangga</option>
        </select>
      </div>
      <div>
        <label for="alamat-toko">Alamat Toko</label>
        <textarea id="alamat-toko">${storeData.alamatToko}</textarea>
      </div>
      <div>
        <label>Pilih Ekspedisi</label>
        <div>
          <input type="checkbox" value="List Item 1" id="ekspedisi1" ${
            storeData.ekspedisi.includes("List Item 1") ? "checked" : ""
          } /> List Item 1<br />
          <input type="checkbox" value="List Item 2" id="ekspedisi2" ${
            storeData.ekspedisi.includes("List Item 2") ? "checked" : ""
          } /> List Item 2<br />
          <input type="checkbox" value="List Item 3" id="ekspedisi3" ${
            storeData.ekspedisi.includes("List Item 3") ? "checked" : ""
          } /> List Item 3<br />
        </div>
      </div>
    `;
    kirimBtn.textContent = "Kirim";
    storeData = null;
  } else {
    // Validasi dan simpan data baru
    if (!validateStoreForm()) {
      alert("Harap isi semua data dengan lengkap!");
      return;
    }

    storeData = {
      namaToko: namaToko.value.trim(),
      deskripsiToko: deskripsiToko.value.trim(),
      kategoriProduk: kategoriProduk.value,
      alamatToko: alamatToko.value.trim(),
      ekspedisi: Array.from(ekspedisiCheckboxes)
        .filter((checkbox) => checkbox.checked)
        .map((checkbox) => checkbox.nextSibling.textContent.trim()),
    };

    // Refresh halaman dengan data non-editable
    displayStoreData();
  }
});
