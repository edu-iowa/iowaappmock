import React from 'react';
import { View,Text, SafeAreaView, StatusBar } from 'react-native';

import { useNavigation } from '@react-navigation/native';

import { SafeArea, Cabecalho, TextoCabecalho, Titulo, Entrada, MensagemEspaco, Send, TextSend } from './styles';

export default function Help() {

  const navigation = useNavigation();

 return (
   <SafeArea>
       <StatusBar  barStyle="light-content" translucent={false}/>

       <Cabecalho/>
       <TextoCabecalho>Send Help!</TextoCabecalho>

       <Titulo>Name*</Titulo>
       <Entrada></Entrada>

       <Titulo>Email*</Titulo>
       <Entrada></Entrada>

       <Titulo>Mensage*</Titulo>
       <MensagemEspaco></MensagemEspaco>

       <Send onPress={ () => navigation.goBack() } >
         <TextSend>Enviar</TextSend>
       </Send>  

   </SafeArea>
  );
}