import React from 'react';
import styled from 'styled-components';

export const Select = styled.select`
    width: 90%;
`;

const makeOption = row => (
    <option key={row.id} value={row.id}>
        {row.name}
    </option>
);

export const getOptions = rows => rows.map(makeOption);

