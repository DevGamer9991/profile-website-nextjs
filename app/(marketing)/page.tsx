'use client'

import {
  Box,
  ButtonGroup,
  Container,
  Flex,
  HStack,
  Heading,
  Icon,
  IconButton,
  Stack,
  Tag,
  Text,
  VStack,
  Wrap,
  useClipboard,
} from '@chakra-ui/react'
import { Br, Link } from '@saas-ui/react'
import type { Metadata, NextPage } from 'next'
import Image from 'next/image'
import {
  FiArrowRight,
  FiBox,
  FiCheck,
  FiCode,
  FiCopy,
  FiFlag,
  FiGrid,
  FiLock,
  FiSearch,
  FiSliders,
  FiSmile,
  FiTerminal,
  FiThumbsUp,
  FiToggleLeft,
  FiTrendingUp,
  FiUserPlus,
  FiTruck,
  FiServer,
  FiCamera,
} from 'react-icons/fi'

import * as React from 'react'

import { ButtonLink } from '#components/button-link/button-link'
import { Faq } from '#components/faq'
import { Features } from '#components/features'
import { BackgroundGradient } from '#components/gradients/background-gradient'
import { Hero } from '#components/hero'
import {
  Highlights,
  HighlightsItem,
  HighlightsHobbyItem,
} from '#components/highlights'
import { ChakraLogo, NextjsLogo } from '#components/logos'
import { FallInPlace } from '#components/motion/fall-in-place'
import { Pricing } from '#components/pricing/pricing'
import { Hobby, Hobbies } from '#components/hobbies'
import { Em } from '#components/typography'
import faq from '#data/faq'
import pricing from '#data/pricing'
import hobbies from '#data/hobbies'

export const meta: Metadata = {
  title: 'Saas UI Landingspage',
  description: 'Free SaaS landingspage starter kit',
}

const Home: NextPage = () => {
  return (
    <Box>
      <HeroSection />

      <HighlightsSection />

      <FeaturesSection />

      {/* <HobbySection /> */}

      {/* <PricingSection /> */}

      {/* <FaqSection /> */}
    </Box>
  )
}

const HeroSection: React.FC = () => {
  return (
    <Box position="relative" overflow="hidden">
      <BackgroundGradient height="100%" zIndex="-1" />
      <Container maxW="container.xl" pt={{ base: 40, lg: 60 }} pb="40">
        <Stack direction={{ base: 'column', lg: 'row' }} alignItems="center">
          <Hero
            id="home"
            justifyContent="flex-start"
            px="0"
            title={
              <FallInPlace>
                Hi! My Name is
                <Br /> Parker Thornton
              </FallInPlace>
            }
            description={
              <FallInPlace delay={0.4} fontWeight="medium">
                Backend developer and systems architect with a passion for building
                high performance infrastructure. I blend strong programming skills
                with hands on networking experience, from server administration to
                API development, to deliver robust and scalable solutions.
              </FallInPlace>
            }
          >
            <FallInPlace delay={0.8}>
              <HStack pt="4" pb="12" spacing="8">
                <NextjsLogo height="28px" /> <ChakraLogo height="20px" />
              </HStack>

              <ButtonGroup spacing={4} alignItems="center">
                <ButtonLink colorScheme="primary" size="lg" href="/contact">
                  Contact Me
                </ButtonLink>
                <ButtonLink
                  size="lg"
                  href="https://github.com/DevGamer9991"
                  variant="outline"
                  rightIcon={
                    <Icon
                      as={FiArrowRight}
                      sx={{
                        transitionProperty: 'common',
                        transitionDuration: 'normal',
                        '.chakra-button:hover &': {
                          transform: 'translate(5px)',
                        },
                      }}
                    />
                  }
                >
                  View Github
                </ButtonLink>
              </ButtonGroup>
            </FallInPlace>
          </Hero>
          <Box
            height="600px"
            position="absolute"
            display={{ base: 'none', lg: 'block' }}
            left={{ lg: '60%', xl: '55%' }}
            width="80vw"
            maxW="1100px"
            margin="0 auto"
          >
            <FallInPlace delay={1}>
              <Box overflow="hidden" height="100%">
                <Image
                  src="/static/screenshots/list.png"
                  width={1200}
                  height={762}
                  alt="Screenshot of a ListPage in Saas UI Pro"
                  quality="75"
                  priority
                />
              </Box>
            </FallInPlace>
          </Box>
        </Stack>
      </Container>

      <Features
        id="hobbies"
        columns={[1, 2, 4]}
        iconSize={4}
        innerWidth="container.xl"
        pt="20"
        features={[
          {
            title: 'Car Enthusiast',
            icon: FiTruck,
            description: 'Passionate about high-performance cars, tuning, and track driving.',
            iconPosition: 'left',
            delay: 0.6,
          },
          {
            title: 'Server Hosting',
            icon: FiServer,
            description: 'Runs and maintains custom game servers with optimized performance.',
            iconPosition: 'left',
            delay: 0.8,
          },
          {
            title: 'Photography',
            icon: FiCamera,
            description: 'Enjoys capturing cars, landscapes, and cityscapes with creative angles.',
            iconPosition: 'left',
            delay: 1,
          },
          {
            title: 'CTF Challenges',
            icon: FiLock,
            description: 'Regularly participates in cybersecurity Capture the Flag competitions.',
            iconPosition: 'left',
            delay: 1.1,
          },
        ]}
        reveal={FallInPlace}
      />
    </Box>
  )
}

