import React from 'react';
import { View,SafeAreaView,Text,StatusBar} from 'react-native';

import { useNavigation } from '@react-navigation/native';
import Feather from 'react-native-vector-icons/Feather';

import {SafeArea, Perfil, Botoes, Icone, BotaoNome, DivisoriaBotao, Titulo, Nome, Foto} from './styles';

export default function User() {

  const navigation = useNavigation();

 return (
   <SafeArea>
      <StatusBar  barStyle="dark-content" translucent={false}/>

      <Perfil>
        <Foto/>
        <Titulo>Welcome Back,</Titulo>
        <Nome>Nome do Aluno</Nome>
      </Perfil>

      <Botoes onPress={ () => navigation.navigate('Profile') }>
        <Icone>
          <Feather
            name="user"
            size={25}
            color="#331F54"
          />
        </Icone>
        <DivisoriaBotao>
          <BotaoNome>PROFILE</BotaoNome>
        </DivisoriaBotao>
      </Botoes>

      <Botoes onPress={ () => navigation.navigate('Course') }>
        <Icone>
          <Feather
            name="book"
            size={25}
            color="#331F54"
          />
        </Icone>
        <DivisoriaBotao>
          <BotaoNome>COURSE</BotaoNome>
        </DivisoriaBotao>
      </Botoes>

      <Botoes onPress={ () => navigation.navigate('Grade') }>
        <Icone>
          <Feather
            name="bookmark"
            size={25}
            color="#331F54"
          />
        </Icone>
        <DivisoriaBotao>
          <BotaoNome>GRADES</BotaoNome>
        </DivisoriaBotao>
      </Botoes>

      <Botoes onPress={ () => navigation.navigate('Help') }>
      <Icone>
          <Feather
            name="help-circle"
            size={25}
            color="#331F54"
          />
        </Icone>
        <DivisoriaBotao>
          <BotaoNome>HELP</BotaoNome>
        </DivisoriaBotao>
      </Botoes>

      <Botoes onPress={ () => navigation.navigate('Login') }>
      <Icone>
          <Feather
            name="user-x"
            size={25}
            color="#331F54"
          />
        </Icone>
        <DivisoriaBotao>
          <BotaoNome>SIGN OUT</BotaoNome>
        </DivisoriaBotao>
      </Botoes>
      
   </SafeArea>
  );
}