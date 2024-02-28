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

var products = [
  {
    title: "7 Nights Zanzibar Queen Hotel",
    description: "8 days 7 nights",
    price: "$1,390.00",
    image:
      "https://tripsbetter.com/pacmoori/2021/08/StandardDoubleRoom_1-680x500.jpg",
  },
  {
    title: "7 Nights Filao Beach Zanzibar",
    description: "8 days 7 nights",
    price: "$750.00",
    image:
      "https://tripsbetter.com/pacmoori/2022/05/7nights-Filao-Beach-680x500.jpg",
  },
  {
    title: "7 Nights Zanzibar Queen Hotel",
    description: "3 Days Luxury Selous Safari",
    price: "$990.00",
    image: "https://tripsbetter.com/pacmoori/2022/05/Mivumo-680x500.jpg",
  },
  {
    title: "7 Nights Royal Zanzibar Beach",
    description: "8 days 7 nights",
    price: "$750.00",
    image:
      "https://tripsbetter.com/pacmoori/2022/05/7nights-Filao-Beach-680x500.jpg",
  },
  {
    title: "7 Nights Filao Beach Zanzibar",
    description: "8 days 7 nights",
    price: "$1,800.00",
    image:
      "https://tripsbetter.com/pacmoori/2021/01/Royal-Zanzibar-680x500.jpg",
  },
  {
    title: "6 Nights Filao Beach Zanzibar",
    description: "3 Days Luxury Selous Safari",
    price: "$750.00",
    image: "https://tripsbetter.com/pacmoori/2020/12/Pool-680x500.jpg",
  },
  {
    title: "7 Nights Zanzibar Queen Hotel",
    description: "3 Days 2 Nights",
    price: "$850.00",
    image: "https://tripsbetter.com/pacmoori/2022/05/Mikumi-Flight-680x500.jpg",
  },
  {
    title: "2 days Selous Game Reserve",
    description: "2 Days 1 Night",
    price: "$650.00",
    image:
      "https://tripsbetter.com/pacmoori/2022/05/Flight-at-Mtemere-680x500.jpg",
  },
  {
    title: "Day Trip To Selous Game Reserve",
    description: "Day trip",
    price: "$450.00",
    image:
      "https://tripsbetter.com/pacmoori/2022/03/selous-game-reserve-banner-680x500.jpg",
  },
];

function displayProducts(products) {
  var container = document.getElementById("tourList");
  container.innerHTML = ""; // Clear previous content

  products.forEach(function (product) {
    var html = `
          <div class="col-sm-12 col-md-4">
              <div class="blog-card">
                  <div class="blog-img">
                      <img src="${product.image}" alt="" width="100%">
                  </div>
                  <h2 class="title">${product.title}</h2>
                  <p class="content" style="margin-bottom: 1.7rem">${product.description}</p>
                  <button class="button-tip-there">from ${product.price}</button>
              </div>
          </div>
      `;
    container.innerHTML += html;
  });
}

function filterProducts() {
  var input, filter, filteredProducts;

  input = document.getElementById("searchInput");
  filter = input.value.toUpperCase();

  filteredProducts = products.filter(function (product) {
    return product.title.toUpperCase().includes(filter);
  });

  displayProducts(filteredProducts);

  var container = document.getElementById("tourList");
  if (filteredProducts.length === 0) {
    container.innerHTML =
      "<div class='col-sm-12'><p>No results found.</p></div>";
  }
}

// Display all products initially
displayProducts(products);

// Call filterProducts when search input changes
document
  .getElementById("searchInput")
  .addEventListener("input", filterProducts);