const HighlightsSection = () => {
  const { value, onCopy, hasCopied } = useClipboard('yarn add @saas-ui/react')

  return (
    <Highlights>
      <HighlightsItem colSpan={[1, null, 2]} title="Technical Breadth">
        <VStack alignItems="flex-start" spacing="8">
          <Text color="muted" fontSize="xl">
            Over a decade of programming experience across multiple languages,
            combined with deep knowledge in backend systems, API design, and
            networking infrastructure. I’m comfortable working across the stack
            to connect systems, optimize performance, and ensure reliability.
          </Text>
        </VStack>
      </HighlightsItem>

      <HighlightsItem title="Real World Server Experience">
        <Text color="muted" fontSize="lg">
          Managing personal and community servers taught me how to configure,
          secure, and maintain complex environments, from Ubuntu deployments,
          to game server optimization, all while minimizing downtime.
        </Text>
      </HighlightsItem>

      {/* <HighlightsHobbyItem
        name="Colleague Feedback"
        description="From a recent project lead"
        avatar="/static/images/avatar.jpg"
        gradient={['blue.300', 'purple.500']}
      >
        “Parker’s ability to connect backend code with network architecture
        saved us weeks in development. His solutions are fast, secure, and
        adaptable to change.”
      </HighlightsHobbyItem> */}

      <HighlightsItem
        title="Hands on Networking"
        style={{
          background: 'radial-gradient(circle at 10% 10%, #0000ff3d 0%, #80008042 80%)',
        }}
      >
        <Text color="muted" fontSize="lg">
          With a background in networking, I design systems that are not only
          performant but also resilient. I understand how to optimize data flow,
          reduce latency, and ensure secure communication between services.
        </Text>
      </HighlightsItem>

      <HighlightsItem colSpan={[1, null, 2]} title="Always Building, Always Learning">
        <Text color="muted" fontSize="lg">
          Whether experimenting with new APIs, refining automation pipelines,
          or studying the latest in networking protocols, I stay on top of
          emerging tech so my solutions are ready for tomorrow’s challenges.
        </Text>
        <Wrap mt="8">
          {[
            'Backend Development',
            'API Design',
            'Network Configuration',
            'Linux Administration',
            'CI/CD Pipelines',
            'Database Management',
            'Cloud Infrastructure',
            'Performance Tuning',
            'Security Hardening',
          ].map((value) => (
            <Tag
              key={value}
              variant="subtle"
              colorScheme="purple"
              rounded="full"
              px="3"
            >
              {value}
            </Tag>
          ))}
        </Wrap>
      </HighlightsItem>
    </Highlights>
  )
}

