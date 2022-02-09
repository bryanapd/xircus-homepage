import { 
  Box, Text, Grid, Container, Button, Image,
  Heading, Stack
} from '@chakra-ui/react'
import { 
  boxStyle, containerStyle, gridStyle, imageStyle, 
  itemCardStyle, typoStyle 
} from '../../styles/globalStyle'

const FeatureCard = ({ children, gradient }) => (
  <Stack bgGradient={gradient} {...itemCardStyle.attributes}>
    {children}
  </Stack>
)

export const Attributes = ({attributes = [], cardTranslation }) => (
  <Container {...containerStyle} pt={200}>
    <Grid {...gridStyle.product}>
      {
        attributes.map((attribute, attributeKey) => 
          <FeatureCard key={attributeKey} gradient={attribute.bg}>
            <Image {...imageStyle.attribute} src={attribute.image} />
            <Heading {...typoStyle.label}>{cardTranslation(attribute.label)}</Heading>
            <Text {...typoStyle.sublabel}>{cardTranslation(attribute.sublabel)}</Text>
          </FeatureCard>
        )
      }
    </Grid>
  </Container>
)
