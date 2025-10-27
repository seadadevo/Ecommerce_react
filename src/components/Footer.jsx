import React from "react";
import { Link } from "react-router-dom";
import { Facebook, Instagram, Twitter, ArrowUp, Send } from "lucide-react";
import Logo from "./UI/Logo";

const col1Data = [
  "123 Clothes St, Style City, NY 10001",
  "Email: support@seadamart.com",
  "Phone: (123) 456-7890",
];

const customerServiceData = [
  "Contact Us",
  "Shipping & Returns",
  "FAQs",
  "Order Tracking",
  "Size Guide",
];

const linksData = [
  {
    name: "Facebook",
    content: <Facebook size={22} />,
  },
  {
    name: "Instagram",
    content: <Instagram size={22} />,
  },
  {
    name: "Twitter",
    content: <Twitter size={22} />,
  },
];

const renderCurtomerService = customerServiceData.map((item, idx) => (
  <li key={idx}>
    <a href="#" className="hover:text-white transition-colors">
      {item}
    </a>
  </li>
));

const renderLinkData = linksData.map((item) => (
  <a
    key={item.name}
    href="#"
    aria-label={item.name}
    className="text-gray-300 hover:text-red-500 transition"
  >
    {item.content}
  </a>
));

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      <footer className="bg-gray-900 text-gray-300 pt-16 pb-8">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
            <div className="mb-6 md:mb-0">
            <Logo/>
              <p className="text-sm mb-4">
                Powering Your World with the Best in Clothes.
              </p>
              <div className="space-y-2 text-sm">
                {col1Data.map((item, idx) => (
                  <p key={idx}>{item}</p>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-white mb-4">
                Customer Service
              </h3>
              <ul className="space-y-2 text-sm">{renderCurtomerService}</ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-white mb-4">
                Follow Us
              </h3>
              <div className="flex space-x-4">{renderLinkData}</div>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-white mb-4">
                Stay in the Loop
              </h3>
              <p className="text-sm mb-4">
                Subscribe to get special offers, free giveaways, and more.
              </p>
              <form className="flex items-center bg-white rounded-md overflow-hidden shadow-sm">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-grow px-4 py-2 text-gray-700 focus:outline-none placeholder-gray-400"
                />
                <button
                  type="submit"
                  className="bg-red-600 hover:bg-red-700 text-white p-2 flex items-center justify-center transition"
                >
                  <Send size={18} />
                </button>
              </form>
            </div>
          </div>

          <div className="border-t border-gray-700 mt-12 pt-6 text-center">
            <p className="text-sm text-gray-500">
              © 2025 SeadaMart. All rights reserved.
            </p>
          </div>
        </div>
      </footer>

      <button
        onClick={scrollToTop}
        title="Back to Top"
        className="fixed bottom-5 right-5 bg-red-600 hover:bg-red-700 text-white w-10 h-10 rounded-md flex items-center justify-center shadow-lg transition-all duration-300"
      >
        <ArrowUp size={22} />
      </button>
    </>
  );
};

export default Footer;
