import react from 'react';
import * as React from 'react';
import styled from 'styled-components';
import Input from '@mui/material/Input';


const Cont = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;

`

const Heading =styled.div`
font-size: 53px;
font-weight: 700;
margin-bottom: 50px;

`


// const Input = styled.input`

// padding: 20px;
// border: #C8C8C8 1px solid;
// min-width: 400px;
// font-size: 19px;
// font-weight: 400;
// border-radius: 10px;

// `



const LoginForm = ({



}) => {
   

    return <Cont>
        <Heading className="ubuntu">Login</Heading>
       
        <Input className="opensans" type="text" placeholder="Email"  ></Input>
       
    </Cont>
}

export default LoginForm;