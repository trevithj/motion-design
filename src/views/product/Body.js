import React from 'react';
import uuid from 'uuid/v1';
import styled from 'styled-components';

const Container = styled.div`
    margin: 2em;
`;

const Table = styled.div`
    width: 100%;
    display: table;
`;

const Caption = styled.div`
    display: table-caption;
    font-weight: bold;
`;

const Row = styled.div`
    display: table-row;
`;

const Col = styled.div`
    border: solid 1px #999;
    padding-left: 2px;
    width: calc(${props => props.width} - 4px);
    display: table-cell;
`;

const ColHead = styled(Col)`
    font-weight: bold;
    background-color: #ddd;
`;

const Input = styled.input`
    border: none;
`;

const headings = 'Room,Length,Width,Pleats,Style,Notes'.split(',');
const widths = '15%,8%,8%,14%,15%,40%'.split(',');

const makeHeadings = (headings) => (
    <Row>
        {headings.map((head, i) => (
            <ColHead key={uuid()} width={widths[i]}>
                {head}
            </ColHead>
        ))}
    </Row>
);

const makeRows = rows => rows.map(
    row => (<Row key={row.id}>{makeCells(getCellData(row))}</Row>)
);

const makeCells = (cells, Cell = Col) => cells.map(
    (cell, i) => (
        <Cell key={uuid()} width={widths[i]}>
            <Input type="text" name={headings[i].toLowerCase()} defaultValue={cell} />
        </Cell>
    )
);

const getCellData = row => {
    return [
        row.room,
        row.length,
        row.width,
        row.pleats,
        row.style,
        row.notes
    ];
}


const Body = props => {
    const curtains = props.products.curtains || [];
    return (
        <Container>
            <Table>
                <Caption>Curtains:</Caption>
                {makeHeadings(headings)}
                {makeRows(curtains)}
            </Table>
        </Container>

    );
};

export default Body;
