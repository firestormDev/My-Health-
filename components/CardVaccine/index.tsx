import { useNavigation } from "@react-navigation/native";

import { Container, Title, Tag, TextTag, TextDate, ImageVacinne, NextVaccine } from './styles'

const CardVaccine = (props: any) => {
    const navigation = useNavigation();

    return (
        <Container
            onPress={() => {
                navigation.navigate("Edit", {
                    id: props.id,
                    title: props.title,
                    textTag: props.textTag,
                    dateVaccine: props.dateVaccine,
                    pictureVaccine: props.pictureVaccine,
                    nextVaccine: props.nextVaccine
                });
            }}
        >
            <Title>{props.title}</Title>
            <Tag><TextTag>{props.textTag}</TextTag></Tag>
            <TextDate>{props.dateVaccine}</TextDate>
            <ImageVacinne
                source={props.pictureVaccine != null ? { uri: props.pictureVaccine } : require('../../assets/images/vaccines/default.png')}
            />
            <NextVaccine>{props.nextVaccine}</NextVaccine>
        </Container>
    )
}

export default CardVaccine
