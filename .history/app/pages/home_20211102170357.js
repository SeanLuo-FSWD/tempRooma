import styled from 'styled-components';
import * as React from 'react';
import {useState} from 'react';
import NavBar from '../comps/NavBar'
import Greeting from '../comps/Greeting';
import Reminder from '../comps/Reminder';
import Completed from '../comps/Completed';
import WeeklyRewards from '../comps/WeeklyRewards';
import CalendarComp from '../comps/CalendarComp';
import Event from '../comps/Event';


const MainCont = styled.div`
  display:flex;
  width:100vw;
  height:100vh;
`
const LeftCont = styled.div`
display:flex;
flex-grow:0.8;
`

const MiddleCont = styled.div`
display:flex;
flex-direction:column;
flex-grow:4;
`


const RightCont = styled.div`
display:flex;
flex-direction:column;
flex-grow:2;
`

export default function Home (){
  // detect button clicked or not
  const [buttonstate1, setButtonState1] = useState(0);
  
  const HandleClick = () =>{
    if (buttonstate1===0){
    setButtonState1(1); }

  }

  return (<MainCont>
    <LeftCont>
    <NavBar/>
    </LeftCont>
    <MiddleCont>
    <Greeting
    width="250px"
    height="100px"
    heading="Hello Ester"
    ps="Here’s your schedule this week"
    visibility="visible"
    />
    <Reminder
    heading="Today"
    visibility="hidden"
    />
    <Completed/>
    
    <WeeklyRewards
    src="/Avatar.png"
    user_name="Ester Howards"
    user_point="0 pts"
    />
    </MiddleCont>
    <RightCont>
      <CalendarComp/>
     <Event
      height="550px"
      day="Oct8"
      week="Thrusday"
      bgcolor="rgba(240,199,137,30%)"
      visibility="visible"
      task_name="Event Name"
      vlcolor="#F0C789"
      name="Name"
      date="5:00-7:00PM"
      onClick={() =>{
        HandleClick();
      }} 
      visibility={buttonstate1 === 1 ? 'hidden' : 'visible'}
      src={buttonstate1 === 1 ? '/add_rotate.png': '/add.png'}
      visibility2={buttonstate1 ===1 ? 'visible': 'hidden'}
     />
    </RightCont>
  </MainCont>
  )
}
