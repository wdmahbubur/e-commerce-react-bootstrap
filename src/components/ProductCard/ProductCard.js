import React from 'react';
import { Card, Col, Button } from 'react-bootstrap';

const ProductCard = (props) => {
    const { title, price, description, image } = props.product;
    return (
        <Col>
            <Card className="h-100">
                <Card.Img variant="top" src={image} height="150" className="w-50 mx-auto" />
                <Card.Body>
                    <Card.Title>{title}</Card.Title>
                    <h5>Price: {price}</h5>
                    <Card.Text>
                        {description.slice(0, 100)}
                    </Card.Text>
                </Card.Body>
                <Card.Footer>
                    <Button className="btn btn-success">Add To Cart</Button>
                </Card.Footer>
            </Card>
        </Col>
    );
};

export default ProductCard;