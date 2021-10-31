import Head from 'next/head'
import styled from 'styled-components';
import * as React from 'react';
import Tutorial from '../comps/Tutorial';
import LoginForm from '../comps/LoginForm'
import {useState} from 'react';
import { Provider as PaperProvider } from 'react-native-paper';
import { AppRegistry } from 'react-native';

const MainCont = styled.div`
  display:flex;
  width:100vw;
  height:100vh;

`



const LeftCont = styled.div`
display: flex;
flex-direction: column;
flex:1;
background-color: #F6F6FE;
justify-content:center;
`
const LogoCont = styled.img`
width: 100px;
margin: 20px;
position:absolute;
top: 10px;

`
const RightCont = styled.div`
display:flex;
flex:1;
justify-content:center;

`

export default function Login() {

  
  return (
    <PaperProvider>
    <MainCont>
        
        <LeftCont>
        <LogoCont src="/Mainlogo.svg"/>
             <Tutorial/>
        </LeftCont>
        <RightCont>
            <LoginForm/>
        </RightCont>

      
    </MainCont>
    </PaperProvider>
  )
}
