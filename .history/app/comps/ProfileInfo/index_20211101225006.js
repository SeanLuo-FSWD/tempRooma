import react from 'react';
import styled from 'styled-components';

const Cont = styled.div`
display:flex;
width: 120px;
height: 150px;
background: #6C4CE90F;
border-radius: 13px;
flex-direction: column;
justify-content: center;
align-items:center;

`
const Head = styled.div`
font-size: 25px;
color: #7751E8;
font-weight: 700;
margin-bottom: 10px;
`

const Subhead = styled.div`
font-size:15px;
color: #8975C8;

`


const ProfileInfo= ({


})=>{
  return<Cont>
    <Head className="opensans">25</Head>
    <Subhead className="opensans">Age</Subhead>
  </Cont>
}
export default ProfileInfo