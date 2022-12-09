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

const Edit = (props: any) => {
    const params = props.route.params.params
    const [idUser, setID] = useState()

    useEffect(() => {
        getUserID(setID)
        console.log("Entrou -> useEffect - 3")
    }, [idUser])

    return (
        <Container>
            {
                idUser !== undefined
                ? <FormNewEdit params={params} idUser={idUser} btnText="Salvar alterações" del={true} />
                : <></>
            }
        </Container>
    )
}

export default Edit
