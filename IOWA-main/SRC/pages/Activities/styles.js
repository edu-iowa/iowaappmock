import styled from 'styled-components/native';
import React, {useState}from 'react';
import { View,SafeAreaView,Text, StatusBar, ScrollView } from 'react-native';



export const SafeArea = styled.SafeAreaView`
    background: #D5D3D8;
    flex: 1;
`;

export const LevelArt = styled.View`
    position: absolute;
    width: 118px;
    height: 159px;
    background: #EC4266;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.1);
    border-radius: 20px;
`;

export const LevelTitle = styled.Text`
    font-family: Alata;
    font-size: 36px;
    color: #EC4266;
    margin-top: -20px;
`;

export const LevelSubTitle = styled.Text`
    font-family: Alata;
    font-size: 15px;
    color: #ffffff;
    margin-top: -10px;
`;

export const ProgressBar = styled.View`
    width: ${props => props.theme.progress}px;
    height: 15px;
    background: #EC4266;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.1);
    border-radius: 20px;
`;

export const ProgressBarBackGround = styled.View`
    width: 200px;
    height: 15px;
    background: #FFFFFF;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.1);
    border-radius: 20px;
    margin-top: 20px;
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

export const LevelBackGround = styled.TouchableOpacity`
    width: 350px;
    height: 146px;
    margin: 15px;
    align-self: center;
    background: #331F54;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.1);
    border-radius: 40px;
    align-items: flex-start;
    justify-content: center;
    padding-left: 130px;

`;