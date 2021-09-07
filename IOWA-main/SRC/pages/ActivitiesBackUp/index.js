import React from 'react';
import { View,SafeAreaView,Text,StatusBar } from 'react-native';

import Feather from 'react-native-vector-icons/Feather';

import {SafeArea, Container1, Conquistas, Atividade, FundoRoxo} from './styles';

export default function Activities() {
 return (
   <SafeArea>
      <StatusBar  barStyle="light-content" translucent={false}/>

      <FundoRoxo>
        <Conquistas>
        </Conquistas>
      </FundoRoxo>

      <Container1>
        <Atividade>
          <Feather
            name="headphones"
            size={94}
            color="#331F54"
          />
        </Atividade>
        <Atividade>
          <Feather
            name="message-circle"
            size={94}
            color="#331F54"
          />
        </Atividade>
      </Container1>

      <Container1>
        <Atividade>
          <Feather
            name="book-open"
            size={94}
            color="#331F54"
          />
        </Atividade>
        <Atividade>
          <Feather
            name="pen-tool"
            size={94}
            color="#331F54"
          />
        </Atividade>
      </Container1>
      
   </SafeArea>
  );
}