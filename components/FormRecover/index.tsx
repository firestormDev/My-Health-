import { useState } from 'react'

import { Container, Text } from './styles'

import { auth } from "../../config/firebaseConfig";
import { sendPasswordResetEmail } from "firebase/auth"
import FirebaseErrors from '../../utils/FirebaseErrors';

import ButtonGreen from '../ButtonGreen'
import InputText from '../InputText'


const Recover = (props: any, state: any) => {
    sendPasswordResetEmail(auth, props.email)
        .then(() => {
            console.log("Enviou!")
            state(false)
        })
        .catch((error) => {
            state(false)
            console.log("Error: ", error.code)
            props.state[1](true)
            props.errorText(false)
            FirebaseErrors(props.state[1], true, props.errorText, error.code)
        });
}

const handleState = (state: any, value: string) => {
    state(value)
}

const FormRecover = () => {
    const [error, setError] = useState(false)
    const [errorText, setErrorText] = useState(undefined)
    const [email, setEmail] = useState('')

    return (
        <Container>
            <InputText
                text="E-mail"
                textSize={25}
                textWidth="30%"
                inputWidth="70%"
                func={handleState}
                textInput={email}
                state={setEmail}
            />
            {
                error
                ? <Text>{errorText}</Text>
                : <></>
            }
            <ButtonGreen
                text="Recuperar senha"
                textSize={20}
                func={Recover}
                idfunc={2}
                email={email}
                state={[undefined, setError]}
                errorText={setErrorText}
            />
        </Container>
    )
}

export default FormRecover
