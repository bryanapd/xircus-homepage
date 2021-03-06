export const logoStyle = {
  header: {
    boxSize: '30px',
    borderRadius: 'full',
    cursor: 'pointer',
  }
}
export const typoStyle = {
  header: {
    fontSize: 'xl',
    color: 'orange',
    cursor: 'pointer'
  },
  headline: {
    fontSize: {base: 40, md: 55, lg: 60},
    fontWeight: 700,
  },
  subheadline: {
    fontSize: 20,
    fontWeight: 700
  },
  title: {
    fontSize: 35,
    fontWeight: 700
  },
  label: {
    fontSize: 18,
  },
  sublabel: {
    color: 'gray.200',
    fontSize: 14,
    price: {
      color: 'tomato',
      fontSize: 15,
      fontWeight: 'bold'
    }
  },
  text: {
    fontSize: 10
  },
  cycle: {
    pos: 'relative', 
    top: 100
  }
}
export const boxStyle = {
  index: {
    bgImg: 'https://uce12fe64a2327de4f90bd2dd634.previews.dropboxusercontent.com/p/thumb/ABaWqz7S8B3W0XjybzVFe2NzkfwOZMDJl2lv1yr7fy3KBTgvyioYfsCJU_Jafc-ioTBHHO9Zz7szUkbMClfz1W_2H099eniFvjawvHu6SgtA3Tbtb7cMq7RXqvvxi3Dr9Fphh99Qnkba8l1R3zibtGPpF0NeTOOCTfq289hSdKRv2k4dpZvSERSy-c9JHa69_WOy7ySN_xvTiiofIt1NC4EjbXLWo3VE-lxtW4jVRVLUxnlZYiGES0S4RDTm7FeiSg5Mt3mkFG73_8ZjhnRdPw5Qm9pgCJC2NrFJW3-m5I_N2HGc46VWo5ewnHOPfJTnqP8gpsOvZqgSJvcA7nB04YVtV3VMp3OBQ28D938ri44DQT_jSXRBRMczfiKRE3-2qHs/p.png',
    bgRepeat: 'no-repeat',
    bgSize: 'cover',
    color: 'white',
  },
  header: {
    spacing: 5, 
    display: { base: 'none', md: 'flex' }
  },
  headerLinks: {
    as: 'nav',
    spacing: 4,
    align: 'flex-end'
  },
  hero: {
    p: 10,
    textAlign: 'center',
  },
  heroItems: {
    align: 'center', 
    spacing: 5
  },
  products: {
    pt: 100,
    textAlign: { base: 'center', md: 'left'}
  },
  heroButtons: {
    display: {base: 'column', md: 'flex'}, 
  },
  partners: {
    pt: 20,
    wrap: 'wrap',
    display: {base: 'column', md: 'flex', lg: 'flex'},
    mx: 'auto', 
    align: 'center',
    justify: 'center',
    textAlign: 'center',
    justifyContent: {base: 'center', md:'space-between'}
  },
  cycle: {
    align: 'center', 
    textAlign: 'center',
    py: 20, 
    spacing: 8,
  },
  hugeBox: {
    p: 10,
    w: '80%',
    textAlign: 'center',
    borderRadius: { base: 0, md: 100},
    border: '4px solid orange',
    cursor: 'pointer',
    _hover: { 
      transform: 'scale(1.05)', 
      transition: '0.5s ease' 
    }
  },
  earn: {
    p: 10,
    mt: 100,
    textAlign: 'center',
  },
  tutorial: {
    mt: 30,
    pos: 'relative',
    mx: 'auto',
    align: 'center',
    textAlign: 'center',
    zIndex: 10
  },
  clipped: {
    w: 'full',
    bg: 'green.200',
    h: {base: '80vh', md: '100vh'},
    pos: 'absolute', 
    zIndex: -1,
    bgGradient: 'linear(to-r, #91EAE4, #86A8E7, #7F7FD5)',
    clipPath: 'polygon(0 0, 100% 6%, 100% 100%, 0 95%)'
  },
  blockchain: {
    p: 10,
    mt: 100,
    textAlign: 'center'
  },
  feature: {
    p: 10,
    mt:100,
    textAlign: 'center'
  },
  income: {
    display: {base: 'column', md: 'flex'},
    justify: 'center'
  },
  incomeUnorderedItems: {
    spacing: 5, 
    flex: 2,
    pt: 100,
    textAlign: {base: 'center', md: 'left'}
  },
  fees: {
    justifyContent: {base: 'center', md: 'space-between'},
    justify: { base: 'center', md: 'left' },
    // display: {base: 'block', md: 'flex'},
    wrap: 'wrap'
  }
}
export const containerStyle = {
  maxW: {base: 'full', md: 'container.lg'},
  full: {
    maxW: 'full'
  }
}

