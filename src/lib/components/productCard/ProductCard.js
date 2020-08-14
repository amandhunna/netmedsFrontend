import React, { useContext } from 'react'
import { Button, Col, Card, Image } from "react-bootstrap";
import currentUserContext from "../../context/currentUser";
import "./css.css";

const ProductCard = (props) => {
    const { colSize = 4,
        item,
        title,
        primaryBtnText,
        dangerBtnText,
        variant,
        btnType
    } = props;
    const {
        deleted,
        description,
        images,
        productName,
        shopId,
        variants,
        _id,
    } = item;

    const currentUser = useContext(currentUserContext);

    let buttons

    switch (btnType) {
        case "singleBtn":
            buttons = (<div className="w-100">
                <Button
                    className="w-100"
                    variant={variant || "primary"}
                    onClick={() => { }}>
                    {primaryBtnText || dangerBtnText || "Add to cart"}</Button>
            </div>)
            break;

        case "dangerPrimary":
            buttons = (<div className="deleteEditBtn">
                <Button
                    variant="danger"
                    onClick={() => { }}>
                    {dangerBtnText || "Delete"}
                </Button>
                <Button
                    variant="primary"
                    onClick={() => {
                        currentUser.history.push(`/products/${item._id}`)
                    }}>
                    {primaryBtnText || "Edit"}</Button>
            </div>)
            break;
        default: buttons = "";
            break;
    }

    return (
        <Col md={colSize} className="my-3">
            <Card>
                <Card.Header className="d-flex w-100">{productName || title}</Card.Header>
                <Card.Body>
                    {/*  <Card.Title>Product title</Card.Title> */}
                    <Card.Text className="d-flex justify-content-center">
                        <Image src={images[0]} rounded className="productImage w-100" />
                        <div className="ml-2">
                            {variants.map(({ price, type, inStock }) => <div className='d-flex flex-column'>
                                {price && <span>Price: {price}</span>}
                                {type && <span>Type: {type}</span>}
                                {inStock && <span>In Stock: {inStock}</span>}
                            </div>)}
                            {description && <span>Description:{description}</span>}
                        </div>
                    </Card.Text>
                    {buttons}
                </Card.Body>
            </Card>
        </Col>)
}

export default ProductCard;
