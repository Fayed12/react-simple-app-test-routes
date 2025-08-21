async function productsLoader() {
    const res =await fetch("http://localhost:5000/products");

    if (!res.ok) {
        throw new Error("something went wrong");
    }
    
    return res.json();
}

export default productsLoader;