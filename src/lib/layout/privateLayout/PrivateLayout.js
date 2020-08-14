import React, { useState, useEffect } from 'react'
import Header from "../../components/header";
import CurrentUserContext from "../../context/currentUser";
import { Container, Row, Col } from 'react-bootstrap';
import GetTitleComponent from "../../components/getTitleComponent"
import "./pri.css";
import GrowSpinner from '../../components/growSpinner/growSpinner';


const PrivateLayout = (props) => {
    const [search, setSearch] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const searchBarProps = {
        search, setSearch
    }

    const {
        component: Component,
        route,
        titleComponents,
    } = props;

    useEffect(() => {
        // can verify token here
        const isAllowed = localStorage.getItem('isauth');
        if (!isAllowed) {
            props.route.history.push("/login");
        }
        setIsLoading(false);
    }, [])

    if (isLoading) {
        return <GrowSpinner />
    }
    const context = {
        ...props.route
    }

    return (
        <CurrentUserContext.Provider value={context} >
            <Container fluid className="b-container">
                <Row>
                    <Header />
                </Row>
                <Row>
                    <Col>
                        <div className="titleComponents">
                            <GetTitleComponent titleComponents={titleComponents} {...searchBarProps} />
                        </div>
                        <div className={"scroll-able"}>
                            <Component route={route} {...searchBarProps} />
                        </div>
                    </Col>
                </Row>
            </Container>
        </CurrentUserContext.Provider>
    )
}


export default PrivateLayout;
