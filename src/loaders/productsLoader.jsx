import data from "../assets/data.json"

async function productsLoader() {
    // useing the json server
    // const res =await fetch("http://localhost:5000/products");

    // if (!res.ok) {
    //     throw new Error("something went wrong");
    // }
    
    // return res.json();
    
    // useing the simple import data
    return data;
}

export default productsLoader;