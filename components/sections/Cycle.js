import { 
  Box, Text, Container, Stack, Heading,
  Button, HStack, Image, Divider, Grid, Center,
} from '@chakra-ui/react'
import { 
  boxStyle, buttonStyle, typoStyle, playButtonStyle,
  containerStyle, itemCardStyle, imageStyle, gridStyle
} from '../../styles/globalStyle'

export const CycleCard = ({ src }) => (
  <Box {...itemCardStyle.cycle}>
    <Image src={src} {...imageStyle.cycle}/>
    <Text pos="relative" top={100}>Deploy on multiple <br /> blockchain protocols</Text>
  </Box>
)
export const Cycle = ({ cycles = []}) => (
  <Box>
    <Container {...containerStyle}>
      <Stack {...boxStyle.cycle}>
        <Heading {...typoStyle.title}>Take full control of the NFT Space</Heading>
        <Text pb={20}>Built on multiple chains, NFT marketplaces that are deployed, owned and governed by YOU</Text>
        <Grid {...gridStyle.cycle}>
          {cycles.map((cycle, cycleKey) => (
            <CycleCard key={cycleKey} src={cycle}/>
          ))}
        </Grid>
      </Stack>
      <Center>
        <Box {...boxStyle.hugeBox}>
          Voluptate ut consequat ipsum enim.Qui cupidatat dolor minim in ullamco voluptate minim id commodo 
          aliquip veniam sunt consectetur.Eu minim ea voluptate minim nulla cupidata</Box>
      </Center>
    </Container>
  </Box>
)

