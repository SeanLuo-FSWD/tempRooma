import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import styled from 'styled-components';
import React from 'react';
import NavBar from '../comps/NavBar';
import Invite from '../comps/Invite';

const Cont = styled.div`
display:flex;


`
const Holder = styled.div `

  display:flex;
  flex-direction: column;
  justify-content:center;
  align-items:center;
  width: 100%;
  height: 100%;
  margin-top: 30px;


`

export default function Home() {
  return (
    <Cont>
        <NavBar></NavBar>

  


        <Holder>
        <Invite></Invite>
        </Holder>
       
       
  
    </Cont>

  )
}
