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
export const Cycle = ({ cycles = [], translation}) => (
  <Box>
    <Container {...containerStyle}>
      <Stack {...boxStyle.cycle}>
        <Heading {...typoStyle.title}>{translation('title')}</Heading>
        <Text pb={20}>{translation('subtitle')}</Text>
        <Grid {...gridStyle.cycle}>
          {cycles.map((cycle, cycleKey) => (
            <CycleCard key={cycleKey} src={cycle}/>
          ))}
        </Grid>
      </Stack>
      <Center>
        <Box {...boxStyle.hugeBox}>{translation('hugeBox')}</Box>
      </Center>
    </Container>
  </Box>
)

