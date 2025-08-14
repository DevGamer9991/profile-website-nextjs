import { ResponsiveValue, SimpleGrid, Stack } from '@chakra-ui/react'
import {
  Section,
  SectionProps,
  SectionTitle,
  SectionTitleProps,
} from 'components/section'
import { Hobby } from './hobby'

export interface HobbiesProps
  extends Omit<SectionProps, 'title'>,
    Pick<SectionTitleProps, 'title' | 'description'> {
  columns?: ResponsiveValue<number>
}

export const Hobbies: React.FC<HobbiesProps> = (props) => {
  const { children, title, columns = [1, null, 2], ...rest } = props
  return (
    <Section {...rest}>
      <SectionTitle title={title} />
      <SimpleGrid columns={columns} spacing="8">
        {children}
      </SimpleGrid>
    </Section>
  )
}
