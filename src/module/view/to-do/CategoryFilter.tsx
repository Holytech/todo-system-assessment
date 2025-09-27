import { Flex } from "@chakra-ui/react";
import CategoryBox from "./CategoryBox";
import { categories } from "@/module/lib/constants/category";

const CategoryFilter = () => {
  return (
    <Flex bg={"#F7F7F7"} width={"full"} p={"2"} rounded={"xl"} gap={"3"}>
      {categories.map((category, index) => (
        <CategoryBox key={index} {...category} />
      ))}
    </Flex>
  );
};

export default CategoryFilter;
