import { 
  Box, Text, Container, Stack, Heading,
  Button, HStack, Center, Image
} from '@chakra-ui/react'
import { ArrowRightIcon } from '@chakra-ui/icons'
import { 
  boxStyle, buttonStyle, typoStyle, playButtonStyle,
  containerStyle, imageStyle
} from '../../styles/globalStyle'

export const Hero = ({ src, translation }) => {
  return(
    <Box {...boxStyle.hero}>
      <Container {...containerStyle} >
        <Stack {...boxStyle.heroItems}>
          <Image h={50} src={src}/>
          <Heading {...typoStyle.headline}>{translation('name')}</Heading>
          <Heading {...typoStyle.headline}>{translation('headLine')}</Heading>
          <Text {...typoStyle.subheadline}>{translation('subHeadLine')}</Text>
          <ArrowRightIcon {...playButtonStyle} />
          <HStack {...boxStyle.heroButtons}>
            <Button {...buttonStyle.gradient}>{translation('deploy')}</Button>
            <Button {...buttonStyle.gradient}>{translation('punks')}</Button>
          </HStack>
        </Stack>
      </Container>
    </Box>
  )
}