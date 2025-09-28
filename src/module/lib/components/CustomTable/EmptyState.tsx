import { Box, Flex, Heading, Text, VStack } from "@chakra-ui/react";
import Image from "next/image";
import React from "react";

interface EmptyStateTableProps {
  headingText: string;
  pText: string | React.ReactNode;
  CTA?: React.ReactNode;
}

const EmptyState: React.FC<EmptyStateTableProps> = ({
  headingText,
  pText,
  CTA,
}) => {
  return (
    <VStack>
      <Image
        src={"/assets/images/emptystate.png"}
        width={200}
        height={300}
        alt="Empty State"
      />
      <Flex
        direction={"column"}
        justifyContent={"center"}
        alignItems={"center"}
      >
        <Heading color={"gray.700"}>{headingText}</Heading>
        <Text color={"gray.500"}>{pText}</Text>
        <Box marginTop={"6"}>{CTA}</Box>
      </Flex>
    </VStack>
  );
};

export default EmptyState;
