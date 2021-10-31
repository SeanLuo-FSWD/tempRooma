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
width: 550px;
margin-left:auto;
margin-right:auto;

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
`

const Button = styled.button`
width: 13px;
height: 15px;
border-radius:10px;

`
const Tutorial = ({


}) => {
    return <Cont>
        <Wrap>
        <Animation src="/login-animation.svg"/>
        <Heading className="ubuntu"><Span>Welcome</Span> Back</Heading>
        <Para className="opensans">Start distributing chores with your roommates and have fun!</Para>

        <ButtonCont>
            <Button/>
        </ButtonCont>
        </Wrap>
    </Cont>
}

export default Tutorial;