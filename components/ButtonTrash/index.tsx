import { Container, Button, Text, Icon } from "./styles"

const ButtonTrash = (props: any) => {
    return (
        <Container>
            <Button
                onPress={() => props.func(props)}
            >
                <Icon source={require('../../assets/images/icon-trash.png')} />
                <Text style={{ fontSize: props.textSize ? props.textSize : 28 }} >{props.text}</Text>
            </Button>
        </Container>
    )
}

export default ButtonTrash
