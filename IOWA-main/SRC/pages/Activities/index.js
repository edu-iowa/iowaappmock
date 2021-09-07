import React, {useEffect, useState}from 'react';
import axios from 'axios';
import { View, SafeAreaView ,Text ,StatusBar ,FlatList } from 'react-native';

import { useNavigation } from '@react-navigation/native';

import Feather from 'react-native-vector-icons/Feather';
import { ThemeProvider } from 'styled-components';

import {SafeArea, Conquistas, LevelBackGround, FundoRoxo, LevelTitle, 
        LevelSubTitle, ProgressBar, ProgressBarBackGround, LevelArt } from './styles';

        
export default function Activities() {
//adicionei código a partir daqui
  const [data, setData] = useState([]); //Só  declarando o objeto que recebe as informações
  console.log(data); 

  //essa função faz o requerimento no servidor e transfere para o objeto
  useEffect(() => {
    axios.get('http://10.0.2.2:5000/activities')
      .then(response => {setData(response.data.level_list)});
      }, []);
      
  const navigation = useNavigation();

  const [Levels, setLeves] = [data, setData]; //aqui eu só declarei o conteúdo de Levels(talvez seja melhor transferir direto do servidor para esse objeto)
//daqui pra baixo o código é seu(eu retalhei o código para reduzir os erros)

  function Level(props){

    const progress ={
      progress: 15,
    };

    return(
      <ThemeProvider theme={progress}>
        <LevelBackGround onPress={ () => navigation.navigate() }>
          <LevelArt/>
          <LevelTitle>{props.data.name}</LevelTitle>
          <LevelSubTitle>{'test'}</LevelSubTitle>
          <ProgressBarBackGround>
            <ProgressBar></ProgressBar>
          </ProgressBarBackGround>
        </LevelBackGround>
      </ThemeProvider>  
    )
  }

 return (
   <SafeArea>
      <StatusBar  barStyle="light-content" translucent={false}/>
      <FundoRoxo>
        <Conquistas>
        </Conquistas>
      </FundoRoxo>

      <FlatList
        data={Levels}
        renderItem={ ({item}) => <Level data={item}/> }
      />

   </SafeArea>
  );
}
