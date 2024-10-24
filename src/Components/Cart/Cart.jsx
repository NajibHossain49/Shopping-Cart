const Cart = ({ cartItems, handleRemoveFromCart }) => {
  return (
    <div className="bg-gray-300 p-4">
      <h2 className="text-xl font-bold mb-4">Welcome to My Shop</h2>
      {cartItems.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        <ul>
          {cartItems.map((item, index) => (
            <li key={index} className="text-xl border-b border-gray-300 py-2">
              {item.title} Price ${item.price}
              <button
                className="btn btn-outline btn-error ml-5"
                onClick={() => handleRemoveFromCart(item.id)}
              >
                Delete
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Cart;
