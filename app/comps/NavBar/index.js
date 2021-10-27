
import Image from 'next/image'
import styled from 'styled-components';

const CtrlCont = styled.div`
display:flex;
flex-direction:column;
justify-content:center;
align-items:center;
width:184px;
height:1024px;
border-right-style:solid;
border-right-color:#B1B1B1;
border-width:1px;
`
const Logo = styled.img`
width:50px;
height:50px;
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
width: 30px;
height: 30px;
margin: 20px;
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
                    <Icon src="/Community_Icon.svg"/>
                </IconCont>
                <Icon src="/Settings_Icon.svg"></Icon>
            </CtrlCont>   
}
export default NavBar;
