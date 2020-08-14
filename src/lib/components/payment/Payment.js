import React, { useContext } from 'react';
import { Button } from 'react-bootstrap';
import context from "../../context/currentUser";
import helper from "../../helper/base";
import config from "../../../config";
import "./css.css";

export default function Payment(props) {
    const { history } = useContext(context);

    const pay = async () => {
        try {
            const url = `${config.url.cart}`
            const orderData = {
                userId: JSON.parse(localStorage.getItem("netUser")).id,
                paid: true,
            };
            const requestData = {
                url,
                data: orderData,
                timeout: 10000,
                method: 'PUT',
            }
            const response = await helper.requestAPI(requestData);
            history.push('/payment')
            console.log("added to cart", response)
        } catch (err) {
            console.log("add to cart failed with error: ", err);
        }
    }

    return (
        <Button
            className="cart-btn"
            primary
            onClick={() => { pay() }} >
            Pay
        </Button>
    )
}
