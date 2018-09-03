import React from 'react';
import styled from 'styled-components';
import { Select, getOptions } from '../Select';

const Container = styled.div`
    margin: 0 2em 0 2em;
`;

const Title = styled.div`
    font-size: 20pt;
`;

const Row = styled.div`
    margin: 0 2em 0 2em;
    display: table-row;
`;

const Col = styled.div`
    padding: 0 5px 0 5px;
    width: 25%;
    display: table-cell;
    vertical-align: bottom;
`;


const Header = props => {
    const {title, customer, handleChange} = props;
    return (
        <Container>
            <Title>{title}</Title>
            <form onChange={handleChange}>
                <Row>
                    <Col>
                        <label>Customer</label>
                        <input type="text" name="name" defaultValue={customer.name}/>
                    </Col>
                    <Col>
                        <label>Suburb</label>
                        <Select name="suburb" defaultValue={customer.suburb}>{getOptions(props.suburbs)}</Select>
                    </Col>
                    <Col>
                        <label>Material</label>
                        <Select name="material" value={customer.material}>{getOptions(props.materials)}</Select>
                    </Col>
                    <Col>
                        <label>Colour</label>
                        <Select name="colour" value={customer.colour}>{getOptions(props.colours)}</Select>
                    </Col>
                </Row>
            </form>
        </Container>
    );
};

export default Header;
