import styled from "styled-components/native";
import { RadioButton } from 'react-native-paper';

export const Container = styled.View`
    flex: 1;
    flex-direction: row;
    flex-wrap: wrap;
    align-items: center;
    width: 100%;
`

export const Text = styled.Text`
    font-family: 'AveriaLibre_400Regular';
    font-size: 12px;
    color: #FFF;
`

export const Radio = styled(RadioButton)`
    align-self: center;
    width: 60%;
    height: 125%;
    padding-left: 3%;
`
