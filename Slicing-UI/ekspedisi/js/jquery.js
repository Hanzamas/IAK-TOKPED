$(document).ready(function () {
    // Animasi slide-in untuk form login
    $(".container").css("opacity", "0"); // Atur opacity awal ke 0
    $(".container").animate({
        opacity: 1,
        marginTop: "50px"
    }, 1000); // Animasi dengan durasi 1 detik

    // Hover efek untuk tombol
    $(".login-btn, .google-btn").hover(
        function () {
            $(this).animate({
                opacity: 0.8,
                fontSize: "18px"
            }, 200);
        },
        function () {
            $(this).animate({
                opacity: 1,
                fontSize: "16px"
            }, 200);
        }
    );

    // Fokus pada input field
    $("input").focus(function () {
        $(this).css("border-color", "#008c45");
    }).blur(function () {
        $(this).css("border-color", "#ccc");
    });
});
$(document).ready(function () {
    // Toggle navbar menu untuk layar kecil
    $(".navbar-toggle").click(function () {
        $(".navbar-menu").toggleClass("active");
    });
});
