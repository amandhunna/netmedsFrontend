import React, { useState, useEffect, useContext } from 'react';
import { Table, Button } from 'react-bootstrap';
import Jumbotron from "../../lib/components/customJumbotron";
import Spinner from "../../lib/components/growSpinner";
import context from "../../lib/context/currentUser";
import "./cart.css"
import dummy from "./dummy";

const Cart = () => {
    const { history } = useContext(context);
    const [orders, setOrders] = useState([]);
    const [loading, setLoading] = useState(true);
    const [totalPrice, setTotalPrice] = useState(0);
    useEffect(() => {
        setOrders(dummy);
        setLoading(false);
    }, []);

    useEffect(() => {
        const total = orders.reduce((acc, curr) => curr.minPrice + acc, 0)
        setTotalPrice(total);
    }, [orders]);

    if (loading) {
        return <Spinner text="Loading..." />
    }


    if (!orders.length) {
        return <Jumbotron
            header="No orders in the cart"
            action={() => { history.push("/") }}
            actionTitle="Go to test page"
        />
    }

    const removeItem = index => {
        const newData = JSON.parse(JSON.stringify(orders));
        newData.splice(index, 1);
        setOrders(newData);
    }

    return <div className="cart-page"><Table striped bordered hover>
        <thead>
            <tr>
                <th>#</th>
                <th>Test Name</th>
                <th>Price</th>
                <th>#</th>
            </tr>
        </thead>
        <tbody>
            {orders.map((order, index) => (<tr>
                <td>{index + 1}</td>
                <td>{order.itemName}</td>
                <td>{order.minPrice}</td>
                <td> <Button
                    variant="outline-danger"
                    onClick={() => removeItem(index)}>
                    Remove
                    </Button></td>
            </tr>))}
        </tbody>
    </Table>
        <div className=" border p-3 w-100 d-flex justify-content-around"><span>Total</span><strong>&#8377; {totalPrice}</strong></div></div>
}

export default Cart;
