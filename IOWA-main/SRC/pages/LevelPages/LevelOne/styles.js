import styled from 'styled-components/native';

export const SafeArea = styled.SafeAreaView`
    background: #331F54;  
`;

export const FundoRoxo = styled.View`
    background: #331F54;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.1);
    align-items: center;
    border-bottom-left-radius: 40px;
    border-bottom-right-radius: 40px;
`;

export const Icone = styled.TouchableOpacity`
    position: absolute;
    left: 15px;
    top: 5px;
`;

export const Progresso = styled.View`
    width: 366px;
    height: 148px;
    background: #FAF0F0;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.1);
    border-radius: 40px;
    padding-left: 150px;
    padding-top: 30px;
    padding-right: 20px;
    margin-bottom: 15px;
    margin-top: 5px;
    align-items: flex-start;
`;

export const Titulo = styled.Text`
    margin-top: -15px;
    margin-bottom: -15px;
    font-family: Alata;
    font-size: 50px;
    color: #EC4266;
`;

export const SubTitulo = styled.Text`
    font-family: Alata;
    font-size: 15px;
    color: #ffffff;
`;

export const TituloProgresso = styled.Text`
    font-family: Alata;
    font-size: 24px;
    color: #331F54;
`;

export const TextoProgresso = styled.Text`
    font-family: Alata;
    font-size: 12px;
    color: #331F54;
`;

export const ProgressBar = styled.View`
    position: absolute;
    padding-left: 15px;
    padding-top: 15px;
`;

export const Stages = styled.View`
    align-self: center;
    top: 5px;
    margin: 8px;
    width: 366px;
    height: 78px;
    background: #EC4266;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.1);
    border-radius: 20px;
    padding-left: 150px;
    padding-top: 10px;
    align-items: flex-start;
`;

export const ProgressoPequeno = styled.View`
    position: absolute;
    padding-left: 40px;
    padding-top: 14px;
`;
