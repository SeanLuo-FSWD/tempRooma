import react from 'react';
import styled from 'styled-components';
import PointCont from '../PointCont';

const Cont = styled.div`
display:flex;
flex-direction:row;
width:310px;
height:125px;
background-color:white;
box-shadow: 0 4px 17px 0 rgba(0, 0, 0, 0.2);
border-radius:11px;
`

const Avatar = styled.img`
width:80px;
height:80px;
margin-top:20px;
margin-left:20px;
`
const UserInfoBox = styled.div`
display:flex;
flex-direction:column;
margin-left:20px;
`
const Heading = styled.h3`
font-size: 21px;
font-weight: 700;
color: #181135;
margin:0;
margin-top:20px;
margin-bottom:20px;
`


const WeeklyUserCont = ({
src="/Avatar.png",
user_name="User Name"
})=>{
  return<Cont>
    <Avatar src={src}/>
    <UserInfoBox>
      <Heading className="opensans">{user_name}</Heading>
      <PointCont
      width="100px"
      height="35px"
      user_point="0 pts"
      />
    </UserInfoBox>
  </Cont>
}
export default WeeklyUserCont