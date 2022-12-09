import { useNavigation } from "@react-navigation/native";
import { Button, Container, Text } from './styles'

const ButtonRecover = () => {
    const navigation = useNavigation();

    return (
        <Container>
            <Button
                onPress={() => navigation.navigate('Recover')}
            >
                <Text>Esqueci minha senha</Text>
            </Button>
        </Container>
    )
}

export default ButtonRecover
