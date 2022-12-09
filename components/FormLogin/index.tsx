import AsyncStorage from "@react-native-async-storage/async-storage";
import { useState } from 'react'

import { auth } from "../../config/firebaseConfig";
import { signInWithEmailAndPassword } from "firebase/auth"

import { Container, Text, Inputs } from "./styles"
import FirebaseErrors from "../../utils/FirebaseErrors"
import InputText from "../InputText"
import ButtonGreen from "../ButtonGreen"

const Login = (props: any, state: any) => {
    signInWithEmailAndPassword(auth, props.email, props.pass)
        .then(async (userCredential) => {
            await AsyncStorage.setItem(
                'AUTH',
                'true'
            )
            props.state[0](userCredential.user.uid)
            state(true)
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

const FormLogin = () => {
    const [error, setError] = useState(false)
    const [errorText, setErrorText] = useState(undefined)
    const [idUser, setIdUser] = useState('')
    const [email, setEmail] = useState('')
    const [pass, setPass] = useState('')

    return (
        <Container>
            <Inputs>
                <InputText
                    text="E-mail"
                    textSize={25}
                    textWidth="30%"
                    inputWidth="70%"
                    func={handleState}
                    textInput={email}
                    state={setEmail}
                />
                <InputText
                    text="Senha"
                    textSize={25}
                    textWidth="30%"
                    inputWidth="70%"
                    secure={true}
                    func={handleState}
                    textInput={pass}
                    state={setPass}
                />
                {
                    error
                    ? <Text>{errorText}</Text>
                    : <></>
                }
            </Inputs>
            <ButtonGreen
                text="Entrar"
                func={Login}
                idfunc={0}
                idUser={idUser}
                email={email}
                pass={pass}
                state={[setIdUser, setError]}
                errorText={setErrorText}
            />
        </Container>
    )
}

export default FormLogin
