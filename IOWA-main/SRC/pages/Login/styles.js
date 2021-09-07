import styled from 'styled-components/native';
import { View, SafeAreaView, Text, TextInput, TouchableOpacity } from 'react-native';


export const SafeArea= styled.SafeAreaView`
    flex: 1;
    background-color: #331F54;
`;

export const Logo = styled.View`
    align-self: center;
    margin-top: 30px;
    margin-bottom: 70px;
`;

export const Imagen = styled.Image`
    width: 220px;
    height: 120px;
`;

export const Div01 = styled.View`
    align-items: center;    
    justify-content: center;
    padding-right: 15% ;
    width: 75%;
    height: 69px;
    border-top-right-radius: 40px;
    border-bottom-right-radius: 40px;
`;

export const Div02 = styled.View`
    align-items: center;    
    justify-content: center;   
    width: 25%;
    height: 69px;
    border-top-left-radius: 40px;
    border-bottom-left-radius: 40px;
`;

export const DivEntrada = styled.View`
    justify-content: space-around;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    width: 366px;
    height: 69px;
    align-self: center;
    margin: 10px;
    background: #FFFFFF;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.1);
    border-radius: 40px;
`;

export const Botao = styled.TouchableOpacity`
`;

export const IconeEntrada = styled.View`
    position: absolute;
    left: 40px;
`;

export const TextoBotao = styled.Text`
    margin-top: 20px;
    margin-right: 20px;
    align-self: flex-end;
    font-family: Alata;
    font-size: 18px;
    color: #B2A0DE;
`;

export const Botao2 = styled.TouchableOpacity`
    margin-top: 120px;
    width: 366px;
    height: 69px;
    align-self: center;
    background: #EC4266;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.1);
    border-radius: 40px;
`;

export const TextoBotao2 = styled.Text`
    font-family: Alata;
    font-size: 36px;
    margin-top: 5px;
    text-align: center;
    color: #331F54;
`;

export const TextoBotao3 = styled.Text`
    margin-top: 20px;
    align-self: center;
    font-family: Alata;
    font-size: 18px;
    color: #B2A0DE;
`;