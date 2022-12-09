const FirebaseErrors = (state: any, value: boolean, stateError: any, error: string) => {
    if (value) {
        switch (error) {
            case "auth/invalid-email":
                stateError("E-mail inválido!")
                break;
            case "auth/email-already-in-use":
                stateError("E-mail já em uso!")
                break;
            case "auth/network-request-failed":
                stateError("Erro ao enviar e-mail!")
                break;
            default:
                stateError("E-mail e/ou senha inválidos!")
                break;
        }
        state(value)
    }

    return value
}

export default FirebaseErrors
