import React from 'react';
import { StatusBar, TextInput } from 'react-native';

import { useNavigation } from '@react-navigation/native';
import Feather from 'react-native-vector-icons/Feather';

import {SafeArea, Logo, DivEntrada, Botao, TextoBotao, Botao2, TextoBotao2, TextoBotao3, Imagen, IconeEntrada, Div01, Div02 } from './styles';

export default function Login() {

    const navigation = useNavigation();

 return (
   <SafeArea>
       <StatusBar  barStyle="light-content" translucent={false}/>
       <Logo>
           <Imagen
            source={require('../../assets/Image/logoiowa.png')}
           />
       </Logo>

       <TextoBotao3> Esqueceu a Senha ? </TextoBotao3>

       <DivEntrada>
            <Div02>           
                <Feather
                    name="mail"
                    size={25}
                    color="#331F54"
                />
            </Div02>
        <Div01>
            <TextInput 
                placeholder="Digite seu Email"
                style={{ fontSize: 24 }}/>
            </Div01>
       </DivEntrada>

       <Botao2>
           <TextoBotao2> Enviar </TextoBotao2>
       </Botao2>

       <Botao onPress={ () => navigation.navigate('Login') }>
           <TextoBotao3> VOLTAR </TextoBotao3>
       </Botao>

   </SafeArea>
  );
}