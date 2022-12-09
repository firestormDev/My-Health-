import styled from "styled-components/native";
import { LinearGradient } from 'expo-linear-gradient';

export const Container = styled(LinearGradient).attrs({
    colors: ['#FFF','#3B5E5A82'],
    start: { x: 0, y: 0 },
    end: { x: 0, y: 1 },
})`
    flex-direction: column;
    justify-content: space-around;
    height: 100%;
    width: 100%;
`
