import react from 'react';
import * as React from 'react';
import styled from 'styled-components';
import { AppRegistry } from 'react-native';
import { Provider as PaperProvider } from 'react-native-paper';
import { Provider as StoreProvider } from 'react-redux';
import { TextInput } from 'react-native-paper';

const Cont = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
`

const Heading =styled.div`
font-size: 53px;
font-weight: 700;

`
const Input = styled.input`

`



const LoginForm = ({



}) => {
    const [text, setText] = React.useState('');

    return <Cont>
        <Heading className="ubuntu">Login</Heading>
        
    </Cont>
}

export default LoginForm;