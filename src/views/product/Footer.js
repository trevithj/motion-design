import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
    margin: 0 2em 0 2em;
`;

const Button = styled.button`
    width: 16%;
    margin-right: 4%;
    height: 2.5em;
`;

const Footer = props => {
    const {doAdd, doSave, doBack} = props;
    return (
        <Container>
            <Button onClick={doBack}>Back</Button>
            <Button onClick={doSave}>Save all changes</Button>
            <Button onClick={doAdd}>Add</Button>
        </Container>
    );
};

export default Footer;
