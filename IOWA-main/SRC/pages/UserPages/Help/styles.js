import styled from 'styled-components/native';
import { View, SafeAreaView, Text, TouchableOpacity, TextInput } from 'react-native';

export const SafeArea = styled.SafeAreaView`
    background: #D5D3D8;
    flex: 1;    
`;

export const Cabecalho = styled.View`
    height: 172px;
    top: -77px;
    background: #331F54;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.1);
    border-radius: 40px;
`;

export const TextoCabecalho = styled.Text`
    position: absolute;
    top: 47px;
    font-family: Alata;
    font-size: 40px;
    display: flex;
    align-items: center;
    align-self: center;
    color: #EC4266;
`;

export const Titulo = styled.Text`
    margin-left: 24px;
    font-family: Alata;
    font-size: 24px;
    color: #331F54;
`;

export const Entrada = styled.TextInput`
    width: 350px;
    height: 48px;
    background: #FFFFFF;
    align-self: center;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.1);
    border-radius: 40px;
`;

export const MensagemEspaco = styled.TextInput`
    width: 350px;
    height: 280px;
    background: #FFFFFF;
    align-self: center;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.1);
    border-radius: 40px;
`;

export const Send = styled.TouchableOpacity`
    width: 256px;
    height: 69px;
    margin-top: 30px;
    align-self: center;
    justify-content: center;
    background: #EC4266;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.1);
    border-radius: 40px;
`;

export const TextSend = styled.Text`
    font-family: Alata;
    font-size: 36px;
    align-self: center;
    color: #331F54;
`;