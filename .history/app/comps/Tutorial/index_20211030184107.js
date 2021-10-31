import react from 'react';
import styled from 'styled-components';
import Image from 'next/image'

const Cont = styled.div`
display: flex;
flex-direction: column;
`
const LogoCont = styled.img`
`


const Tutorial = ({


}) => {
    return <Cont>
        <LogoCont src="/Mainlogo.svg"></LogoCont>
    </Cont>
}

export default Tutorial;