import {
  VStack,
  Heading,
  Box,
  StackProps,
  useMultiStyleConfig,
} from '@chakra-ui/react'

import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import { ScrollTrigger } from 'gsap/all'

gsap.registerPlugin(ScrollTrigger)

export interface SectionTitleProps extends Omit<StackProps, 'title'> {
  title: React.ReactNode
  description?: React.ReactNode
  align?: 'left' | 'center'
  variant?: string
}

export const SectionTitle: React.FC<SectionTitleProps> = (props) => {
  const { id = "default", title, description, align, variant, ...rest } = props
  const styles = useMultiStyleConfig('SectionTitle', { variant })

  useGSAP(() => {
    gsap.set(`.section-title-${id}`, { opacity: 0, y: 20, visibility: 'visible' });

    gsap.to(`.section-title-${id}`, { scrollTrigger: { trigger: `.section-title-${id}`, scrub: true, start: "top 90%", end: "top 40%" }, opacity: 1, y: 0, duration: 1, stagger: 0.1, ease: "power1.out", delay: 0 });
  })

  return (
    <VStack
      sx={styles.wrapper}
      alignItems={align === 'left' ? 'flex-start' : 'center'}
      spacing={4}
      style={{ visibility: 'hidden' }}
      className={`section-title-${id}`}
      {...rest}
    >
      <Heading sx={styles.title} as="h2">
        {title}
      </Heading>
      {description && (
        <Box sx={styles.description} textAlign={align}>
          {description}
        </Box>
      )}
    </VStack>
  )
}
