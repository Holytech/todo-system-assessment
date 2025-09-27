"use client";
import CustomAvatarGroup from "@/module/lib/components/CustomAvatarGroup";
import CustomTable from "@/module/lib/components/CustomTable";
import { SampleTasks } from "@/module/lib/constants/tasks";
import ActionBar from "@/module/view/to-do/ActionBar";
import CategoryFilter from "@/module/view/to-do/CategoryFilter";
import TodoHeader from "@/module/view/to-do/TodoHeader";
import { Box, IconButton, Table, Text, VStack } from "@chakra-ui/react";
import { AddCircle, Flag } from "iconsax-reactjs";
import { useState } from "react";
import { HiMiniEllipsisHorizontal } from "react-icons/hi2";

export default function TodoPage() {
  const [search, setSearch] = useState<string>("");
  const [display, setDisplay] = useState<string>("horizontal");
  const [pagination, setPagination] = useState({
    currentPage: 1,
    perPage: 10,
    totalPages: 1,
  });

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
        <CustomTable
          pagination={pagination}
          setPagination={setPagination}
          tableHeaders={["Name", "Date", "Assignee", "Priority"]}
          isLoading={false}
          data={SampleTasks}
          emptyStateData={{
            emptyStateHeader: "No todos yet",
            emptyStateParagraph:
              "Looks like you haven't created any todo yet, click on the button below to add the first one",
            callToAction: (
              <IconButton
                aria-label="empty state cta"
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
              >
                <AddCircle size="32" color="#fff" />
                <Text>Add Task</Text>
              </IconButton>
            ),
          }}
        >
          {SampleTasks.map((task) => (
            <Table.Row
              key={task.id}
              border={"solid 1px #CDD6E9"}
              _hover={{ bg: "gray.100" }}
            >
              <Table.Cell
                color="#464B50"
                px={"4"}
                py={"6"}
                fontWeight={"semibold"}
              >
                {task.name}
              </Table.Cell>
              <Table.Cell color="#464B50" px={"4"} py={"6"} fontWeight={"400"}>
                {task.startDate} - {task.endDate}
              </Table.Cell>
              <Table.Cell
                color="#464B50"
                px={"4"}
                py={"6"}
                fontWeight={"semibold"}
              >
                <CustomAvatarGroup
                  size="2xs"
                  avatars={task.assignees.map((each, idx) => ({
                    name: `User ${idx + 1}`,
                    src: each,
                  }))}
                />
              </Table.Cell>
              <Table.Cell color="#464B50" px={"4"} py={"6"} fontWeight={"400"}>
                <Box
                  display={"flex"}
                  alignItems={"center"}
                  gap={"3"}
                  justifyContent={"space-between"}
                >
                  <Box display={"flex"} alignItems={"center"} gap={"3"}>
                    <Flag
                      size="32"
                      color={
                        task.priority === "medium"
                          ? "#75C5C1"
                          : task.priority === "important"
                          ? "#F6BE38"
                          : "#FF515D"
                      }
                      variant="Bold"
                    />
                    <Text textTransform={"capitalize"}>{task.priority}</Text>
                  </Box>

                  <IconButton bg={"#F7F7F7"}>
                    <HiMiniEllipsisHorizontal />
                  </IconButton>
                </Box>
              </Table.Cell>
            </Table.Row>
          ))}
        </CustomTable>
      </VStack>
    </Box>
  );
}
