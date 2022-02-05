import { 
  Box, Stack, Flex, Heading, Text, UnorderedList, 
  ListItem, Container, Progress, Divider, Spacer, 
  HStack, Slider, SliderFilledTrack, SliderTrack,
  SliderThumb 
} from '@chakra-ui/react'
import { 
  boxStyle, containerStyle, typoStyle, sliderStyle,
  incomeUnorderedItems, ulListStyle
} from '../../styles/globalStyle'

export const Income = ({ translation, items = [], fees = []}) => (
  <Box>
    <Container {...containerStyle}>
      <Flex {...boxStyle.income}>
        <Stack {...boxStyle.incomeUnorderedItems}>
          <Heading {...typoStyle.title}>{translation('title')}</Heading>
          <UnorderedList {...ulListStyle}>
            {items.map((item, itemKey) => (<ListItem {...typoStyle.sublabel}>{item}</ListItem>))}
          </UnorderedList>
        </Stack>
        <Stack {...boxStyle.incomeUnorderedItems}>
          <Stack>
            <Heading {...typoStyle.label}>{translation('title')}</Heading>
            <Text {...typoStyle.text}>{translation('subLabel')}</Text>
          </Stack>
          <Divider />
          <Heading {...typoStyle.label}>{translation('label')}</Heading>
          <Slider {...sliderStyle.slider}>
            <SliderTrack {...sliderStyle.track}>
              <Box {...sliderStyle.sliderBox} />
              <SliderFilledTrack {...sliderStyle.filled} />
            </SliderTrack>
            <SliderThumb {...sliderStyle.thumb} />
          </Slider>
          <Flex>
            <Heading {...typoStyle.label}>{translation('oDollar')}</Heading>
            <Spacer />
            <Heading {...typoStyle.label}>{translation('hDollar')}</Heading>
          </Flex>
          <HStack {...boxStyle.fees}>
            { 
              fees.map((fee, feeKey) => (
                <Box key={feeKey}>
                  <Text {...typoStyle.sublabel}>{fee.label}</Text>
                  <Text {...typoStyle.sublabel.price}>{fee.price}</Text>
                </Box>
              ))
            }
          </HStack>
        </Stack>
      </Flex>
    </Container>
  </Box>
)