export const gridStyle = {
  product: {
    gap: 5,
    templateColumns: {base: 'auto', md: 'repeat(4, 1fr)'}
  },
  cycle: {
    gap: 5, 
    templateColumns: {base: 'auto', md: 'repeat(2, 1fr)', lg: 'repeat(4, 1fr)'}
  },
  earn: {
    gap: 5, 
    pt: 10, 
    templateColumns: {base: 'auto', md: 'repeat(2, 1fr)'}
  },
  blockchain: {
    pt: 50,
    gap: 10,
    templateColumns: {base: 'repeat(2, 1fr)', md: 'repeat(4, 1fr)', lg: 'repeat(9, 1fr)'}
  },
  footerLinks: {
    templateColumns: {base: 'repeat(2, 1fr)', md: 'repeat(4, 1fr'}
  }

}
export const buttonStyle = {
  headerButton: {
    size: 'md',
    bg: 'transparent',
    cursor: 'pointer',
    display: { md: 'none' },
    _hover: { 
      boxShadow: '0px 0px 10px orange', bg: '#111', 
      bgGradient: 'linear(to-l, #8a2387, #e94057, #f27121)',
    },
    _focus: { 
      boxShadow: '0px 0px 10px orange', bg: '#111', 
      bgGradient: 'linear(to-l, #8a2387, #e94057, #f27121)' 
    },
    _active: { 
      boxShadow: '0px 0px 10px orange', bg: '#111', 
      bgGradient: 'linear(to-l, #8a2387, #e94057, #f27121)' 
    }
  },
  links: {
    variant: 'ghost',
    borderRadius: 50,
    fontWeight: 'thin',
    cursor: 'pointer',
    _hover: { 
      boxShadow: '0px 0px 10px orange', bg: '#111', 
      bgGradient: 'linear(to-l, #8a2387, #e94057, #f27121)',
    },
    _focus: { 
      boxShadow: '0px 0px 10px orange', bg: '#111', 
      bgGradient: 'linear(to-l, #8a2387, #e94057, #f27121)' 
    },
    _active: { 
      boxShadow: '0px 0px 10px orange', bg: '#111', 
      bgGradient: 'linear(to-l, #8a2387, #e94057, #f27121)' 
    }
  },
  gradient: {
    color: 'white',
    transition: 'all 300ms ease',
    rounded: 'full',
    borderRadius: '6px',
    p: 8,
    my: 5,
    fontSize: 14,
    bgGradient: 'linear(to-l, #8a2387, #e94057, #f27121)',
    _hover: { 
      boxShadow: '0px 0px 10px orange', bg: '#111', 
      bgGradient: 'linear(to-l, #8a2387, #e94057, #f27121)' 
    },
    _focus: { 
      boxShadow: '0px 0px 10px orange', bg: '#111', 
      bgGradient: 'linear(to-l, #8a2387, #e94057, #f27121)' 
    },
    _active: { 
      boxShadow: '0px 0px 10px orange', bg: '#111', 
      bgGradient: 'linear(to-l, #8a2387, #e94057, #f27121)' 
    }
  },
  menu: {
    color: 'white',
    transition: 'all 300ms ease',
    rounded: 'full',
    border: '1px solid red',
    variant: 'outline',
    fontWeight: 'thin',
    cursor: 'pointer',
    w: '120px',
    size: 'md',
    _hover: { 
      boxShadow: '0px 0px 10px orange', bg: '#111', bgGradient: 'linear(to-l, #8a2387, #e94057, #f27121)' 
    },
    _focus: { 
      boxShadow: '0px 0px 10px orange', bg: '#111', bgGradient: 'linear(to-l, #8a2387, #e94057, #f27121)' 
    },
    _active: { 
      boxShadow: '0px 0px 10px orange', bg: '#111', bgGradient: 'linear(to-l, #8a2387, #e94057, #f27121)' 
    },
  },
  
}
export const menuItemStyle = {
  fontSize: 14,
  fontWeight: 700
}

