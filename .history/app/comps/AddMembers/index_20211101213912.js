import react from 'react';
import styled from 'styled-components';

const Cont = styled.div`
display:flex;
flex-direction: column;
justify-content: center;
align-items:center;
`

const Head = styled.div`

`

const Subhead = styled.div`

`

const Button = styled.button`

`

const AddMembers = ({
 
})=>{

return<Cont>
        <Head>Add Members</Head>
        <Subhead>Start by adding members</Subhead>
        <Button>Go to Community</Button>
       
      </Cont>
 
}
export default AddMembers