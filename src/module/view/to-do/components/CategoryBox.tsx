import { ICategoryBoxProps } from "@/module/lib/utility/types/category";
import { Box, Flex, Text } from "@chakra-ui/react";

const CategoryBox: React.FC<ICategoryBoxProps> = ({
  activeIcon,
  icon,
  label,
  value,
  count,
  boxBg,
  countBg,
  textColor,
  activeCategory,
  handleClick,
}) => {
  const isActive = activeCategory === value;
  return (
    <Box
      height="40px"
      bg={isActive ? boxBg : "white"}
      display="flex"
      alignItems="center"
      px="3"
      py="1"
      rounded="lg"
      gap="10"
      onClick={handleClick}
      cursor={"pointer"}
    >
      <Flex align="center" gap="2">
        {isActive ? activeIcon : icon}
        <Text color={isActive ? "white" : textColor}>{label}</Text>
      </Flex>
      <Text
        color={textColor}
        bg={countBg}
        px="2"
        fontWeight={"medium"}
        rounded="md"
        height="full"
        fontSize="sm"
        display="flex"
        alignItems="center"
        justifyContent="center"
      >
        ({count})
      </Text>
    </Box>
  );
};

export default CategoryBox;
