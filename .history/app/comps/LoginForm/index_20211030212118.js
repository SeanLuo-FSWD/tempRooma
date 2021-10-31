import react from 'react';
import * as React from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

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
        
       
        <Button variant="contained">Hello World</Button>;
       
    </Cont>
}

export default LoginForm;