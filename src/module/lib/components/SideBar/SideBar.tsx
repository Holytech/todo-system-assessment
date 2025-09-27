"use client";
import {
  Box,
  Button,
  Link as ChakraLink,
  Collapsible,
  Flex,
  HStack,
  Icon,
  Image,
  Text,
  VStack,
} from "@chakra-ui/react";
import { ArrowDown2, ArrowLeft, ArrowRight } from "iconsax-reactjs";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { ISidebarMenu } from "../../utility/types/sideBar";
import { ToggleButton } from "../toggle-button/ToggleButton";
import { Tooltip } from "../ui/tooltip";
import { sideBarContents } from "./sidebar.helper";

const SideBar = () => {
  const pathname = usePathname();
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const [isCollapsed, setIsCollapsed] = useState(false);

  const toggleCollapse = (idx: number) => {
    if (isCollapsed) {
      setIsCollapsed(false);
      setTimeout(() => setOpenIndex(idx), 150);
    } else {
      setOpenIndex(openIndex === idx ? null : idx);
    }
  };

  const toggleSidebar = () => {
    setIsCollapsed(!isCollapsed);
    if (!isCollapsed) {
      setOpenIndex(null);
    }
  };

  return (
    <Box
      bg="white"
      p={5}
      borderRight="solid 1px #cdd6e9"
      display="flex"
      flexDirection="column"
      justifyContent="space-between"
      transition="all 0.3s ease-in-out"
      width={isCollapsed ? "80px" : "300px"}
      height="100vh"
      overflowY={isCollapsed ? "hidden" : "auto"}
      css={{
        "&::-webkit-scrollbar": {
          display: "none",
        },
        "-ms-overflow-style": "none",
        "scrollbar-width": "none",
      }}
    >
      <Box mb={4}>
        <Flex alignItems="center" justifyContent="space-between" mb={3}>
          <Box
            transition="opacity 0.3s"
            opacity={isCollapsed ? 0 : 1}
            width={isCollapsed ? 0 : "auto"}
            overflow="hidden"
          >
            <Image
              src="/assets/images/logo.png"
              alt="Company's logo"
              width="153px"
              height="62px"
            />
          </Box>
          <Button
            onClick={toggleSidebar}
            variant="ghost"
            size="sm"
            p={1}
            minW="auto"
            h="auto"
            _hover={{ bg: "gray.100" }}
            transition="colors 0.2s"
          >
            <Icon
              as={isCollapsed ? ArrowRight : ArrowLeft}
              boxSize="28px"
              color="gray.600"
            />
          </Button>
        </Flex>

        <VStack align="stretch">
          {sideBarContents.map((nav: ISidebarMenu, idx: number) => {
            const hasChildren = nav?.children?.length;
            const isOpen = openIndex === idx && !isCollapsed;

            return (
              <Box key={`${nav.name}${idx}`} mb={1}>
                {hasChildren ? (
                  <Collapsible.Root>
                    <Collapsible.Trigger padding={0} width="full">
                      <Box width="full">
                        <Tooltip content={nav.name}>
                          <Button
                            onClick={() => toggleCollapse(idx)}
                            variant="ghost"
                            width="full"
                            height="auto"
                            p={2}
                            borderRadius="xl"
                            fontWeight="semibold"
                            _hover={{ bg: "gray.100" }}
                            transition="all 0.2s"
                            style={{
                              display: "flex",
                              justifyContent: "space-between",
                            }}
                          >
                            <HStack
                              w="full"
                              justify={isCollapsed ? "center" : "flex-start"}
                            >
                              <Box flexShrink={0}>{nav.icon}</Box>
                              <Text
                                color="gray.600"
                                transition="all 0.3s"
                                opacity={isCollapsed ? 0 : 1}
                                width={isCollapsed ? 0 : "auto"}
                                height={isCollapsed ? 0 : "auto"}
                                overflow="hidden"
                              >
                                {nav.name}
                              </Text>
                            </HStack>

                            <Icon
                              as={ArrowDown2}
                              boxSize="20px"
                              color="gray.600"
                              transition="all 0.3s"
                              transform={
                                isOpen ? "rotate(180deg)" : "rotate(0deg)"
                              }
                              opacity={isCollapsed ? 0 : 1}
                              width={isCollapsed ? 0 : "auto"}
                              height={isCollapsed ? 0 : "auto"}
                            />
                          </Button>
                        </Tooltip>
                      </Box>
                    </Collapsible.Trigger>
                    <Collapsible.Content>
                      <VStack align="stretch" ml={8} mt={1}>
                        {nav?.children?.map((child, childIdx) => (
                          <ChakraLink
                            as={Link}
                            href={child.linkTo}
                            key={`${child.name}${childIdx}`}
                            display="block"
                            p={2}
                            fontSize="sm"
                            borderRadius="md"
                            transition="all 0.2s"
                            bg={
                              pathname === child.linkTo
                                ? "#E9F5F7"
                                : "transparent"
                            }
                            color={
                              pathname === child.linkTo ? "#75C5C1" : "gray.700"
                            }
                            _hover={{
                              bg:
                                pathname === child.linkTo
                                  ? "#E9F5F7"
                                  : "gray.200",
                            }}
                            textDecoration="none"
                          >
                            {child.name}
                          </ChakraLink>
                        ))}
                      </VStack>
                    </Collapsible.Content>
                  </Collapsible.Root>
                ) : (
                  <Tooltip content={nav.name}>
                    <ChakraLink
                      as={Link}
                      href={nav.linkTo}
                      display="flex"
                      alignItems="center"
                      p={2}
                      borderRadius="xl"
                      fontWeight="semibold"
                      transition="all 0.2s"
                      justifyContent={isCollapsed ? "center" : "flex-start"}
                      gap={isCollapsed ? 0 : 3}
                      bg={pathname === nav.linkTo ? "#E9F5F7" : "transparent"}
                      color={pathname === nav.linkTo ? "#75C5C1" : "gray.600"}
                      _hover={{
                        bg: pathname === nav.linkTo ? "#E9F5F7" : "gray.100",
                      }}
                      textDecoration="none"
                    >
                      <Box flexShrink={0}>{nav.icon}</Box>
                      <Text
                        transition="all 0.3s"
                        opacity={isCollapsed ? 0 : 1}
                        width={isCollapsed ? 0 : "auto"}
                        height={isCollapsed ? 0 : "auto"}
                        overflow="hidden"
                      >
                        {nav.name}
                      </Text>
                    </ChakraLink>
                  </Tooltip>
                )}
              </Box>
            );
          })}
        </VStack>
      </Box>

      <Box
        bg="gray.50"
        py={2}
        px={4}
        borderRadius="lg"
        transition="all 0.3s"
        opacity={isCollapsed ? 0 : 1}
        pointerEvents={isCollapsed ? "none" : "auto"}
      >
        <VStack gap={5}>
          <HStack bg="white" py={2} px={3} borderRadius="lg" w="full">
            <Image
              src="/assets/images/england-flag.jpg"
              alt="england flag"
              boxSize="20px"
              borderRadius="full"
              border="1px"
              borderColor="#cdd6e9"
              flexShrink={0}
            />
            <HStack
              w="full"
              justify="space-between"
              transition="all 0.3s"
              opacity={isCollapsed ? 0 : 1}
              overflow="hidden"
            >
              <Text color="gray.500" fontWeight="semibold">
                English
              </Text>
              <Icon
                as={ArrowDown2}
                boxSize="20px"
                color="gray.600"
                transition="transform 0.3s"
              />
            </HStack>
          </HStack>

          <HStack
            bg={"white"}
            py={2}
            px={3}
            justify="space-between"
            borderRadius="lg"
            w="full"
          >
            <Text
              color="gray.500"
              transition="all 0.3s"
              opacity={isCollapsed ? 0 : 1}
              overflow="hidden"
            >
              Dark Mode
            </Text>
            <ToggleButton />
          </HStack>
        </VStack>
      </Box>
    </Box>
  );
};

export default SideBar;
