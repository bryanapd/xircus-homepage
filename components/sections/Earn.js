import { 
  Box, Heading, Text, Grid, HStack, Stack,
  Container, Image, Avatar
 } from '@chakra-ui/react'
import { boxStyle, containerStyle, gridStyle, imageStyle, itemCardStyle, typoStyle } from '../../styles/globalStyle'

const EarnCard = ({ children, src }) => (
  <HStack textAlign="left">
    <Avatar src={src} />
    <Stack>
      {children}
    </Stack>
  </HStack>
)

export const Earn = ({ translation, items = []}) => (
  <Box {...boxStyle.earn}>
    <Container {...containerStyle}>
      <Stack spacing={8}>
        <Heading>{translation('title')}</Heading>
        <Text>{translation('subtitle')}</Text>
        <Grid {...gridStyle.earn}>
          {
            items.map((item, itemKey) => 
              <EarnCard src={item.image} key={itemKey}>
                <Heading {...typoStyle.label}>{item.label}</Heading>
                <Text {...typoStyle.text}>{item.sublabel}</Text>
              </EarnCard>
            )
          }
        </Grid>
      </Stack>
    </Container>
  </Box>
)