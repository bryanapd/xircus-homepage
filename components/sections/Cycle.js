import { 
  Box, Text, Container, Stack, Heading,
  Button, HStack, Image, Divider, Grid, Center,
} from '@chakra-ui/react'
import { 
  boxStyle, buttonStyle, typoStyle, playButtonStyle,
  containerStyle, itemCardStyle, imageStyle, gridStyle
} from '../../styles/globalStyle'

export const CycleCard = ({ children }) => (
  <Box  {...itemCardStyle.cycle}>
    {children}
  </Box>
)
export const Cycle = ({ cycles = [], translation, cardTranslation}) => (
  <Box>
    <Container {...containerStyle}>
      <Stack {...boxStyle.cycle}>
        <Heading {...typoStyle.title}>{translation('title')}</Heading>
        <Text pb={20}>{translation('subtitle')}</Text>
        <Grid {...gridStyle.cycle}>
          {cycles.map((cycle, cycleKey) => (
            <CycleCard key={cycleKey} cardTranslation={cardTranslation}>
              <Image src={cycle.image} {...imageStyle.cycle} />
              <Text {...typoStyle.cycle}>{cycle.label}</Text>
            </CycleCard>
          ))}
        </Grid>
      </Stack>
      <Center>
        <Box {...boxStyle.hugeBox}>{translation('hugeBox')}</Box>
      </Center>
    </Container>
  </Box>
)

