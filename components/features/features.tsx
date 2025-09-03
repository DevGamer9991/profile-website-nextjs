import * as React from 'react'
import {
  Box,
  Stack,
  VStack,
  SimpleGrid,
  Heading,
  Text,
  Icon,
  Circle,
  ResponsiveValue,
  useMultiStyleConfig,
  ThemingProps,
  SystemProps,
} from '@chakra-ui/react'

import { Section, SectionTitle, SectionTitleProps } from 'components/section'

import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/all';

gsap.registerPlugin(ScrollTrigger);

const Revealer = ({ children }: any) => {
  return children
}

export interface FeaturesProps
  extends Omit<SectionTitleProps, 'title' | 'variant'>,
    ThemingProps<'Features'> {
  title?: React.ReactNode
  description?: React.ReactNode
  features: Array<FeatureProps>
  columns?: ResponsiveValue<number>
  spacing?: string | number
  aside?: React.ReactChild
  reveal?: React.FC<any>
  iconSize?: SystemProps['boxSize']
  innerWidth?: SystemProps['maxW']
  scrub?: boolean | number
  duration?: number
  stagger?: number
  delay?: number
}

export interface FeatureProps {
  title?: React.ReactNode
  description?: React.ReactNode
  icon?: any
  iconPosition?: 'left' | 'top'
  iconSize?: SystemProps['boxSize']
  ip?: 'left' | 'top'
  variant?: string
  delay?: number,
  className?: string,
  style?: React.CSSProperties
}

export const Feature: React.FC<FeatureProps> = (props) => {
  const {
    title,
    description,
    icon,
    iconPosition,
    iconSize = 8,
    ip,
    variant,
    className,
    style
  } = props
  const styles = useMultiStyleConfig('Feature', { variant })

  const pos = iconPosition || ip
  const direction = pos === 'left' ? 'row' : 'column'

  return (
    <Stack style={style} sx={styles.container} direction={direction} className={className}>
      {icon && (
        <Circle sx={styles.icon}>
          <Icon as={icon} boxSize={iconSize} />
        </Circle>
      )}
      <Box>
        <Heading sx={styles.title}>{title}</Heading>
        <Text sx={styles.description}>{description}</Text>
      </Box>
    </Stack>
  )
}

export const Features: React.FC<FeaturesProps> = (props) => {
  const {
    id,
    title,
    description,
    features,
    columns = [1, 2, 3],
    spacing = 8,
    scrub = true,
    align: alignProp = 'center',
    iconSize = 8,
    aside,
    reveal: Wrap = Revealer,
    duration = 2,
    stagger = 0.25,
    delay = 0.5,
    ...rest
  } = props

  const align = !!aside ? 'left' : alignProp

  const ip = align === 'left' ? 'left' : 'top'

  useGSAP(() => {
    gsap.set(`.feature-${id}`, { opacity: 0, y: 20, visibility: 'visible' });

    gsap.to(`.feature-${id}`, { scrollTrigger: { trigger: `.feature-${id}`, scrub: scrub, start: "top 90%", end: "top 40%" }, opacity: 1, y: 0, duration: duration, stagger: stagger, ease: "power1.out", delay: delay });
  });

  return (
    <Section {...rest}>
      <Stack direction="row" height="full" align="flex-start">
        <VStack flex="1" spacing={[4, null, 8]} alignItems="stretch">
          {(title || description) && (
            <Wrap>
              <SectionTitle
                id={id}
                title={title}
                description={description}
                align={align}
              />
            </Wrap>
          )}
            <SimpleGrid columns={columns} spacing={spacing} >
            {features.map((feature, i) => {
              return (
              <Wrap key={i}>
                <Feature iconSize={iconSize} {...feature} ip={ip} className={`feature-${id}`} style={{ visibility: 'hidden' }} />
              </Wrap>
              )
            })}
            </SimpleGrid>
        </VStack>
        {aside && (
          <Box flex="1" p="8">
            {aside}
          </Box>
        )}
      </Stack>
    </Section>
  )
}
