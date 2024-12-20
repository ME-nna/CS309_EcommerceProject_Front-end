import { Link } from "react-router-dom";
import "./footer.css";
const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-logo">
          <h2>DealZone</h2>
        </div>
        <div className="footer-links">
          <div className="footer-column">
            <h3>Information</h3>
            <ul>
              <li><Link to="/account">My Account</Link></li>
              <li><Link to="/login">Login</Link></li>
              <li><Link to="/cart">My Cart</Link></li>
              <li><Link to="/wishlist">My Wishlist</Link></li>
            </ul>
          </div>
          <div className="footer-column2">
            <h3>Service</h3>
            <ul>
              <li><Link to="/about">About Us</Link></li>
              <li><Link to="/terms">Terms & Conditions</Link></li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <p>©2024 OurSite All Rights are reserved</p>
          <div className="footer-payment">
          
          </div>
          <div className="footer-social">
            <h1>Follow us on Social Media</h1>
            <a href="https://www.facebook.com/yourpage" target="_blank"><i class="fab fa-facebook"></i></a>
            <a href="https://twitter.com/yourprofile" target="_blank"><i class="fab fa-twitter"></i></a>
            <a href="https://www.instagram.com/yourprofile" target="_blank"><i class="fab fa-instagram"></i></a>       
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;


