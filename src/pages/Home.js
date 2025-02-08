import "./Home.css"
import h1 from "./image/cake.jpg"
import h2 from "./image/cake1.jpg"
import h3 from "./image/bread.jpg"
import h4 from "./image/cookies1.jpg"
import h5 from "./image/about.jpg"
import h6 from "./image/service.png"

const Home = () => {
  return (
    <div>
      <div className="containerimage">
        <img src={h1} className="screen-image" alt="..." />
        <div className="text-overlay">
          <h4 className=" mb-4 bestbakery">//THE BEST BAKERY</h4>
          <h1 className="bakewith">We Bake With</h1>
          <h1 className="bakewith">Passion</h1>
        </div>
      </div>
      <div className="container my-5">
        <div className="container mt-5">
          <br /><br />
          <div className="container my-5">
            <h4 className="text-center mb-1 sabari">//BAKERY PRODUCT</h4>
            <h1 className="text-center mb-1 product" >Explore The Categories Of</h1>
            <h1 className="text-center mb-3 product" >Our Bakery Products</h1>
            <div className="row">
              <div className="col-md-4">
                <img
                  src={h2}
                  alt="Image 1"
                  className="img-fluid rounded"
                />
                <p className="text-center mb-1">"Celebrating Life's Special Moments in Style"</p>
                <h2 className="text-center mb-1 categories">Cake</h2>
                <p className="text-center mb-1 money">₹19-999</p>
              </div>
              <div className="col-md-4">
                <img
                  src={h3}
                  alt="Image 2"
                  className="img-fluid rounded"
                />
                <p className="text-center mb-1">"Bread, the staple of life"</p>
                <h2 className="text-center mb-1 categories">bread</h2>
                <p className="text-center mb-1 money">₹39-129</p>
              </div>
              <div className="col-md-4">
                <img
                  src={h4}
                  alt="Image 3"
                  className="img-fluid rounded"
                />
                <p className="text-center mb-1">"Sweet treats, unique delights"</p>
                <h2 className="text-center mb-1 categories">Cookies</h2>
                <p className="text-center mb-1 money">₹49-399</p>
              </div>
            </div>
            <br /><br /><br /><br />
            <div className="container my-5">
              <div className="row align-items-center">
                <div className="col-md-6">
                  <img
                    src={h5}
                    alt="Contact Us"
                    className="img-fluid rounded aboutimg"
                  />
                </div>
                <div className="col-md-6">
                  <h4 className="text mb-1 sabari">//ABOUT US</h4>
                  <h1 className="product">We Bake Every Item From The Core Of Our Hearts</h1>
                  <p>At DreamCakes, we believe in making life sweeter with our handcrafted cakes and desserts. From birthdays to weddings, our cakes are made with the finest ingredients and a passion for perfection. Each creation is designed to not only taste amazing but also look like a work of art.</p>
                  <p>Founded by Sabari, DreamCakes started as a small home bakery and has grown into a local favorite, known for custom cakes that reflect your unique style and personality. Whether you're celebrating a special occasion or treating yourself, DreamCake is here to make your moments even sweeter.</p>
                  <h6>Why DreamCakes?</h6>
                  <ul>
                    <li>Fresh Ingredients: We use only the best, locally sourced ingredients for a taste that’s as fresh as it is flavorful.</li>
                    <li>Custom Designs: No two cakes are the same. We work with you to create a cake that fits your unique style and vision.</li>
                    <li>Perfect for Any Occasion: From weddings to birthdays, DreamCakes makes every celebration unforgettable.</li>
                  </ul>
                  <h6>At DreamCakes, we’re not just making cakes; we’re making memories. Let us be a part of your special moments with cakes that bring joy to every bite.</h6>
                </div>
              </div>
            </div>
          </div><br /><br /><br /><br />
          <div className="service container my-5">
            <div className="row align-items-center">
              <div className="col-md-6 order-md-2">
                <h4 className="mb-1 sabari">//OUR SERVICE</h4>
                <h2 className="product">Our Cake Services</h2>
                <p>
                  At <b>Dreamcakes</b>, we take pride in crafting a delightful variety of cakes
                  to make every moment special. Whether you're celebrating a birthday, wedding, anniversary,
                  or any special event, our cakes are designed to impress both in taste and presentation.
                </p>
                <ul >
                  <li> Custom Cakes for Any Occasion</li>
                  <li> Freshly Baked with Premium Ingredients</li>
                  <li> Personalized Designs & Flavors</li>
                  <li> Wedding & Celebration Cakes</li>
                </ul>
                <p>
                  Looking for a personalized touch? We also create custom cakes tailored to your vision, making
                  your celebration truly one-of-a-kind. Visit us today and treat yourself to a slice of happiness!
                </p>
              </div>
              <div className="col-md-6 order-md-2">
                <img src={h6} alt="Cake Service" className="img-fluid rounded" />
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

export default Home;