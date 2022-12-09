import { useNavigation } from "@react-navigation/native";
import { useState, useEffect } from "react";

import { db } from "../../config/firebaseConfig";
import { getAuth, onAuthStateChanged } from "firebase/auth";

import { Container, List } from "./styles"
import SearchBar from "../../components/SearchBar"
import ListVacinne from "../../components/ListVacinne"
import ButtonGreen from "../../components/ButtonGreen"

const NewVaccine = (props: any) => {
    nav(true, props.navigation)
}

const getUserID = (setID: any) => {
    const auth = getAuth();
    onAuthStateChanged(auth, (user) => {
        if (user) {
            setID(user.uid)
        }
    });
}

const nav = (navNew: any, navigation: any) => {
    navNew
        ? navigation.navigate('New')
        : <></>
}

const Home = () => {
    const [idUser, setID] = useState()
    const [navNew, setnavNew] = useState(false)
    const [textSearch, setTextSearch] = useState('')
    const navigation = useNavigation()

    useEffect(() => {
        getUserID(setID);
        console.log("Entrou -> useEffect - 5")
    }, [idUser])

    console.log("Entrou -> HOME")

    return (
        <Container>
            { nav(navNew, navigation) }
            <SearchBar textSearch={setTextSearch}/>
            <List>
                {
                    idUser !== undefined
                        ? <ListVacinne
                            idUser={idUser}
                            textSearch={textSearch}
                         />
                        : <></>
                }
                <ButtonGreen
                    text="Nova vacina"
                    func={NewVaccine}
                    idfunc={10}
                    state={[undefined, setnavNew]}
                    navigation={navigation}
                />
            </List>
        </Container>
    )
}

export default Home
