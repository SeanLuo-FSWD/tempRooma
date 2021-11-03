
import Image from 'next/image'
import styled from 'styled-components';

const CtrlCont = styled.div`
display:flex;
flex-direction:column;
justify-content:center;
align-items:center;
width:130px;
height:100vh;
box-shadow: 0px 4.0133771896362305px 11.036787033081055px 0px #00000014;

`
const Wrap = styled.div`
display:flex;
width: 100%;
height:100%;

`
const Logo = styled.img`
width:50px;
height:50px;
margin-top:-150px;
margin-bottom:100px;
`
const IconCont = styled.div`
display: flex;
flex-direction: column;
justify-content:center;
align-items:center;
width: 184px;
height: 478px;
margin: 50px;
`
const Icon = styled.img`
width: 30px;
height: 30px;
margin-bottom: 70px;
`

const SetIcon = styled.img`
width: 30px;
height: 30px;
margin-top:165px;
margin-bottom: -165px;

`
const NavBar = ({

}) => {
    return <CtrlCont>
                <Logo src="/Logo.png"/>
                <IconCont>
                    <Icon src="/Home_Icon.svg"/>
                    <Icon src="/Task_Icon.svg"/>
                    <Icon src="/Chat_Icon.svg"/>
                    <Icon src="/Members_Icon.svg"/>
                    <Icon src="/search.svg"/>
                </IconCont>
                <SetIcon src="/Settings_Icon.svg"></SetIcon>
            </CtrlCont>   
}
export default NavBar;
