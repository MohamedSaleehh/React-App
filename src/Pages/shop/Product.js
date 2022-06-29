import React from 'react'
import { useEffect, useState } from 'react'
import { Card } from 'react-bootstrap'
import { useParams } from "react-router-dom";

const Product = () => {
    const urlParms = useParams();

    useEffect(() => {
        fetchProduct()
    }, [])

    const [products, setProducts] = useState()
    const fetchProduct = () => {
        fetch(`https://fakestoreapi.com/products/${urlParms.id}`)
            .then(res => res.json())
            .then(json => setProducts(json))
    }
    return (
        <div className='d-flex justify-content-center'>
            <Card style={{ width: '25rem' }} >
                <Card.Img variant="top" src={products.image} className="h-50" />
                <Card.Body>
                    <Card.Title>{products.title}</Card.Title>
                    <Card.Text>
                        {products.description}
                    </Card.Text>
                </Card.Body>
            </Card>
        </div>
    )
}

export default Product