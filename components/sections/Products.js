import { 
  Box, Container, Heading, Text, Stack, Grid, 
  Image 
} from '@chakra-ui/react'
import { 
  boxStyle, typoStyle, imageStyle, gridStyle, 
  itemCardStyle, 
  containerStyle
} from '../../styles/globalStyle'
const ItemCard = ({ children }) => (
  <Stack {...itemCardStyle.product}>
    { children }
  </Stack>
)
export const Products = ({ translation, cardTranslation, items = [] }) => (
  <Box {...boxStyle.products}>
    <Container {...containerStyle}>
      <Heading pb={10}>{translation('title')}</Heading>
      <Grid {...gridStyle.product}>
        {items.map((item, itemKey) => 
        <ItemCard key={itemKey} {...item}>
          <Image {...imageStyle.product} src={item.image} />
          <Heading {...typoStyle.label}>{cardTranslation(item.label)}</Heading>
          <Text {...typoStyle.sublabel}>{cardTranslation(item.sublabel)}</Text>
        </ItemCard>)}
      </Grid>
    </Container>
  </Box>
)