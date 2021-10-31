import react from 'react';
import * as React from 'react';
import styled from 'styled-components';


const Cont = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
flex: wrap;
`

const Heading =styled.div`
font-size: 53px;
font-weight: 700;
margin-bottom: 50px;

`
const Input = styled.input`

padding: 25px;
border: #C8C8C8 1px solid;
min-width: 400px;

border-radius: 10px;

`



const LoginForm = ({



}) => {
   

    return <Cont>
        <Heading className="ubuntu">Login</Heading>
        <Input type="text" placeholder="Email"></Input>
        
    </Cont>
}

export default LoginForm;