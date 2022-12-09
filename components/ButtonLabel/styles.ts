import styled from "styled-components/native";

export const Container = styled.View`
    flex-direction: row;
    width: 100%;
    margin-top: 5%;
`

export const Texts = styled.View`
    align-items: flex-end;
    width: 40%;
`

export const Text = styled.Text`
    font-family: 'AveriaLibre_400Regular';
    font-size: 16px;
    color: #FFF;
    margin-right: 5%;
    text-align: center;
`

export const ButtonFile = styled.TouchableOpacity`
    align-self: center;
    font-family: 'AveriaLibre_400Regular';
    background-color: #419ED7;
    border: 1px solid #419ED7;
    color: #419ED7;
    width: 60%;
    height: 125%;
    padding-left: 3%;
`
