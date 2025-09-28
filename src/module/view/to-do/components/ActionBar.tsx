import {
  CloseButton,
  Flex,
  IconButton,
  Input,
  InputGroup,
} from "@chakra-ui/react";
import { RowHorizontal, RowVertical, SearchNormal1 } from "iconsax-reactjs";
import { useRef } from "react";

interface ActionBarProps {
  search: string;
  setSearch: React.Dispatch<React.SetStateAction<string>>;
  display: string;
  setDisplay: React.Dispatch<React.SetStateAction<string>>;
}

const ActionBar: React.FC<ActionBarProps> = ({
  search,
  setSearch,
  display,
  setDisplay,
}) => {
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
      bg={"#E9F5F7"}
      width={"full"}
      p={"2"}
      rounded={"xl"}
      justifyContent={"space-between"}
    >
      <Flex
        align="center"
        gap={2}
        bg="white"
        p={2}
        borderRadius="xl"
        width={"fit"}
        height={"40px"}
      >
        <SearchNormal1 size="20" color="#6c7278" />
        <InputGroup endElement={endElement}>
          <Input
            ref={inputRef}
            placeholder="Search for To-Do"
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
      <Flex bg={"white"} p={"1"} rounded={"lg"} gap={2} height={"40px"}>
        <IconButton
          aria-label="filter"
          variant={"outline"}
          bg={display === "horizontal" ? "#75C5C1" : "#F7F7F7"}
          border={"none"}
          borderRadius={"md"}
          width={"32px"}
          height={"full"}
          display={"flex"}
          flex={"1"}
          alignItems={"center"}
          justifyContent={"center"}
          onClick={() => setDisplay("horizontal")}
        >
          <RowHorizontal
            size="32"
            color={display === "horizontal" ? "white" : "#7988A9"}
          />
        </IconButton>
        <IconButton
          aria-label="filter"
          variant={"outline"}
          bg={display === "vertical" ? "#75C5C1" : "#F7F7F7"}
          border={"none"}
          borderRadius={"md"}
          width={"32px"}
          height={"full"}
          display={"flex"}
          alignItems={"center"}
          justifyContent={"center"}
          onClick={() => setDisplay("vertical")}
        >
          <RowVertical
            size="32"
            color={display === "vertical" ? "white" : "#7988A9"}
          />
        </IconButton>
      </Flex>
    </Flex>
  );
};

export default ActionBar;
