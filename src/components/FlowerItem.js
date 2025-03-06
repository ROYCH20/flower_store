import React from 'react';
import {Card, Col} from "react-bootstrap";
import Image from "react-bootstrap/Image";
import {useNavigate} from "react-router-dom"
import {FLOWER_ROUTE} from "../utils/consts";

const FlowerItem = ({flower}) => {
    const history = useNavigate()
    return (
        <Col md={3} className={"mt-3"} onClick={() => history.push(FLOWER_ROUTE + '/' + flower.id)}>
            <Card style={{width: 150, cursor: 'pointer'}} border={"light"}>
                <Image width={150} height={150} src={process.env.REACT_APP_API_URL + flower.img}/>
                <div className="text-black-50 mt-1 d-flex justify-content-between align-items-center">
                    <div></div>
                    <div className="d-flex align-items-center">
                        <div>{flower.rating}</div>
                    </div>
                </div>
                <div>{flower.name}</div>
                
            </Card>
        </Col>
    );
};

export default FlowerItem;
