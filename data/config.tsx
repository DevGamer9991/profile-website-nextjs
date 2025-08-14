import { Button } from '@chakra-ui/react'
import { Link } from '@saas-ui/react'
import { NextSeoProps } from 'next-seo'
import { FaGithub, FaInstagram, FaTwitter } from 'react-icons/fa'
import { FiCheck } from 'react-icons/fi'
import { Logo } from './logo'
import { Em } from '#components/typography'

const siteConfig = {
  logo: Logo,
  seo: {
    title: <Em>Parker Thornton</Em>,
    description: 'Backend Developer, and Automotive Photographer',
  } as NextSeoProps,
  termsUrl: '#',
  privacyUrl: '#',
  header: {
    links: [
      // {
      //   id: 'features',
      //   label: 'Features',
      // },
      // {
      //   id: 'pricing',
      //   label: 'Pricing',
      // },
      // {
      //   id: 'faq',
      //   label: 'FAQ',
      // },
      {
        label: 'Contact Me',
        href: '/contact',
      },
      {
        label: 'View Github',
        href: 'https://github.com/DevGamer9991',
        variant: 'primary',
      },
    ],
  },
  footer: {
    copyright: (
      <>
        Modified By Parker Thornton<br />
        Template Built by{' '}
        <Link href="https://twitter.com/Pagebakers">Eelco Wiersma</Link>
      </>
    ),
    links: [
      {
        href: 'mailto:pathornton114@gmail.com',
        label: 'Contact',
      },
      {
        href: 'https://instagram.com/DevGamer9991',
        label: <FaInstagram size="14" />
      },
      {
        href: 'https://x.com/Dev_Gamer9991',
        label: <FaTwitter size="14" />,
      },
      {
        href: 'https://github.com/saas-js/saas-ui',
        label: <FaGithub size="14" />,
      },
    ],
  },
  signup: {
    title: 'Start building with Saas UI',
    features: [
      {
        icon: FiCheck,
        title: 'Accessible',
        description: 'All components strictly follow WAI-ARIA standards.',
      },
      {
        icon: FiCheck,
        title: 'Themable',
        description:
          'Fully customize all components to your brand with theme support and style props.',
      },
      {
        icon: FiCheck,
        title: 'Composable',
        description:
          'Compose components to fit your needs and mix them together to create new ones.',
      },
      {
        icon: FiCheck,
        title: 'Productive',
        description:
          'Designed to reduce boilerplate and fully typed, build your product at speed.',
      },
    ],
  },
}

export default siteConfig
