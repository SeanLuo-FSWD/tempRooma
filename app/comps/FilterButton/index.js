import Head from 'next/head'
import styled from 'styled-components';
import * as React from 'react';


const Button = styled.button`
width: 87px;
height: 24px;
border-radius:18px;
border-color: #7751E8;
background-color: white;
font-size:10px;
color:#7751E8;
`


const FilterButton = ({
    title="Resturants",
}) => {
    return <Button className="opensans">{title}</Button>
}

export default FilterButton;