import { Box, HStack, Spacer, Container, Stack, Text, Grid} from '@chakra-ui/react'
import { containerStyle, typoStyle, footerStyle } from '../../styles/globalStyle'

export const Footer = ({ title = 'All Rights Reserved 2021 | Xircus Pte. Ltd', socmed = [], links = []}) => (
  <Box pt={100}>
    <Container {...containerStyle}>
      <Stack {...footerStyle}>
        <Text {...typoStyle.text}>{title}</Text>
        <Spacer />
        <HStack {...footerStyle.socmed} spacing={3}>
          {socmed.map((sm, i) => (
            <Text>{sm}</Text>
          ))}
        </HStack>
        <Spacer />
        <HStack {...footerStyle.links} spacing={3}>
          {links.map((link, key) => (
            <Text {...typoStyle.text}>{link}</Text>
          ))}
        </HStack>
      </Stack>
    </Container>
  </Box>
)