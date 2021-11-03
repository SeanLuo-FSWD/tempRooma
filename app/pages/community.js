import Head from 'next/head'
import Image from 'next/image'
import styled from 'styled-components';
import React from 'react';
import NavBar from '../comps/NavBar';
import AddPost from '../comps/AddPost'
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
  
`
const MainCont = styled.div`
  display:flex;
  margin-left:300px;
  flex-direction:column;
`
export default function Community() {

  /*const [buttonstate1, setButtonState1] = useState(0);

  const HandleClickButtonColor1 = () =>{
    setButtonState1(1);
  } 
  const HandleClickButtonColor2 = () =>{
    setButtonState1(2);
  } 
  const HandleClickButtonColor3 = () =>{
    setButtonState1(3);
  } 
  const HandleClickButtonColor4 = () =>{
    setButtonState1(4);
  } 
  const HandleClickButtonColor5 = () =>{
    setButtonState1(5);
  } */
  /*const [checked, setChecked] = useState(false);
  
  const ToggleBtn = () => {
    const handleChange = nextChecked => {
      setChecked(nextChecked);
  }*/
  return (
    <Cont>
      <GlbNav>
        <NavBar></NavBar>
        </GlbNav>
        <MainCont>
        <AddPost
        src="/Avatar.png"
        />
        </MainCont>
    </Cont>
  )
}