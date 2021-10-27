import Image from 'next/image'
import styled from 'styled-components';

const CtrlCont = styled.div`
display: flex;
flex-direction: column;
justify-content:center;
align-items:center;
width: 184px;
height: 1024px;
border-right-style: solid;
border-right-color: #B1B1B1 ;
border-width: 1px;
`
const Logo = styled.img`
width: 60px;
height: 60px;
margin-top:-150px;
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
width: 50px;
height: 50px;
margin: 15px;
`
const NavBar = ({

}) => {
    return <CtrlCont>
                <Logo src="../../public/Rooma_Logo.svg"></Logo>
                <IconCont>
                    <Icon src="../../public/Home_Icon.svg"></Icon>
                    <Icon src="../../public/Task_Icon.svg"></Icon>
                    <Icon src="../../public/Chat_Icon.svg"></Icon>
                    <Icon src="../../public/Members_Icon.svg"></Icon>
                    <Icon src="../../public/Community_Icon.svg"></Icon>
                </IconCont>
                <Icon rc="../../public/Settings_Icon.svg"></Icon>
            </CtrlCont>   
}

export default NavBar;
