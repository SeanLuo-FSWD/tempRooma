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
`

const InfoCont=styled.div`
display:flex;
flex-direction: column;
`
const Name = styled.div`

`
const Phone=styled.div`

`

const ButtonCont=styled.div`
display:flex;
`
const Point = styled.div`

`

const Message = styled.button`

`


const Completed = ({

})=>{
  return<Cont>
    <CardCont>
   <Avatar src="/Avatar2.png"/>
   
   <InfoCont>
   <Name className="opensans">Victoria McCoy</Name>
   <Phone>(603) 555-0123</Phone>

   <ButtonCont>
   <Point>100 pts</Point>
   <Message>Message</Message>
   </ButtonCont>
   </InfoCont>
   </CardCont>
  </Cont>
}
export default Completed