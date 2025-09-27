import { useState } from "react";
import { Box } from "@chakra-ui/react";

interface ToggleButtonProps {
  initialState?: boolean;
  onToggle?: () => void;
}

export const ToggleButton: React.FC<ToggleButtonProps> = ({
  initialState = false,
  onToggle,
}) => {
  const [isOn, setIsOn] = useState(initialState);

  const toggle = () => {
    setIsOn((prev) => !prev);

    if (!onToggle) return;
    onToggle();
  };

  return (
    <Box
      as="button"
      onClick={toggle}
      w="56px" // w-14 = 56px
      h="32px" // h-8 = 32px
      display="flex"
      alignItems="center"
      borderRadius="full"
      px={1}
      transition="background-color 0.3s ease"
      cursor="pointer"
      bg={isOn ? "gray.900" : "gray.300"}
      aria-checked={isOn}
      role="switch"
      position="relative"
      outline="none"
      _focus={{
        boxShadow: "0 0 0 3px rgba(66, 153, 225, 0.6)",
      }}
      _active={{
        transform: "scale(0.95)",
      }}
    >
      <Box
        w="24px"
        h="24px"
        bg="white"
        borderRadius="full"
        boxShadow="md"
        transform={isOn ? "translateX(24px)" : "translateX(0px)"}
        transition="transform 0.3s ease-in-out"
      />
    </Box>
  );
};
