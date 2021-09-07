import React,{useState, Component, Fragment} from 'react';
import { SafeAreaView, FlatList, StatusBar } from 'react-native';
import { FundoRoxo, Progresso, Titulo, SubTitulo, TextoProgresso, TituloProgresso, 
        ProgressBar, Stages, ProgressoPequeno, SafeArea, Icone } from './styles';

import { AnimatedCircularProgress } from 'react-native-circular-progress';
import Feather from 'react-native-vector-icons/Feather';
import { useNavigation } from '@react-navigation/native';

export default function LevelOne() {

  const navigation = useNavigation();
  
  const Titulos = [
    { id: 1, Titulo: 'LEVEL one', SubTitulo: 'THE JOURNEY BEGINS', progresso: 100 }
  ];

  const [Stage, setStage] = useState([
    {id: '1', Title: 'STAGE one', SubTitle: 'Hey how are you ?', progress: 100, goto: 'Stages'},
    {id: '2', Title: 'STAGE two', SubTitle: 'Hey how are you ?', progress: 85, goto: 'Stages'},
    {id: '3', Title: 'STAGE three', SubTitle: 'Hey how are you ?', progress: 10, goto: 'Stages'},
  ]);

  function Stagios(props){
    return(
      <Stages>
        <ProgressoPequeno> 
          <AnimatedCircularProgress 
                rotation={110}
                size={50}
                width={10}
                fill={props.data.progress}
                lineCap='round'
                tintColor="#331F54"
                onAnimationComplete={() => console.log('onAnimationComplete')}
                backgroundColor="#AD9BCC"/>
        </ProgressoPequeno>
        <TituloProgresso>{props.data.Title}</TituloProgresso>
        <SubTitulo>{props.data.SubTitle}</SubTitulo>
      </Stages>
    )
  }

 return (
   <Fragment>
   <SafeArea/>
   <SafeAreaView>
     <StatusBar  barStyle="light-content" backgroundColor="#61dafb" translucent={false}/>

       <FundoRoxo>

          <Icone onPress={ () => navigation.goBack() }>
            <Feather
            name="chevron-left"
            size={35}
            color="#EC4266"
            />
          </Icone>
          
            <Titulo>LEVEL one</Titulo> 
            <SubTitulo>THE JOURNEY BEGINS</SubTitulo>
            <Progresso>
              <ProgressBar>
                <AnimatedCircularProgress 
                  rotation={110}
                  size={120}
                  width={20}
                  fill={50}
                  lineCap='round'
                  tintColor="#EC4266"
                  onAnimationComplete={() => console.log('onAnimationComplete')}
                  backgroundColor="#F1DCE1">
                  {
                    (fill) => (
                      <TituloProgresso>50%</TituloProgresso>
                    )
                  }
                </AnimatedCircularProgress>
              </ProgressBar>
            
                <TituloProgresso>Good Job !</TituloProgresso>
                <TextoProgresso>Your English Journey is only starting but you are halfway done already</TextoProgresso>
            </Progresso>
       </FundoRoxo>

       <FlatList
        data={Stage}
        renderItem={ ({item}) => <Stagios data={item}/> }
       />

   </SafeAreaView>
   </Fragment>
  );
}