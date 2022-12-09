import { Container, Text, ButtonFile, Texts } from "./styles"

const ButtonLabel = (props: any) => {
    return (
        <Container>
            <Texts><Text>{props.text}</Text></Texts>
            <ButtonFile
                onPress={() => props.func(props.error, props.errorText, props.image)}
                secureTextEntry={props.secure}>
                <Text>Selecionar imagem...</Text>
            </ButtonFile>
        </Container>
    )
}

export default ButtonLabel
