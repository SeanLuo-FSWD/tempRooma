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
margin-bottom: 15px;

`
const Text = styled.div`
font-size: 20px;
color: #666666;
font-weight: 400;

`
const Copy = styled.button`
display: flex;
max-width: 200px;
justify-content: center;
align-items: center;
`
const Img = styled.img`
margin-right: 10px;
`
const ButtonTxt = styled.div`
font-size: 23px;
`
const Invite = ({

}) => {
    return <Cont>
        <Head className="opensans">Invite a member with a link  </Head>
        <Text className="opensans">Invite a member to join your team from another device. </Text>
        <Copy>
        <Img src="/link.svg"></Img>
        <ButtonTxt>Copy Link</ButtonTxt>
        </Copy>
    </Cont>
}

export default Invite;