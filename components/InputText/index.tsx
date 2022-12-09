import { Container, Text, Input, Texts } from "./styles"

const InputText = (props: any) => {
    return (
        <Container>
            <Texts
                style={{ width: props.textWidth ? props.textWidth : "40%" }}
            >
                <Text style={{ fontSize: props.textSize ? props.textSize : 16 }}>{props.text}</Text>
            </Texts>
            <Input
                value={props.textInput}
                style={{ width: props.inputWidth ? props.inputWidth : "60%" }}
                secureTextEntry={props.secure}
                onChangeText={(text: any) => props.func(props.state, text)}
            />
        </Container>
    )
}

export default InputText
