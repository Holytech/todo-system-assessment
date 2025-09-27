import { ICategoryBoxProps } from "@/module/lib/utility/types/category";
import { Box, Flex, Text } from "@chakra-ui/react";

const CategoryBox: React.FC<ICategoryBoxProps> = ({
  icon,
  label,
  count,
  iconColor,
  boxBg,
  countBg,
  textColor = "#464B50",
}) => (
  <Box
    height="40px"
    bg={boxBg}
    display="flex"
    alignItems="center"
    px="3"
    py="1"
    rounded="lg"
    gap="10"
  >
    <Flex align="center" gap="2">
      {icon}
      <Text color={iconColor || textColor}>{label}</Text>
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

export default CategoryBox;
