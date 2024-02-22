import React from 'react';
import {Button, Col, Container, Row} from "react-bootstrap";
import {Link} from "react-router-dom";

function Home(props) {
    return (
        <Container fluid="true">
            <Container fluid="true" className="backImg text-center">
                <div className="overlay">
                    <div className="content">
                        <h4 className='title'>WELCOME TO OUR OBE-COURSE CURRICULUM SYSTEM</h4>
                        <Link to='/mission'>
                            <Button className='tabMission btn-secondary'>GO</Button>
                        </Link>
                    </div>
                </div>
            </Container>
        </Container>
    );
}

export default Home;