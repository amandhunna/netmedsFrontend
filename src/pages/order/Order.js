import React, { useState, useEffect } from 'react';
import { Button, Row, Col, Card } from "react-bootstrap";
import CustomJumbotron from "../../lib/components/customJumbotron";
import Spinner from "../../lib/components/growSpinner";
import config from "../../config";
import helper from "../../lib/helper/base";
import "./order.css";

// individual card jsx data
const getItems = test => {
    return (<div className="d-flex flex-column">
        <div className="d-flex flex-column">
            <span>Test name:<strong> {test.itemName}</strong></span>
            <span>Popular:<strong> {test.popular ? "High" : "Low"}</strong></span>
            <span>Category:<strong> {test.category}</strong></span>
            <span>Price:<strong> &#8377;{test.minPrice}</strong></span>
        </div>
    </div >
    )
}

// individual card
const GetCard = (props) => {
    const { cardNumber, cardData, cartItems } = props;

    const addToCart = async () => {
        try {
            const { items: cartItem } = cartItems[0] || {};

            const orderData = {
                userId: JSON.parse(localStorage.getItem("netUser")).id,
                paid: false,
            };

            if (!cartItem) {
                orderData.items = JSON.stringify({
                    0: cardData
                })
            } else {
                const parseCartItem = JSON.parse(cartItem)
                const length = Object.keys(parseCartItem).length;
                parseCartItem[length] = cardData;
                orderData.items = JSON.stringify(parseCartItem)
            }

            const url = `${config.url.cart}`
            //    JSON.parse(orderData.items)

            const requestData = {
                url,
                data: orderData,
                timeout: 10000,
                method: 'PUT',
            }
            const response = await helper.requestAPI(requestData);
            console.log("added to cart", response)
        } catch (err) {
            console.log("add to cart failed with error: ", err);
        }
    }

    return (<Card>
        <Card.Header className="d-flex justify-content-center">#Test: {cardNumber}</Card.Header>
        <Card.Body>
            <Card.Text>
                {getItems(cardData)}
            </Card.Text>
            <div className="w-100 d-flex justify-content-center  border-top pt-2">
                <Button className="mx-2" variant="primary" onClick={() => {
                    addToCart(cardData)
                }}
                >Add to cart</Button>
            </div>
        </Card.Body>
    </Card>);
}

// all cards data
const GetCards = props => {
    const { search } = props;
    const [cards, setCards] = useState([]);
    const [cartItems, setCartItems] = useState(null);
    const [isLoading, setIsLoading] = useState(true);

    const getOrders = async () => {
        const orderURL = `${config.url.order}`
        const url = search ? `${orderURL}?itemname=${search}` : orderURL

        const requestData = {
            url,
            timeout: 10000,
            method: 'GET',
        }
        const response = await helper.requestAPI(requestData);
        setCards(response);
        setIsLoading(false);
    }

    const getCartItems = async () => {
        const userId = JSON.parse(localStorage.getItem("netUser")).id;
        const url = `${config.url.cart}/${userId}`

        const requestData = {
            url,
            timeout: 10000,
            method: 'GET',
        }
        const response = await helper.requestAPI(requestData);
        setCartItems(response);
    }

    useEffect(() => {
        getCartItems();
    }, [search]);


    useEffect(() => {
        getOrders();
    }, []);

    if (isLoading) return <Spinner />;

    if (!cards.length) return <CustomJumbotron header="No data" body="Currently have no tests" />

    let count = 0;
    const newProps = {
        ...props,
        cardNumber: ++count,
        cartItems
    }
    const cardsDOM = <Row>
        {cards.map((cardData) => <Col className="mt-3" sm={12} md={4} lg={3} ><GetCard {...newProps} cardData={cardData} /></Col>)}
    </Row>

    return cardsDOM;

}

// main component
const Order = (props) => {

    return (
        <Col className="container d-flex flex-column justify-content-center  align-self-center">
            <GetCards  {...props} />
        </Col >

    )
}


export default Order;
