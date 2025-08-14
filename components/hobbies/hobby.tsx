import {
  Card,
  CardBody,
  CardHeader,
  Heading,
  Image,
  Stack,
  Text,
  CardProps,
} from "@chakra-ui/react";

export interface HobbyProps extends CardProps {
  title: string;
  description: string;
  image?: string;
  children?: React.ReactNode;
}

export const Hobby = ({
  title,
  description,
  image,
  children,
  ...rest
}: HobbyProps) => {
  return (
    <Card
      {...rest}
      borderRadius="lg"
      overflow="hidden"
      boxShadow="md"
      _hover={{ boxShadow: "xl", transform: "translateY(-4px)" }}
      transition="all 0.2s ease-in-out"
    >
      {image && (
        <Image
          src={image}
          alt={title}
          objectFit="cover"
          maxH="180px"
          w="100%"
        />
      )}
      <CardHeader pb={0}>
        <Heading size="md">{title}</Heading>
      </CardHeader>
      <CardBody>
        <Text color="gray.600">{description}</Text>
        {children && <Stack mt={4}>{children}</Stack>}
      </CardBody>
    </Card>
  );
};