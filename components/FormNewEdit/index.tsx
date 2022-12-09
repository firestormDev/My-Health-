import { useState } from 'react';
// import { launchImageLibrary } from 'react-native-image-picker';
import * as ImagePicker from 'expo-image-picker';

import { db } from "../../config/firebaseConfig";
import { collection, addDoc, doc, updateDoc, deleteDoc } from "firebase/firestore";
import { Container, Text, Inputs, ImageVacinne } from "./styles"
import FirebaseErrors from "../../utils/FirebaseErrors"
import InputText from '../InputText'
import ButtonRadio from "../ButtonRadio"
import ButtonLabel from '../ButtonLabel'
import ButtonGreen from '../ButtonGreen'
import ButtonTrash from "../ButtonTrash"

import { useNavigation } from '@react-navigation/native';

const NewEditVaccine = async (props: any, state: any) => {
    if (!props.edit) {
        await addDoc(collection(db, props.idUser), {
            Date: props.dateVaccine,
            Name: props.nameVaccine,
            Dose: props.doseVaccine,
            Picture: props.pictureVaccine,
            NextVaccine: props.nextVaccine
        })
            .then(() => {
                console.log("Salvou!")
                props.navHome(true)
            })
            .catch((error) => {
                props.navHome(false)
                console.log("Error: ", error.code)
                props.state[1](true)
                props.errorText(false)
                FirebaseErrors(props.state[1], true, props.errorText, error.code)
            });
    } else {
        await updateDoc(doc(db, props.idUser, props.idVaccine), {
            Date: props.dateVaccine,
            Name: props.nameVaccine,
            Dose: props.doseVaccine,
            Picture: props.pictureVaccine,
            NextVaccine: props.nextVaccine
        })
            .then(() => {
                console.log("Editou!")
                props.navHome(true)
            })
            .catch((error) => {
                props.navHome(false)
                console.log("Error: ", error.code)
                props.state[1](true)
                props.errorText(false)
                FirebaseErrors(props.state[1], true, props.errorText, error.code)
            });
    }
    state(false)
}

const DropCollection = async (props: any) => {
    await deleteDoc(doc(db, props.idUser, props.idVaccine))
        .then(() => {
            console.log("Excluiu!")
            props.navHome(true)
        })
        .catch((error) => {
            props.navHome(false)
            console.log("Error: ", error.code)
            props.state[1](true)
            props.errorText(false)
            FirebaseErrors(props.state[1], true, props.errorText, error.code)
        });
}

const handleState = (state: any, value: string) => {
    state(value)
}

const showImagePicker = async (error: any, text: any, image: any) => {
    // launchImageLibrary({
    //     mediaType: 'photo'
    // })
    // .then((resp) => {
    //     console.log(resp.assets[0].uri)
    // })
    // .catch((e) => {
    // console.log(e)
    // error(true);
    // text("Erro ao escolher a imagem!")
    // })

    // No permissions request is necessary for launching the image library
    // let result = await ImagePicker.launchImageLibraryAsync({
    //     mediaTypes: ImagePicker.MediaTypeOptions.Images,
    //     allowsEditing: true,
    //     aspect: [4, 3],
    //     quality: 1,
    // });

    // console.log(result);

    // if (!result.canceled && result.canceled !== undefined) {
    //     console.log("OK")
    //     // image(result.assets[0].uri);
    // } else {
    //     console.log("ERROR")
    //     error(true);
    //     text("Erro ao escolher a imagem!")
    // }
}

const FormNewEdit = (props: any) => {
    const vaccine = props.params;
    const vac = vaccine !== undefined;
    const navigation = useNavigation()
    const [navHome, setNavHome] = useState(false)
    const [error, setError] = useState(false)
    const [errorText, setErrorText] = useState(undefined)
    const [idUser] = useState(props.idUser)
    const [idVaccine] = useState(vac ? vaccine.id : '')
    const [dateVaccine, setdateVaccine] = useState(vac ? vaccine.dateVaccine : '')
    const [nameVaccine, setnameVaccine] = useState(vac ? vaccine.title : '')
    const [doseVaccine, setdoseVaccine] = useState(vac ? vaccine.textTag : 'Dose única')
    const [pictureVaccine, setpictureVaccine] = useState(vac ? vaccine.pictureVaccine : null)
    const [nextVaccine, setnextVaccine] = useState(vac ? vaccine.nextVaccine : '')

    return (
        <Container>
            {
                navHome
                    ? navigation.navigate('Home')
                    : <></>
            }
            <Inputs>
                <InputText
                    text="Data de vacinação"
                    textWidth="50%"
                    inputWidth="50%"
                    func={handleState}
                    textInput={dateVaccine}
                    state={setdateVaccine}
                />
                <InputText
                    text="Vacina"
                    func={handleState}
                    textInput={nameVaccine}
                    state={setnameVaccine}
                />
                <ButtonRadio
                    text="Dose"
                    check={vac ? vaccine.textTag : 'Dose única'}
                    titleWidth="45%"
                    doseVaccine={setdoseVaccine}
                    arrayTexts={['1a. dose', '2a. dose', '3a. dose', 'Dose única']}
                />
                <ButtonLabel
                    text="Comprovante"
                    func={showImagePicker}
                    error={setError}
                    errorText={setErrorText}
                    image={setpictureVaccine}
                />
                <ImageVacinne
                    source={pictureVaccine != null ? { uri: pictureVaccine } : require('../../assets/images/vaccines/default.png')}
                />
                <InputText
                    text="Próxima vacinação"
                    textWidth="50%"
                    inputWidth="50%"
                    state={setnextVaccine}
                    func={handleState}
                    textInput={nextVaccine}
                />
            </Inputs>
            {
                error
                    ? <Text>{errorText}</Text>
                    : <></>
            }
            <ButtonGreen
                text={props.btnText}
                func={NewEditVaccine}
                idfunc={3}
                edit={vaccine !== undefined ? true : false}
                navHome={setNavHome}
                idUser={idUser}
                idVaccine={idVaccine}
                dateVaccine={dateVaccine}
                nameVaccine={nameVaccine}
                doseVaccine={doseVaccine}
                pictureVaccine={pictureVaccine}
                nextVaccine={nextVaccine}
                state={[undefined, setError]}
                errorText={setErrorText}
            />
            {
                props.del
                    ? <ButtonTrash
                        text="Excluir"
                        idUser={idUser}
                        idVaccine={idVaccine}
                        navHome={setNavHome}
                        func={DropCollection} />
                        : <></>
            }
        </Container>
    )
}

export default FormNewEdit
