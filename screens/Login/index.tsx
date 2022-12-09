import LogoLogin from "../../components/LogoLogin"
import TextLogin from "../../components/TextLogin"
import FormLogin from "../../components/FormLogin"
import ButtonRecover from "../../components/ButtonRecover"
import ButtonRegister from "../../components/ButtonRegister"
import { Container } from "./styles"

const Login = () => {
    return (
        <Container>
            <LogoLogin />
            <TextLogin />
            <FormLogin />
            <ButtonRegister />
            <ButtonRecover />
        </Container>
    )
}

export default Login
