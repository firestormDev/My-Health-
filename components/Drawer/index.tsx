import { DrawerItem, DrawerItemList } from "@react-navigation/drawer";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useNavigation } from "@react-navigation/native";
import { Image, View } from 'react-native';
import { useState, useEffect } from 'react';
import { getAuth, onAuthStateChanged } from "firebase/auth";

import { Container, Text, Line } from './styles';

const iconLogout = require('../../assets/images/logout-icon.png')

const LogOut = async (nav: any) => {
    try {
        await AsyncStorage.removeItem('AUTH');
        nav.navigate('LogOut')
    }
    catch(e) {
        console.log("Error: ", e)
    }
}

const getUserName = (setNameUser: any) => {
    const auth = getAuth();
    onAuthStateChanged(auth, (user) => {
        if (user) {
            setNameUser(user.displayName)
        }
    });
}

const Drawer = (props: any) => {
    const navigation = useNavigation()
    const [nameUser, setNameUser] = useState('')

    useEffect(() => {
        getUserName(setNameUser)
        console.log("Entrou -> useEffect - 1")
    }, [nameUser])

    return (
        <Container>
            <Text>Olá {nameUser}</Text>
            <Line />
            <DrawerItemList {...props} />
            <View>
                <DrawerItem
                    label="Sair"
                    labelStyle={{ fontSize: 20, fontFamily: 'AveriaLibre_400Regular', color: '#419ED7' }}
                    icon={({ size }) => (
                        <Image
                            source={iconLogout}
                            style={{ height: size + 10, width: size + 10, marginRight: -20 }}
                        />
                    )}
                    onPress={() => LogOut(navigation)}
                />
            </View>
        </Container>
    )
}

export default Drawer
