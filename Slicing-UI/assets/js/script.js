function on() {
  var menunBar = document.getElementById("menuBar");

  var overlay = document.getElementById("overlay");

  menunBar.classList.toggle("menuBarStyle");
  overlay.classList.toggle("overlayStyle");
}

document.addEventListener("DOMContentLoaded", () => {
  const trashIcon = document.getElementById("deleteIcon");

  trashIcon.addEventListener("click", () => {
    Swal.fire({
      title: "Apakah Anda yakin?",
      text: "Item akan dihapus dari daftar belanja Anda.",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Ya, hapus!",
      cancelButtonText: "Batal",
      customClass: {
        confirmButton: "custom-confirm-button",
        cancelButton: "custom-cancel-button",
      },
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire(
          "Dihapus!",
          "Item telah dihapus dari daftar belanja Anda.",
          "success"
        );
        // Tambahkan logika penghapusan item di sini
      }
    });
  });
});
