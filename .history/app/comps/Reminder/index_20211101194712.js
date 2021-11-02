import react from 'react';
import styled from 'styled-components';
import RemindContent from '../RemindContent';

const Cont = styled.div`
display:flex;
margin-top:20px;

`
const CardCont = styled.div`
width:685px;
height:340px;
background-color:white;
box-shadow: 0px 4.014px 47.8px 0px #0000001C;

border-radius:22px;
`
const Heading = styled.h3`
font-size: 25px;
font-weight: 700;
color: #181135;
margin:0;
margin-top:20px;
margin-left:20px;
margin-bottom:20px;
`
const DefMessage = styled.p`
visibility:${props=>props.visibility};
text-align:center;
margin-top:10px;
`

const More = styled.div`
width:685px;
text-align:center;
position:absolute;
top:400px;
color:#7751E8;
`
const Divider = styled.hr`
border-top: 1px solid #E8E8E8;
`
const Icon = styled.img`
`
const Reminder = ({
  heading="Today",
  visibility="visible",
})=>{
return<Cont>
  <CardCont>
  <Heading className="ubuntu">{heading}</Heading>
    <RemindContent
     bgcolor="rgba(240,199,137,30%)"
     visibility="visible"
     task_name="Task Name"
     vlcolor="#F0C789"
     name="Name"
     date="5:00-7:00PM"
    />
    <DefMessage className="opensans" visibility={visibility}>Nothing is scheduled for today.</DefMessage>
    <More><Divider/> More <Icon src="/down_arrow.png"/></More>
  </CardCont>
</Cont>
}
export default Reminder