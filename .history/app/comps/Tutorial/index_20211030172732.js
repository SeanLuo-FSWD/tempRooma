import react from 'react';
import styled from 'styled-components';

const Cont = styled.div`
display: flex;
flex-direction: column;
`


const Tutorial = ({


}) => {
    return <Cont>
        <Head className="opensans">{head}</Head>
        <Text className="opensans">{text} </Text>
        <Copy position={position}>
        <Img src="/link.svg"></Img>
        <ButtonTxt className="opensans">Copy Link</ButtonTxt>
        </Copy>
    </Cont>
}

export default Tutorial;