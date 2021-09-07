import React, {useState} from 'react';
import { View,SafeAreaView,Text, StatusBar,FlatList, } from 'react-native';

import {SafeArea, Texto1, Texto2, FundoRoxo, NomeDoAluno, Aviso, TextoAviso,
        News, Selecao, ContainerSelecao, Book, BookContainer} from './styles';
  

export default function Home() {

    const [feed, setFeed] = useState([
        {id: '1', livro: 'Fast 2B', aviso: 10},
        {id: '2', livro: '2B Workbook', aviso: 16},
        {id: '3', livro: 'Fast 1B', aviso: 0},
        {id: '4', livro: '1B Workbook', aviso: 0},
    ])

function Livros(props){
    return(
        <BookContainer>
            <Book>
                <Texto2>{props.data.livro}</Texto2>
                <Aviso>
                    <TextoAviso>{props.data.aviso}</TextoAviso>
                </Aviso>
            </Book>
        </BookContainer>
    );
}

 return (
   <SafeArea>
       <StatusBar  barStyle="light-content" translucent={false}/>
       <FundoRoxo>
            <Texto1>Hello,</Texto1>
            <NomeDoAluno>Nome do Aluno</NomeDoAluno>
       </FundoRoxo>
       <News></News>
    
       <ContainerSelecao>
            <Selecao></Selecao>
            <Selecao></Selecao>
            <Selecao></Selecao>
       </ContainerSelecao> 

        <FlatList
        data={feed}
        renderItem={ ({item}) => <Livros data={item}/> }
        contentContainerStyle={{ paddingBottom: 50 }}
        />

   </SafeArea>
  );
}