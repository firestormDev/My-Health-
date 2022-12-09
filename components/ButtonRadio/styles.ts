import styled from "styled-components/native";
import { RadioButton } from 'react-native-paper';

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

export const Radio = styled(RadioButton)`
    align-self: center;
    width: 60%;
    height: 125%;
    padding-left: 3%;
`
