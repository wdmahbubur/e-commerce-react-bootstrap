import React from 'react';
import { Col, Row } from 'react-bootstrap';
import LineChartCom from '../Chart/LineChartCom';
import PieChartCom from '../Chart/PieChartCom';

const Dashboard = () => {
    return (
        <div className="mt-3 w-100">
            <Row className="gy-3">
                <Col md={7}>
                    <h5>Sales Chart</h5>
                    <LineChartCom></LineChartCom>
                </Col>
                <Col md={5}>
                    <h5>Channels</h5>
                    <PieChartCom></PieChartCom>
                </Col>
            </Row>
        </div>
    );
};

export default Dashboard;