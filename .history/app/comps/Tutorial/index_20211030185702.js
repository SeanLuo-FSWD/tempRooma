import react from 'react';
import styled from 'styled-components';
import Image from 'next/image'

const Cont = styled.div`
display: flex;
flex-direction: column;
`
const LogoCont = styled.img`
width: 100px;
margin: 20px;

`
const Wrap = styled.div`
display: flex;
width: 100%;
height: 100%;
justify-content: center;
align-items:center;
`
const Animation = styled.img`
width: 500px;

`


const Tutorial = ({


}) => {
    return <Cont>
        <LogoCont src="/Mainlogo.svg"/>
        <Wrap>
        <Animation src="/login-animation.svg"/>
        </Wrap>
    </Cont>
}

export default Tutorial;