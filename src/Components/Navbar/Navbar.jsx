import { RiShoppingCartLine, RiUser3Line } from "react-icons/ri";

const Navbar = ({ cartItems, toggleCart , Balance }) => {
  return (
    <nav className="bg-gray-800 text-white px-4 py-2">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <div className="text-xl font-bold">
          <a href="#" className="text-white">
            MyShop
          </a>
        </div>

        {/* Links for larger screens */}
        <div className="hidden md:flex space-x-6">
          <a href="#" className="hover:text-gray-400">
            Home
          </a>
          <a href="#" className="hover:text-gray-400">
            Shop
          </a>
          <a href="#" className="hover:text-gray-400">
            About
          </a>
          <a href="#" className="hover:text-gray-400">
            Contact
          </a>
        </div>

        {/* Icons */}
        <div className="flex items-center space-x-4 relative">
          {/* Shopping Cart Icon with Badge */}
          <button
            onClick={toggleCart} // Use the toggleCart function passed from App
            className="hover:text-gray-400 relative focus:outline-none"
          >
            <RiShoppingCartLine className="text-2xl" />
            {/* Badge for showing the count */}
            <div className="absolute -top-2 -right-2 bg-red-500 text-white text-xs w-4 h-4 rounded-full flex items-center justify-center">
              {cartItems.length}
            </div>
          </button>

          {/* Balance Section */}
          <p className="hidden sm:block p-2">Balance: $ {Balance}</p>

          {/* User Icon */}
          <a href="#" className="hover:text-gray-400">
            <RiUser3Line className="text-2xl" />
          </a>
        </div>

        {/* Mobile menu button */}
        <div className="md:hidden">
          <button className="text-white focus:outline-none">
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
