import React from "react";
import { FaFacebook, FaFacebookSquare, FaInstagramSquare, FaTwitterSquare } from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="mt-5">
      <footer className="footer bg-light text-black py-3">
        <div className="container">
          <div className="row">
            <div className="col-md-3">
              <p className="fs-2 fw-bold">
                {" "}
                Chef Sa<span className="text-warning">vv</span>y
              </p>
              <p className="text-muted">
                Best Recipe provider website from best chef all over the world.
              </p>
            </div>
            <div className="col-md-3">
              <h4>Useful Links</h4>
              <ul className="list-unstyled">
                <li className="">
                  <Link className="text-decoration-none text-dark" to="/">
                    Home
                  </Link>
                </li>
                <li className="">
                  <Link className="text-decoration-none text-dark" to="/blog">
                    Blogs
                  </Link>
                </li>
                <li className="">
                  <Link className="text-decoration-none text-dark">About Us</Link>
                </li>
              </ul>
            </div>
            <div className="col-md-3">
              <h4>Support</h4>
              <ul className="list-unstyled">
                <li className="">
                  <a className="text-decoration-none text-dark" href="#">
                    Contact Us
                  </a>
                </li>
                <li className="">
                  <a className="text-decoration-none text-dark" href="#">
                    Privacy Policy
                  </a>
                </li>
                <li className="">
                  <a className="text-decoration-none text-dark" href="#">
                    Terms of Use
                  </a>
                </li>
              </ul>
            </div>
            <div className="col-md-3">
              <h4>Find Us on</h4>
              <ul className="list-unstyled">
                <li className="">
                  <FaFacebookSquare /> Facebook
                </li>
                <li className="">
                  <FaInstagramSquare /> Instagram
                </li>
                <li className="">
                  <FaTwitterSquare /> Twitter
                </li>
              </ul>
            </div>
          </div>
        </div>
        <hr />
        <p className="text-muted text-center">Chef Savvy &copy; 2023</p>
      </footer>
      
    </div>
  );
};

export default Footer;
