import React from 'react'
import { Container, Row, Col } from 'react-bootstrap';
import GetTitleComponent from "../../components/getTitleComponent"
import "./css.css";

const PublicLayout = (props) => {

    const {
        component: Component,
        route,
        titleComponents,
    } = props;
    
    return (
        <Container fluid>
            <Row className="publicLayout">
                <Col md={12}>
                    <div className="titleComponents">
                        <GetTitleComponent titleComponents={titleComponents} />
                    </div>
                    <div>
                        <Component route={route} />
                    </div>
                </Col>
            </Row>
        </Container>
    )
}


export default PublicLayout;
