document.addEventListener("DOMContentLoaded", function () {
    var navbarToggle = document.getElementById("navbarToggle");
    var navItems = document.getElementById("navItems");

    navbarToggle.addEventListener("click", function () {
      navItems.classList.toggle("show");
    });

    // Menü dışında tıklandığında menüyü kapatma işlevi
    document.addEventListener("click", function (event) {
      if (!navItems.contains(event.target) && event.target !== navbarToggle) {
        navItems.classList.remove("show");
      }
    });
  });