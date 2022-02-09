import { 
  Box, Tabs, TabList, Tab, Image, Heading, 
  Container, TabPanels, TabPanel, Stack
} from '@chakra-ui/react'
import { boxStyle, containerStyle, imageStyle, tutorialTabs } from '../../styles/globalStyle'

export const Tutorial = ({ cardTranslation, translation, tutorial = [], }) => (
  <Stack {...boxStyle.tutorial}>
    <Box {...boxStyle.clipped} />
    <Container {...containerStyle.full} centerContent>
      <Heading pt={20} pb={5}>{translation('title')}</Heading>
      <Tabs {...tutorialTabs}>

        <TabList>
          { tutorial.map((tutorial, tabKey) => ( <Tab key={tabKey}>{cardTranslation(tutorial.label)}</Tab>)) }
        </TabList>

        <TabPanels>
          { tutorial.map((panel, tabKey) => (<TabPanel key={tabKey} {...panel}><Image {...imageStyle.tutorial} src={panel.image}/></TabPanel>)) }
        </TabPanels>

      </Tabs>
    </Container>
  </Stack>
)