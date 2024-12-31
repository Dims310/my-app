import axios from "axios";
import React from "react";

// Component
class LandingPage extends React.Component {
  state = {
    products: []
  }

  componentDidMount() {
    const axiosInstance = axios.create({
      baseURL: 'http://localhost:8080/api'
    });

    axiosInstance({
      method: 'get',
      url: '/product',
      responseType: 'json'
    })
    .then(response => {
      const products = response.data.data;
      this.setState({ products });
    })
    .catch(e => {
      console.log(e);
    })
    .finally(() => {
      console.log("Axios executed.");
    });
  }

  currencyFormat(price) {
    return 'Rp' + price.toLocaleString('id-ID');
  }

  onDiscount(price, discount) {
    const getDiscount = price * (discount/100);
    return price - getDiscount;
  }
  
  render() {
    return(
      <>
        {/* Start Navbar */}
        <div>
          <nav className="navbar navbar-expand-lg bg-body-tertiary">
            <div className="container">
              <a className="navbar-brand" href="#">
                Toserba
              </a>
              <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
              </button>
              <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                  <li className="nav-item">
                    <a className="nav-link active" aria-current="page" href="#">Home</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#">Products</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#">Orders</a>
                  </li>
                </ul>
                <form className="d-flex" role="search">
                  <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                  <button className="btn" type="submit"><i class="bi bi-search"></i></button>
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
          <div className="my-3 mt-5">
            <h5>Products on <span className="text-danger">SALE</span> <span className="text-danger">12:39:00</span></h5>

            {/* Start Cards */}
            <div className="row row-cols-md-3 row-cols-xl-6 gx-0 gy-3">
              { this.state.products.filter(i => i.discount != null).map((i) => (
                <div key={i.id} className="col">
                  <div className="card">
                    <img src={i.asset.path} className="card-img-top" alt="Winter Jacket" />
                    <div className="card-body">
                      <h6 className="card-title fw-normal text-truncate">{i.name}</h6>
                      <div>
                        <div className="col">
                          <p id="price-before" className="card-text fw-semibold text-secondary">
                            <del>{this.currencyFormat(i.price)}</del> <span class="badge text-bg-secondary">{i.discount}%</span>
                          </p>
                        </div>
                        <div className="col">
                          <p id="price-after" className="card-text fw-bold text-danger">{this.currencyFormat(this.onDiscount(i.price, i.discount))}</p>
                        </div>  
                      </div>
                    </div>
                    {/* <div className="card-footer d-grid"> */}
                      <button className="card-footer btn btn-light btn-sm">
                        Buy Now
                      </button>
                    {/* </div> */}
                  </div>
                </div>
              )) }
            </div>
            {/* End Cards */}

            <hr className="border border-1 opacity-25"></hr>

            <h5 className="mt-5">All products</h5>
            {/* Start All Products */}
            <div className="row row-cols-md-3 row-cols-xl-6 gx-0 gy-3">
              { this.state.products.map((i) => (
                <div key={i.id} className="col">
                  <div className="card">
                    <img src={i.asset.path} className="card-img-top" alt={i.name} />
                    <div className="card-body">
                      <h6 className="card-title fw-normal text-truncate">{i.name}</h6>
                      { i.discount != null ? 
                        <div>
                          <div className="col">
                            <p id="price-before" className="card-text fw-semibold text-secondary">
                              <del>{this.currencyFormat(i.price)}</del> <span class="badge text-bg-secondary">{i.discount}%</span>
                            </p>
                          </div>
                          <div className="col">
                            <p id="price-after" className="card-text fw-bold text-danger">{this.currencyFormat(this.onDiscount(i.price, i.discount))}</p>
                          </div>  
                        </div>
                        :
                        <p id="price" className="card-text fw-semibold">{this.currencyFormat(i.price)}</p>
                      }
                    </div>
                    {/* <div className="card-footer d-grid"> */}
                    <button className="card-footer btn btn-light btn-sm">
                      Buy Now
                    </button>
                    {/* </div> */}
                  </div>
                </div>
              )) }
            </div>
            {/* End All Products */}

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
}

export default LandingPage;