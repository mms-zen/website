import { useState } from 'react'
import { 
  Link,
  Box, 
  HStack, 
  IconButton,
  Menu,
  Heading,
  MenuButton,
  MenuList,
  MenuItem,
  MenuItemOption,
  MenuGroup,
  MenuOptionGroup,
  MenuDivider,
  useMediaQuery,
  Container
} from '@chakra-ui/react'
import { GiHamburgerMenu } from "react-icons/gi"
import { DiGithubBadge } from "react-icons/di"

type NavLinkType = {
  to: string,
  children: any,
}

function NavLink({to, children} : NavLinkType) {
    return <a href={to} className={`mx-4`}>
        {children}
    </a>
}

function MobileNav() {
  return <Menu>
    <MenuButton as={IconButton} icon={<GiHamburgerMenu/>}>
      Action
    </MenuButton>
    <MenuList>
      <MenuItem icon={<DiGithubBadge/>}>View source</MenuItem>
    </MenuList>
  </Menu>
}

function DesktopNav() {
  return <HStack>
    <Box>
    </Box>
    <Box>
      <Link href="https://github.com/michalsapka/michal-sapka-pl">Source code</Link>
    </Box>
  </HStack>
}

function Navigation() {
   const [isMobile] = useMediaQuery("(max-width: 768px)")

  let navigationComponent = isMobile ? MobileNav : DesktopNav

  
  return <HStack as="nav">{navigationComponent()}</HStack>
}

export default function Navbar() {
  
  return <Box
    as="header"
    position="fixed"
    backdropFilter="auto" 
    backdropBlur="6px"
    width="100%"
    pt="5px"
  >
    <Container 
      maxW="xl"
      mt="0"
      mb="1"
    >
      <HStack>
        <Heading flex={[1,1,0,0]}>Michal </Heading>
        <Navigation/>
      </HStack>
    </Container>
  </Box>
}


