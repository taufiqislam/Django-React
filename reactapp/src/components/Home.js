import React,{useContext} from 'react';

import {Button, Col, Container, Row} from "react-bootstrap";
import {Link} from "react-router-dom";
import DataContext from './Context/DataContext';

function Home(props) {
    const {setShowHome} = useContext(DataContext);

    return (
        <Container fluid="true">
            <Container fluid="true" className="backImg text-center">
                <div className="overlay">
                    <div className="content">
                        <h4 className='title'>WELCOME TO OUR OBE-COURSE CURRICULUM SYSTEM</h4>
                        <Link to='/mission' onClick={() => setShowHome(true)}>
                            <Button className='tabMission btn-secondary'>GO</Button>
                        </Link>
                    </div>
                </div>
            </Container>
        </Container>
    );
}

export default Home;