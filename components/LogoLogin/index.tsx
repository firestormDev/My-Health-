import { Container, Text, Icon } from './styles'

const LogoLogin = () => {
    return (
        <Container>
            <Icon
                source={require('../../assets/images/icon-vaccine.png')}
            />
            <Text>MyHealth</Text>
        </Container>
    )
}

export default LogoLogin
