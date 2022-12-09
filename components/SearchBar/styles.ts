import styled from "styled-components/native";

export const Container = styled.View`
    flex-direction: row;
    justify-content: space-between;
    align-self: center;
    width: 90%;
    margin-top: 5%;
    margin-bottom: 5%;
`

export const Search = styled.TouchableOpacity`
    position: absolute;
    align-self: center;
    margin-left: 1.5%;
    z-index: 1;
`

export const Icon = styled.Image`
    width: 24px;
    height: 23px;
`

export const Input = styled.TextInput`
    width: 100%;
    text-align: left;
    font-size: 20px;
    color: #8B8B8B;
    background-color: white;
    padding: 2% 5% 2% 34px;

`
