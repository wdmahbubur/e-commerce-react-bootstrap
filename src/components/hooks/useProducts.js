const { useState, useEffect } = require("react")

const useProducts = () => {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        fetch('https://fakestoreapi.com/products')
            .then(res => res.json())
            .then(json => setProducts(json))
            .catch(error => {
                console.log(error)
            })
    }, []);
    return [products];
}
export default useProducts;