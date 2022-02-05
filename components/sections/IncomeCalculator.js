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

export const Income = ({ title = 'Income Calculator', items = [], fees = []}) => (
  <Box>
    <Container {...containerStyle}>
      <Flex {...boxStyle.income}>
        <Stack {...boxStyle.incomeUnorderedItems}>
          <Heading {...typoStyle.title}>{title}</Heading>
          <UnorderedList {...ulListStyle}>
            {items.map((item, itemKey) => (<ListItem {...typoStyle.sublabel}>{item}</ListItem>))}
          </UnorderedList>
        </Stack>
        <Stack {...boxStyle.incomeUnorderedItems}>
          <Stack>
            <Heading {...typoStyle.label}>{title}</Heading>
            <Text {...typoStyle.text}>Example using 1,000,000 NFT items minted, paid with USDC</Text>
          </Stack>
          <Divider />
          <Heading {...typoStyle.label}>What's your marketplace mint fee?</Heading>
          <Slider {...sliderStyle.slider}>
            <SliderTrack {...sliderStyle.track}>
              <Box {...sliderStyle.sliderBox} />
              <SliderFilledTrack {...sliderStyle.filled} />
            </SliderTrack>
            <SliderThumb {...sliderStyle.thumb} />
          </Slider>
          <Flex>
            <Heading {...typoStyle.label}>$1</Heading>
            <Spacer />
            <Heading {...typoStyle.label}>$100</Heading>
          </Flex>
          <HStack {...boxStyle.fees}>
            { fees.map((fee, feeKey) => (
                <Box key={feeKey}>
                  <Text {...typoStyle.sublabel}>{fee.label}</Text>
                  <Text {...typoStyle.sublabel.price}>{fee.price}</Text>
                </Box>
              ))
            }
          </HStack>
          {/* <HStack spacing={10}>{labels.map((label, i) => (<Text {...typoStyle.sublabel}>{label}</Text>))}</HStack>
          <HStack spacing={10}>{sublabels.map((sub, i) => (<Text {...typoStyle.sublabel}>{sub}</Text>))}</HStack> */}
        </Stack>
      </Flex>
    </Container>
  </Box>
)

