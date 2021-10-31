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
margin-top: 120px;


`

const Heading =styled.div`
font-size: 53px;
font-weight: 700;
margin-bottom: 50px;

`

//Email & Password
const Label = styled.label`
display:flex;
flex-direction: column;
width: 50%;
font-size: 20px;
font-weight: 500;
color: #181135;

`
const Input = styled.input`

padding: 20px;
border: #C8C8C8 1px solid;
width: 100%;
font-size: 19px;
font-weight: 400;
border-radius: 10px;
margin-bottom: ${props=>props.marginbottom};
margin-top: 10px;

`

//Forgot password?
const Link = styled.button`
background-color: transparent;
border: none;
font-size: 16px;
font-weight: 700;
color:#724FE9;
display:flex;
justify-content: flex-end;
width: 50%;
margin-bottom: 30px;

`

//login button
const LoginButton = styled.button`
width: 50%;
padding:25px;
border-radius: 10px;
border:none;
background-color: #724FE9;
color: white;
font-size: 20px;
font-weight: 700;
`

// OR divider
const Divider = styled.div`
display:flex;
width: 50%;
`
const Line = styled.hr`
border: 0.01 em solid #878787;
width: 45%;

`
const Or =styled.div`
margin-left: 20px;
margin-right: 20px;
color: #878787;
`


const LoginForm = ({
marginbottom1="25px",
marginbottom2="10px"


}) => {
   

    return <Main>
    <Cont>
        <Heading className="ubuntu">Login</Heading>
        {/* user input */}
        <Label className="opensans">
            Email
        <Input marginbottom={marginbottom1} className="opensans" type="text" placeholder="Email"  ></Input>
        </Label>
        <Label className="opensans">
            Password
        <Input marginbottom={marginbottom2} className="opensans" type="password" placeholder="Password"  ></Input>
        </Label>
        <Link className="opensans">Forgot Password?</Link>

        {/* Buttons */}
        <LoginButton className="opensans">Login</LoginButton>

        <Divider>
            
            <Line/> <Or className="opensans">OR</Or> <Line/> 
        </Divider>


 </Cont>


 
    </Main>
}

export default LoginForm;