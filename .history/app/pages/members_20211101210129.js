import Head from 'next/head'
import styled from 'styled-components';
import * as React from 'react';
import Tutorial from '../comps/Tutorial';
import MemberProfile from'../comps/MemberProfile';
import NavBar from '../comps/NavBar'

import {useState} from 'react';



const MainCont = styled.div`
  display:flex;
  width:100vw;
  height:100vh;

`
const Heading = styled.div`
width: 100%
height: 100%;

`


const LeftCont = styled.div`
display: flex;
flex-direction: column;
flex:1;
border-right: 1px #D6D6D6 solid;
`
const CardCont = styled.div`
display:flex;
flex-direction: center;
align-items: center;
`

const RightCont = styled.div`
display:flex;
flex:1;


`

export default function Members() {

  
  return (
  
    <MainCont>
        <NavBar/>
        <LeftCont>
        <Heading className="ubuntu">Members</Heading>

        <CardCont>
        <MemberProfile/>
        <MemberProfile/>
        <MemberProfile/>
        <MemberProfile/>
        </CardCont>

        </LeftCont>
        <RightCont>
          
        </RightCont>

      
    </MainCont>
  
  )
}
