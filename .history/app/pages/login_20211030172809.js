import Head from 'next/head'
import Image from 'next/image'
import styled from 'styled-components';
import React from 'react';
import Tutorial from '../comps/Tutorial'
import {useState} from 'react';

const Cont = styled.div`
  padding:5px;
  display:flex;
  width:100%;
  height:100%;
  flex-direction:row;
`
const GlbNav = styled.div`
  display:flex;
  flex-direction:column;
  flex-grow:1;
`
const SetNav = styled.div`
  display:flex;
  flex-direction:column;
  flex-grow:3;
`
const Holder = styled.div `
  display:flex;
  flex-direction:column;
  margin-top:30px;
  flex-grow:4;
`

export default function Login() {

  
  return (
    <Cont>
      
    </Cont>
  )
}
