import { Container, Text, Radio } from './styles'
import { useState } from 'react'

const ItemChoice = (props: any, item: any, check: any) => {
    props.setDose(item)
    check(item)
}

const Radios = (props: any) => {
    const [checked, setChecked] = useState(props.check);

    return (
        <Container>
            {
                props.text.map(item => {
                    return (
                        <>
                            <Radio
                                value={item}
                                color={"#419ED7"}
                                status={checked === item ? 'checked' : 'unchecked'}
                                onPress={() => ItemChoice(props, item, setChecked)}
                            /><Text>{item}</Text>
                        </>
                    )
                })
            }
        </Container>
    )
}

export default Radios
