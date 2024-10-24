const SingleProduct = ({ product, handleAddToCart, cartItems }) => {
  const {
    image,
    category,
    description,
    price,
    title,
    id,
    rating: { rate, count },
  } = product;

  return (
    <div>
      {/* Grid Layout for Cards */}
      <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-4">
        <div className="card bg-base-100 shadow-xl">
          <figure className="p-4">
            <img src={image} alt={title} className="w-full h-auto rounded-lg" />
          </figure>
          <div className="card-body p-4">
            <h2 className="card-title text-lg sm:text-xl">
              {title}
              <span className="ml-2 text-sm text-gray-500">(${price})</span>
              <div className="badge badge-secondary ml-2">NEW</div>
            </h2>
            <p className="mt-2 text-sm sm:text-base">{description}</p>
            <p className="font-bold mt-1">Category: {category}</p>
            <div className="flex items-center mt-2">
              <div className="rating rating-sm">
                <input
                  type="radio"
                  className="mask mask-star-2 bg-yellow-400"
                />
                <input
                  type="radio"
                  className="mask mask-star-2 bg-yellow-400"
                />
                <input
                  type="radio"
                  className="mask mask-star-2 bg-yellow-400"
                />
                <input
                  type="radio"
                  className="mask mask-star-2 bg-yellow-400"
                  checked
                />
                <input type="radio" className="mask mask-star-2 bg-gray-400" />
              </div>
              <span className="ml-2 text-sm">({count} reviews)</span>
              <span className="ml-4 text-sm">Rating: {rate} / 5</span>
            </div>
            <div className="card-actions justify-between mt-4">
              <div className="justify-center">
                <button
                  className="btn btn-success"
                  onClick={() => {
                    handleAddToCart(product);
                  }}
                >
                  Add To Cart
                </button>
              </div>
              <div className="flex space-x-2">
                <div className="badge badge-outline">Fashion</div>
                <div className="badge badge-outline">Products</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      
    </div>
  );
};

export default SingleProduct;
