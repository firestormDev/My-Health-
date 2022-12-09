import { Container, Text, Inputs, Texts } from "./styles"
import FirebaseErrors from "../../utils/FirebaseErrors"

import AsyncStorage from "@react-native-async-storage/async-storage";
import { useState } from 'react'

import { auth } from "../../config/firebaseConfig";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";

import InputText from '../InputText'
import ButtonRadio from "../ButtonRadio"
import ButtonGreen from '../ButtonGreen'

const Register = (props: any, state: any) => {
    createUserWithEmailAndPassword(auth, props.email, props.pass)
        .then(async (userCredential) => {
            await AsyncStorage.setItem(
                'AUTH',
                'true'
            )
            props.state[0](userCredential.user.uid)

            updateProfile(auth.currentUser, {
                displayName: props.name,
                sexo: props.sexo,
                date: props.date,
            })
                .then(() => {
                    console.log("Atualizou o nome!")
                    state(true)
                })
                .catch((error) => {
                    state(false)
                    console.log("Error: ", error.code)
                    FirebaseErrors(props.state[1], true, props.errorText, error.code)
                });
        })
        .catch((error) => {
            state(false)
            console.log("Error: ", error.code)
            FirebaseErrors(props.state[1], true, props.errorText, error.code)
        });
}

const handleState = (state: any, value: string) => {
    state(value)
}

const FormRegister = () => {
    const [error, setError] = useState(false)
    const [errorText, setErrorText] = useState()
    const [idUser, setIdUser] = useState('')
    const [name, setName] = useState('')
    const [sexo, setSexo] = useState(undefined)
    const [date, setDate] = useState('')
    const [email, setEmail] = useState('')
    const [pass, setPass] = useState('')
    const [rePass, setRePass] = useState('')

    return (
        <Container>
            <Inputs>
                <InputText
                    text="Nome completo"
                    func={handleState}
                    textInput={name}
                    state={setName}
                />
                <ButtonRadio
                    text="Sexo"
                    arrayTexts={['Masculino', 'Feminino']}
                    check={'Masculino'}
                    doseVaccine={setSexo}
                />
                <InputText
                    text="Data nascimento"
                    func={handleState}
                    textInput={date}
                    state={setDate}
                />
                <InputText
                    text="E-mail"
                    func={handleState}
                    textInput={email}
                    state={setEmail}
                />
                <InputText
                    text="Senha"
                    secure={true}
                    func={handleState}
                    textInput={pass}
                    state={setPass}
                />
                <InputText
                    text="Repetir senha"
                    secure={true}
                    func={handleState}
                    textInput={rePass}
                    state={setRePass}
                />
                {error ? <Texts><Text>{errorText}</Text></Texts> : <></>}
            </Inputs>
            <ButtonGreen
                text="Cadastrar"
                func={Register}
                idfunc={1}
                idUser={idUser}
                name={name}
                sexo={sexo}
                date={date}
                email={email}
                pass={pass}
                rePass={rePass}
                state={[setIdUser, setError]}
                errorText={setErrorText}
            />
        </Container>
    )
}

export default FormRegister
