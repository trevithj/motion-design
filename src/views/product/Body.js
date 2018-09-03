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

const Input = styled.textarea`
    border: none;
    width: calc(100% - 4px);
`;

const Del = styled.div`
    display: inline-block;
    padding: 0 5px 0 5px;
    background-color: silver;
    border: solid thin silver;
    cursor: pointer 
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

const makeRows = (rows, getDeleteHandler) => rows.map(
    row => (
        <Row key={row.id}>
            {makeCells(row.id, getCellData(row))}
            <Del onClick={getDeleteHandler(row.id)}>X</Del>
        </Row>
    )
);

const makeCells = (id, cells) => cells.map(
    (cell, i) => (
        <Col key={uuid()} width={widths[i]}>
            <Input name={`${id}:${headings[i].toLowerCase()}`}
                type="text" defaultValue={cell} />
        </Col>
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
    const getDeleteHandler = id => () => {
        props.handleDelete({id});
    }
    const curtains = props.products.curtains || [];
    return (
        <Container>
            <form onChange={props.handleChange}>
                <Table>
                    <Caption>Curtains:</Caption>
                    {makeHeadings(headings)}
                    {makeRows(curtains, getDeleteHandler)}
                </Table>
            </form>
        </Container>

    );
};

export default Body;
