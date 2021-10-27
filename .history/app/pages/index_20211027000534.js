import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import styled from 'styled-components';
import NavBar from '../comps/NavBar';
import Invite from '../comps/Invite';

const Holder = styled.div `
.container1 {
  display:flex;
  flex-direction: column;
  justify-content:center;
  align-items:center;
  margin-bottom: 100px;
}

`
export default function Home() {
  return (
    <div className={styles.container}>
        <NavBar></NavBar>
        <Holder>
        <Invite></Invite>
        </Holder>
       
       
  
    </div>
  )
}
