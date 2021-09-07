import styled from 'styled-components/native';
import { View,SafeAreaView,Text, StatusBar, ScrollView, } from 'react-native';

export const SafeArea = styled.SafeAreaView`
    background: #D5D3D8;
    flex: 1;
`;

export const Container1 = styled.View`
    flex-direction: row;
    align-self: center;
`;

export const FundoRoxo = styled.View`
    border-radius: 30px;
    height: 240px;
    top: -48px;
    background: #331F54;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.1);
    margin-bottom: 40px;
`;

export const Conquistas = styled.View`
    width: 350px;
    height: 204px;
    align-self: center;
    margin-top: 105px;
    margin-bottom: 15px;
    background: #FFFFFF;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.1);
    border-radius: 40px;
`;

export const Atividade = styled.View`
    width: 130px;
    height: 152px;
    margin: 15px;
    background: #EC4266;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.1);
    border-radius: 40px;
    align-items: center;
    justify-content: center;

`;