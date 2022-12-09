import { Container, NextVaccine } from "./styles"

import ButtonGreen from "../../components/ButtonGreen"
import CardNextVaccine from "../../components/CardNextVaccine"

const New = () => {
    console.log("Nova Vacina Click")
}

const Next = () => {
    return (
        <Container>
            <NextVaccine>
                <CardNextVaccine
                    text="BCG"
                    date="20/09/2022"
                />
                <CardNextVaccine
                    text="DTpa"
                    date="20/09/2024"
                />
                <CardNextVaccine
                    text="Sarampo"
                    date="03/04/2026"
                />
            </NextVaccine>
            <ButtonGreen
                text="Nova vacina"
                func={New}
            />
        </Container>
    )
}

export default Next
