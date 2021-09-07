import styled from 'styled-components/native';
import { View,SafeAreaView,Text, StatusBar, ScrollView, } from 'react-native';

export const SafeArea = styled.SafeAreaView`
    background: #D5D3D8;
    flex: 1;
`;

export const Texto1 = styled.Text`
    font-family: Alata-Regular;
    position: absolute;
    width: 61px;
    height: 33px;
    left: 25px;
    top: 45px;
    font-style: normal;
    font-weight: normal;
    font-size: 24px;
    line-height: 33px;
    color: #FFFFFF;
`;

export const FundoRoxo = styled.View`
    border-radius: 30px;
    height: 260px;
    top: -48px;
    background: #331F54;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.1);
`;

export const NomeDoAluno = styled.Text`
    font-family: Alata-Regular;
    position: absolute;
    width: 253px;
    height: 50px;
    left: 25px;
    top: 77px;
    font-style: normal;
    font-weight: normal;
    font-size: 36px;
    line-height: 50px;
    color: #FFFFFF;
`;

export const News = styled.View`
    position: absolute;
    align-self: center;
    width: 340px;
    height: 204px;
    top: 135px;
    background: #FFFFFF;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.1);
    border-radius: 40px;
`;

export const Selecao = styled.View`
    width: 14px;
    height: 14px;
    align-self: center;
    border-radius: 50px;
    margin: 4px;
    top: 20px;
    background: #BDBCBC;
`;

export const ContainerSelecao = styled.View`
    flex-direction: row;
    justify-content: center;
    margin: 20px;
`;

export const Book = styled.View`
    width: 366px;
    height: 69px;
    align-self: center;
    margin: 10px;

    background: #FFFFFF;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.1);
    border-radius: 40px;
`;

export const BookContainer = styled.ScrollView `
    top: 5px;
`;

export const Texto2 = styled.Text `
    left: 10px;
    margin: 15px;
    font-family: Alata;
    font-size: 22px;
    color: #331F54;
`;

export const Aviso = styled.View `
    position: absolute;
    width: 80px;
    height: 69px;
    align-self: flex-end;
    background: #331F54;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.1);
    border-radius: 40px;
`;

export const TextoAviso = styled.Text `
    margin: auto;
    font-family: Alata;
    font-size: 24px;
    color: #EC4266;
`;