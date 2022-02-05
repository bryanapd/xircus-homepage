import { 
  Box, Text, Container, Stack, Heading,
  Button, HStack, Center, Image
} from '@chakra-ui/react'
import { ArrowRightIcon } from '@chakra-ui/icons'
import { 
  boxStyle, buttonStyle, typoStyle, playButtonStyle,
  containerStyle, imageStyle
} from '../../styles/globalStyle'

export const Hero = ({ src, title }) => {
  return(
    <Box {...boxStyle.hero}>
      <Container {...containerStyle} >
        <Stack align="center" spacing={5}>
          <Image h={50} src={src}/>
          <Heading {...typoStyle.headline}>{title}</Heading>
          <Heading {...typoStyle.headline}>Start your NFT business today!</Heading>
          <Text {...typoStyle.subheadline}>
            Deploy your customizable NFT marketplace in minutes <br /> 
            bundled with awesome features
          </Text>
          <ArrowRightIcon {...playButtonStyle} />
          <HStack {...boxStyle.heroButtons}>
            <Button {...buttonStyle.gradient}>Deploy Marketplace</Button>
            <Button {...buttonStyle.gradient}>Get XircusPunks for <br /> Early Access</Button>
          </HStack>
        </Stack>
      </Container>
    </Box>
  )
}