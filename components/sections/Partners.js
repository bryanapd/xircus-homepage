import { Box, Stack, HStack, Image, Container, Heading } from '@chakra-ui/react'
import { 
  boxStyle, containerStyle, itemCardStyle, typoStyle,
  imageStyle
} from '../../styles/globalStyle'


export const Partners = ({ items = [] }) => (
  <Box>
    <Container {...containerStyle}>
      <HStack {...boxStyle.partners}>
        <Heading {...typoStyle.subheadline}>As Seen On</Heading>
        { items.map((item, itemKey) => (
          <Box p={2}>
            <Image {...imageStyle.partners} src={item} />
          </Box>
          )
        )}
      </HStack>
    </Container>
  </Box>
  
)