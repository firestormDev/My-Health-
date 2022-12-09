import { Container, Text, Texts } from './styles'
import Radios from '../Radios'

const ButtonRadio = (props: any) => {
    return (
        <Container>
            <Texts
                style={{ width: props.titleWidth ? props.titleWidth : "40%"}}
            ><Text style={{ fontSize: props.textSize }}>{props.text}</Text>
            </Texts>
            <Radios text={props.arrayTexts} check={props.check} setDose={props.doseVaccine} />
        </Container>
    )
}

export default ButtonRadio
