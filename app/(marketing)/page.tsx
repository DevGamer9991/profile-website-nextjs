'use client'

import {
  Box,
  ButtonGroup,
  Button,
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
  FiGithub
} from 'react-icons/fi'

import * as React from 'react'

import { motion } from "motion/react"

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

import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger, ScrollSmoother } from 'gsap/all'

gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

const Home: NextPage = () => {

  return (
    <Box>
      <HeroSection />

      <HighlightsSection />

      <FeaturesSection />

      <SourceCode />

      {/* <InstagramSection /> */}

      {/* <HobbySection /> */}

      {/* <PricingSection /> */}

      {/* <FaqSection /> */}
    </Box>
  )
}

const HeroSection: React.FC = () => {

  const title = React.useRef<HTMLHeadingElement>(null);
  const description = React.useRef<HTMLHeadingElement>(null);
  const buttons = React.useRef<HTMLDivElement>(null);
  const photo = React.useRef<HTMLImageElement>(null);

  useGSAP(() => {
    gsap.set(title.current, { opacity: 0, y: 20, visibility: 'visible' });
    gsap.set(description.current, { opacity: 0, y: 20, visibility: 'visible' });
    gsap.set(buttons.current, { opacity: 0, y: 20, visibility: 'visible' });
    gsap.set(photo.current, { opacity: 0, y: 20, visibility: 'visible' });

    gsap.to(title.current, { opacity: 1, y: 0, duration: 2, delay: 0, ease: 'power1.out', });
    gsap.to(description.current, { opacity: 1, y: 0, duration: 2, delay: 0, ease: 'power1.out', });
    gsap.to(buttons.current, { opacity: 1, y: 0, duration: 2, delay: 0.25, ease: 'power1.out', });
    gsap.to(photo.current, { opacity: 1, y: 0, duration: 2, delay: 0.4, ease: 'power1.out', });
  });

  return (
    <Box position="relative" overflow="hidden">
      <BackgroundGradient height="100%" zIndex="-1" />
      <Container maxW="container.xl" pt={{ base: 40, lg: 60 }} pb="40">
        <Stack direction={{ base: 'column', lg: 'row' }} alignItems="center">
          <Hero
            id="home"
            justifyContent="flex-center"
            px="0"
            title={
              <Text as="h1" textStyle="h1" textAlign="left" ref={title} style={{ visibility: 'hidden' }}>
                Hi! My Name is
                <Br /> Parker Thornton
              </Text>
            }
            description={
              <h2 ref={description} style={{ fontWeight: 500, visibility: 'hidden' }}>
                Backend developer and systems architect with a passion for building
                high performance infrastructure. I blend strong programming skills
                with hands on networking experience, from server administration to
                API development, to deliver robust and scalable solutions.
              </h2>
            }
          >
            <div ref={buttons} style={{ visibility: 'hidden' }}>
              <HStack pt="4" pb="12" spacing="8">
                {/* <NextjsLogo height="28px" /> <ChakraLogo height="20px" /> */}
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
            </div>
          </Hero>
          <Box
            height="600px"
            position="absolute"
            display={{ base: 'none', lg: 'block' }}
            left={{ lg: '60%', xl: '60%' }}
            width="80vw"
            maxW="1100px"
            margin="0 auto"
          >
            <Box overflow="hidden" height="100%">
              {/* <Image
                src="/static/screenshots/list.png"
                width={1200}
                height={762}
                alt="Screenshot of a ListPage in Saas UI Pro"
                quality="75"
                priority
              /> */}
              <Image
                ref={photo}
                src="/static/images/car.png"
                width={400}
                height={200}
                style={{ borderRadius: '12px', visibility: 'hidden' }}
                alt="Screenshot of a HeroSection in Saas UI Pro"
                quality="75"
                priority

              />
            </Box>
          </Box>
        </Stack>
      </Container>

      <Features
        id="hobbies"
        scrub={false}
        columns={[1, 2, 4]}
        iconSize={4}
        innerWidth="container.xl"
        pt="20"
        features={[
          {
            title: 'Car Enthusiast',
            icon: FiTruck,
            description: 'Passionate about cars, on or off the track',
            iconPosition: 'left',
            delay: 0.6,
          },
          {
            title: 'Server Hosting',
            icon: FiServer,
            description: 'Helps Run and maintain a server for Assetto Corsa with over 30k active users.',
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
      />
    </Box>
  )
}

const HighlightsSection = () => {
  const { value, onCopy, hasCopied } = useClipboard('yarn add @saas-ui/react')

  useGSAP(() => {
    gsap.set(".highlight-item", {opacity: 1, scale: 1, visibility: "visible"})

    // gsap.to(".highlight-item", { scrollTrigger: { trigger: `.highlight-item`, scrub: true, start: "top 90%", end: "top 40%" }, opacity: 1, y: 0, scale: 1, duration: 2, stagger: 0.2, ease: "power1.out", delay: 0 })
  })

  return (
    <Highlights>
      <HighlightsItem colSpan={[1, null, 2]} title="Technical Expertise" className="highlight-item" visibility="hidden">
        <VStack alignItems="flex-start" spacing="8">
          <Text color="muted" fontSize="xl">
            Over a decade of programming experience across multiple languages,
            combined with deep knowledge in backend systems, API design, and
            networking infrastructure. I'm comfortable working across the stack
            to connect systems, optimize performance, and ensure reliability.
          </Text>
        </VStack>
      </HighlightsItem>

      <HighlightsItem title="Real World Server Experience" className="highlight-item" visibility="hidden">
        <Text color="muted" fontSize="lg">
          Experience with Proxmox clusters and Docker deployments has enabled me to orchestrate scalable, resilient server environments. I leverage virtualization and containerization to streamline updates, isolate workloads, and maximize resource efficiency—whether hosting game servers or deploying backend services.
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
        className="highlight-item" visibility="hidden"
      >
        <Text color="muted" fontSize="lg">
          With a background in designing and programming API backends, I build systems that are robust, scalable, and easy to maintain. My experience covers architecting endpoints, optimizing data flow, and ensuring secure, reliable communication between services for seamless integration.
        </Text>
      </HighlightsItem>

      <HighlightsItem colSpan={[1, null, 2]} title="Always Building, Always Learning" className="highlight-item" visibility="hidden">
        <Text color="muted" fontSize="lg">
          Whether experimenting with new APIs, refining automation pipelines,
          or studying the latest in networking protocols, I stay on top of
          emerging tech so my solutions are ready for tomorrow’s challenges.
        </Text>
        <Wrap mt="8">
          {[
            'Backend Development',
            'API Design',
            'Docker',
            'Network Configuration',
            'Linux Administration',
            'CI/CD Pipelines',
            'Database Management',
            'Cloud Infrastructure',
            'Performance Tuning',
            'Security Hardening',
            'Proxmox Clustering'
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
      scrub={true}
      duration={1}
      stagger={0.1}
      delay={0}
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

const InstagramSection = () => {
  const [media, setMedia] = React.useState<any[]>([])
  const [error, setError] = React.useState<string | null>(null)
  const [showAll, setShowAll] = React.useState(false)

  React.useEffect(() => {
    const fetchInstagramMedia = async () => {
      try {
        const response = await fetch('/api/instagram')
        if (!response.ok) {
          throw new Error('Failed to fetch Instagram media')
        }
        const data = await response.json()
        setMedia(data)
      } catch (err: any) {
        setError(err.message)
      }
    }

    fetchInstagramMedia()
  }, [])

  if (error) {
    return (
      <Container maxW="container.xl" py="20">
        <Text color="red.500" textAlign="center">
          {error}
        </Text>
      </Container>
    )
  }

  if (media.length === 0) {
    return (
      <Container maxW="container.xl" py="20">
        <Text color="muted" textAlign="center">
          No media found on Instagram.
        </Text>
      </Container>
    )
  }

  // Assume 4 items per row for desktop, 2 for mobile/tablet
  const itemsPerRow = 3
  const visibleRows = 2
  const visibleCount = itemsPerRow * visibleRows

  return (
    <Container maxW="container.xl" py="20">
      <Heading as="h2" size="xl" mb="4" textAlign="center">
        My Automotive Photography Instagram
      </Heading>
      <Box position="relative" overflow="hidden" pt="4">
        <Wrap spacing="4" justify="center" width="100%">
          {media.map((item, idx) => {
        const shouldHide = !showAll && idx >= visibleCount
        return (
          <motion.div
            key={item.id}
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setTimeout(() => window.open(item.permalink, '_blank'), 200)}
            style={{ flex: '0 1 300px', display: shouldHide ? 'none' : 'block' }}
          >
            <Box
          borderWidth="1px"
          borderRadius="lg"
          overflow="hidden"
          width="300px"
            >
          <Image
            src={item.media_url}
            alt={item.caption || 'Instagram Media'}
            width={300}
            height={300}
            quality="75"
            objectFit="cover"
          />
          <Box p="4">
            <Text fontWeight="bold">{item.username}</Text>
            <Text color="muted">{item.timestamp}</Text>
            <HStack mt="2">
              <Icon as={FiThumbsUp} />
              <Text>{item.like_count}</Text>
            </HStack>
          </Box>
            </Box>
          </motion.div>
        )
          })}
        </Wrap>
        {!showAll && media.length > visibleCount && (
          <Box
        position="absolute"
        left={0}
        top={0}
        right={0}
        bottom={0}
        height="100%"
        pointerEvents="none"
        zIndex={1}
        bgGradient="linear(to-t, gray.900 20%, transparent 100%)"
          />
        )}
      </Box>
      {!showAll && media.length > visibleCount && (
        <Flex justify="center" mt="8">
          <IconButton
            aria-label="Show more"
            icon={<FiArrowRight />}
            colorScheme="primary"
            onClick={() => setShowAll(true)}
          />
        </Flex>
      )}
    </Container>
  )
}

const SourceCode = () => {
  return (
    <Container maxW="container.md" py={16}>
      <Box
        bgGradient="linear(to-r, purple.500, cyan.500)"
        borderRadius="lg"
        p={[6, 10]}
        boxShadow="lg"
        mb={8}
        textAlign="left"
        position="relative"
        _dark={{
          bgGradient: "linear(to-r, purple.700, cyan.600)",
        }}
      >
        <VStack align="flex-start" spacing={6}>
          <Heading
            lineHeight="short"
            fontSize={['2xl', null, '4xl']}
            fontWeight="bold"
            color="white"
            as="h2"
            letterSpacing="tight"
            mb={2}
            sx={{ textShadow: "0 2px 10px rgba(0,0,0,0.25)" }}
          >
            <Icon as={FiGithub} boxSize={8} mr={2} verticalAlign="middle" /> Source Code
          </Heading>
          <Text fontSize={['md', null, 'lg']} color="whiteAlpha.900">
            If you would like the source code for this site, it's available on my GitHub!
          </Text>
          <Button
            as="a"
            href="https://github.com/DevGamer9991/profile-website-nextjs"
            target="_blank"
            leftIcon={<FiGithub />}
            colorScheme="blackAlpha"
            bg="whiteAlpha.900"
            color="gray.900"
            _hover={{ bg: "purple.400", color: "white" }}
            fontWeight="bold"
            boxShadow="md"
            size="lg"
          >
            View on GitHub
          </Button>
        </VStack>
      </Box>
    </Container>
  )
}


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
