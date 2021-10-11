import React from 'react';
import { Row } from 'react-bootstrap';
import useProducts from '../hooks/useProducts';
import ProductCard from '../ProductCard/ProductCard';

const Home = () => {
    const [products] = useProducts();
    return (
        <div>
            <Row xs={1} md={4} className="g-4">
                {
                    products.map(product => <ProductCard key={product.id} product={product}></ProductCard>)
                }
            </Row>
        </div>
    );
};

export default Home;