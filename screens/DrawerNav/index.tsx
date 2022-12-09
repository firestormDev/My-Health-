import { createDrawerNavigator } from '@react-navigation/drawer'
import { Image, StatusBar, TouchableOpacity } from 'react-native';

import MyDrawer from '../../components/Drawer'
import Next from '../Next'

const iconMenu = require('../../assets/images/icon-menu.png')
const iconVaccine = require('../../assets/images/icon-vaccine.png')
const iconCallendar = require('../../assets/images/calendar-icon.png')

const Drawer = createDrawerNavigator()

const DrawerNav = (prop: any) => {
    return (
        <>
            <StatusBar backgroundColor="#C1E7E3" />
            <Drawer.Navigator
                drawerContent={(props) => <MyDrawer {...props} />}
                screenOptions={({ navigation }) => ({
                    drawerActiveTintColor: '#FFF',
                    drawerActiveBackgroundColor: '#419ED7',
                    drawerInactiveTintColor: '#419ED7',
                    drawerInactiveBackgroundColor: 'transparent',
                    drawerLabelStyle: {
                        fontFamily: 'AveriaLibre_400Regular',
                        fontSize: 20
                    },
                    headerLeft: () => (
                        <TouchableOpacity
                            onPress={() => { navigation.toggleDrawer() }}
                        >
                            <Image
                                source={iconMenu}
                                style={{ height: 30, width: 40, marginLeft: 20 }}
                            />
                        </TouchableOpacity>
                    ),
                    headerStyle: {
                        backgroundColor: '#C1E7E3'
                    },
                    headerTintColor: '#ADD4D0',
                    headerTitleStyle: {
                        fontSize: 30,
                        fontFamily: "AveriaLibre_400Regular",
                        color: '#419ED7'
                    }
                })}>
                <Drawer.Screen
                    name="Minhas vacinas"
                    component={prop.component}
                    initialParams={prop.routes}
                    options={{
                        title: 'Minhas vacinas',
                        drawerIcon: ({ size }) => (
                            <Image
                                source={iconVaccine}
                                style={{ height: size + 10, width: size + 10, marginRight: -20 }}
                            />
                        ),
                    }}
                />
                <Drawer.Screen
                    name="Próximas vacinas"
                    component={Next}
                    options={{
                        title: 'Próximas vacinas',
                        drawerIcon: ({ size }) => (
                            <Image
                                source={iconCallendar}
                                style={{ height: size + 10, width: size + 10, marginRight: -20 }}
                            />
                        ),
                    }}
                />
            </Drawer.Navigator>
        </>
    )
}

export default DrawerNav
