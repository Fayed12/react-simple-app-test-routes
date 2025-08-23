import {
  useParams,
  useOutletContext,
  useRouteLoaderData,
  useNavigate,
} from "react-router";

function ProductDetails() {
  const { id } = useParams();
  const { closeDetails } = useOutletContext();
  const dataFromParent = useRouteLoaderData("rootproducts");
  const navigate = useNavigate();

  const product = dataFromParent.products.find((p) => p.id == id);

  if (!product) {
    return <h2>Product not found ❌</h2>;
  }

  const handleClose = () => {
    closeDetails(null);
    navigate("/products");
  };
  return (
    <div className="container">
      <div className="products-details">
        <div key={product.id} className="product-card">
          <h2 className="product-name">{product.name}</h2>
          <p className="product-category">Category: {product.category}</p>
          <p className="product-price">Price: ${product.price}</p>
          <p className="product-desc">
            description: <span>{product.description}</span>
          </p>
          <p
            className={`product-stock ${
              product.inStock ? "in-stock" : "out-of-stock"
            }`}
          >
            {product.inStock ? "In Stock ✅" : "Out of Stock ❌"}
          </p>
          <div className="colse-button">
            <button onClick={handleClose}>close</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductDetails;