export const itemCardStyle = {
  product: {
    cursor: 'pointer',
    p: 7,
    spacing: 3, 
    borderRadius: 10,
    bgColor: 'gray.900',
    _hover: { 
      transform: 'scale(1.05)', 
      transition: '0.5s ease' 
    }
  },
  earn: {
    textAlign: 'left',
    cursor: 'pointer',
    _hover: { 
      transform: 'scale(1.05)', 
      transition: '0.5s ease' 
    }
  },
  attributes: {
    p: 7,
    spacing: 3, 
    borderRadius: 10,
    textAlign: {base: 'center', md: 'left'},
    cursor: 'pointer',
    _hover: { 
      transform: 'scale(1.05)', 
      transition: '0.5s ease' 
    }
  },
  cycle: {
    cursor: 'pointer',
    pos: 'relative',
    h: '180px', 
    w: {base: 'auto', md: '250px'}, 
    p: 3,
    borderRadius: 10, 
    textAlign: 'center', 
    bgGradient: 'linear(to-t, #160D08, #cc2b5e)',
    _hover: { 
      transform: 'scale(1.05)', 
      transition: '0.5s ease' 
    }
  },
  feature: {
    align: 'center', 
    border: "1px solid gray",
    borderRadius: 10,
    cursor: 'pointer',
    _hover: { 
      transform: 'scale(1.05)', 
      transition: '0.5s ease' 
    }
  }
}
export const linkStyle = {
  px: 2,
  py: 1,
  rounded: 'md'
}
export const playButtonStyle = {
  bg: 'white', 
  color: 'red', 
  p: 5, 
  cursor: 'pointer',
  borderRadius: 50, 
  fontSize: 60,
  _hover: { 
    color: 'white',
    boxShadow: '0px 0px 10px orange', bg: '#111', 
    bgGradient: 'linear(to-l, #8a2387, #e94057, #f27121)' 
  },
}
export const imageStyle = {
  product: {
    h: '120px',
    w: '120px',
    mx: {base: 'auto', md: 'initial'}
  },
  attribute: {
    h: '120px',
    w: '120px',
    mx: {base: 'auto', md: 'initial'}
  },
  partners: {
    mx: 'auto',
    h: '40px',
  },
  cycle: {
    h: '120px',
    mx: 'auto', 
    left: '0', 
    right: '0',
    top: -10, 
    pos: 'absolute'
  },
  blockchains: {
    h: '50px', 
    w: 'auto',
    objectFit: 'contain',
    cursor: 'pointer',
    _hover: { 
      transform: 'scale(1.09)', 
      transition: '0.5s ease' 
    }

  },
  tutorial: {
    mx: 'auto', 
    h: {base: 300, md: 500},  
    objectFit: 'cover',
    cursor: 'pointer'
  },
  skins: {
    h: {base: '90vh', md: '700px'}, 
    w: {base: 'auto', md: '800px'},
    objectFit: 'cover',
    cursor: 'pointer',
    _hover: { 
      transform: 'scale(1.02)', 
      transition: '0.5s ease' 
    }
  }
}
export const tabsStyle = {
  orientation: 'vertical',
  variant: 'unstyled',
  display:'flex',
  flexDirection:{base:'column', lg:'row'},
  wrap: 'wrap',
}
export const tutorialTabs = {
  variant: 'unstyled', 
  defaultIndex: 1,
  align: 'center',
  cursor: 'pointer',
}
export const progressStyle = {
  size: 'xs', 
  colorScheme: 'gray', 
  value: 20
}
export const footerStyle = {
  justifyContent: 'center',
  align: 'center',
  direction: { base: 'column', md: 'row' },
  socmed: {
    justifyContent: 'space-between',
    cursor: 'pointer',
    _hover: { 
      transform: 'scale(1.05)', 
      transition: '0.5s ease' 
    }
  },
  links: {
  }
}
export const ulListStyle = {
  spacing: 2,
  px: 5, 
  listStyleType: {base: 'none', md: 'initial'}
}
export const sliderStyle = {
  slider: {
    defaultValue: 20, 
    min: 0,
    max: 300, 
    step: 5
  },
  thumb: {
    bg: '#FF0099', 
    boxSize: 3
  },
  track: {
    bg: 'tomato'
  },
  sliderBox: {
    pos: 'relative',
    right: 10
  },
  filled: {
    bg: '#FF0099'
  }
}
export const drawerContentStyle = {
  bg: 'white',
  pt: 10
}
export const drawerStyle = {
  placement: 'right',
  size: 'md'
}