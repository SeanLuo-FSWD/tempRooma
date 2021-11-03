import Head from 'next/head'
import styled from 'styled-components';
import * as React from 'react';
import CommunityPost from '../comps/CommunityPost';
import FilterButton from '../comps/FilterButton';
import NavBar from '../comps/NavBar';
import NavBar2 from '../comps/NavBar2';
import WeeklyRewards from '../comps/WeeklyRewards';
import WeeklyUserCont from '../comps/WeeklyUserCont';



const MainCont = styled.div`
display:flex;
width:100vw;
height:100vh;

`




export default function Tester() {

  
  return (<MainCont>


            <FilterButton></FilterButton>
            <CommunityPost/>
            <NavBar2></NavBar2>
       




        </MainCont>
  
  )
}