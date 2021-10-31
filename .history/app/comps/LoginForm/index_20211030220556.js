import react from 'react';
import * as React from 'react';
import styled from 'styled-components';



const Main =styled.div`
display: flex;
flex-direction: column;
width: 100%;
height:100%;

`

const Cont = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
margin-top: 100px;

`

const Heading =styled.div`
font-size: 53px;
font-weight: 700;
margin-bottom: 50px;

`
const Input = styled.input`

padding: 20px;
border: #C8C8C8 1px solid;
min-width: 420px;
font-size: 19px;
font-weight: 400;
border-radius: 10px;
margin-bottom: 20px;

`
const Link = styled.button`
background-color: transparent;
border: none;
font-size: 17px;
font-weight: 700;
color:#724FE9;
display:flex;
justify-content: flex-end;
position:relative;
left: 130px;

`
const LoginButton = styled.button`

`

const LoginForm = ({



}) => {
   

    return <Main>
    <Cont>
        <Heading className="ubuntu">Login</Heading>
        <Input className="opensans" type="text" placeholder="Email"  ></Input>
        <Input className="opensans" type="text" placeholder="Password"  ></Input>
        <Link className="opensans">Forgot Password?</Link>

        <LoginButton>Login</LoginButton>
 </Cont>


 
    </Main>
}

export default LoginForm;