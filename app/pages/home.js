import styled from 'styled-components';
import * as React from 'react';
import {useState} from 'react';
import NavBar from '../comps/NavBar'
import Greeting from '../comps/Greeting';
import Reminder from '../comps/Reminder';
import Completed from '../comps/Completed';
import WeeklyRewards from '../comps/WeeklyRewards';

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
    <WeeklyRewards/>
    </MiddleCont>
    <RightCont>

    </RightCont>
  </MainCont>
  )
}