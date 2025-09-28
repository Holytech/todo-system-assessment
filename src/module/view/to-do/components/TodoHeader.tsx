import { Box, Flex, Heading, IconButton, Switch, Text } from "@chakra-ui/react";
import {
  AddCircle,
  ArrowCircleLeft2,
  Calendar,
  ExportCurve,
} from "iconsax-reactjs";
import { IoFilter } from "react-icons/io5";

interface TodoHeaderProps {
  setModal: React.Dispatch<
    React.SetStateAction<{
      open: boolean;
    }>
  >;
}

const TodoHeader: React.FC<TodoHeaderProps> = ({ setModal }) => {
  return (
    <Flex
      width={"full"}
      p={"4"}
      direction={"row"}
      alignItems={"center"}
      justifyContent={"space-between"}
      borderBottom={"solid 1px #CDD6E9"}
    >
      <Flex gap={"3"} alignItems={"center"}>
        <IconButton
          aria-label="go back"
          variant={"outline"}
          borderRadius={"full"}
          borderColor={"#CDD6E9"}
          _hover={{ bg: "transparent" }}
        >
          <ArrowCircleLeft2 size="30" color="#464B50" variant="Outline" />
        </IconButton>
        <Heading size={"2xl"} color={"#1A1C1E"}>
          Afdeling Kwaliteit
        </Heading>
      </Flex>
      <Flex gap={"2"}>
        <Box
          bg={"#F7F7F7"}
          border={"solid 2px #CDD6E933"}
          borderRadius={"xl"}
          width={"50px"}
          height={"50px"}
          display={"flex"}
          alignItems={"center"}
          justifyContent={"center"}
        >
          <Switch.Root colorPalette={"grey"} size={"sm"} width={"fit"}>
            <Switch.HiddenInput width={0} height={0} />
            <Switch.Control />
          </Switch.Root>
        </Box>
        <IconButton
          aria-label="filter"
          variant={"outline"}
          border={"solid 2px #CDD6E933"}
          bg={"#F7F7F7"}
          borderRadius={"xl"}
          width={"50px"}
          height={"50px"}
          display={"flex"}
          alignItems={"center"}
          justifyContent={"center"}
        >
          <IoFilter color="#292D32" />
        </IconButton>
        <IconButton
          aria-label="filter"
          variant={"outline"}
          border={"solid 2px #CDD6E933"}
          bg={"#F7F7F7"}
          borderRadius={"xl"}
          width={"50px"}
          height={"50px"}
          display={"flex"}
          alignItems={"center"}
          justifyContent={"center"}
        >
          <Calendar size="32" color="#292D32" />
        </IconButton>
        <IconButton
          aria-label="export"
          variant={"outline"}
          border={"solid 2px #CDD6E933"}
          bg={"indigo"}
          color={"white"}
          borderRadius={"xl"}
          height={"50px"}
          px={"3"}
          display={"flex"}
          alignItems={"center"}
          justifyContent={"center"}
          fontWeight={"bold"}
        >
          <ExportCurve size="32" color="#fff" />
          <Text>Export xlsx</Text>
        </IconButton>
        <IconButton
          aria-label="add task"
          variant={"outline"}
          border={"solid 2px #CDD6E933"}
          bg={"#75C5C1"}
          color={"white"}
          borderRadius={"xl"}
          height={"50px"}
          px={"3"}
          display={"flex"}
          alignItems={"center"}
          justifyContent={"center"}
          fontWeight={"bold"}
          onClick={() => setModal({ open: true })}
        >
          <AddCircle size="32" color="#fff" />
          <Text>Add Task</Text>
        </IconButton>
      </Flex>
    </Flex>
  );
};

export default TodoHeader;
