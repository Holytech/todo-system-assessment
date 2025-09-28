"use client";
import {
  Box,
  Button,
  CloseButton,
  Dialog,
  Flex,
  Input,
  Portal,
  Stack,
  Text,
} from "@chakra-ui/react";
import { Status } from "iconsax-reactjs";
import React from "react";
import CategoryDropdown from "./CategoryDropdown";

interface CreateTaskProps {
  modal: {
    open: boolean;
  };
  setModal: React.Dispatch<
    React.SetStateAction<{
      open: boolean;
    }>
  >;
}

const CreateTask: React.FC<CreateTaskProps> = ({ modal, setModal }) => {
  return (
    <Dialog.Root
      open={modal.open}
      size={"lg"}
      placement={"center"}
      motionPreset="slide-in-bottom"
    >
      <Portal>
        <Dialog.Backdrop />
        <Dialog.Positioner>
          <Dialog.Content px={"5"} py={"8"} bg={"white"} rounded={"2xl"}>
            <Dialog.Body>
              <form>
                <Stack gap="4">
                  <Input
                    width={"full"}
                    fontSize={"2xl"}
                    color={"#1A1C1E"}
                    focusRing={"none"}
                    fontWeight={"semibold"}
                    border={"none"}
                    _placeholder={{ color: "#BAC1CC" }}
                    placeholder="Task Name"
                  />
                  <Flex>
                    <Box display={"flex"} alignItems={"center"} gap={"3"}>
                      <Status size="24" color="#BAC1CC" />
                      <Text fontSize={"lg"} color={"#464B50"}>
                        Status
                      </Text>
                    </Box>
                    <CategoryDropdown />
                  </Flex>
                </Stack>
              </form>
            </Dialog.Body>
            <Dialog.Footer>
              <Button
                px={"6"}
                py={"2"}
                bg={"#75C5C1"}
                color={"white"}
                fontWeight={"bold"}
                rounded={"lg"}
              >
                Create Task
              </Button>
            </Dialog.Footer>
            <Dialog.CloseTrigger asChild>
              <CloseButton
                size="sm"
                onClick={() => setModal({ open: false })}
                color={"#252A41"}
                bg={"#F6F6FA"}
                rounded={"full"}
                _hover={{ bg: "#252A41", color: "#F6F6FA" }}
              />
            </Dialog.CloseTrigger>
          </Dialog.Content>
        </Dialog.Positioner>
      </Portal>
    </Dialog.Root>
  );
};

export default CreateTask;
