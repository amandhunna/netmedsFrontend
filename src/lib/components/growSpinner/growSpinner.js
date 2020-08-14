import React from 'react'
import { Spinner } from 'react-bootstrap';
import "./spinner.css";

export default function GrowSpinner(props) {
    const { text } = props;
    return (<span className="loader">
        <Spinner className="mr-2" animation="grow" size="sm" />{' '}{text}
    </span>);
}
