import { useState, useEffect } from 'react';
import { getAuth, onAuthStateChanged } from "firebase/auth";

import FormNewEdit from "../../components/FormNewEdit"
import { Container } from "./styles"

const getUserID = (setID: any) => {
    const auth = getAuth();
    onAuthStateChanged(auth, (user) => {
        if (user) {
            setID(user.uid)
        }
    });
}

const New = () => {
    const [idUser, setID] = useState()

    useEffect(() => {
        getUserID(setID)
        console.log("Entrou -> useEffect - 4")
    }, [idUser])

    return (
        <Container>
            {
                idUser !== undefined
                ? <FormNewEdit idUser={idUser} btnText="Cadastrar" />
                : <></>
            }
        </Container>
    )
}

export default New
