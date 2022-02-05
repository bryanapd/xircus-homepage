import { 
  Box, Text, Container, Divider, Image, Tabs,
  TabList, TabPanels, Tab, TabPanel, Heading, Stack
} from '@chakra-ui/react'
import { containerStyle, tabsStyle, typoStyle, imageStyle } from '../../styles/globalStyle'

export const Deploy = ({ title = 'What Can You Deploy?', items = []}) => (
  <Box pt={100}>
    <Container {...containerStyle.full} centerContent>
      <Heading {...typoStyle.title}>{title}</Heading>
      <Stack pt={10}>
        <Tabs {...tabsStyle}>
          <TabList flex={1}>
            {items.map((item, i) => (
              <Box p={3}>
                <Tab {...typoStyle.subheadline}>{item.label}</Tab>
                <Divider />
              </Box>
            ))}
          </TabList>
          <TabPanels flex={3}>
            {items.map((item, i) => (
              <TabPanel>
                <Image {...imageStyle.deploy} src={item.image} />
              </TabPanel>
            ))}
          </TabPanels>
        </Tabs>
      </Stack>
    </Container>
  </Box>
  
)