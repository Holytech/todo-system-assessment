"use client";
import CustomTable from "@/module/lib/components/CustomTable";
import ActionBar from "@/module/view/to-do/ActionBar";
import CategoryFilter from "@/module/view/to-do/CategoryFilter";
import TodoHeader from "@/module/view/to-do/TodoHeader";
import { Box, VStack } from "@chakra-ui/react";
import { useState } from "react";

export default function TodoPage() {
  const [search, setSearch] = useState<string>("");
  const [display, setDisplay] = useState<string>("horizontal");

  return (
    <Box bg={"white"} width={"full"} height={"full"} borderRadius={"2xl"}>
      <TodoHeader />
      <VStack gap={"2"} p={"4"}>
        <ActionBar
          search={search}
          setSearch={setSearch}
          display={display}
          setDisplay={setDisplay}
        />
        <CategoryFilter />
        <CustomTable tableHeaders={["Name", "Date", "Assignee", "Priority"]}>
          <></>
        </CustomTable>
      </VStack>
    </Box>
  );
}
