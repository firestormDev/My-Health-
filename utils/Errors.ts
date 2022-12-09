const Errors = (state: any, value: boolean, stateError: any, error: string) => {
    if (value) {
        switch (error) {
            case "nameNull":
                stateError("Nome não pode ser nulo!")
                break;
            case "sexNull":
                stateError("Sexo não pode ser nulo!")
                break;
            case "dateNull":
                stateError("Data de nascimento não pode ser nula!")
                break;
            case "emailNull":
                stateError("E-mail não pode ser nulo!")
                break;
            case "passNull":
                stateError("Senha não pode ser nula!")
                break;
            case "rePassNull":
                stateError("Repetir Senha não pode ser nulo!")
                break;
            case "passNotEqual":
                stateError("Senha não confere!")
                break;
            case "passLess":
                stateError("A Senha não pode ser menor que 6 caracteres!")
                break;
            case "dateVaccineNull":
                stateError("Data de vacinação não pode ser nulo!")
                break;
            case "nameVaccineNull":
                stateError("Nome Vacina não pode ser nulo!")
                break;
            case "doseVaccineNull":
                stateError("Dose não pode ser nulo!")
                break;
            case "pictureVaccineNull":
                stateError("Imagem não pode ser nula!")
                break;
            case "nextVaccineNull":
                stateError("Próxima vacinação não pode ser nulo!")
                break;
            case "":
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

export default Errors
