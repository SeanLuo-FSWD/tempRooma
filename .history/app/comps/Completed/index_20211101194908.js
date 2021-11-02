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
box-shadow: 0px 4.353448867797852px 51.15302276611328px 0px #0000001C;

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