import react from 'react';
import styled from 'styled-components';

const Cont = styled.div`
display:flex;
width: 437.61px;
height:165px;
box-shadow: 0px 3.3273186683654785px 39.09598922729492px 0px #0000001C;
border-radius: 21.6276px;
margin-left: 20px;


`

const CardCont = styled.div`
width: 100%;
height: 100%;
display:flex;
justify-content: center;
align-items:center;

`
const Avatar = styled.img`
width: 83px;
height: 83px;
margin-right: 30px;
`

const InfoCont=styled.div`
display:flex;
flex-direction: column;
justify-content: space-evenly;
`
const Name = styled.div`
font-size: 19px;
font-weight: 700;
color: #181135;
`
const Phone=styled.div`
font-size: 14px;
color:#7E7E7E;

`
const Icon = styled.img`

`

const ButtonCont=styled.div`
display:flex;
`
const Point = styled.div`
display:flex;
justify-content: center;
align-items:center;
border-radius: 28.8985px;
width: 89px;
height:32px;
background: linear-gradient(90deg, #9351E8 0%, #6853E9 51.56%, #504EDB 100%);
font-size: 13px;
color:white;
font-weight: 600;


`

const Message = styled.button`
display:flex;
justify-content: center;
align-items:center;
border-radius: 28.8985px;
background-color: transparent;
font-size: 14px;
width: 89px;
height:32px;
border: 1px solid #7751E8;
color: #7751E8;
`


const Completed = ({

})=>{
  return<Cont>
    <CardCont>
   <Avatar src="/Avatar2.png"/>
   
   <InfoCont>
   <Name className="opensans">Victoria McCoy</Name>
   <Phone className="opensans">
     <Icon src="/phone.svg"/>
     (603) 555-0123</Phone>

   <ButtonCont>
   <Point className="opensans">100 pts</Point>
   <Message className="opensans">Message</Message>
   </ButtonCont>
   </InfoCont>
   </CardCont>
  </Cont>
}
export default Completed