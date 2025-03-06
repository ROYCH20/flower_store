import React, {useContext, useEffect} from 'react';
import {Container} from "react-bootstrap";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import TypeBar from "../components/TypeBar";
import BrandBar from "../components/BrandBar";
import FlowerList from "../components/FlowersList";
import {observer} from "mobx-react-lite";
import {Context} from "../index";
import {fetchBrands, fetchFlowers, fetchTypes} from "../http/flowerAPI";
import Pages from "../components/Pages";

const Shop = observer(() => {
    const {flower} = useContext(Context)

    useEffect(() => {
        fetchTypes().then(data => flower.setTypes(data))
        fetchBrands().then(data => flower.setBrands(data))
        fetchFlowers(null, null, 1, 2).then(data => {
            flower.setFlowers(data.rows)
            flower.setTotalCount(data.count)
        })
    }, [])

    useEffect(() => {
        fetchFlowers(flower.selectedType.id, flower.selectedBrand.id, flower.page, 2).then(data => {
            flower.setFlowers(data.rows)
            flower.setTotalCount(data.count)
        })
    }, [flower.page, flower.selectedType, flower.selectedBrand,])

    return (
        <Container>
            <Row className="mt-2">
                <Col md={3}>
                    <TypeBar/>
                </Col>
                <Col md={9}>
                    <BrandBar/>
                    <FlowerList/>
                    <Pages/>
                </Col>
            </Row>
        </Container>
    );
});

export default Shop;
