import { 
  Box, Text, Spacer, Heading, Container, 
  HStack, Image, useDisclosure, Button,
  Stack, IconButton, Link, Select,
  Drawer, DrawerBody, DrawerContent, DrawerOverlay
 } from '@chakra-ui/react'
import { 
  ChevronDownIcon, HamburgerIcon, CloseIcon 
} from '@chakra-ui/icons'
import { 
  boxStyle, buttonStyle, containerStyle, linkStyle, 
  typoStyle, logoStyle, drawerContentStyle, drawerStyle
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
const MobileDrawer = ({ children, isOpen, onClose }) => (
  <Drawer {...drawerStyle} isOpen={isOpen} onClose={onClose}>
    <DrawerOverlay />
    <DrawerContent {...drawerContentStyle}>
      <DrawerBody>{ children }</DrawerBody>
    </DrawerContent>
  </Drawer>
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
              <Button {...buttonStyle.links}>{translation('features')}</Button>
              <Button {...buttonStyle.links}>{translation('getStarted')}</Button>
              <Button {...buttonStyle.links}>{translation('howToEarn')}</Button>
            </HStack>
            <Filter />
          </HStack>
          <IconButton
            {...buttonStyle.headerButton}
            icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
            onClick={isOpen ? onClose : onOpen}
            >
            </IconButton>
        </HStack>
        
        {isOpen ? (
          <Box>
            <Stack {...boxStyle.headerLinks}>
              <Button {...buttonStyle.links}>{translation('features')}</Button>
              <Button {...buttonStyle.links}>{translation('getStarted')}</Button>
              <Button {...buttonStyle.links}>{translation('howToEarn')}</Button>
              <Filter />
            </Stack>
          </Box>
        ) : null}
      </Container>  
    </Box>
  )
  
}