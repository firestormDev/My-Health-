import AsyncStorage from "@react-native-async-storage/async-storage";

const RespAuth = async () => {
    let auth = false

    await AsyncStorage.getItem('AUTH')
    .then((value) => {
        if (value === "true") {
            auth = true
        }
    }).catch((e) => {
        console.log("Error: ", e)
    })

    return auth
}

export default RespAuth
