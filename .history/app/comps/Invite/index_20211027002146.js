import react from 'react';
import styled from 'styled-components';

const Cont = styled.div`
display: flex;
flex-direction: column;

`
const Head = styled.p`
font-size: 25px;

`
const Text = styled.p`

`
const Copy = styled.button`

`
const Img = styled.img`
`
const Invite = ({

}) => {
    return <Cont>
        <Head className="opensans">Invite a member with a link  </Head>
        <Text>Invite a member to join your team from another device. </Text>
        <Copy>
        <Img src="/link.svg"></Img>
        Copy Link
        </Copy>
    </Cont>
}

export default Invite;