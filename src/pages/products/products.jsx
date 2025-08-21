import "./products.css";
import { useLoaderData, Link, Outlet, useSearchParams } from "react-router";
import { useState } from "react";

function Products() {
  const productsDataJsonFromLoader = useLoaderData();
  const [isClick, setIsClick] = useState(null);
  const [inputValue, setInputValue] = useState();
  // search params
  const [searchParams, setSearchParams] = useSearchParams();

  const title = searchParams.get("title") || "";

  const filtered = productsDataJsonFromLoader.filter((p) =>
    p.name.toLowerCase().includes(title.toLowerCase())
  );

  function handleIsClickStatuts() {
    setIsClick("clicked");
  }

  function handleInputValue(e) {
    let value = e.target.value;
    setInputValue(value);
    if (value) {
      setSearchParams({ title: value });
    } else {
      setSearchParams({});
    }
  }
  return (
    <div className="products-container">
      <div className="products-header">
        <h1 className="products-title">Our Products</h1>
        <div className="input-container">
          <input
            className="inputsearch"
            type="text"
            placeholder="search..."
            value={inputValue}
            onChange={handleInputValue}
          />
        </div>
      </div>
      <div className="products-grid">
        {filtered.map((p) => (
          <div key={p.id} className="product-card">
            <h2 className="product-name">{p.name}</h2>
            <p className="product-category">Category: {p.category}</p>
            <p className="product-price">Price: ${p.price}</p>
            <p
              className={`product-stock ${
                p.inStock ? "in-stock" : "out-of-stock"
              }`}
            >
              {p.inStock ? "In Stock ✅" : "Out of Stock ❌"}
            </p>
            <div className="details">
              <Link to={`productdetails/${p.id}`}>
                <span onClick={handleIsClickStatuts}>details</span>
              </Link>
            </div>
          </div>
        ))}
      </div>
      {isClick == "clicked" && (
        <div className="detailsOverlay">
          <div className="details-content">
            <Outlet context={{ closeDetails: setIsClick }}></Outlet>
          </div>
        </div>
      )}
    </div>
  );
}

export default Products;
