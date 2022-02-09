import { useTranslations } from "next-intl";
import { Box } from '@chakra-ui/react'
import { boxStyle } from "../styles/globalStyle";
import { FaFacebookF , FaTelegram, FaYoutube, FaGitter, FaTwitter, FaLinkedin } from 'react-icons/fa'
import { 
  Header, Hero, Cycle, Products, Earn, Deploy, Tutorial, 
  BlockchainSupport, Attributes, Features, Income, Footer, 
  Partners, Skins
} from '../components/'

import partners from '../data/partners.json'
import cycle from '../data/cycles.json'
import products from '../data/products.json'
import earn from '../data/earn.json'
import attributes from '../data/attributes.json'
import skins from '../data/skins.json'
import tutorial from '../data/tutorial.json'
import blockchains from '../data/blockchains.json'
import features from '../data/features.json'
import income from '../data/income.json'
import fees from '../data/fees.json'
export default function Home() {

  const appIcon = 'https://icoholder.com/files/img/6f7203a158209cb2e9143d6631cbb7c2.png'
  const socmed = [<FaTelegram />, <FaFacebookF />, <FaTwitter />, <FaYoutube />, <FaGitter />, <FaLinkedin />]

  const headerTranslations = useTranslations('header')
  const heroTranslations = useTranslations('hero')
  const cycleTranslations = useTranslations('cycle')
  const cycleCardTranlations = useTranslations('cycleCard')
  const productsTranslations = useTranslations('products')
  const productsCardTranslations = useTranslations('productsCard')
  const earnTranslations = useTranslations('earn')
  const eardCardTranslations = useTranslations('earnCard')
  const attributesCardTranslations = useTranslations('attributesCard')
  const skinsTranslations = useTranslations('skins')
  const skinsItemsTranslations = useTranslations('skinsItems')
  const tutorialTranslations = useTranslations('tutorial')
  const tutorialItemsTranslations = useTranslations('tutorialItems')
  const blockchainsTranslations = useTranslations('blockchains')
  const featuresTranslations = useTranslations('features')
  const featuresCardTranslations = useTranslations('featuresCard')
  const incomeTranslations = useTranslations('income')
  const incomeItemsTranslations = useTranslations('incomeItems')
  const footerTranslation = useTranslations('footer')

  return (
   <Box {...boxStyle.index}>

    <Header src={appIcon} translation={headerTranslations} />
    <Hero src={appIcon} translation={heroTranslations} />
    <Partners items={partners} />
    <Cycle cycles={cycle} translation={cycleTranslations} cardTranslation={cycleCardTranlations} />
    <Products items={products} translation={productsTranslations} cardTranslation={productsCardTranslations} />
    <Earn items={earn} translation={earnTranslations} cardTranslation={eardCardTranslations} />
    <Attributes attributes={attributes} cardTranslation={attributesCardTranslations} />
    <Skins items={skins} translation={skinsTranslations} cardTranslation={skinsItemsTranslations} />
    <Tutorial tutorial={tutorial} translation={tutorialTranslations} cardTranslation={tutorialItemsTranslations} />
    <BlockchainSupport items={blockchains} translation={blockchainsTranslations} />
    <Features features={features} translation={featuresTranslations} cardTranslation={featuresCardTranslations} />
    <Income items={income} fees={fees} translation={incomeTranslations} cardTranslation={incomeItemsTranslations} />
    <Footer socmed={socmed} translation={footerTranslation} />

   </Box>
  )
}
