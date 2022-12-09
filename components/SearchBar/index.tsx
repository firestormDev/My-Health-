import { useState, useEffect } from "react";

import { getAuth, onAuthStateChanged } from "firebase/auth";

import { Container, Input, Icon, Search } from './styles'

const getUserID = (setID: any) => {
    const auth = getAuth();
    onAuthStateChanged(auth, (user) => {
        if (user) {
            setID(user.uid)
        }
    });
}

const propsHandleText = (props: any, search: any) => {
    props.textSearch(search)
}

const SearchBar = (props: any) => {
    const [idUser, setID] = useState()
    const [search, setSearch] = useState('')

    console.log(search)

    useEffect(() => {
        getUserID(setID);
        console.log("Entrou -> useEffect - 2")
    }, [idUser])

    return (
        <Container>
            <Search
                onPress={() => propsHandleText(props, search)}
            >
                <Icon
                    source={require('../../assets/images/icon-search.png')}
                />
            </Search>
            <Input
                onChangeText={setSearch}
                placeholder="PESQUISAR VACINA..."
            />
        </Container>
    )
}

export default SearchBar
