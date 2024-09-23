import React, { useEffect, useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.min.css';
import SwiperCore, { Navigation, Pagination, Autoplay } from 'swiper';
import tShirtImage from '../Assests/tshirt.png';  // Example image for the t-shirt
// import personIllustration from '../Assests/person.svg';  // Example illustration for the person
import mugImage from '../Assests/preview.png';  // Example image for the mug
import capshirt from '../Assests/cap-shirt.webp'; // Example image for the cap
import higherProfitsImage from '../Assests/higher-profits.svg'; // Example image for higher profits
import robustScalingImage from '../Assests/robust-scaling.svg'; // Example image for robust scaling
import bestSelectionImage from '../Assests/best-selection.svg'; // Example image for best selection
import custom from '../Assests/custom-products.webp';
import product from '../Assests/your-products.webp';
import fullfillment from '../Assests/fullfillment.webp';
import plant from '../Assests/plant.svg';
import main from '../Assests/main-icon.svg';
import etsy from '../Assests/etsy.svg';
import shopify from '../Assests/shopify.svg';
import wix from '../Assests/woo.svg';
import woo from '../Assests/wix.svg';
import squarespace from '../Assests/squarespace.svg';
SwiperCore.use([Navigation, Pagination, Autoplay]);
const testimonials = [
  {
    name: 'Robert A. Voltaire',
    role: 'Store link',
    rating: 5,
    image: '/path-to-robert-image.jpg', // Replace with actual image path
    review:
      'Printify has been an incredible service for us musicians unable to keep large amounts of inventory - now we can create designs previously too expensive to print without having to have 1,000 shirts in our jam space. Thanks Printify!',
  },
  {
    name: 'Quinten Barney',
    role: 'Etsy Merchant',
    rating: 5,
    image: '/path-to-quinten-image.jpg', // Replace with actual image path
    review:
      'We chose Printify because of their offerings as well as their incredibly low prices. After several years, we\'ve come to find that their customer service is also top-notch, and their platform just keeps getting better and better.',
  },
  {
    name: 'Nikki',
    role: 'Store link',
    rating: 5,
    image: '/path-to-nikki-image.jpg', // Replace with actual image path
    review:
      'Printify has been amazing as we grow our business. From the customizations we can make for our customers, to their Customer Service team making the whole process a breeze!',
  },
  {
    name: 'John Doe',
    role: 'Shopify Seller',
    rating: 4,
    image: '/path-to-john-image.jpg', // Replace with actual image path
    review:
      'Printify is an awesome platform! Their wide range of products and integrations with major marketplaces make it easy for me to manage my online store.',
  },
  {
    name: 'Jane Smith',
    role: 'Amazon Seller',
    rating: 5,
    image: '/path-to-jane-image.jpg', // Replace with actual image path
    review:
      'I love Printify! It has simplified the way I run my business, and their customer service team has always been there to help whenever I had any issues.',
  },
  {
    name: 'Michael Johnson',
    role: 'E-commerce Store Owner',
    rating: 4,
    image: '/path-to-michael-image.jpg', // Replace with actual image path
    review:
      'I have been using Printify for over a year now, and it has made the print-on-demand process smooth and efficient for my business. Highly recommended!',
  },
  {
    name: 'Sarah Lee',
    role: 'Etsy Merchant',
    rating: 5,
    image: '/path-to-sarah-image.jpg', // Replace with actual image path
    review:
      'As a small business owner, Printify has made it easy for me to offer a wide range of products without needing inventory. It’s a game-changer for my shop.',
  },
];


const MainContent = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          } else {
            setIsVisible(false);
          }
        });
      },
      { threshold: 0.5 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
        return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);
  return (
    <div>
      {/* Main Hero Section */}
      <section className="container my-20 mx-auto px-4 py-16 flex flex-col lg:flex-row items-center justify-between">
        
        {/* Left Section */}
        <div className="text-center lg:text-left max-w-lg">
          <h1 className="text-4xl font-bold text-gray-900 mb-6">
            Create and sell custom products
          </h1>
          <ul className="text-lg text-gray-700 space-y-2 mb-6">
            <li className="flex items-center">
              <svg className="w-6 h-6 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
              </svg>
              100% Free to use
            </li>
            <li className="flex items-center">
              <svg className="w-6 h-6 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
              </svg>
              900+ High-Quality Products
            </li>
            <li className="flex items-center">
              <svg className="w-6 h-6 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
              </svg>
              Largest global print network
            </li>
          </ul>

          <div className="space-x-4 mb-6">
            <button className="bg-green-500 text-white font-semibold py-3 px-6 rounded hover:bg-green-600 transition duration-300">
              Start for free
            </button>
            <button className="bg-transparent border border-gray-400 text-gray-700 font-semibold py-3 px-6 rounded hover:bg-gray-100 transition duration-300">
              How it works?
            </button>
          </div>

          <p className="text-gray-500 text-sm">
            Trusted by over 8M sellers around the world
          </p>
        </div>

        {/* Right Section */}
        <div className="relative mt-8 lg:mt-0">
          <img src={tShirtImage} alt="T-Shirt" className="w-full max-w-sm relative -right-105 top-50" />
          {/* <img src={personIllustration} alt="Person pointing" className="absolute -right-23 top-24 w-40  lg:block" /> */}
        </div>
      </section>
      {/* Features Section */}
      <section className="bg-white py-12">
        <div className="container mx-auto text-center">
          <div className="flex flex-col md:flex-row justify-around items-center">
            
            {/* First Feature */}
            <div className="flex flex-col items-center">
              <img src={higherProfitsImage} alt="Higher Profits" className="w-24 h-24 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Higher Profits</h3>
              <p className="text-gray-600 text-center">
                We offer some of the lowest prices in the industry because print providers continuously compete to win your business.
              </p>
            </div>

            {/* Second Feature */}
            <div className="flex flex-col items-center mt-8 md:mt-0">
              <img src={robustScalingImage} alt="Robust Scaling" className="w-24 h-24 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Robust Scaling</h3>
              <p className="text-gray-600 text-center">
                Easily handle peak holiday seasons, with our wide network of partners and automatic routing functionality.
              </p>
            </div>

            {/* Third Feature */}
            <div className="flex flex-col items-center mt-8 md:mt-0">
              <img src={bestSelectionImage} alt="Best Selection" className="w-24 h-24 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Best Selection</h3>
              <p className="text-gray-600 text-center">
                We offer a wide variety of high-quality products for you to customize.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* Product Design Section */}
  <section className="container mx-auto px-4 py-16 flex flex-col lg:flex-row items-center justify-between bg-gray-50">
  {/* Left Side: Single Product Image */}
  <div className="relative rounded-lg flex justify-center items-center lg:w-1/2">
    {/* Single Image */}
    <img
      src={capshirt} // Replace with your preferred image
      alt="Product"
      className="w-full h-auto object-fill rounded-lg shadow-md"
    />
  </div>
  
  
    


        {/* Right Side: Text Content */}
        <div className="text-center lg:text-left lg:w-1/2 lg:pl-12 mt-8 lg:mt-0">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            Easily add your design to a wide range of products
          </h2>
          <p className="text-lg text-gray-700 mb-6">
            With our free design tools, you can easily add your custom designs to t-shirts, mugs, phone cases, and hundreds of other products.
          </p>
          <a href="#" className="text-green-500 font-semibold hover:underline">
            All products →
          </a>
        </div>
      </section>

      {/* New Section: Create, Sell, Fulfillment */}
      <section className="container mx-auto px-4 py-16 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
        {/* Create custom products */}
        <div className="flex flex-col items-center">
          <img src={custom} alt="Custom Products" className="w-32 h-32 mb-4" />
          <h3 className="text-green-600 font-semibold text-xl">CREATE</h3>
          <h4 className="text-2xl font-bold text-gray-900 mb-4">Custom products</h4>
          <p className="text-gray-600">
            Easily add your designs to a wide range of products using our free tools.
          </p>
        </div>

        {/* Sell on your terms */}
        <div className="flex flex-col items-center">
          <img src={product} alt="Sell on your terms" className="w-32 h-32 mb-4" />
          <h3 className="text-green-600 font-semibold text-xl">SELL</h3>
          <h4 className="text-2xl font-bold text-gray-900 mb-4">On your terms</h4>
          <p className="text-gray-600">
            You choose the products, sale price, and where to sell.
          </p>
        </div>

        {/* We handle fulfillment */}
        <div className="flex flex-col items-center">
          <img src={fullfillment} alt="Fulfillment" className="w-32 h-32 mb-4" />
          <h3 className="text-green-600 font-semibold text-xl">WE HANDLE</h3>
          <h4 className="text-2xl font-bold text-gray-900 mb-4">Fulfillment</h4>
          <p className="text-gray-600">
            Once an order is placed, we automatically handle all the printing and delivery logistics.
          </p>
        </div>
      </section>

      <section ref={sectionRef} className="py-20 bg-gray-100 relative overflow-hidden">
      <h2 className="text-3xl font-bold text-center mb-4">Connect your store</h2>
      <p className="text-center mb-10">
        Printify easily integrates with major e-commerce platforms and marketplaces
      </p>
      
      <div className="relative flex justify-center items-center h-[400px]">
        {/* Main Green Icon */}
        <div className='bg-green-500 px-10 py-10 rounded-lg'>
        <div className={`transition-transform duration-1000 ${isVisible ? 'scale-125' : ''}`}>
          <img src={main} alt="Main Platform" className="w-24 h-24 " />
        </div>
        </div>

        {/* Other Icons (SVGs) */}
        <div className={`absolute w-full h-full ${isVisible ? 'opacity-100' : 'opacity-0'} transition-opacity duration-1000`}>
          {/* Shopify Icon */}
          <img src={shopify} alt="Shopify" className="w-16 h-16 absolute left-10 top-10 transform transition-transform duration-1000 delay-200 ${isVisible ? 'translate-x-16 -translate-y-16' : ''}" />
          
          {/* WooCommerce Icon */}
          <img src={woo} alt="WooCommerce" className="w-16 h-16 absolute right-10 top-20 transform transition-transform duration-1000 delay-400 ${isVisible ? '-translate-x-16 -translate-y-8' : ''}" />
          
          {/* Etsy Icon */}
          <img src={etsy} alt="Etsy" className="w-16 h-16 absolute left-20 bottom-10 transform transition-transform duration-1000 delay-600 ${isVisible ? 'translate-x-24 translate-y-16' : ''}" />
          
          {/* Squarespace Icon */}
          <img src={squarespace} alt="Squarespace" className="w-16 h-16 absolute left-40 top-40 transform transition-transform duration-1000 delay-800 ${isVisible ? '-translate-x-32 -translate-y-12' : ''}" />
          
          {/* Wix Icon */}
          <img src={wix} alt="Wix" className="w-16 h-16 absolute right-20 bottom-20 transform transition-transform duration-1000 delay-1000 ${isVisible ? 'translate-x-20 translate-y-32' : ''}" />
          
          {/* API Icon */}
          <img alt="API" className="w-16 h-16 absolute bottom-32 right-32 transform transition-transform duration-1000 delay-1200 ${isVisible ? '-translate-x-20 translate-y-24' : ''}" />
        </div>
      </div>
    </section>

    <section className="bg-green-100 py-8">
        <div className="container mx-auto px-4 flex flex-col lg:flex-row justify-between items-center">
          <div className="text-center lg:text-left mb-4 lg:mb-0">
            <p className="text-xl font-semibold text-green-700">
              Are you a large business looking for custom solutions?
            </p>
          </div>
          <div>
            <a href="#" className="bg-green-500 text-white px-6 py-2 rounded-md shadow-md hover:bg-green-600 transition duration-300">
              Talk to sales
            </a>
          </div>
        </div>
      </section>
      
      <section className="bg-gray-50 py-16">
      <div className="container mx-auto px-4 text-center">
        {/* Title */}
        <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
          Trusted by over 8M sellers around the world
        </h2>
        {/* Subtitle */}
        <p className="text-lg text-gray-700 mb-12 max-w-2xl mx-auto">
          Whether you are just getting started or run an enterprise-level e-commerce business, 
          we do everything we can to ensure a positive merchant experience.
        </p>

        {/* Swiper Slider */}
        <Swiper
          spaceBetween={30}
          slidesPerView={1}
          loop={true}
          autoplay={{ delay: 5000 }}
          pagination={{ clickable: true }}
          navigation={true}
          breakpoints={{
            640: {
              slidesPerView: 1,
            },
            768: {
              slidesPerView: 2,
            },
            1024: {
              slidesPerView: 3,
            },
          }}
        >
          {testimonials.map((testimonial, index) => (
            <SwiperSlide key={index}>
              <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
                <div className="flex items-center mb-4">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full mr-4"
                  />
                  <div>
                    <h3 className="text-xl font-semibold">{testimonial.name}</h3>
                    <p className="text-green-500">{testimonial.role}</p>
                  </div>
                </div>
                <div className="flex items-center mb-4">
                  {/* Star Ratings */}
                  {Array.from({ length: testimonial.rating }).map((_, i) => (
                    <svg
                      key={i}
                      className="w-5 h-5 text-yellow-400"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.95a1 1 0 00.95.69h4.148c.97 0 1.372 1.24.588 1.81l-3.357 2.44a1 1 0 00-.364 1.118l1.286 3.951c.3.921-.755 1.688-1.538 1.118l-3.357-2.44a1 1 0 00-1.175 0l-3.357 2.44c-.783.57-1.838-.197-1.538-1.118l1.286-3.95a1 1 0 00-.364-1.119l-3.357-2.44c-.784-.57-.382-1.81.588-1.81h4.148a1 1 0 00.95-.69l1.286-3.95z" />
                    </svg>
                  ))}
                </div>
                <p className="text-gray-600">{testimonial.review}</p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>

    <section className="flex flex-col lg:flex-row bg-gray-900 text-white py-16 px-8 lg:px-16 justify-center items-center">
      {/* Left Side - Text Section */}
      <div className="lg:w-1/2 text-center lg:text-left mb-12 lg:mb-0">
        <h2 className="text-3xl font-bold mb-4">
          Make Money, Risk-Free
        </h2>
        <p className="mb-8">
          You pay for fulfillment only when you make a sale
        </p>

        {/* Profit Calculation Box */}
        <div className="bg-gray-800 p-6 rounded-lg mb-6 shadow-md">
          <div className="flex justify-between items-center mb-4">
            <p className="text-lg">You sell a t-shirt</p>
            <p className="text-lg">$30</p>
          </div>
          <div className="flex justify-between items-center mb-4">
            <p className="text-lg">You pay for its production</p>
            <p className="text-lg">$12</p>
          </div>
          <hr className="border-gray-700 mb-4" />
          <div className="flex justify-between items-center">
            <p className="text-lg font-bold text-green-500">Your profit</p>
            <p className="text-lg font-bold text-green-500">$18</p>
          </div>
        </div>

        {/* Start Selling Button */}
        <button className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-6 rounded-lg transition duration-200">
          Start selling
        </button>

        {/* Footer Text */}
        <p className="mt-4 text-gray-400">
          100% Free to use · 900+ Products · Largest print network
        </p>
      </div>

      {/* Right Side - Illustration */}
      <div className="lg:w-1/2 flex justify-center">
        <img
          src={plant} // Replace with your image path
          alt="Grow Money"
          className="w-full max-w-md lg:max-w-none"
        />
      </div>
    </section>
    </div>
  );
};

export default MainContent;