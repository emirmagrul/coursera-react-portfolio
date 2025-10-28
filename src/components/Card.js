import { Heading, HStack, Image, Text, VStack } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import React from "react";

const Card = ({ title, description, imageSrc }) => {
  return (
    <VStack
      color="black"
      backgroundColor="white"
      borderRadius="xl"
      overflow="hidden"
      align="start"
      spacing={4}
    >
      <Image src={imageSrc} alt={title}/>
      <VStack px={4} pb={4} align="start" spacing={2}>
        <Heading as="h3" size="md">
          {title}
        </Heading>
        <Text color="gray.600" fontSize="md">
          {description}
        </Text>
        <HStack>
          <Text fontWeight="bold">See more</Text>
          <FontAwesomeIcon icon={faArrowRight} size="1x" />
        </HStack>
      </VStack>
    </VStack>
  )
};

export default Card;
