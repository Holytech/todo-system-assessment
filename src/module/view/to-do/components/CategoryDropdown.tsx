import { categories } from "@/module/lib/constants/category";
import {
  createListCollection,
  HStack,
  IconButton,
  Portal,
  Select,
  useSelectContext,
} from "@chakra-ui/react";
import React from "react";
import { RiForbidLine } from "react-icons/ri";

interface Category {
  label: string;
  value: string;
  icon: React.ReactNode;
}

const SelectTrigger = () => {
  const select = useSelectContext();
  const items = select.selectedItems as Category[];
  return (
    <IconButton
      px="2"
      variant="outline"
      size="sm"
      {...select.getTriggerProps()}
    >
      {select.hasSelectedItems ? items[0]?.icon : <RiForbidLine />}
    </IconButton>
  );
};

const CategoryDropdown = () => {
  const CategoriesList = createListCollection({
    items: categories,
  });
  return (
    <Select.Root
      positioning={{ sameWidth: false }}
      collection={CategoriesList}
      size="sm"
      width="320px"
      defaultValue={["react"]}
    >
      <Select.HiddenSelect />
      <Select.Control>
        <SelectTrigger />
      </Select.Control>
      <Portal>
        <Select.Positioner>
          <Select.Content minW="32">
            {CategoriesList.items.map((category) => (
              <Select.Item item={category} key={category.value}>
                <HStack>
                  {category.icon}
                  {category.label}
                </HStack>
                <Select.ItemIndicator />
              </Select.Item>
            ))}
          </Select.Content>
        </Select.Positioner>
      </Portal>
    </Select.Root>
  );
};

export default CategoryDropdown;
