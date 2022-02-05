import { Stack, Grid, HStack, Heading, Text, Image, Container } from '@chakra-ui/react'
import { boxStyle, containerStyle, gridStyle, imageStyle, typoStyle } from '../../styles/globalStyle'

export const BlockchainSupport = ({ title = 'Multiple Blockchain Support', items = []}) => (
  <Stack {...boxStyle.blockchain}>
    <Container {...containerStyle}>
      <Stack spacing={10}>
        <Heading>{title}</Heading>
        <Text {...typoStyle.subtitle}>Xircus supports multi-chain deployment for multiple blockchain selection</Text>
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