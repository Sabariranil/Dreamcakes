import "./About.css"
import a1 from "./image/cake.jpg"
import a2 from "./image/about.jpg"
const About = () => {

  return (
    <div >
      <div className="image-container">
        <img src={a1} className="banner" alt="..."></img>
        <div className="contactus"><h1 className="font">About Us</h1></div>
      </div>
      <div>
        <div><h1 className="welcome">"Welcome To Dreamcakes"</h1></div>
        <div className="container my-5">
          <div className="row align-items-center">
            <div className="col-md-6">
              <img
                src={a2}
                alt="Contact Us"
                className="img-fluid rounded "
              />
            </div>
            <div className="col-md-6">
              <h1 className="product">We Bake Every Item From The Core Of Our Hearts</h1>
              <p>At DreamCakes, we believe in making life sweeter with our handcrafted cakes and desserts. From birthdays to weddings, our cakes are made with the finest ingredients and a passion for perfection. Each creation is designed to not only taste amazing but also look like a work of art.</p>
              <p>Founded by Sabari, DreamCake started as a small home bakery and has grown into a local favorite, known for custom cakes that reflect your unique style and personality. Whether you're celebrating a special occasion or treating yourself, DreamCake is here to make your moments even sweeter.</p>
              <h6>Why DreamCake?</h6>
              <ul>
                <li>Fresh Ingredients: We use only the best, locally sourced ingredients for a taste that’s as fresh as it is flavorful.</li>
                <li>Custom Designs: No two cakes are the same. We work with you to create a cake that fits your unique style and vision.</li>
                <li>Perfect for Any Occasion: From weddings to birthdays, DreamCakes makes every celebration unforgettable.</li>
              </ul>
              <h6>At DreamCakes, we’re not just making cakes; we’re making memories. Let us be a part of your special moments with cakes that bring joy to every bite.</h6>
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
  );
};

export default About;