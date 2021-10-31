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
const Animation = styled.img`
width: 500px;
`


const Tutorial = ({


}) => {
    return <Cont>
        <LogoCont src="/Mainlogo.svg"/>
        <Animation src="/login-animation.svg"/>
    </Cont>
}

export default Tutorial;