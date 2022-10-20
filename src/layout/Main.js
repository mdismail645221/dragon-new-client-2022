import React from 'react';
import { Container, Row, Col} from 'react-bootstrap';
import Header from '../shared/Header';
import {Outlet}  from 'react-router-dom'
import LeftSideNav from '../shared/LeftSideNav';
import RightSideaside from '../shared/RightSideaside';
import Footer from '../shared/Footer';

const Main = () => {
    return (
        <div>
            <Container>
            <Header></Header>
                    <Row>
                    <Col lg='2'>
                        <LeftSideNav></LeftSideNav>
                    </Col>
                    <Col lg='7'>
                        <Outlet></Outlet>
                    </Col>
                    <Col lg='3'>
                        <RightSideaside></RightSideaside>
                    </Col>
                    </Row>
                <Footer></Footer>
            </Container>
        </div>
    );
};

export default Main;