const FeaturesSection = () => {
  return (
    <Features
      id="features"
      title={
        <Heading
          lineHeight="short"
          fontSize={['2xl', null, '4xl']}
          textAlign="left"
          as="p"
        >
          Turning complex systems into seamless solutions.
        </Heading>
      }
      description={
        <>
          From designing APIs to managing network architecture, I build
          backends that perform under pressure. Every project gets a balance
          of scalability, security, and maintainability, with a focus on
          the people who use it.
        </>
      }
      align="left"
      columns={[1, 2, 3]}
      iconSize={4}
      features={[
        {
          title: 'Scalable Backend Development',
          icon: FiBox,
          description: (
            <>
              <br />Designing and building backend architectures that handle growth
              effortlessly from APIs, to full application logic with clean,
              maintainable code.
            </>
          ),
          variant: 'inline',
        },
        {
          title: 'Network Aware Systems',
          icon: FiLock,
          description: (
            <>
              <br />Integrating deep networking knowledge into backend design,
              ensuring low latency, high reliability, and secure data flow across
              services.
            </>
          ),
          variant: 'inline',
        },
        {
          title: 'Performance Optimization',
          icon: FiSearch,
          description: (
            <>
              <br />Tuning applications, databases, and network configurations to
              run faster and more efficiently, even under heavy workloads.
            </>
          ),
          variant: 'inline',
        },
        {
          title: 'Infrastructure Engineering',
          icon: FiUserPlus,
          description: (
            <>
              <br />Deploying and maintaining Linux servers, configuring cloud
              resources, and automating workflows for maximum uptime and minimal
              manual intervention.
            </>
          ),
          variant: 'inline',
        },
        {
          title: 'Security First Mindset',
          icon: FiFlag,
          description: (
            <>
              <br />Applying strong security practices to backend code, server
              configurations, and network setups to safeguard systems and users.
            </>
          ),
          variant: 'inline',
        },
        {
          title: 'Cross Stack Integration',
          icon: FiTrendingUp,
          description: (
            <>
              <br />Bridging diverse tools and technologies, from databases, to
              frontend clients, into cohesive, well documented, and maintainable
              systems.
            </>
          ),
          variant: 'inline',
        },
        {
          title: 'Creative Problem Solving',
          icon: FiToggleLeft,
          description: (
            <>
              <br />Breaking down complex technical challenges into actionable
              solutions that balance performance, scalability, and ease of use.
            </>
          ),
          variant: 'inline',
        },
        {
          title: 'Custom Built Solutions',
          icon: FiTerminal,
          description: (
            <>
              <br />Crafting tailored backend tools, scripts, and integrations that
              address unique project requirements and speed up delivery.
            </>
          ),
          variant: 'inline',
        },
        {
          title: 'Continuous Growth',
          icon: FiCode,
          description: (
            <>
              <br />Always exploring new technologies, frameworks, and best
              practices to improve my work and keep pace with an evolving industry.
            </>
          ),
          variant: 'inline',
        },
      ]}
    />
  )
}

// const HobbySection = () => {
//   return (
//     <Hobbies
//       title={hobbies.title}
//       columns={[1, 2, 3]}
//       innerWidth="container.xl"
//     >
//       <>
//         {hobbies.items.map((item, i) => (
//           <Stack key={i} spacing="8">
//             <Hobby
//               name={item.name}
//               description={item.description}
//               avatar={item.avatar}
//               children={item.children}
//             />
//           </Stack>
//         ))}
//       </>
//     </Hobbies>
//   )
// }

const PricingSection = () => {
  return (
    <Pricing {...pricing}>
      <Text p="8" textAlign="center" color="muted">
        VAT may be applicable depending on your location.
      </Text>
    </Pricing>
  )
}

const FaqSection = () => {
  return <Faq {...faq} />
}

export default Home
