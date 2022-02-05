import { 
  Box, Text, Spacer, Heading, Container, 
  HStack, Image, useDisclosure, 
  Stack, IconButton, Link, Select,
 } from '@chakra-ui/react'
import { 
  ChevronDownIcon, HamburgerIcon, CloseIcon 
} from '@chakra-ui/icons'
import { 
  boxStyle, buttonStyle, containerStyle, linkStyle, 
  typoStyle, logoStyle, 
} from '../../styles/globalStyle'
import Router from 'next/router'

const AppLogo = ({ src }) => (
  <Image {...logoStyle.header} src={src} />
)

const NavLink = ({ children }) => (
  <Link {...linkStyle} href="#">{ children }</Link>
)
const Filter = () => (
  <Select {...buttonStyle.menu} defaultValue="en" rightIcon={<ChevronDownIcon />} onChange={e => Router.push('/', '/', { locale: e.target.value })}>
    <option value="en">English</option>
    <option value="jp">Japanese</option>
  </Select>
)
export const Header = ({ src, translation }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <Box>
      <Container {...containerStyle}>
        <HStack spacing={3}>
          <AppLogo src={src} />
          <Heading {...typoStyle.header}>{translation('name')}</Heading>
          <Spacer />
          <HStack {...boxStyle.header}>
            <HStack {...boxStyle.header}>
              <Text>{translation('features')}</Text>
              <Text>{translation('getStarted')}</Text>
              <Text>{translation('howToEarn')}</Text>
            </HStack>
            <Filter />
          </HStack>
          <IconButton
            {...buttonStyle.headerButton}
            icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
            onClick={isOpen ? onClose : onOpen} />
        </HStack>
        
        {isOpen ? (
          <Box display={{ md: 'none' }}>
            <Stack {...boxStyle.headerLinks}>
              {links.map((link) => (
                <NavLink key={link}>{link}</NavLink>
              ))}
              <Filter />
            </Stack>
          </Box>
        ) : null}
      </Container>  
    </Box>
  )
  
}