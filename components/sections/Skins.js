import { 
  Box, Text, Container, Divider, Image, Tabs,
  TabList, TabPanels, Tab, TabPanel, Heading, Stack
} from '@chakra-ui/react'
import { containerStyle, tabsStyle, typoStyle, imageStyle } from '../../styles/globalStyle'

export const Skins = ({ translation, cardTranslation, items = []}) => (
  <Box pt={100}>
    <Container {...containerStyle.full} centerContent>
      <Heading {...typoStyle.title}>{translation('title')}</Heading>
      <Stack pt={10}>
        <Tabs {...tabsStyle}>
          <TabList flex={1}>
            {items.map((item, i) => (
              <Box p={3}>
                <Tab {...typoStyle.subheadline}>{cardTranslation(item.label)}</Tab>
                <Divider />
              </Box>
            ))}
          </TabList>
          <TabPanels flex={3}>
            {items.map((item, i) => (
              <TabPanel>
                <Image {...imageStyle.skins} src={item.image} />
              </TabPanel>
            ))}
          </TabPanels>
        </Tabs>
      </Stack>
    </Container>
  </Box>
  
)