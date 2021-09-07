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
    width: 120px;
    height: 60px;
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
    margin-top: 50px;
    margin-bottom: 10px;
    justify-content: space-around;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    width: 366px;
    height: 69px;
    align-self: center;
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
    margin-top: 10px;
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
    margin-top: 100px;
    align-self: center;
    font-family: Alata;
    font-size: 18px;
    color: #B2A0DE;
`;