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
  name: string;
  description: React.ReactNode;
  avatar: string;
  href?: string;
  children?: React.ReactNode;
}

export const Hobby = ({
  name,
  description,
  avatar,
  href,
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
      {avatar && (
        <Image
          src={avatar}
          alt={name}
          objectFit="cover"
          maxH="180px"
          w="100%"
        />
      )}
      <CardHeader pb={0}>
        <Heading size="md">{name}</Heading>
      </CardHeader>
      <CardBody>
        <Text color="gray.600">{description}</Text>
        {children && <Stack mt={4}>{children}</Stack>}
      </CardBody>
    </Card>
  );
};