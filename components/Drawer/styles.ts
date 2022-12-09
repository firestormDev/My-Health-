import { DrawerContentScrollView } from "@react-navigation/drawer";
import styled from 'styled-components/native'

export const Container = styled(DrawerContentScrollView)`
    width: 100%;
    height: 100%;
    background-color: #ADD4D0;
`

export const Text = styled.Text`
    flex-direction: row;
    justify-content: center;
    align-self: center;
    margin-top: 20px;
    color: #419ED7;
    font-size: 30px;
    font-family: 'AveriaLibre_400Regular';
`

export const Line = styled.View`
    width: 90%;
    height: 2px;
    align-self: center;
    background-color: #419ED7;
    margin: 10% 0 20% 0;
`
