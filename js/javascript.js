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
            <!-- Ürün detayları butonu -->
            <button class="product-detail-button" data-index="${index}">from ${product.price}</button>
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
  <form action="javascript:;">
  <div class="checkout__content--step section__contact--information">
      <div class="section__header checkout__section--header d-flex align-items-center justify-content-between mb-25">
          <h2 class="section__header--title h3">Contact information</h2>
          <p class="layout__flex--item">
              Already have an account?
              <a class="layout__flex--item__link" href="/login.php">Log in</a>
          </p>
      </div>
      <div class="customer__information">
          <div class="checkout__email--phone mb-12">
          <label>
                  <input class="checkout__input--field border-radius-5" placeholder="Email or mobile phone mumber" type="text">
          </label>
          </div>
          <div class="checkout__checkbox">
              <input class="checkout__checkbox--input" id="check1" type="checkbox">
              <span class="checkout__checkbox--checkmark"></span>
              <label class="checkout__checkbox--label" for="check1">
                  Email me with news and offers</label>
          </div>
      </div>
  </div>
  <div class="checkout__content--step section__shipping--address">
      <div class="section__header mb-25">
          <h3 class="section__header--title">Shipping address</h3>
      </div>
      <div class="section__shipping--address__content">
          <div class="row">
              <div class="col-lg-6 mb-12">
                  <div class="checkout__input--list ">
                      <label>
                          <input class="checkout__input--field border-radius-5" placeholder="First name (optional)" type="text">
                      </label>
                  </div>
              </div>
              <div class="col-lg-6 mb-12">
                  <div class="checkout__input--list">
                      <label>
                          <input class="checkout__input--field border-radius-5" placeholder="Last name" type="text">
                      </label>
                  </div>
              </div>
              <div class="col-12 mb-12">
                  <div class="checkout__input--list">
                      <label>
                          <input class="checkout__input--field border-radius-5" placeholder="Company (optional)" type="text">
                      </label>
                  </div>
              </div>
              <div class="col-12 mb-12">
                  <div class="checkout__input--list">
                      <label>
                          <input class="checkout__input--field border-radius-5" placeholder="Address1" type="text">
                      </label>
                  </div>
              </div>
              <div class="col-12 mb-12">
                  <div class="checkout__input--list">
                      <label>
                          <input class="checkout__input--field border-radius-5" placeholder="Apartment, suite, etc. (optional)" type="text">
                      </label>
                  </div>
              </div>
              <div class="col-12 mb-12">
                  <div class="checkout__input--list">
                      <label>
                          <input class="checkout__input--field border-radius-5" placeholder="City" type="text">
                      </label>
                  </div>
              </div>
              <div class="col-lg-6 mb-12">
                  <div class="checkout__input--list checkout__input--select select">
                      <label class="checkout__select--label" for="country">Country/region</label>
                      <select class="checkout__input--select__field border-radius-5" id="country">
                          <option value="1">India</option>
                          <option value="2">United States</option>
                          <option value="3">Netherlands</option>
                          <option value="4">Afghanistan</option>
                          <option value="5">Islands</option>
                          <option value="6">Albania</option>
                          <option value="7">Antigua Barbuda</option>
                      </select>
                  </div>
              </div>
              <div class="col-lg-6 mb-12">
                  <div class="checkout__input--list">
                      <label>
                          <input class="checkout__input--field border-radius-5" placeholder="Postal code" type="text">
                      </label>
                  </div>
              </div>
          </div>
          <div class="checkout__checkbox">
              <input class="checkout__checkbox--input" id="check2" type="checkbox">
              <span class="checkout__checkbox--checkmark"></span>
              <label class="checkout__checkbox--label" for="check2">
                  Save this information for next time</label>
          </div>
      </div>
  </div>
  <div class="checkout__content--step__footer d-flex align-items-center">
      <a class="continue__shipping--btn primary__btn border-radius-5" href="checkout-2.html">Continue To Shipping</a>
      <a class="previous__link--content" href="/cart.php">Return to cart</a>
  </div>
  <div class="checkout__content--step section__shipping--address">
                                <div class="section__header mb-25">
                                    <h3 class="section__header--title">Payment</h3>
                                    <p class="section__header--desc">All transactions are secure and encrypted.</p>
                                </div>
                                <div class="checkout__content--step__inner3 border-radius-5">
                                    <div class="checkout__address--content__header d-flex align-items-center justify-content-between">
                                        <span class="checkout__address--content__title">Credit card</span>
                                        <span class="heckout__address--content__icon"><img src="https://risingtheme.com/html/demo-suruchi-v1/suruchi/assets/img/icon/credit-card.svg" alt="card"></span>
                                    </div>
                                    <div class="checkout__content--input__box--wrapper ">
                                        <div class="row">
                                            <div class="col-12 mb-12">
                                                <div class="checkout__input--list position__relative">
                                                    <label>
                                                        <input class="checkout__input--field border-radius-5" placeholder="Card number" type="text">
                                                    </label>
                                                    <button class="checkout__input--field__button" type="button">
                                                        
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="15.51" height="15.443" viewBox="0 0 512 512"><path d="M336 208v-95a80 80 0 00-160 0v95" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32"></path><rect x="96" y="208" width="320" height="272" rx="48" ry="48" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32"></rect></svg>
                                                    </button>
                                                </div>
                                            </div>
                                            <div class="col-12 mb-12">
                                                <div class="checkout__input--list">
                                                    <label>
                                                        <input class="checkout__input--field border-radius-5" placeholder="Name on card" type="text">
                                                    </label>
                                                </div>
                                            </div>
                                            <div class="col-lg-6 mb-12">
                                                <div class="checkout__input--list">
                                                    <label>
                                                        <input class="checkout__input--field border-radius-5" placeholder="piration date (MM / YY)" type="text">
                                                    </label>
                                                </div>
                                            </div>
                                            <div class="col-lg-6 mb-12">
                                                <div class="checkout__input--list position__relative">
                                                    <label>
                                                        <input class="checkout__input--field border-radius-5" placeholder="Security code" type="text">
                                                    </label>
                                                    <button class="checkout__input--field__button" type="button">
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="18.51" height="18.443" viewBox="0 0 512 512"><title>Help Circle</title><path d="M256 80a176 176 0 10176 176A176 176 0 00256 80z" fill="none" stroke="currentColor" stroke-miterlimit="10" stroke-width="32"></path><path d="M200 202.29s.84-17.5 19.57-32.57C230.68 160.77 244 158.18 256 158c10.93-.14 20.69 1.67 26.53 4.45 10 4.76 29.47 16.38 29.47 41.09 0 26-17 37.81-36.37 50.8S251 281.43 251 296" fill="none" stroke="currentColor" stroke-linecap="round" stroke-miterlimit="10" stroke-width="28"></path><circle cx="250" cy="348" r="20"></circle></svg>
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
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
