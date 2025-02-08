import "./Menu.css"
import m1 from "./image/cake.jpg"
import m2 from "./image/trufflecake.jpg"
import m3 from "./image/redvelvet.jfif"
import m4 from "./image/vanillabean.jfif"
import m5 from "./image/croissants.jpg"
import m6 from "./image/chocolateeclair.jpg"
import m7 from "./image/frouttrait.jpg"

const Menu = () => {
  return (
    <div >
      <div className="image-container">
        <img src={m1} className="banner" alt="..."></img>
        <div className="contactus"><h1 className="font">Menu</h1></div>
      </div>
      <div>
        <div className="container mt-5">
          <div className="text-center mb-4">
            <h1 className="menu">Dream Cakes</h1>
            <p className="text-muted">Freshly baked cakes and pastries just for you!</p>
          </div>
          <div className="d-flex justify-content-between mb-5">
            <div className="me-3 w-50">
              <h2 className=" border-bottom pb-2 menu">Signature Cakes</h2>
              <div className="d-flex align-items-center py-2 border-bottom ">
                <img
                  src={m2}
                  alt="Chocolate Truffle Cake"
                  className="menucard img-fluid me-3 rounded"
                />
                <div className="d-flex justify-content-between w-100">
                  <div>
                    <h5 className="mb-0">Chocolate Truffle Cake</h5>
                    <p className="text-muted">Rich and creamy chocolate cake layered with ganache.</p>
                  </div>
                  <span className="text fw-bold money">₹450</span>
                </div>
              </div>
              <div className="d-flex align-items-center py-2 border-bottom">
                <img
                  src={m3}
                  alt="Red Velvet Cake"
                  className=" menucard img-fluid me-3 rounded"
                />
                <div className="d-flex justify-content-between w-100">
                  <div>
                    <h5 className="mb-0">Red Velvet Cake</h5>
                    <p className="text-muted">A classic favorite with cream cheese frosting.</p>
                  </div>
                  <span className="text fw-bold money">₹400</span>
                </div>
              </div>
              <div className="d-flex align-items-center py-2">
                <img
                  src={m4}
                  alt="Vanilla Bean Cake"
                  className="menucard img-fluid me-3 rounded"
                />
                <div className="d-flex justify-content-between w-100">
                  <div>
                    <h5 className="mb-0">Vanilla Bean Cake</h5>
                    <p className="text-muted">Fluffy vanilla sponge with fresh vanilla bean frosting.</p>
                  </div>
                  <span className="text fw-bold money">₹450</span>
                </div>
              </div>
            </div>
            <div className="ms-3 w-50">
              <h2 className=" border-bottom pb-2 menu">Pastries</h2>
              <div className="d-flex align-items-center py-2 border-bottom">
                <img
                  src={m5}
                  alt="Croissant"
                  className=" menucard img-fluid me-3 rounded"
                />
                <div className="d-flex justify-content-between w-100">
                  <div>
                    <h5 className="mb-0">Croissant</h5>
                    <p className="text-muted">Buttery and flaky French-style pastry.</p>
                  </div>
                  <span className="text fw-bold money">₹230</span>
                </div>
              </div>
              <div className="d-flex align-items-center py-2 border-bottom">
                <img
                  src={m6}
                  alt="Chocolate Éclair"
                  className=" menucard img-fluid me-3 rounded"
                />
                <div className="d-flex justify-content-between w-100">
                  <div>
                    <h5 className="mb-0">Chocolate Éclair</h5>
                    <p className="text-muted">Filled with rich cream and topped with chocolate glaze.</p>
                  </div>
                  <span className="text fw-bold money">₹120</span>
                </div>
              </div>
              <div className="d-flex align-items-center py-2">
                <img
                  src={m7}
                  alt="Fruit Tart"
                  className=" menucard img-fluid me-3 rounded"
                />
                <div className="d-flex justify-content-between w-100">
                  <div>
                    <h5 className="mb-0">Fruit Tart</h5>
                    <p className="text-muted">A delightful tart with seasonal fresh fruits.</p>
                  </div>
                  <span className="text fw-bold money">₹170</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="footercontainer">
        <footer class="cake-footer py-5">
          <div class="container">
            <div class="row">
              <div class="col-md-4">
                <h4>About Us</h4>
                <p>We are a premium cake shop, offering handcrafted cakes for every occasion. Made with love and the finest ingredients, our cakes are a treat for the taste buds!</p>
              </div>
              <div class="col-md-4">
                <h4>Quick Links</h4>
                <ul>
                  <li><a href="#">Home</a></li>
                  <li><a href="#">Menu</a></li>
                  <li><a href="#">About Us</a></li>
                  <li><a href="#">Contact</a></li>
                </ul>
              </div>
              <div class="col-md-4">
                <h4>Contact</h4>
                <p>Visit us at:</p>
                <p>
                  123 Cake Street, Sweet Town<br />
                  Email: Dreamcakes@gmail.com<br />
                  Phone: 807-247-5098
                </p>
              </div>
            </div>
            <div class="row">
              <div class="col text-center">
                <p>&copy; 2025 Dream Cakes. All rights reserved.</p>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </div>
  )
}

export default Menu;