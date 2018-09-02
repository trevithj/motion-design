import React from 'react';
import styled from 'styled-components';

const Footer = styled.div`
    width: 100%;
    height: 30px;
    border: solid thin silver;
    position: absolute;
    bottom: 0;
    display: table-row;
`;

const FooterText = styled.div`
    padding-left: 10%;
    width: 80%;
    display: table-cell;
    text-align: center;
`;

const FooterLogo = styled.div`
    width: 10%;
    display: table-cell
    text-align: right;;
`;

const AppFooter = props => (
    <Footer>
        <FooterText>
            {props.version}
        </FooterText>
        <FooterLogo>
            motionDesign
        </FooterLogo>
    </Footer>
);

export default AppFooter;
