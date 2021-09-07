import React, {useState} from 'react';
import { View,SafeAreaView,Text,StatusBar} from 'react-native';

import { useNavigation } from '@react-navigation/native';
import Feather from 'react-native-vector-icons/Feather';

import {SafeArea, Perfil, Botoes, Icone, BotaoNome, DivisoriaBotao, Titulo, Nome, Foto, BotoesSair} from './styles';

export default function Profile() {

    const navigation = useNavigation();

    const Nomes = 'Matheus';
    const Curso = 'English';
    const Level = 'Fast 2B';
    const email = 'matheus@gmail.com';

 return (
   <SafeArea>
      <StatusBar  barStyle="light-content" translucent={false}/>

      <Perfil>
        <Foto/>
        <Titulo>Welcome Back,</Titulo>
        <Nome>Nome do Aluno</Nome>
      </Perfil>

      <Botoes>
        <Icone>
          <Feather
            name="user"
            size={25}
            color="#331F54"
          />
        </Icone>
        <DivisoriaBotao>
          <BotaoNome>{Nomes}</BotaoNome>
        </DivisoriaBotao>
      </Botoes>

      <Botoes>
        <Icone>
          <Feather
            name="book"
            size={25}
            color="#331F54"
          />
        </Icone>
        <DivisoriaBotao>
          <BotaoNome>{Curso}</BotaoNome>
        </DivisoriaBotao>
      </Botoes>

      <Botoes>
        <Icone>
          <Feather
            name="trending-up"
            size={25}
            color="#331F54"
          />
        </Icone>
        <DivisoriaBotao>
          <BotaoNome>{Level}</BotaoNome>
        </DivisoriaBotao>
      </Botoes>

      <Botoes>
      <Icone>
          <Feather
            name="mail"
            size={25}
            color="#331F54"
          />
        </Icone>
        <DivisoriaBotao>
          <BotaoNome>{email}</BotaoNome>
        </DivisoriaBotao>
      </Botoes>

      <BotoesSair onPress={ () => navigation.goBack() }>
        <DivisoriaBotao>
          <BotaoNome>GO BACK</BotaoNome>
        </DivisoriaBotao>
      </BotoesSair>
      
   </SafeArea>
  );
}