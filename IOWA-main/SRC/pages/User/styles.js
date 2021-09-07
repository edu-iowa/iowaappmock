import styled from 'styled-components/native';
import { View,SafeAreaView,Text, StatusBar, ScrollView, TouchableOpacity } from 'react-native';

export const SafeArea = styled.SafeAreaView`
    background: #D5D3D8;
    flex: 1;
`;

export const Titulo = styled.Text`
    left: 40%;
    margin-top: 30px;
    font-family: Alata;
    font-size: 15px;
    color: #FFFFFF;
`;

export const Nome = styled.Text`
    left: 40%;
    margin-top: 10px;
    font-family: Alata;
    font-size: 25px;
    color: #FFFFFF;
`;

export const Foto = styled.View`
    position: absolute;
    width: 116px;
    height: 116px;
    margin-left: 15px;
    margin-top: 30px;
    background: #EC4266;
    border: 2px solid #FFFFFF;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.1);
    border-radius: 60px;
`;

export const Perfil = styled.View`
    width: 350px;
    height: 180px;
    align-self: center;
    background: #331F54;
    margin-top: 55px;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.1);
    border-radius: 40px;
    margin-bottom: 15px;
`;

export const Botoes = styled.TouchableOpacity`
    width: 350px;
    height: 60px;
    margin-top: 15px;
    align-self: center;
    background: #FFFFFF;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.1);
    border-radius: 40px;
`;

export const Icone = styled.Text`
    position: absolute;
    align-self: flex-start;
    font-family: Alata;
    font-size: 24px;
    color: #331F54;
    padding-top: 15px;
    padding-left: 30px;
`;

export const BotaoNome = styled.Text`
    font-family: Alata;
    font-size: 24px;
    color: #331F54;
    padding-top: 10px;
`;

export const DivisoriaBotao = styled.View`
    flex-direction: row;
    justify-content: space-around;
    
`;