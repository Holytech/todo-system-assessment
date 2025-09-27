"use client";
import {
  Box,
  CloseButton,
  Flex,
  HStack,
  Input,
  InputGroup,
  Text,
} from "@chakra-ui/react";
import {
  ArrowDown2,
  Link1,
  Notification,
  SearchNormal1,
} from "iconsax-reactjs";
import Image from "next/image";
import { useRef, useState } from "react";

const TopNav = () => {
  const [search, setSearch] = useState<string>("");
  const inputRef = useRef<HTMLInputElement | null>(null);

  const endElement = search ? (
    <CloseButton
      size="xs"
      aria-label="Clear search"
      onClick={() => {
        setSearch("");
        inputRef.current?.focus();
      }}
      color={"#464B50"}
      me="-2"
      _hover={{ bg: "transparent" }}
    />
  ) : undefined;

  return (
    <Flex
      as="nav"
      position="sticky"
      top={0}
      w="full"
      py={5}
      px={4}
      bg="white"
      borderBottom="solid 1px #cdd6e9"
      align="center"
      justify="space-between"
      gap={3}
    >
      <Flex
        align="center"
        gap={2}
        bg="gray.100"
        border="1px solid"
        borderColor="gray.300"
        p={2}
        borderRadius="xl"
        width={"fit"}
        height={"46px"}
      >
        <SearchNormal1 size="20" color="#6c7278" />
        <InputGroup endElement={endElement}>
          <Input
            ref={inputRef}
            placeholder="Search"
            value={search}
            onChange={(e) => {
              setSearch(e.currentTarget.value);
            }}
            px={"1"}
            focusRing={"none"}
            border={"none"}
            color={"#464B50"}
            width={"200px"}
          />
        </InputGroup>
      </Flex>

      <HStack gap={1}>
        {[
          "/assets/images/nav_img.png",
          "/assets/images/nav_img_d.png",
          "/assets/images/nav_img_3cx.png",
          "/assets/images/nav_img_e.png",
        ].map((src, idx) => (
          <Box
            key={idx}
            w="46px"
            h="46px"
            border="1px solid"
            borderColor="gray.300"
            borderRadius="lg"
            display="flex"
            alignItems="center"
            justifyContent="center"
            overflow="hidden"
          >
            <Image
              src={src}
              alt=""
              width={25}
              height={25}
              style={{ borderRadius: "50%", objectFit: "contain" }}
            />
          </Box>
        ))}
      </HStack>

      <HStack gap={2} flex="1" width={"fit"}>
        <Flex
          bg="gray.100"
          border="1px solid"
          borderColor="gray.300"
          borderRadius="xl"
          p={1}
          height={"46px"}
          gap={2}
          align="center"
        >
          <Flex
            bg="indigo"
            color="white"
            px={2}
            py={1}
            height={"full"}
            borderRadius="lg"
            fontWeight="semibold"
            fontSize="sm"
            alignItems={"center"}
            justifyContent={"center"}
          >
            <Box width={"fit"} height={"fit"} whiteSpace="nowrap">
              Melding maken
            </Box>
          </Flex>
          {["VIM", "LMS", "BHV", "DataLek"].map((item) => (
            <Flex
              key={item}
              bg="cyan.400"
              color="white"
              px={2}
              py={1}
              height={"full"}
              borderRadius="lg"
              fontWeight="semibold"
              fontSize="sm"
              alignItems={"center"}
              justifyContent={"center"}
            >
              <Box width={"fit"} height={"fit"} whiteSpace="nowrap">
                {item}
              </Box>
            </Flex>
          ))}
        </Flex>

        <Box
          bg="gray.100"
          border="1px solid"
          borderColor="gray.300"
          borderRadius="xl"
          p={2}
          display="flex"
          alignItems="center"
          justifyContent="center"
          cursor="pointer"
          minW="46px"
          minH="46px"
        >
          <Link1 size="26" color="#464B50" />
        </Box>
      </HStack>

      <HStack gap={2}>
        <Box
          bg="gray.100"
          borderRadius="full"
          w="46px"
          h="46px"
          display="flex"
          alignItems="center"
          justifyContent="center"
          cursor="pointer"
        >
          <Notification size="26" color="#464B50" />
        </Box>

        <Flex
          bg="gray.100"
          borderRadius="full"
          h="46px"
          px={1}
          align="center"
          gap={2}
          cursor="pointer"
        >
          <HStack gap={2}>
            <Image
              src="/assets/images/paul.jpg"
              alt="user profile picture"
              width={40}
              height={40}
              style={{
                objectFit: "cover",
                borderRadius: "50%",
                height: "40px",
                width: "40px",
              }}
            />
            <Text
              fontSize="xs"
              fontWeight="semibold"
              whiteSpace="nowrap"
              color={"#1A1C1E"}
            >
              Hi Paul
            </Text>
          </HStack>
          <ArrowDown2 size="20" color="#6C7278" variant="Bold" />
        </Flex>
      </HStack>
    </Flex>
  );
};

export default TopNav;
