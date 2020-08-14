import React, { useContext } from 'react';
import { Button } from 'react-bootstrap';
import context from "../../context/currentUser";
import "./css.css";

export default function Cart(props) {
    const { history } = useContext(context);
    return (
        <Button
         className="cart-btn"
            primary
            onClick={() => { history.push('/cart') }} >
            Cart
            </Button>
    )
}
