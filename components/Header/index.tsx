import { Container, Text, Icon } from './styles'

const iconVaccine = require('../../assets/images/icon-vaccine.png')

const Header = () => {
    return (
        <Container>
            <Icon
                source={iconVaccine}
            />
            <Text>MyHealth</Text>
        </Container>
    )
}

export default Header
