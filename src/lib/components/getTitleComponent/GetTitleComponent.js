import React from 'react'
import Search from "../search";
import Cart from "../cart";
import Payment from "../payment";
import "./css.css";

const GetTitleComponent = (props) => {
    const { titleComponents = {},
        search, setSearch } = props;

    const { component, title } = titleComponents;
    const componentStack = [<h5>{title}</h5>];
    component.forEach(element => {
        if (element == "search")
            componentStack.push(<Search search={search} setSearch={setSearch} />)
        if (element === "cart") componentStack.push(<Cart />)
        if (element === "payment") componentStack.push(<Payment />)

    });

    return componentStack;
}

export default GetTitleComponent;
