import { useState } from "react";
import { Menu, X, ShoppingCart, Search } from "lucide-react";
import { NavLink } from "react-router-dom";

export default function Navbar_Component() {
  const [isOpen, setIsOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [cart, setCart] = useState([{ id: 1, name: "Chair", quantity: 2 }]); // sample cart

  const menuItems = ["Home", "Shop", "Services", "Contact"];

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-white border-b border-gray-200">
      <div className="max-w-screen-3xl flex items-center justify-between mx-auto px-4 py-3">
        {/* Left Side (Logo) */}
        <a href="#" className="flex items-center space-x-2">
          <img
            src="https://flowbite.com/docs/images/logo.svg"
            alt="Logo"
            className="h-8"
          />
          <span className="text-xl font-semibold text-gray-900">MyApp</span>
        </a>

        {/* Center Menu */}
        <div className="hidden md:flex flex-1 justify-center ">
          <ul className="flex space-x-16 font-medium text-[1.13rem] text-gray-700">
            {menuItems.map((item) => (
              <li key={item}>
                <NavLink 
                  to={`${item.toLowerCase()}`}
                  className="hover:text-blue-600"
                >
                  {item}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>

        {/* Right Side */}
        <div className="hidden md:flex items-center space-x-6 absolute right-10">
          {/* 🔍 Search */}
          {isSearchOpen ? (
            <div className="relative">
              <input
                type="text"
                placeholder="Search..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="px-3 py-1 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 w-40"
                autoFocus
              />
              <button
                className="absolute right-2 top-2 text-gray-500"
                onClick={() => {
                  setIsSearchOpen(false);
                  setSearchQuery("");
                }}
              >
                ✕
              </button>
            </div>
          ) : (
            <button
              className="p-2 rounded-full bg-gray-100 hover:bg-gray-200"
              onClick={() => setIsSearchOpen(true)}
            >
              <Search className="w-5 h-5 text-gray-600" />
            </button>
          )}

          {/* 🛒 Cart */}
          <button className="relative p-2 rounded-full bg-gray-100 hover:bg-gray-200">
            <ShoppingCart className="w-5 h-5 text-gray-600" />
            {cart.length > 0 && (
              <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                {cart.reduce((total, item) => total + item.quantity, 0)}
              </span>
            )}
          </button>

          {/* Login */}
          <button className="text-gray-700 hover:text-blue-600 font-medium">
            Login / Signup
          </button>
          <img
            src="https://i.pravatar.cc/40"
            alt="Profile Avatar"
            className="w-10 h-10 rounded-full border border-gray-300"
          />
        </div>

        {/* Mobile Hamburger */}
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="p-2 rounded-lg text-gray-600 hover:bg-gray-100"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-gray-200">
          <ul className="flex flex-col items-start space-y-2 px-6 py-4 font-medium text-gray-700">
            {menuItems.map((item) => (
              <li key={item} className="w-full">
                <a
                  href={`#${item.toLowerCase()}`}
                  className="block py-2 hover:text-blue-600"
                  onClick={() => setIsOpen(false)}
                >
                  {item}
                </a>
              </li>
            ))}

            {/* 🔍 Search */}
            <li className="">
              {isSearchOpen ? (
                <div className="relative w-full">
                  <input
                    type="text"
                    placeholder="Search..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full px-3 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    autoFocus
                  />
                  <button
                    className="absolute right-2 top-2 text-gray-500"
                    onClick={() => {
                      setIsSearchOpen(false);
                      setSearchQuery("");
                    }}
                  >
                    ✕
                  </button>
                </div>
              ) : (
                <button
                  className="w-full text-left py-2 flex items-center space-x-2 hover:text-blue-600"
                  onClick={() => setIsSearchOpen(true)}
                >
                  <Search className="w-5 h-5 text-gray-600" />
                  <span>Search</span>
                </button>
              )}
            </li>

            {/* 🛒 Cart */}
            <li className="w-full">
              <button className="w-full flex items-center space-x-2 py-2 relative hover:text-blue-600">
                <ShoppingCart className="w-5 h-5 text-gray-600" />
                <span>Cart</span>
                {cart.length > 0 && (
                  <span className="ml-2 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                    {cart.reduce((total, item) => total + item.quantity, 0)}
                  </span>
                )}
              </button>
            </li>

            {/* Login */}
            <li className="w-full">
              <button className="w-full text-left py-2 text-gray-700 hover:text-blue-600">
                Login / Signup
              </button>
            </li>
            <li>
              <img
                src="https://i.pravatar.cc/40"
                alt="Profile Avatar"
                className="w-10 h-10 rounded-full border border-gray-300"
              />
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
}
