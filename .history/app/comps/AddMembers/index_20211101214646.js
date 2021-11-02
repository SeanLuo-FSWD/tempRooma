import react from 'react';
import styled from 'styled-components';

const Cont = styled.div`
display:flex;
flex-direction: column;
justify-content: center;
align-items:center;
margin-top: 60px;
`

const Head = styled.div`
font-size: 29px;
font-weight: 500;
color: #3E3D3D;
margin-bottom: 10px;
`

const Subhead = styled.div`
font-size: 25px;
font-weight: 400;
color: #7E7E7E;
margin-bottom: 20px;
`

const Button = styled.button`
background-color: #714FE9;
border: none;
color: white;
padding: 15px 20px 15px 20px;
font-size: 16px;
font-weight: 600;
border-radius: 4px;
`

const AddMembers = ({
 
})=>{

return<Cont>
        <Head className="ubuntu">Add Members</Head>
        <Subhead className="opensans">Start by adding members</Subhead>
        <Button className="opensans">Go to Community</Button>
       
      </Cont>
 
}
export default AddMembers