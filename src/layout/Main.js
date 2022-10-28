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
            <Header></Header>
            <Container className='my-5 pt-5'>
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
            </Container>
            <Footer></Footer>
        </div>
    );
};

export default Main;