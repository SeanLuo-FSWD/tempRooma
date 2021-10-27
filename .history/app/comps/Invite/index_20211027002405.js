import react from 'react';
import styled from 'styled-components';

const Cont = styled.div`
display: flex;
flex-direction: column;

`
const Head = styled.div`
font-size: 25px;
font-weight: 600;
color: #1E1E1E;
margin:0;

`
const Text = styled.div`
font-size: 20px;

`
const Copy = styled.button`

`
const Img = styled.img`
`
const Invite = ({

}) => {
    return <Cont>
        <Head className="opensans">Invite a member with a link  </Head>
        <Text className="opensans">Invite a member to join your team from another device. </Text>
        <Copy>
        <Img src="/link.svg"></Img>
        Copy Link
        </Copy>
    </Cont>
}

export default Invite;