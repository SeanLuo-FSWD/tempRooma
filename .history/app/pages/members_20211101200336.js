import Head from 'next/head'
import styled from 'styled-components';
import * as React from 'react';
import Tutorial from '../comps/Tutorial';
import MemberProfile from'../comps/MemberProfile';

import {useState} from 'react';



const MainCont = styled.div`
  display:flex;
  width:100vw;
  height:100vh;

`



const LeftCont = styled.div`
display: flex;
flex-direction: column;
flex:1;
justify-content:center;
border-right: 1px #D6D6D6 solid;
`

const RightCont = styled.div`
display:flex;
flex:1;


`

export default function Members() {

  
  return (
  
    <MainCont>
        
        <LeftCont>
        
        </LeftCont>
        <RightCont>
          
        </RightCont>

      
    </MainCont>
  
  )
}
