import { Box, Text } from "@chakra-ui/react";

export default function Home() {
  return (
    <Box
      width={"full"}
      height={"full"}
      bg={"white"}
      color={"blackAlpha.800"}
      display={"flex"}
      alignItems={"center"}
      justifyContent={"center"}
      borderRadius={"2xl"}
    >
      <Text fontWeight={"bolder"} fontSize={"2xl"}>
        Home
      </Text>
    </Box>
  );
}
