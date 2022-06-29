import React, { useEffect, useState } from 'react'
import { Card } from 'react-bootstrap'
import { Link } from 'react-router-dom'
const Shop = () => {

    useEffect(() => {
        fetchProduct()
    }, [])

    const fetchProduct = () => {
        fetch('https://fakestoreapi.com/products')
            .then(res => res.json())
            .then(json => setProducts(json))
    }
    const [products, setProducts] = useState([])
    return (
        <>

            {
                products.map((item, i) => {
                    return (
                        <>
                            <div className='d-flex justify-content-center'>
                                <Card style={{ width: '25rem' }} >
                                    <Card.Img variant="top" src={item.image} className="h-50" />
                                    <Card.Body>
                                        <Card.Title>{item.title}</Card.Title>
                                        <Card.Text>
                                            {item.description}
                                        </Card.Text>
                                        <Link to={`/product/${item.id}`} key={i} variant="primary" className='d-flex justify-content-center' >
                                            View
                                        </Link>
                                    </Card.Body>
                                </Card>
                            </div>

                        </>
                    )
                })
            }


        </>
    )
}

export default Shop