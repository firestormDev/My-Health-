import { useNavigation } from "@react-navigation/native";
import { useState } from "react";

import { Container, Button, Text } from "./styles"

import Errors from "../../utils/Errors"

const handleFunc = (props: any, state: any) => {
    switch (props.idfunc) {
        case 0:
            if (!catchErrorLogin(props))
                props.func(props, state)
            break;
        case 1:
            if (!catchErrorRegister(props))
                props.func(props, state)
            break;
        case 2:
            if (!catchErrorRecover(props))
                props.func(props, state)
            break;
        case 3:
            if (!catchErrorNewEdit(props))
                props.func(props, state)
            break;
        default:
            props.func(props)
            state(false)
            console.log("Default")
            break;
    }
}

const catchErrorLogin = (props: any) => {
    let errorName = ''
    let value = false

    if (props.email === '') {
        errorName = "emailNull"
        value = true
    } else if (props.pass === '') {
        errorName = "passNull"
        value = true
    } else if (props.pass.length < 6) {
        errorName = "passLess"
        value = true
    }

    return Errors(props.state[1], value, props.errorText, errorName)
}

const catchErrorRegister = (props: any) => {
    let errorName = ''
    let value = false

    if (props.name === '') {
        errorName = "nameNull"
        value = true
    } else if (props.date === '') {
        errorName = "dateNull"
        value = true
    } else if (props.email === '') {
        errorName = "emailNull"
        value = true
    } else if (props.pass.length < 6) {
        errorName = "passLess"
        value = true
    } else if (props.pass === '') {
        errorName = "passNull"
        value = true
    } else if (props.rePass === '') {
        errorName = "rePassNull"
        value = true
    } else if (props.pass !== props.rePass){
        errorName = "passNotEqual"
        value = true
    }

    return Errors(props.state[1], value, props.errorText, errorName)
}

const catchErrorRecover = (props: any) => {
    let errorName = ''
    let value = false

    if (props.email === '') {
        errorName = "emailNull"
        value = true
    }

    return Errors(props.state[1], value, props.errorText, errorName)
}

const catchErrorNewEdit = (props: any) => {
    let errorName = ''
    let value = false

    if (props.dateVaccine === '') {
        errorName = "dateVaccineNull"
        value = true
    } else if (props.nameVaccine === '') {
        errorName = "nameVaccineNull"
        value = true
    } else if (props.doseVaccine === '') {
        errorName = "doseVaccineNull"
        value = true
    }
    // else if (props.pictureVaccine === '' || props.pictureVaccine === null) {
    //     errorName = "pictureVaccineNull"
    //     value = true
    // }

    return Errors(props.state[1], value, props.errorText, errorName)
}

const ButtonGreen = (props: any) => {
    const navigation = useNavigation()
    const [navHome, setNavHome] = useState(false)

    return (
        <Container>
            <Button
                onPress={() => handleFunc(props, setNavHome)}
            ><Text style={{ fontSize: props.textSize ? props.textSize : 28 }}>{props.text}</Text></Button>
            {
                navHome
                    ? navigation.navigate('Private', { id: props.idUser })
                    : <></>
            }
        </Container>
    )
}

export default ButtonGreen
