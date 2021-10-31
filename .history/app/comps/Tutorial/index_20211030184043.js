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
        <LogoCont>
       <Image src="/Mainlogo.svg" width={138} height={40}/>
       </LogoCont>
    </Cont>
}

export default Tutorial;