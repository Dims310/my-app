// Component
let Landing = () => {
  return(
    <>
      {/* Start Navbar */}
      <div>
        <nav class="navbar navbar-expand-lg bg-body-tertiary">
          <div class="container">
            <a class="navbar-brand" href="#">Toserba</a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
              <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                <li class="nav-item">
                  <a class="nav-link active" aria-current="page" href="#">Home</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#">Products</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#">Orders</a>
                </li>
              </ul>
              <form class="d-flex" role="search">
                <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                <button class="btn btn-outline-success" type="submit">Search</button>
              </form>
            </div>
          </div>
        </nav>
      </div>
      {/* End Navbar */}

      {/* Start Body */}
      <div className="container py-3">

        {/* Start Carousel */}
        <div id="carouselExampleCaptions" className="carousel slide">
          <div className="carousel-indicators">
            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
          </div>
          <div className="carousel-inner rounded">
            <div className="carousel-item active">
              <img src="https://img.freepik.com/free-photo/beautiful-realistic-christmas-sales-banner-template-with-3d-elements-copy-space_69286-490.jpg?t=st=1735290665~exp=1735294265~hmac=d9c1c4809d2c5b3bc6c0e35a37bb47c002525686b63e11acd54cdba4079ed590&w=1380" className="d-block w-100 carousel-image" alt="..." />
              <div className="carousel-caption d-none d-md-block">
                <h5>BIG WINTER SALE!!!</h5>
                <p>Exclusive Winter Sale – Cozy up with incredible discounts! Save up to 70% on winter essentials. Limited time only.</p>
              </div>
            </div>
            <div className="carousel-item">
              <img src="https://img.freepik.com/free-photo/beautiful-gift-voucher-with-decoration_23-2149243912.jpg?t=st=1735290473~exp=1735294073~hmac=219e37b093bb3469c67fe99f235a0cde1c5fe7c00ac0c4c89010f37d646083a1&w=1380" className="d-block w-100 carousel-image" alt="..." />
              <div className="carousel-caption d-none d-md-block">
                <h5>Gift Voucher</h5>
                <p>Get gift voucher up to 5$*</p>
              </div>
            </div>
          </div>
          <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
        {/* End Carousel */}

        {/* Start Cards Group */}
        <div className="my-3">
          <h5>Products on <span className="text-danger">SALE</span> <span className="text-danger">12:39:00</span></h5>

          {/* Start Cards */}
          <div class="row row-cols-lg-4 gx-0 gy-3">
            <div class="col">
              <div class="card">
                <img src="https://img.freepik.com/free-photo/still-life-rendering-jackets-display_23-2149745029.jpg?t=st=1735293395~exp=1735296995~hmac=44502602e208e6103a65221653c382b3df246d202cd958a7f4b59db31edf9ae2&w=1380" class="card-img-top" alt="Winter Jacket" />
                <div class="card-body">
                  <h5 class="card-title">Winter Jacket</h5>
                  <p class="card-text">Stay warm and stylish with this premium insulated winter jacket. Perfect for cold weather.</p>
                  <a href="#" class="btn btn-primary">Buy Now</a>
                </div>
              </div>
            </div>
            <div class="col">
              <div class="card">
                <img src="https://img.freepik.com/free-photo/still-life-rendering-jackets-display_23-2149745031.jpg?t=st=1735293477~exp=1735297077~hmac=e453eb193137d7b4d74672a84e3fd74c026d390126641d204baa0ca9c95ab0a4&w=1380" class="card-img-top" alt="Leather Boots" />
                <div class="card-body">
                  <h5 class="card-title">Leather Boots</h5>
                  <p class="card-text">Durable and comfortable leather boots for everyday wear. Available in multiple colors.</p>
                  <a href="#" class="btn btn-primary">Buy Now</a>
                </div>
              </div>
            </div>
            <div class="col">
              <div class="card">
                <img src="https://img.freepik.com/free-photo/smartwatch-screen-digital-device_53876-96809.jpg?t=st=1735293509~exp=1735297109~hmac=5ff7b79a31e5194b8697ce34740bfae07e36dd8761f319ea79d743af6fbfb7c3&w=826" class="card-img-top" alt="Smartwatch" />
                <div class="card-body">
                  <h5 class="card-title">Smartwatch</h5>
                  <p class="card-text">Track your fitness and stay connected with this sleek and versatile smartwatch.</p>
                  <a href="#" class="btn btn-primary">Buy Now</a>
                </div>
              </div>
            </div>
            <div class="col">
              <div class="card">
                <img src="https://img.freepik.com/free-photo/still-life-wireless-cyberpunk-headphones_23-2151072231.jpg?t=st=1735293568~exp=1735297168~hmac=b5321b09b249ede58b5d6b72856260931461fe31cada83980a47a610e35864a7&w=740" class="card-img-top" alt="Wireless Earbuds" />
                <div class="card-body">
                  <h5 class="card-title">Wireless Earbuds</h5>
                  <p class="card-text">Enjoy superior sound quality and convenience with these noise-canceling wireless earbuds.</p>
                  <a href="#" class="btn btn-primary">Buy Now</a>
                </div>
              </div>
            </div>
          </div>
          {/* End Cards */}

          <h5 className="mt-3">All products</h5>
          {/* Start Popular Products */}
          <div class="row row-cols-lg-4 gx-0 gy-3">
            <div class="col">
              <div class="card">
                <img src="https://img.freepik.com/free-photo/white-reusable-water-bottle_53876-145536.jpg?t=st=1735293925~exp=1735297525~hmac=8bcc7903f86535d58e9b995ea1f3d74cbfb140e0ad3fa8072b0726a8f57d8335&w=996" class="card-img-top" alt="Eco-Friendly Water Bottle" />
                <div class="card-body">
                  <h5 class="card-title">Eco-Friendly Water Bottle</h5>
                  <p class="card-text">Stay hydrated and reduce waste with this reusable, BPA-free water bottle. Perfect for on-the-go lifestyles.</p>
                  <a href="#" class="btn btn-primary">Buy Now</a>
                </div>
              </div>
            </div>
            <div class="col">
              <div class="card">
                <img src="https://img.freepik.com/free-photo/headphones-with-minimalist-monochrome-background_23-2150763311.jpg?t=st=1735294135~exp=1735297735~hmac=788b85f3521057b0b3bd91ec7cbc5baaca46bb377b5d605b06f16ca021ce5744&w=740" class="card-img-top" alt="Noise-Canceling Headphones" />
                <div class="card-body">
                  <h5 class="card-title">Noise-Canceling Headphones</h5>
                  <p class="card-text">Immerse yourself in music and silence the world around you with these premium noise-canceling headphones.</p>
                  <a href="#" class="btn btn-primary">Shop Now</a>
                </div>
              </div>
            </div>
            <div class="col">
              <div class="card">
                <img src="https://img.freepik.com/free-photo/front-view-lit-lightbulb-protected-by-clear-glass-as-idea-concept_23-2149081902.jpg?t=st=1735295355~exp=1735298955~hmac=bfe92907da57db0643287375af0ce9d159d6956b6214a27c64349f93848c84b5&w=996" class="card-img-top" alt="Smart LED Light Bulb" />
                <div class="card-body">
                  <h5 class="card-title">Smart LED Light Bulb</h5>
                  <p class="card-text">Control your lighting with ease! This smart bulb works with voice commands and mobile apps.</p>
                  <a href="#" class="btn btn-primary">Discover More</a>
                </div>
              </div>
            </div>
            <div class="col">
              <div class="card">
                <img src="https://img.freepik.com/free-photo/still-life-rendering-jackets-display_23-2149745029.jpg?t=st=1735293395~exp=1735296995~hmac=44502602e208e6103a65221653c382b3df246d202cd958a7f4b59db31edf9ae2&w=1380" class="card-img-top" alt="Winter Jacket" />
                <div class="card-body">
                  <h5 class="card-title">Winter Jacket</h5>
                  <p class="card-text">Stay warm and stylish with this premium insulated winter jacket. Perfect for cold weather.</p>
                  <a href="#" class="btn btn-primary">Buy Now</a>
                </div>
              </div>
            </div>
            <div class="col">
              <div class="card">
                <img src="https://img.freepik.com/free-photo/still-life-rendering-jackets-display_23-2149745031.jpg?t=st=1735293477~exp=1735297077~hmac=e453eb193137d7b4d74672a84e3fd74c026d390126641d204baa0ca9c95ab0a4&w=1380" class="card-img-top" alt="Leather Boots" />
                <div class="card-body">
                  <h5 class="card-title">Leather Boots</h5>
                  <p class="card-text">Durable and comfortable leather boots for everyday wear. Available in multiple colors.</p>
                  <a href="#" class="btn btn-primary">Buy Now</a>
                </div>
              </div>
            </div>
            <div class="col">
              <div class="card">
                <img src="https://img.freepik.com/free-photo/smartwatch-screen-digital-device_53876-96809.jpg?t=st=1735293509~exp=1735297109~hmac=5ff7b79a31e5194b8697ce34740bfae07e36dd8761f319ea79d743af6fbfb7c3&w=826" class="card-img-top" alt="Smartwatch" />
                <div class="card-body">
                  <h5 class="card-title">Smartwatch</h5>
                  <p class="card-text">Track your fitness and stay connected with this sleek and versatile smartwatch.</p>
                  <a href="#" class="btn btn-primary">Buy Now</a>
                </div>
              </div>
            </div>
            <div class="col">
              <div class="card">
                <img src="https://img.freepik.com/free-photo/still-life-wireless-cyberpunk-headphones_23-2151072231.jpg?t=st=1735293568~exp=1735297168~hmac=b5321b09b249ede58b5d6b72856260931461fe31cada83980a47a610e35864a7&w=740" class="card-img-top" alt="Wireless Earbuds" />
                <div class="card-body">
                  <h5 class="card-title">Wireless Earbuds</h5>
                  <p class="card-text">Enjoy superior sound quality and convenience with these noise-canceling wireless earbuds.</p>
                  <a href="#" class="btn btn-primary">Buy Now</a>
                </div>
              </div>
            </div>
          </div>
          {/* End Popular Products */}

        </div>
        {/* End Cards Group */}

      </div>
      {/* End Body */}

      {/* Start Footer */}
      <div className="container mb-3">
        <footer className="text-center">
          <small>
            Copyright &copy; ARS Research Team. All Rights Reserved.
          </small>
        </footer>
      </div>
      {/* End Footer */}
    </>
  )
}

export default Landing;