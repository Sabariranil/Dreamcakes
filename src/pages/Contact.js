import "./Contact.css"
import React, { useState } from 'react';
import c1 from "./image/cake.jpg"
import c2 from "./image/contact.jpg"

const Contact = () => {
  return (
    <div >
      <div className="image-container">
        <img src={c1} className="banner" alt="..."></img>
        <div className="contactus"><h1 className="font">Contact</h1></div>
      </div>
      <div><br /><br />
        <div class=" text-dark text-center py-4">
          <h1 className="text-center mb-1 withus" >Get in Touch with Us</h1>
          <p>
            We’d love to hear from you! Whether it's a question, feedback, or
            just a hello, feel free to send us a message.
          </p>
        </div>
      </div>
      <div className="container my-5">
        <div className="row align-items-center">
          <div className="col-md-6 mb-4 imag1">
            <img
              src={c2}
              alt="Bakery Shop"
              className="img-fluid rounded shadow contact-img"
            />
          </div>
          <div className="col-md-6">
            <div className="container my-4">
              <div className="row g-5">
                <div className="col-lg-12">
                  <form>
                    <div className="mb-4">
                      <label  className="form-label">
                        Your Name
                      </label>
                      <input
                        type="text"
                        className="form-control form-control-lg"
                        id="name"
                        placeholder="vijay"
                      />
                    </div>
                    <div className="mb-4">
                      <label  className="form-label">
                        Your Email
                      </label>
                      <input
                        type="email"
                        className="form-control form-control-lg"
                        id="email"
                        placeholder="vijay@example.com"
                      />
                    </div>
                    <div className="mb-4">
                      <label  className="form-label">
                        Message
                      </label>
                      <textarea
                        type="message"
                        className="form-control form-control-lg"
                        id="message"
                        placeholder="Let us know your thoughts, questions, or comments!"
                      ></textarea>
                    </div>
                    <button type="submit" className="btn btn text-white px-4 py-2 submit">
                      Submit
                    </button>
                  </form>
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
  );
};

export default Contact;

