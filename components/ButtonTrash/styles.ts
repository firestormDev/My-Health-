import styled from "styled-components/native";

export const Container = styled.View`
    flex-direction: column;
    align-items: center;
    width: 100%;
`
export const Text = styled.Text`
    font-family: 'AveriaLibre_400Regular';
    color: white;
    padding-left: 3%;
`

export const Icon = styled.Image`
    width: 25px;
    height: 25px;
    align-self: center;
`

export const Button = styled.TouchableOpacity`
    flex-direction: row;
    background-color: #FD7979;
    border: 1px solid #FD7979;
    box-sizing: border-box;
    padding: 1%;
    padding-left: 3%;
    padding-right: 3%;
`
