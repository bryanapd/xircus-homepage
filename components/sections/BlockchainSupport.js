import { Stack, Grid, HStack, Heading, Text, Image, Container } from '@chakra-ui/react'
import { boxStyle, containerStyle, gridStyle, imageStyle, typoStyle } from '../../styles/globalStyle'

export const BlockchainSupport = ({ translation, items = []}) => (
  <Stack {...boxStyle.blockchain}>
    <Container {...containerStyle}>
      <Stack spacing={10}>
        <Heading>{translation('title')}</Heading>
        <Text {...typoStyle.subtitle}>{translation('subtitle')}</Text>
        {}
        <Grid {...gridStyle.blockchain}>
          {items.map((item, itemKey) => (
            <Stack key={itemKey}>
              <Image {...imageStyle.blockchains} src={item.image}  />
              <Text>{item.label}</Text>
            </Stack>
          ))}
        </Grid>
      </Stack>
    </Container>
  </Stack>
)