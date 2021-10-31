import react from 'react';
import styled from 'styled-components';
import Image from 'next/image'

const Cont = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
`

const Heading =styled.div`
font-size: 53px;

`




const LoginForm = ({



}) => {
    return <Cont>
        <Heading className="ubuntu">Login</Heading>
    </Cont>
}

export default LoginForm;