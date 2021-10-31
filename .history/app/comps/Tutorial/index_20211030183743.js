import react from 'react';
import styled from 'styled-components';
import Image from 'next/image'
import MainLogo from '../../public/Mainlogo.svg'

const Cont = styled.div`
display: flex;
flex-direction: column;
`
const LogoCont = styled.div`
`


const Tutorial = ({


}) => {
    return <Cont>
        <LogoCont>
       <MainLogo/>
       </LogoCont>
    </Cont>
}

export default Tutorial;