import { 
  Box, Text, Grid, Container, Button, Image,
  Heading, Stack
} from '@chakra-ui/react'
import { 
  boxStyle, containerStyle, gridStyle, imageStyle, 
  itemCardStyle, typoStyle 
} from '../../styles/globalStyle'

const FeatureCard = ({ children }) => (
  <Stack {...itemCardStyle.attributes}>
    {children}
  </Stack>
)

export const Attributes = ({earn = []}) => (
  <Container {...containerStyle} pt={200}>
    <Grid {...gridStyle.product}>
      {
        earn.map((earn, earnKey) => 
          <FeatureCard key={earnKey} {...earn}>
            <Image {...imageStyle.earn} src={earn.image} />
            <Heading {...typoStyle.label}>{earn.label}</Heading>
            <Text {...typoStyle.sublabel}>{earn.sublabel}</Text>
          </FeatureCard>
        )
      }
    </Grid>
  </Container>
)
