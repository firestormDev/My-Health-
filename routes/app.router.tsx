import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { useState } from "react";

import DrawerNav from "../screens/DrawerNav";

import Login from "../screens/Login"
import Register from "../screens/Register"
import Recover from "../screens/Recover"

import Home from "../screens/Home"
import New from "../screens/New"
import Edit from "../screens/Edit"
import Next from "../screens/Next"
import RespAuth from "../utils/RespAuth";
import Auth from "./auth";

const { Navigator, Screen } = createNativeStackNavigator();

const getAuth = (state: any) => {
    RespAuth().then((value) => state(value))
}

export function AppRoutes() {
    const [authFirebase, setAuthFirebase] = useState(false)
    const [authStore, setAuthStore] = useState(false)

    getAuth(setAuthStore)

    if (authFirebase || authStore) {
        return (
            <Navigator initialRouteName="Home" screenOptions={{ headerShown: false }}>
                <Screen name="Home" children={() => <DrawerNav component={Home} />} />
                <Screen name="New" children={() => <DrawerNav component={New} />} />
                <Screen name="Edit" children={({ route }) => <DrawerNav component={Edit} routes={route} />} />
                <Screen name="Next" children={() => <DrawerNav component={Next} />} />
                <Screen name="LogOut" children={() => <Auth idFunc={2} state={setAuthFirebase} />} />
            </Navigator>
        )
    } else {
        return (
            <Navigator initialRouteName="Login" screenOptions={{ headerShown: false }}>
                <Screen name="Login" component={Login} />
                <Screen name="Register" component={Register} />
                <Screen name="Recover" component={Recover}  />
                <Screen name="Private" children={() => <Auth idFunc={0} state={setAuthFirebase} />} />
            </Navigator>
        )
    }
}
