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

  // JavaScript for filtering tours
  function filterTours() {
    var input, filter, container, tourItems, title, i, txtValue;
    input = document.querySelector('.search-input');
    filter = input.value.toUpperCase();
    container = document.getElementById('tourList');
    tourItems = container.getElementsByClassName('blog-card');

    var visibleItems = []; // Keep track of visible items

    for (i = 0; i < tourItems.length; i++) {
      title = tourItems[i].querySelector('.title');
      txtValue = title.textContent || title.innerText;
      if (txtValue.toUpperCase().indexOf(filter) > -1) {
        visibleItems.push(tourItems[i].outerHTML); // Add matched items to the list
      }
    }

    if (visibleItems.length > 0) {
      container.innerHTML = ''; // Clear previous content
      for (i = 0; i < visibleItems.length; i++) {
        // Wrap each item with col-sm-4 class
        container.innerHTML += '<div class="col-sm-4">' + visibleItems[i] + '</div>';
      }
    } else {
      container.innerHTML = "<div class='col-sm-12'><p>No results found.</p></div>"; // Display message if no results found
    }
  }
