import Head from 'next/head'
import Image from 'next/image'
import styled from 'styled-components';
import React from 'react';
import Tutorial from '../comps/Tutorial'
import {useState} from 'react';

const MainCont = styled.div`
  display:flex;
  width:100vw;
  height:100vh;
  background-color: red;
`

const LeftCont = styled.div`
display: flex;
width: 50%;
background-color: #F6F6FE;
`

export default function Login() {

  
  return (
    <MainCont>
        <LeftCont></LeftCont>

      
    </MainCont>
  )
}
