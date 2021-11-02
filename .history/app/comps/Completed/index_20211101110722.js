import react from 'react';
import styled from 'styled-components';

const Cont = styled.div`
display:flex;
margin-top:20px;

`
const CardCont = styled.div`
width:235px;
height:47px;
background-color:white;
box-shadow: 0 4px 17px 0 rgba(0, 0, 0, 0.2);
border-radius:8px;
`
const More = styled.div`
text-align:center;
color:#7751E8;
margin-top:13px;
`
const Icon = styled.img`
`
const Completed = ({

})=>{
  return<Cont>
    <CardCont>
    <More>Completed <Icon src="/down_arrow.png"/></More>
    </CardCont>
  </Cont>
}
export default Completed