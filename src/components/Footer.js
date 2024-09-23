import React from "react";
import logo from "../Assests/logo.svg";

const Footer = () => {
  return (
    <footer className="bg-white py-10">
      {/* Social Media Icons with Logo */}
      <div className="flex flex-col md:flex-row justify-between mx-4 md:mx-20 space-y-4 md:space-y-0 md:space-x-8 mt-8">
        {/* Logo */}
        <a href="/">
          <img src={logo} alt="Printify Logo" className="h-10" />
        </a>

        {/* Social Media Icons */}
        <div className="flex justify-center space-x-8">
          <a href="#" className="text-green-500 text-3xl">
            <i className="fab fa-facebook-f"></i> {/* Facebook */}
          </a>
          <a href="#" className="text-green-500 text-3xl">
            <i className="fab fa-instagram"></i> {/* Instagram */}
          </a>
          <a href="#" className="text-green-500 text-3xl">
            <i className="fab fa-linkedin-in"></i> {/* LinkedIn */}
          </a>
          <a href="#" className="text-green-500 text-3xl">
            <i className="fab fa-twitter"></i> {/* Twitter */}
          </a>
          <a href="#" className="text-green-500 text-3xl">
            <i className="fab fa-youtube"></i> {/* YouTube */}
          </a>
          <a href="#" className="text-green-500 text-3xl">
            <i className="fab fa-tiktok"></i> {/* TikTok */}
          </a>
        </div>
      </div>

      <div className="container mx-auto px-4 mt-8">
        {/* Responsive Grid for Footer Links */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 text-left justify-center">
          {/* Column 1: Integrations */}
          <div>
            <h3 className="font-semibold mb-4">Integrations</h3>
            <ul className="space-y-2">
              {[
                "Shopify",
                "Etsy",
                "eBay",
                "Amazon",
                "TikTok Shop",
                "PrestaShop",
                "BigCommerce",
                "Wix",
                "WooCommerce",
                "Squarespace",
                "Printify API",
                "Printify Pop-Up Store",
                "Shutterstock",
              ].map((item) => (
                <li key={item}>
                  <a
                    href="#"
                    className="hover:text-green-500 transition-colors duration-200"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 2: Discover */}
          <div>
            <h3 className="font-semibold mb-4">Discover</h3>
            <ul className="space-y-2">
              {[
                "Blog",
                "Guides",
                "Products",
                "Etsy print-on-demand",
                "Shopify print-on-demand",
                "Woocommerce print-on-demand",
                "Wix print-on-demand",
                "Squarespace print-on-demand",
                "Make Your Own Shirt",
                "Brands",
                "Pricing",
                "Shipping Rates",
              ].map((item) => (
                <li key={item}>
                  <a
                    href="#"
                    className="hover:text-green-500 transition-colors duration-200"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Start Selling */}
          <div>
            <h3 className="font-semibold mb-4">Start Selling</h3>
            <ul className="space-y-2">
              {[
                "Custom T-shirts",
                "Custom Hoodies",
                "Custom Mugs",
                "Custom Socks",
                "Custom Backpacks",
                "Custom Branding",
                "Sell on Etsy",
                "Sell on Social Media",
                "Free T-shirt Designs",
                "Custom Products",
                "Custom All-Over-Print Hoodies",
                "Start a Clothing Line",
              ].map((item) => (
                <li key={item}>
                  <a
                    href="#"
                    className="hover:text-green-500 transition-colors duration-200"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Printify */}
          <div>
            <h3 className="font-semibold mb-4">Printify</h3>
            <ul className="space-y-2">
              {[
                "Print on Demand",
                "Mockup Generator",
                "Merch Maker",
                "Fulfillment Status",
                "Custom Products",
                "3D Mockups",
                "Contact",
                "Partner Program",
                "Affiliate Program",
              ].map((item) => (
                <li key={item}>
                  <a
                    href="#"
                    className="hover:text-green-500 transition-colors duration-200"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
