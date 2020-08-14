import React, { useContext } from 'react';
import Jumbotron from "../../lib/components/customJumbotron";
import context from "../../lib/context/currentUser";
import "./payment.css"

const Payment = () => {
    const { history } = useContext(context);
    
    return <Jumbotron
        header="Paid successfully"
        action={() => { history.push("/") }}
        actionTitle="Go to test page"
    />
}

export default Payment;
