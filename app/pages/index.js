import styled from 'styled-components';
import * as React from 'react';
import {useState} from 'react';
import NavBar2 from '../comps/NavBar2'
import Greeting from '../comps/Greeting';
import Reminder from '../comps/Reminder';
import Completed from '../comps/Completed';
import WeeklyRewards from '../comps/WeeklyRewards';
import CalendarComp from '../comps/CalendarComp';
import Event from '../comps/Event';



const MainCont = styled.div`
  display:flex;
  flex-direction:row;
  width:100vw;
  height:100vh;
`
const LeftCont = styled.div`
display:flex;
flex-grow:1;
`

const MiddleCont = styled.div`
display:flex;
flex-direction:column;
flex-grow:8;
`


const RightCont = styled.div`
display:flex;
flex-direction:column;
flex-grow:1;
`



export default function Home (){

  //NavBar onClick function
  // const [showNav2, setShowNav2] = useState(false)
  // const [showNav, setShowNav] = useState(true)



  // detect button clicked or not
  const [buttonstate1, setButtonState1] = useState(0);
  const [buttonstate2, setButtonState2] = useState(0);
  const [buttonstate3, setButtonState3] = useState(0);
  const [buttonstate4, setButtonState4] = useState(0);
  const [buttonstate5, setButtonState5] = useState(0);
  const EventHandleClick = () =>{
    if (buttonstate1===0){
    setButtonState1(1);
  }else{
    setButtonState1(0);
  }
  }
  const ReminderHandleClick = () =>{
    if (buttonstate2===0){
    setButtonState2(1);
  }else{
    setButtonState2(0);
  }
  }
  const CompleteHandleClick = () =>{
    if (buttonstate3===0){
    setButtonState3(1);
  }else{
    setButtonState3(0);
  }
  }
  const CheckedButtonClick = () =>{
      if (buttonstate4===0){
      setButtonState4(1);
    }else{
      setButtonState4(0);
    }
    }
  const GlobalNavClick = () =>{
      if (buttonstate5===0){
      setButtonState5(1);
    }else{
      setButtonState5(0);
    }
    }
  return (<MainCont>

    <LeftCont>
    <NavBar2
    onContClick={()=>{
      GlobalNavClick();
    }}
    width={buttonstate5 === 1 ? '140px' : '288px'}
    display={buttonstate5 === 1 ? 'none' : 'flex'}
    displayLogo={buttonstate5 === 1 ? 'flex' : 'none'}
    displayHome={buttonstate5 === 1 ? 'none' : 'block'}
    displayTask={buttonstate5 === 1 ? 'none' : 'block'}
    displayChat={buttonstate5 === 1 ? 'none' : 'block'}
    displayMember={buttonstate5 === 1 ? 'none' : 'block'}
    displayCommunity={buttonstate5 === 1 ? 'none' : 'block'}
    displaySetting={buttonstate5 === 1 ? 'none' : 'block'}
    alignItems={buttonstate5 === 1 ? 'center':'unset'}
    justifyContent={buttonstate5 ===1 ? 'center':'space-even'}
    />
    </LeftCont>

    <MiddleCont>
    <Greeting
    width="250px"
    height="100px"
    // heading should be connected with the users' name
    heading="Ester!"
    ps="Here’s your schedule this week"
    visibility="visible"
    />
    
    <Reminder
    // heading need to change when the user click the calendar and change the date for reminder
    heading="Today"
    // def_visibility will be visible when the user didn't schedule anything on the date. if there is a reminder, it should be hidden
    def_visibility="hidden"
    // checked is for completed radio button. defalt set as checked, but once the user want to bring the reminder back to active reminder, the button should be unclicked and the reminder cont will be deleted in completed reminder and bring it to the active reminder comp
    checked="defaultChecked"
    onMoreClick={() =>{
      ReminderHandleClick();
    }} 
    height={buttonstate2 === 1 ? '760px' : '360px'}
    top={buttonstate2 === 1 ? '820px' : '425px'}
    title_more={buttonstate2 === 1 ? 'close ' : 'more '}
    //complete_display={buttonstate2 === 1 ? 'none' : 'block'}
    rewards_display={buttonstate2 === 1 ? 'none' : 'block'}

    onCompleteClick={()=>{
      CompleteHandleClick();
    }}
    title_complete={buttonstate3 === 1 ? 'hide ' : 'complete '}
    reminder_display={buttonstate3 === 1 ? 'none': 'block'}
    reminder_completed_display={buttonstate3 ===1 ? 'block': 'none'}
    //complete_width={buttonstate3 === 1 ? '685px' : '235px'}
    //complete_height={buttonstate3 === 1 ? '360px' : '47px'}
    //complete_borderRadius={buttonstate3 === 1 ? '22px' : '8px'}
    //more_display={buttonstate3 === 1 ? 'none' : 'flex'}
    //more_after_display={buttonstate3 === 1 ? 'flex' : 'none'}

    onChecked_trigger={()=>{
      CompleteAfterHandleClick();
    }}

    />
    </MiddleCont>

    <RightCont>
      <CalendarComp/>
     <Event
      height="550px"
      day="Oct8"
      week="Thrusday"
      bgcolor="rgba(240,199,137,30%)"
      // visibility="visible"
      task_name="Event Name"
      vlcolor="#F0C789"
      name="Name"
      date="5:00-7:00PM"
      onClick={() =>{
        EventHandleClick();
      }} 
      visibility={buttonstate1 === 1 ? 'hidden' : 'visible'}
      src={buttonstate1 === 1 ? '/add_rotate.png': '/add.png'}
      visibility2={buttonstate1 ===1 ? 'visible': 'hidden'}
     />
    </RightCont>
  </MainCont>
  )
}
