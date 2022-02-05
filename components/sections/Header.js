import { 
  Box, Text, Spacer, Heading, Container, 
  HStack, Menu, MenuItem, MenuButton, 
  Button, MenuList, Image, useDisclosure, 
  Stack, IconButton, Link,
 } from '@chakra-ui/react'
import { 
  ChevronDownIcon, HamburgerIcon, CloseIcon 
} from '@chakra-ui/icons'
import { 
  boxStyle, buttonStyle, containerStyle, linkStyle, 
  typoStyle, logoStyle, menuItemStyle 
} from '../../styles/globalStyle'


const AppLogo = ({ src }) => (
  <Image {...logoStyle.header} src={src} />
)

const NavLink = ({ children }) => (
  <Link {...linkStyle} href="#">{ children }</Link>
)

const FilterMenu = ({ filterName, options = [] }) => (
  <Menu>
    <MenuButton {...buttonStyle.menu} as={Button} rightIcon={<ChevronDownIcon />}>
      {filterName}
    </MenuButton>
    <MenuList>
      {options.map(option => <MenuItem {...menuItemStyle} {...option} key={option.key}>{option.label}</MenuItem>)}
    </MenuList>
  </Menu>  
)

export const Header = ({ src, title = 'XIRCUS', links = [], selected, filters = [] }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <Box>
      <Container {...containerStyle}>
        <HStack spacing={3}>
          <AppLogo src={src} />
          <Heading {...typoStyle.header}>{title}</Heading>
          <Spacer />
          <HStack {...boxStyle.header}>
            <HStack {...boxStyle.header}>
              {links.map((link, linkItem) => <Text key={linkItem}>{link}</Text>)}
            </HStack>
            <FilterMenu filterName={selected} options={filters} />
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
              <FilterMenu filterName={selected} options={filters} />
            </Stack>
          </Box>
        ) : null}
      </Container>  
    </Box>
  )
  
}