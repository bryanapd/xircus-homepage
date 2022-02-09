import { Box, Text, Heading, Stack, Image, Container } from '@chakra-ui/react'
import { boxStyle, containerStyle, itemCardStyle, typoStyle } from '../../styles/globalStyle'

import Carousel from 'react-elastic-carousel';

const FeatureCard = ({label, src}) => (
  <Box {...itemCardStyle.feature}>
    <Image objectFit="cover" src={src} />
    <Text {...typoStyle.label}>{label}</Text>
  </Box>
)
export const Features = ({ cardTranslation, translation, features = [] }) => {
  const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 550, itemsToShow: 2, itemsToScroll: 2, pagination: false },
    { width: 850, itemsToShow: 4 },
  ]
  return (
    <Stack {...boxStyle.feature}>
      <Container {...containerStyle}>
        <Heading pb={20}>{translation('title')}</Heading>
        <Carousel breakPoints={breakPoints} itemsToShow={4} itemPadding={[5, 10]}>
          {features.map((feature, featureKey) => (
            <FeatureCard key={featureKey} src={feature.image} label={cardTranslation(feature.label)}/>
          ))}
        </Carousel>
      </Container>
    </Stack>
  )
}