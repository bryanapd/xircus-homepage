import { useTranslations } from "next-intl";
import { Box } from '@chakra-ui/react'
import { boxStyle } from "../styles/globalStyle";
import { FaFacebookF , FaTelegram, FaYoutube, FaGitter, FaTwitter, FaLinkedin } from 'react-icons/fa'
import { 
  Header, Hero, Cycle, Products, Earn, Deploy, Tutorial, 
  BlockchainSupport, Attributes, Features, Income, Footer, 
  Partners
} from '../components/'

import partners from '../data/partners.json'
import cycle from '../data/cycles.json'
import products from '../data/products.json'
import earn from '../data/earn.json'
import attributes from '../data/attributes.json'
import skins from '../data/skins.json'
import tabs from '../data/tabs.json'
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
  const productsTranslations = useTranslations('products')
  const earnTranslations = useTranslations('earn')
  const deployTranslations = useTranslations('deploy')
  const tutorialTranslations = useTranslations('tutorial')
  const blockchainsTranslations = useTranslations('blockchains')
  const featuresTranslations = useTranslations('features')
  const incomeTranslations = useTranslations('income')
  const footerTranslation = useTranslations('footer')

  return (
   <Box {...boxStyle.index}>

    <Header src={appIcon} translation={headerTranslations} />
    <Hero src={appIcon} translation={heroTranslations} />
    <Partners items={partners}/>
    <Cycle cycles={cycle} translation={cycleTranslations} />
    <Products items={products} translation={productsTranslations} />
    <Earn items={earn} translation={earnTranslations}/>
    <Attributes earn={attributes}/>
    <Deploy items={skins} translation={deployTranslations} />
    <Tutorial tabs={tabs} translation={tutorialTranslations}/>
    <BlockchainSupport items={blockchains} translation={blockchainsTranslations} />
    <Features features={features} translation={featuresTranslations} />
    <Income items={income} fees={fees} translation={incomeTranslations}/>
    <Footer socmed={socmed} translation={footerTranslation} />

   </Box>
  )
}
