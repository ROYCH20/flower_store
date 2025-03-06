import React, {useContext} from 'react';
import {observer} from "mobx-react-lite";
import {Context} from "../index";
import {Row} from "react-bootstrap";
import FlowerItem from "./FlowerItem";

const FlowerList = observer(() => {
    const {flower} = useContext(Context)

    return (
        <Row className="d-flex">
            {flower.flowers.map(flower =>
                <FlowerItem key={flower.id} flower={flower}/>
            )}
        </Row>
    );
});

export default FlowerList;
