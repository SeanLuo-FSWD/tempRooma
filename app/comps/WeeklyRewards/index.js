import react from 'react';
import styled from 'styled-components';
import WeeklyUserCont from '../WeeklyUserCont';

const Cont = styled.div`
display:flex;
flex-direction:column;
margin-top:20px;

`
const Heading = styled.h3`
font-size: 25px;
font-weight: 700;
color: #181135;
margin:0;
margin-top:20px;
margin-bottom:20px;
`
const UserCont = styled.div`
display:flex;
flex-direction:row;
`

const WeeklyRewards = ({

})=>{
  return<Cont>
    <Heading>Weekly Rewards</Heading>
    <UserCont>
    <WeeklyUserCont/>
    </UserCont>
  </Cont>
}
export default WeeklyRewards