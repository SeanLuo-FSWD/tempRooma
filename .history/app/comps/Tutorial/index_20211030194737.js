import react from 'react';
import styled from 'styled-components';
import Image from 'next/image'

const Cont = styled.div`
display: flex;
flex-direction: column;
`
const Wrap = styled.div`
display: flex;
flex-direction: column;
width: 100%;
height: 100%;
justify-content: center;
align-items:center;

`
const Animation = styled.img`
width: ${props=>props.aniwidth};

`

const Heading = styled.div`
font-size: 40px;
margin-top: 70px;
font-weight: 700;
color: #181135;
`
const Span = styled.span`
color: #724FE9;

`
const Para = styled.div`
font-size: 20px;
max-width: 350px;
color: #7E7E7E;
margin-top: 20px;
text-align: center;
`

const ButtonCont = styled.div`
display:${props=>props.buttondisplay};
width: 120px;
justify-content: space-evenly;
position:relative;
top: 150px;

`

const Button = styled.button`
width: 12px;
height: 12px;
border-radius:50%;
border: none;
background-color: ${props=>props.buttoncolor};

`
const Tutorial = ({
animation="/login-animation.svg",
head="Welcome",
para="Start distributing chores with your roommates and have fun!",
aniwidth="550px",
buttoncolor="#724FE9",
buttondisplay="flex"


}) => {
    return <Cont>
        <Wrap>
        <Animation aniwidth={aniwidth} src={animation}/>
        <Heading className="ubuntu"><Span>{head}</Span> Back</Heading>
        <Para className="opensans">{para}</Para>

        <ButtonCont buttondisplay={buttondisplay}>
            <Button buttoncolor={buttoncolor}/>
            <Button buttoncolor={buttoncolor}/>
            <Button buttoncolor={buttoncolor}/>
            <Button buttoncolor={buttoncolor}/> 

        </ButtonCont>
        </Wrap>
    </Cont>
}

export default Tutorial;