import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { Box, Text, Flex, Grid, Container } from '@chakra-ui/react'
import { FaFacebookF , FaTelegram, FaYoutube, FaGitter, FaTwitter, FaLinkedin} from 'react-icons/fa'
import { 
  Header, Hero, Cycle, Products, Earn,
  Deploy, Tutorial, BlockchainSupport,
  Attributes, Features, Income,
  Footer, Partners
} from '../components/'
import partners from '../data/partners.json'
import cycle from '../data/cycles.json'
import products from '../data/products.json'
import earn from '../data/earn.json'
import attributes from '../data/attributes.json'
import skins from '../data/skins.json'
export default function Home() {
  const routes = [
    'Features',
    'Get Started',
    'How To Earn',
  ]
  const languageList = [
    { key: 'recent', label: 'English', onClick: () => alert(`Changed to Success`)},   
  ]
  const tabs = [
    { label: 'Deploy a Marketplace', image: 'https://pbs.twimg.com/media/FIlpyp9XwAQLnwI?format=jpg&name=4096x4096'},
    { label: 'Deploy a Collection', image: 'https://miro.medium.com/max/1838/1*xEGjVP4uuTf3iNLLmS7ZOg.png'},
    { label: 'Mint an NFT', image: 'https://i.ytimg.com/vi/iFOuHRRsCjQ/maxresdefault.jpg'},
  ]
  const blockchains = [
    { image: 'https://cdn4.iconfinder.com/data/icons/cryptocoins/227/ETH-512.png', label: 'BSC' },
    { image: 'https://cdn4.iconfinder.com/data/icons/cryptocoins/227/ETH-512.png', label: 'POLYGON' }, 
    { image: 'https://cdn4.iconfinder.com/data/icons/cryptocoins/227/ETH-512.png', label: 'FANTOM' },
    { image: 'https://cdn4.iconfinder.com/data/icons/cryptocoins/227/ETH-512.png', label: 'ETHEREUM' },
    { image: 'https://cdn4.iconfinder.com/data/icons/cryptocoins/227/ETH-512.png', label: 'MOONBEAM' },
    { image: 'https://cdn4.iconfinder.com/data/icons/cryptocoins/227/ETH-512.png', label: 'MOONRIVER' },
    { image: 'https://cdn4.iconfinder.com/data/icons/cryptocoins/227/ETH-512.png', label: 'AVALANCHE' },
    { image: 'https://cdn4.iconfinder.com/data/icons/cryptocoins/227/ETH-512.png', label: 'CELO' },
    { image: 'https://cdn4.iconfinder.com/data/icons/cryptocoins/227/ETH-512.png', label: 'BSC' },
    { image: 'https://cdn4.iconfinder.com/data/icons/cryptocoins/227/ETH-512.png', label: 'POLYGON' }, 
    { image: 'https://cdn4.iconfinder.com/data/icons/cryptocoins/227/ETH-512.png', label: 'FANTOM' },
    { image: 'https://cdn4.iconfinder.com/data/icons/cryptocoins/227/ETH-512.png', label: 'ETHEREUM' },
    { image: 'https://cdn4.iconfinder.com/data/icons/cryptocoins/227/ETH-512.png', label: 'MOONBEAM' },
    { image: 'https://cdn4.iconfinder.com/data/icons/cryptocoins/227/ETH-512.png', label: 'MOONRIVER' },
    { image: 'https://cdn4.iconfinder.com/data/icons/cryptocoins/227/ETH-512.png', label: 'AVALANCHE' },
    { image: 'https://cdn4.iconfinder.com/data/icons/cryptocoins/227/ETH-512.png', label: 'CELO' },
  ]
  const features = [
    { label: 'Staking', image: 'https://ucce01d8e832e880935d37f593a5.previews.dropboxusercontent.com/p/thumb/ABYidcGJKKXmCLHH2lEatl7eNmWhpj3_4IwKoFgamF1tt1VMMQXi85YCQcUEkob_k_sWpH4hGh0p-DCfinKa4qKMavzFSfpBpi69rCI_jTUMapfGh2J0Zu1qltB1hj8K4ggG_dNX5txXle3SJHu4aFkuBjgluKMuO9fEjZyyJQ2xI51E-aTMv6Nh7mv6p_kC7ldjHnz4BvHYZJW7wYGKMHRFhz-QtI4oPs3sxe1REwIt9RenZfcf6SRtBDVRj4c9fJ7Y7pFfGy79JXKQmjkf_wCuYnIr22C97V3keJPG0mm2t6V517JSBVVOErsSoSV_27FwcrZ9m7KEOsFn_7-pIOFQcV5b_9vYRsLktSrsQlNB3NZRzCqO--DRE7BsARCgkdg/p.png'},
    { label: 'Randomizer', image: 'https://uc15355fbee4bdf7c8dc61f9cbed.previews.dropboxusercontent.com/p/thumb/ABbHEBdtNMYZEfUwyRkUap8FTT1dLauH39zZZmnSPhGR3l5uVKKdl7P06TBi571OmmZ_5qhwZLvOR9UxSnkqtmx30zhUXm12jYLeL4Su4ByEr_V2oXQB5dlQNDwXEE1d2JhCfQaoE6PyAi15gb4p_xVpih0j_4_LJ5FCHaUrE7YTZZhZX9bdGjrc1WhPuZADgMYsvEsiD4NNAsFDSTAeCM0lC19-oy3SbqpSNVsPOhB0qIx3__HbLdcmo0nAeBrq-CQ_R9wPlIOLtlVSxDxPJGWOzVEphLo-_iZJITQOAydxdQAot9uIX9DBa8X3yHBV1Xb8e1aXczV0e0NIb0BP_RdJDkUzgseMmIz3Ksr6m0SUCEcPjzwBI6m_Aj89zXz3Vc8/p.png'},
    { label: 'NFT Airdrop', image: 'https://ucc167f186c43e46efe3f9584b6c.previews.dropboxusercontent.com/p/thumb/ABaGYezkVmkhESSB6-cYLD2WW75Z2Svim5M5mRL152Z-EqGxNfdO2AXfsGJGy6Q04WIeW6b9zvi_GDKYZJ8skc4hu6d6ImBo-odxzVKXIXVmx5KtQEmJ9IpjwtjVhv0uWx1s5jchknrtg5A2Zm0DbEfzkt2Ier5DoWw_TvKqi3W04duEiFjFTVbs2R5r3qlTHtqmc2eDVS0HxJ9UkEyvK_Sh-iJmXp3FWUR6jSE27iR2yQWysmRJPVFl-R765Jnyg4euptFE31Os2KeAFDm79p5fdgDyV-MWmz-PReomc0PGTGUpYCEHkCvRhfnuTbI9nR81wDQ9XW92bvSGXBzdCy_dp-M-Nbl1Az9amPciWHE5REtKP3Bvi0wgh9W6cJ3ssBg/p.png'},
    { label: 'Token Auctions', image: 'https://ucb223ae6764305a7b8487193a5c.previews.dropboxusercontent.com/p/thumb/ABbaOODX2bP1Ll6WUQM1yvXymuuwJeYsM6uxdkWdREuh6q3E7DPdhX2RMQsPPokI4QfZxIrgom4_E6cy5MF4-g0R_fT76gzG5p1uF0o8a2frgHuLpNEHa2jMAy0Fjp9tWTSTSJuFvB7hAAW8inQ8vdydjGGhjJm-6czuxY4owBB0MpSC5d7GdR3YzMv-AoQhp0rolGQlRDzc6EIyDGIR2WJxB1C6vz-mKcU_1fFhF2yB227ICdhu9pDgLAmAQCt0uNrtSsWwuCS8KhpalcD-Q5MV3zUynHSyhsMvI9Fn7iC2fQDvU1RRzrPa_7KG-IunAP0MkwraHH7NazOqIkvJ7irMEn7i0-gWRirrhOV0xxEyYorj9EGXm1iVsgBLhjSmjDI/p.png'}
  ]
  const incomeItems = [
    'Get started for free', 'No hidden costs', '$1 mint fee only', 'Owner configured transaction fees starting at 2%', 'Not taking royalty fees'
  ]
  const fees = [
    { label: 'Marketplace Owner', price: '450,000 USDC' },
    { label: 'Data Provider', price: '100,000 USDC' },
    { label: 'Ambassador', price: '200,000 USDC' },
    { label: 'Xircus', price: '250,000 USDC' },
  ]
  const socmed = [<FaTelegram />, <FaFacebookF />, <FaTwitter />, <FaYoutube />, <FaGitter />, <FaLinkedin />]
  const footerLinks = [ 'Blog', 'Resources', 'Terms and Conditions', 'Privary', 'Contact Us']
  return (
   <Box bg="black" color="white" bgImg="https://uc8ac5cad72aace9f7230477192b.previews.dropboxusercontent.com/p/thumb/ABbEUEN-fWLNbzOMZvkPkTxJhBv2Wf2lLcglnO56cUfUFmuSoaNbYjYmYJ1C7VbMvs9NHrQ3wtjmH5j05k3Maq1fxFqMwP9qbiIYYoq6kVIDQWh1NH0fUrjEVDS1L6uUUC8SxHlChBU5OXie77L-yuL4P0M0VdpZJS3ZAohAKHX_hDelND-pQH-6M5JOu-YmhUhs6kMEe0gpGQkVkdKmjObkDkQKxmHFHCftkVIqAUvyoOZbzrVQ9Qap1sym3P_u4caGnhB00KbYTNnyHJVUkaM6rTn-96At6O-bgySbC4JX4i8zMgB3c7Lzj-rFOkHQo1L3Y5nWe_SDXXHZlXZuIs9vZ35NPfNFa9tpPIKMHvvX1iC_wxRJIAGr5wgbv4_ncqA/p.png">
    <Header filters={languageList} selected="English" links={routes} src="https://icoholder.com/files/img/6f7203a158209cb2e9143d6631cbb7c2.png" />
    <Hero 
      title="XIRCUS"
      src="https://icoholder.com/files/img/6f7203a158209cb2e9143d6631cbb7c2.png" 
      />
    <Partners items={partners}/>
    <Cycle cycles={cycle} />
    <Products items={products} />
    <Earn items={earn} subtitle="Unleash the power of decentralized NFT marketplaces" />
    <Attributes earn={attributes}/>
    <Deploy items={skins} />
    <Tutorial tabs={tabs}/>
    <BlockchainSupport items={blockchains} />
    <Features features={features} />
    <Income items={incomeItems} fees={fees}/>
    <Footer socmed={socmed} links={footerLinks} />
   </Box>
  )
}
