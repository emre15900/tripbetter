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

var apiKey = "c383df5786d4770f4d9ed9d7";
var url =
  "https://v6.exchangerate-api.com/v6/c383df5786d4770f4d9ed9d7/latest/USD";

let res;
let USDtoKES;
$.ajax({
  url: url,
  method: "GET",
  success: function (data) {
    res = data;
  },
}).done(function () {
  console.log(res);
  USDtoKES = res.conversion_rates.KES;
  console.log(USDtoKES);
});

function convertUsdToKes(data) {
  var usdInt = parseFloat(data.replace("$", "").replaceAll(",", ""));
  var kes = usdInt * USDtoKES;
  return kes.toLocaleString();
}
function convertKesToUsd(data) {
  var usdInt = parseFloat(data.replace("Ksh ", "").replaceAll(",", ""));
  var kes = usdInt / USDtoKES;
  return kes.toLocaleString();
}
$("#toKes").click(function () {
  //var amount = $('.payment-price')
  console.log(this);
  //console.log($('.payment-price'));
  $(".product-price-usd").each(function () {
    console.log(this);
    var usd = $(this).html();
    console.log(usd);
    $(this).html("Ksh " + convertUsdToKes(usd));
  });
  //var toKes = amount * USDtoKES;
});
$("#toUsd").click(function () {
  //var amount = $('.payment-price')
  console.log(this);
  //console.log($('.payment-price'));
  $(".product-price-usd").each(function () {
    console.log(this);
    var usd = $(this).html();
    console.log(usd);
    $(this).html("$" + convertKesToUsd(usd));
  });
  //var toKes = amount * USDtoKES;
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
  {
    title: "Honeymoon Serengeti & Seychelles",
    description: "9 days 8 nights",
    price: "$10,260.00",
    image:
      "https://www.go2africa.com/wp-content/uploads/2017/08/Boma-andBeyond-Lake-Manyara-Tree-Lodge-420x380.jpg",
  },
  {
    title: "Tanzania’s Tarangire, Ngorongoro & Serengeti North",
    description: "7 days 6 nights",
    price: "$8,115.00",
    image:
      "https://www.go2africa.com/wp-content/uploads/2017/08/Elewana-Arusha-Coffee-Lodge-420x380.jpg",
  },
  {
    title: "Family Botswana's Khwai River & Linyanti Channel",
    description: "6 days 5 nights",
    price: "$7,875.00",
    image:
      "https://www.go2africa.com/wp-content/uploads/2017/08/African-Bush-Camps-Khwai-Leadwood-game-drive-420x380.jpg",
  },
  {
    title: "East Africa's Gorillas, Safari & Beach",
    description: "14 days 13 nights",
    price: "$16,000.00",
    image:
      "https://www.go2africa.com/wp-content/uploads/2022/01/Soul-stirring-encounters-with-gorilla-Sabyinyo-Silverback-Lodge-420x380.jpg",
  },
  {
    title: "Luxury Kruger, Livingstone & South Luangwa",
    description: "12 days 11 nights",
    price: "$18,550.00",
    image:
      "https://www.go2africa.com/wp-content/uploads/2017/08/ROMANTIC-KRUGER-FALLS-ZAMBEZI-LUANGWA10-420x380.jpg",
  },
  {
    title: "Romantic Pretoria to Vic Falls & Delta",
    description: "15 days 14 nights",
    price: "$17,250.00",
    image:
      "https://www.go2africa.com/wp-content/uploads/2017/08/ROMANTIC-PRETORIA-TO-VIC-FALLS-DELTA-420x380.jpg",
  },
  {
    title: "Adventurer Mt Kenya, Samburu & Mara",
    description: "10 days 9 nights",
    price: "$15,790.00",
    image:
      "https://www.go2africa.com/wp-content/uploads/2017/08/Giraffe-Manor_Friendly-kisses-420x380.jpg",
  },
  {
    title: "Kenya's Amboseli, Samburu & Mara (Fly-In)",
    description: "9 days 8 nights",
    price: "$5,565.00",
    image:
      "https://www.go2africa.com/wp-content/uploads/2017/08/Elewana-Tortilis-Camp-Amboseli-1-420x380.jpg",
  },
  {
    title: "Zimbabwe's Matobos, Hwange, Falls & Kariba",
    description: "5 days 4 nights",
    price: "$5,320.00",
    image:
      "https://www.go2africa.com/wp-content/uploads/2017/08/Camp-Hwange-game-viewing-420x380.jpg",
  },
];

function filterProducts() {
  var input, filter, filteredProducts;

  input = document.getElementById("searchInput");
  filter = input.value.toUpperCase();

  filteredProducts = products.filter(function (product) {
    return (
      product.title.toUpperCase().includes(filter) ||
      product.description.toUpperCase().includes(filter)
    );
  });

  displayProducts(filteredProducts);

  var container = document.getElementById("tourList");
  if (filteredProducts.length === 0) {
    container.innerHTML =
      "<div class='col-sm-12'><p class='notFound'>No results found.</p></div>";
  }
}

// Call filterProducts when search input changes
document
  .getElementById("searchInput")
  .addEventListener("input", filterProducts);

var currentStep = 1; // Başlangıç adımı

function displayProducts(products) {
  var container = document.getElementById("tourList");
  container.innerHTML = ""; // Önceki içeriği temizle

  products.forEach(function (product, index) {
    var html = `
        <div class="col-sm-12 col-md-4">
          <div class="blog-card">
            <div class="blog-img">
              <img src="${product.image}" alt="" width="100%">
            </div>
            <h2 class="title">${product.title}</h2>
            <p class="content">${product.description}</p>
            <button class="product-detail-button" data-index="${index}">from <span class="product-price-usd">${product.price}</span></button>
          </div>
        </div>
      `;
    container.innerHTML += html;
  });

  // Ürün detayları butonlarına tıklama olayı ekle
  var detailButtons = document.querySelectorAll(".product-detail-button");
  detailButtons.forEach(function (button) {
    button.addEventListener("click", function () {
      var index = parseInt(this.getAttribute("data-index"));
      openProductDetails(products[index]);
    });
  });
}

function openProductDetails(product) {
  // İlk önce içeriği temizle
  clearPopupContent();

  // Ürün detaylarını popup içerisine ekle
  var html = `
      <h2>${product.title}</h2>
      <img class="payment-img" src="${product.image}" alt="" width="100%">
      <p>${product.description}</p>
      <p class="payment-price">Price: ${product.price}</p>
      <div class="payment-button"><button class="make-payment" onclick="nextStep()">Make Payment</button></div>
    `;
  document.querySelector(".step-container").innerHTML = html;

  // Popup'ı göster
  showPopup();
}

// Bir sonraki adıma geçiş fonksiyonu
function nextStep() {
  currentStep++;
  if (currentStep === 2) {
    openPaymentDetails();
  } else if (currentStep === 3) {
    completePayment();
  }
}

function openPaymentDetails() {
  // İlk önce içeriği temizle
  clearPopupContent();

  // Ödeme detaylarını popup içerisine ekle
  var html = `
      <h2>Payment Details</h2>
      <form action="" class="popup-form">
      <div class="form-inputs">
        <label>
          <input
            class="form-control"
            placeholder="First name"
            type="text"
            required
          />
        </label>
        <label>
          <input
            class="form-control"
            placeholder="Last name"
            type="text"
            required
          />
        </label>
      </div>
      <div class="form-inputs">
        <label>
          <input
            class="form-control"
            placeholder="Email"
            type="text"
            required
          />
        </label>
        <label>
          <input
            class="form-control"
            placeholder="Phone"
            type="text"
            required
          />
        </label>
      </div>
      <div class="form-inputs">
        <select class="form-select" id="country">
          <option>Country/region</option>
          <option value="1">India</option>
          <option value="2">United States</option>
          <option value="3">Netherlands</option>
          <option value="4">Afghanistan</option>
          <option value="5">Islands</option>
          <option value="6">Albania</option>
          <option value="7">Antigua Barbuda</option>
        </select>
        <label>
          <input
            class="form-control"
            placeholder="Town/City"
            type="text"
            required
          />
        </label>
      </div>
      <div class="form-inputs">
        <label>
          <input
            class="form-control"
            placeholder="Street address"
            type="text"
            required
          />
        </label>
        <label>
          <input
            class="form-control"
            placeholder="Postcode / ZIP"
            type="text"
            required
          />
        </label>
      </div>
      <div class="form-inputs">
        <label>
          <input
            class="form-control"
            placeholder="Card Number"
            type="text"
            required
          />
        </label>
        <label>
          <input
            class="form-control"
            placeholder="Card Holder"
            type="text"
            required
          />
        </label>
      </div>
      <div class="form-inputs">
        <label>
          <input
            class="form-control"
            placeholder="Expiry Date"
            type="text"
            required
          />
        </label>
        <label>
          <input class="form-control" placeholder="CVV" type="text" required />
        </label>
      </div>
    </form>
      <div class="payment-button"><button class="make-payment"  onclick="nextStep()">Proceed to Payment</button></div>
    `;
  document.querySelector(".step-container").innerHTML = html;
}

function completePayment() {
  // İlk önce içeriği temizle
  clearPopupContent();

  // Ödeme tamamlandı mesajını göster
  var html = `
      <h2>Payment Completed</h2>
      <img class="payment-img" src="../img/success.gif" alt="" width="100%">
      <p>Thank you for your purchase!</p>
      <div class="payment-button"><button  class="make-payment"  onclick="closePopup()">Close</button></div>
    `;
  document.querySelector(".step-container").innerHTML = html;
}

function clearPopupContent() {
  document.querySelector(".step-container").innerHTML = "";
}

function showPopup() {
  var popup = document.getElementById("productPopup");
  popup.classList.add("show");
}

function closePopup() {
  var popup = document.getElementById("productPopup");
  popup.classList.remove("show");

  // Popup kapatıldığında adımı sıfırla
  document.getElementById("currentStep").value = 1;
  currentStep = 1;
}

// Ürünleri göster
displayProducts(products);

// Modalı açma fonksiyonu
function openModal() {
  var modal = document.getElementById("myModal");
  modal.style.display = "block";
}

// Modalı kapama fonksiyonu
function closeModal() {
  var modal = document.getElementById("myModal");
  modal.style.display = "none";
}

// Ödeme onayı gösterme fonksiyonu
function showPaymentConfirmation() {
  var modal = document.getElementById("myModal");
  modal.style.display = "none";
  Swal.fire("Congratulations!", "Your payment has been completed.", "success");
}
