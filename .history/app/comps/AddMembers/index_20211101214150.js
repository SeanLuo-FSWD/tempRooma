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
font-size: 23px;
`

const Button = styled.button`

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