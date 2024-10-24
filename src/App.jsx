import { useState } from "react";
import AllProducts from "./Components/AllProducts/AllProducts";
import Navbar from "./Components/Navbar/Navbar";
import Cart from "./Components/Cart/Cart";
// import SingleProduct from "./Components/SingleProduct/SingleProduct";

const App = () => {
  const [cartItems, setCartItems] = useState([]);

  // State to track cart visibility
  const [isCartOpen, setIsCartOpen] = useState(false);

  // State to track Balance
  const [Balance, setBalance] = useState(500);

  const handleIncreaseBalance = (price) => {
    setBalance(Balance - price);
  };

  const handleDecreaseBalance = (productId) => {
    const product = cartItems.find((item) => item.id == productId);
    setBalance(Balance + product.price);
  };

  // Function to toggle cart visibility
  const toggleCart = () => {
    setIsCartOpen((prev) => !prev);
  };

  // Remove item from cart
  const handleRemoveFromCart = (productId) => {
    handleDecreaseBalance(productId);
    const updatedCart = cartItems.filter((item) => item.id !== productId);
    setCartItems(updatedCart);
  };

  const handleAddToCart = (product) => {
    // Use filter to check for duplicates
    const existingItems = cartItems.filter((item) => item.id === product.id);

    if (existingItems.length === 0) {
      setCartItems([...cartItems, product]);
      handleIncreaseBalance(product.price);
      console.log(`Added to cart: ${product.title}`);
    } else {
      // console.log(`Product already in cart: ${product.name}`);
      alert(`Product already in cart: ${product.title}`);
    }

    console.log(cartItems);
  };

  return (
    <div>
      <Navbar
        cartItems={cartItems}
        toggleCart={toggleCart}
        Balance={Balance}
      ></Navbar>

      {/* AllProducts */}
      <AllProducts handleAddToCart={handleAddToCart}></AllProducts>

      {/* Render Cart in another section */}
      <main>
        {/* Display Cart based on the isCartOpen state */}
        {isCartOpen && (
          <section>
            <Cart
              cartItems={cartItems}
              handleRemoveFromCart={handleRemoveFromCart}
            ></Cart>
          </section>
        )}
      </main>
    </div>
  );
};

export default App;
