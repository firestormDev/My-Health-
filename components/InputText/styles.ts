import styled from "styled-components/native";

export const Container = styled.View`
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    margin-top: 5%;
`

export const Texts = styled.View`
    align-items: flex-end;
`

export const Text = styled.Text`
    font-family: 'AveriaLibre_400Regular';
    font-size: 15px;
    color: #FFF;
    margin-right: 5%;
`

export const Input = styled.TextInput`
    align-self: center;
    font-family: 'AveriaLibre_400Regular';
    background-color: white;
    color: #419ED7;
    height: 125%;
    padding-left: 3%;
`
