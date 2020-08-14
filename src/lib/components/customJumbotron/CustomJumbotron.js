import React from 'react'
import { Button, Jumbotron } from 'react-bootstrap';

const CustomJumbotron = (props) => {
    const { action, actionTitle, header = "No data", body } = props;
    return <Jumbotron>
        <h1>{header}</h1>
        {body && <p>{body}</p>}
        {action && <p><Button variant="primary" onClick={action}>{actionTitle}</Button>
        </p>}
    </Jumbotron>
}

export default CustomJumbotron;
