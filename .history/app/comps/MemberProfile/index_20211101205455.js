import react from 'react';
import styled from 'styled-components';

const Cont = styled.div`
display:flex;
width: 500px;
height:200px;
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
width: 120px;
height: 120px;
margin-right: 40px;
`

const InfoCont=styled.div`
display:flex;
flex-direction: column;
`
const Name = styled.div`
font-size: 27px;
font-weight: 700;
color: #181135;
margin-bottom: 2px;
`
const Phone=styled.div`
font-size: 20px;
color:#7E7E7E;
margin-bottom: 15px;

`
const Icon = styled.img`
margin-right: 10px;
width: 17px;
`

const ButtonCont=styled.div`
display:flex;
margin-top: 5px;
`
const Point = styled.div`
display:flex;
justify-content: center;
align-items:center;
border-radius: 28.8985px;
width: 100px;
height:40px;
background: linear-gradient(90deg, #9351E8 0%, #6853E9 51.56%, #504EDB 100%);
font-size: 16px;
color:white;
font-weight: 600;
margin-right: 10px;


`

const Message = styled.button`
display:flex;
justify-content: center;
align-items:center;
border-radius: 28.8985px;
background-color: transparent;
font-size: 16px;
width: 100px;
height:40px;
border: 1px solid #7751E8;
color: #7751E8;
font-weight: 600;
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