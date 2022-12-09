import { useEffect, useState } from "react";
import { FlatList } from "react-native-gesture-handler";

import { db } from "../../config/firebaseConfig";
import { collection, query, getDocs } from "firebase/firestore";

import CardVaccine from '../CardVaccine';
import { Container } from './styles';

const getVaccineList = async (idUser: any, setList: any) => {
    const list: { id: string; }[] = [];
    const vaccines = query(collection(db, idUser));
    const querySnapshot = await getDocs(vaccines);

    querySnapshot.forEach((doc) => {
        list.push({ ...doc.data(), id: doc.id });
    });
    setList(list);
}

const getVaccineSearchList = async (idUser: any, search: string, setList: any) => {
    var list: any[] = []

    const citiesRef = collection(db, idUser);
    const querySnapshot = await getDocs(citiesRef);

    querySnapshot.forEach((doc: any) => {
        if (doc.data().Name.match(search)) {
            setList(list.length !== 0 ? [{...list}, doc.data()] : [doc.data()])
        }
    });
}

const handleVaccineList = (props: any, setList: any, setCameIn: any, cameIn: any) => {
    if (props.textSearch !== '') {
        // if (cameIn) {
            getVaccineSearchList(props.idUser, props.textSearch, setList);
            // setCameIn(false)
        // }
    } else {
        if (cameIn) {
            getVaccineList(props.idUser, setList);
            setCameIn(false)
        }
    }
}

const ListVacinne = (props: any) => {
    const [list, setList] = useState([]);
    const [cameIn, setCameIn] = useState(true)

    console.log(list)

    handleVaccineList(props, setList, setCameIn, cameIn)

    return (
        <Container>
            <FlatList
                numColumns={2}
                showsVerticalScrollIndicator={true}
                data={list}
                renderItem={({ item }: any) => (
                    <CardVaccine
                        id={item.id}
                        title={item.Name}
                        textTag={item.Dose}
                        dateVaccine={item.Date}
                        pictureVaccine={item.Picture}
                        nextVaccine={item.NextVaccine === "" || item.NextVaccine === "Não há próxima dose" ? "Não há próxima dose" : "Próxima dose em: "+item.NextVaccine}
                    />
                )}
            />
        </Container>
    )
}

export default ListVacinne;
