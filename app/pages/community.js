import Head from 'next/head'
import Image from 'next/image'
import styled from 'styled-components';
import React from 'react';
import NavBar2 from '../comps/NavBar2';
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
  
  const [checked, setChecked] = useState(0);
  const [buttonstate5, setButtonState5] = useState(0);
  const HandleToggleClick = () =>{
    if (checked === 0){
    setChecked(1);
  }else{
    setChecked(0);
  }
  }
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
  
  const GlobalNavClick = () =>{
    if (buttonstate5===0){
    setButtonState5(1);
  }else{
    setButtonState5(0);
  }
  }
  

  return (
    <Cont>
      <GlbNav>
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
        </GlbNav>
        <MainCont>
        <AddPost
        src="/Avatar.png"
        onToggleClick={() =>{
          HandleToggleClick();
        }}
        visibility={checked === 1 ? 'visible' : 'hidden'}
        />
        </MainCont>
    </Cont>
  )
}