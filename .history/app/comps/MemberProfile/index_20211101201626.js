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



const Completed = ({

})=>{
  return<Cont>
    <CardCont>
   <Avatar src="/Avatar2.png"/>
   
   <InfoCont>
   <Name>Victoria McCoy</Name>
   </InfoCont>
   </CardCont>
  </Cont>
}
export default Completed