import { Container, Title, Text } from "./styles"

const CardNextVaccine = (props: any) => {
  return (
    <Container>
      <Title>{props.text}</Title>
      <Text>{props.date}</Text>
    </Container>
  )
}

export default CardNextVaccine
