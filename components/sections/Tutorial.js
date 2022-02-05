import { 
  Box, Tabs, TabList, Tab, Image, Heading, 
  Container, TabPanels, TabPanel, Stack
} from '@chakra-ui/react'
import { boxStyle, containerStyle, imageStyle, tutorialTabs } from '../../styles/globalStyle'

export const Tutorial = ({ title = 'Easy Steps To Get Started', tabs = [], }) => (
  <Stack {...boxStyle.tutorial}>
    <Box {...boxStyle.clipped} />
    <Container {...containerStyle.full} centerContent>
      <Heading pt={20} pb={5}>{title}</Heading>
      <Tabs {...tutorialTabs}>

        <TabList>
          {tabs.map((tab, index) => ( <Tab>{tab.label}</Tab>))}
        </TabList>

        <TabPanels>
          { tabs.map((panel, index) => (<TabPanel {...panel}><Image {...imageStyle.tutorial} src={panel.image}/></TabPanel>)) }
        </TabPanels>

      </Tabs>
    </Container>
  </Stack>
)