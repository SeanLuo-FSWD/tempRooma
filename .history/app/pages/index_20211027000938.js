import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import styled from 'styled-components';
import NavBar from '../comps/NavBar';
import Invite from '../comps/Invite';

const Cont = styled.div`
display:flex;
justify-content: center;

`
const Holder = styled.div `

  display:flex;
  flex-direction: column;
  justify-content:center;
  align-items:center;


`
const NavHolder = styled.div`

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
