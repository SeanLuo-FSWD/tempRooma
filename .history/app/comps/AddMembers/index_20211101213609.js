import react from 'react';
import styled from 'styled-components';

const AvatarBox = styled.div`
display:flex;
flex-direction:row;
`

const AddMembers = ({
 
})=>{

return<AvatarBox>
        <Avatar 
        src={src}
        onClick={onClick}
        />
       
      </AvatarBox>
 
}
export default AddMembers