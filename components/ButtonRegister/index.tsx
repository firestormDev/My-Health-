import { useNavigation } from "@react-navigation/native";
import { Button, Container, Text } from './styles'

const ButtonRegister = () => {
    const navigation = useNavigation();

    return (
        <Container>
            <Button
                onPress={() => navigation.navigate('Register')}
            >
                <Text>Criar minha conta</Text>
            </Button>
        </Container>
    )
}

export default ButtonRegister
