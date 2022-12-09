import { useRoute } from "@react-navigation/native";
import { PrivateParams } from "../@types/navigation";

const Auth = (props: any) => {
    const route = useRoute()
    const id = route.params as PrivateParams


    switch (props.idFunc) {
        case 0:
            if (id !== undefined)
                props.state(true)
            return <></>
        default:
            props.state(false)
            return <></>
    }
}

export default Auth
