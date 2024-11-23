// Menambahkan interaksi jika diperlukan
document.addEventListener("DOMContentLoaded", () => {
    const form = document.querySelector("form");
    form.addEventListener("submit", (e) => {
        e.preventDefault();
        alert("Registrasi berhasil!");
    });
});
