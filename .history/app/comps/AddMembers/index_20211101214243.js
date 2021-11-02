import react from 'react';
import styled from 'styled-components';

const Cont = styled.div`
display:flex;
flex-direction: column;
justify-content: center;
align-items:center;
`

const Head = styled.div`
font-size: 29px;
font-weight: 500;
color: #3E3D3D;
`

const Subhead = styled.div`
font-size: 25px;
font-weight: 400;
color: #7E7E7E;
`

const Button = styled.button`
background-color: #714FE9;
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