import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import styled from 'styled-components';
import NavBar from '../comps/NavBar';
import Invite from '../comps/Invite';

export default function Home() {
  return (
    <div className={styles.container}>
        <NavBar></NavBar>
        <Invite></Invite>
       
  
    </div>
  )
}
