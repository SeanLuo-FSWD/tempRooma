import react from 'react';
import styled from 'styled-components';
import Image from 'next/image'

const Cont = styled.div`
display: flex;
flex-direction: column;
`
const Wrap = styled.div`
display: flex;
flex-direction: column;
width: 100%;
height: 100%;
justify-content: center;
align-items:center;

`
const Animation = styled.img`
width: 550px;
margin-left:auto;
margin-right:auto;

`

const Heading = styled.div`
font-size: 40px;
margin-top: 55px;
font-weight: 700;
font-color: #3E3D3D;
`
const Span = styled.span`
font-color: #724FE9;

`

const Tutorial = ({


}) => {
    return <Cont>
        <Wrap>
        <Animation src="/login-animation.svg"/>
        <Heading className="ubuntu"><Span>Welcome</Span> Back</Heading>
        </Wrap>
    </Cont>
}

export default Tutorial;