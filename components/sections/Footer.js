import { Box, HStack, Spacer, Container, Stack, Text, Grid} from '@chakra-ui/react'
import { containerStyle, typoStyle, footerStyle } from '../../styles/globalStyle'

export const Footer = ({ translation, socmed = []}) => (
  <Box pt={100}>
    <Container {...containerStyle}>
      <Stack {...footerStyle}>
        <Text {...typoStyle.text}>{translation('name')}</Text>
        <Spacer />
        <HStack {...footerStyle.socmed} spacing={3}>
          {socmed.map((sm, i) => (
            <Text>{sm}</Text>
          ))}
        </HStack>
        <Spacer />
        <HStack {...footerStyle.links} spacing={3}>
          <Text {...typoStyle.text}>{translation('blog')}</Text>
          <Text {...typoStyle.text}>{translation('resources')}</Text>
          <Text {...typoStyle.text}>{translation('terms')}</Text>
          <Text {...typoStyle.text}>{translation('privacy')}</Text>
          <Text {...typoStyle.text}>{translation('contactUs')}</Text>
        </HStack>
      </Stack>
    </Container>
  </Box>
)