"use client";
import CustomAvatarGroup from "@/module/lib/components/CustomAvatarGroup";
import CustomTable from "@/module/lib/components/CustomTable";
import { SampleTasks } from "@/module/lib/constants/tasks";
import ActionBar from "@/module/view/to-do/components/ActionBar";
import CategoryFilter from "@/module/view/to-do/components/CategoryFilter";
import TodoHeader from "@/module/view/to-do/components/TodoHeader";
import {
  Box,
  IconButton,
  Menu,
  Portal,
  ScrollArea,
  Table,
  Text,
  VStack,
} from "@chakra-ui/react";
import { AddCircle, Flag } from "iconsax-reactjs";
import { useState } from "react";
import { HiMiniEllipsisHorizontal } from "react-icons/hi2";
import { MdOutlineCheck } from "react-icons/md";
import { RiDeleteBin5Line, RiEditFill } from "react-icons/ri";
import CreateTask from "./components/CreateTask";

const TodoPageView = () => {
  const [search, setSearch] = useState<string>("");
  const [activeCategory, setActiveCategory] = useState<string>("to-do");
  const [display, setDisplay] = useState<string>("vertical");
  const [pagination, setPagination] = useState({
    currentPage: 1,
    perPage: 10,
    totalPages: 1,
  });

  const [modal, setModal] = useState({ open: false });

  return (
    <Box
      bg={"white"}
      width={"full"}
      height={"full"}
      borderRadius={"2xl"}
      display="flex"
      flexDirection="column"
    >
      <CreateTask modal={modal} setModal={setModal} />
      <TodoHeader setModal={setModal} />
      <Box
        gap={"2"}
        p={"4"}
        flex={"1"}
        display="flex"
        flexDirection="column"
        overflow={"hidden"}
      >
        <ActionBar
          search={search}
          setSearch={setSearch}
          display={display}
          setDisplay={setDisplay}
        />
        <CategoryFilter
          activeCategory={activeCategory}
          setActiveCategory={setActiveCategory}
        />
        <ScrollArea.Root flex={"1"}>
          <ScrollArea.Viewport>
            <ScrollArea.Content paddingEnd="3" textStyle="sm">
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
                      onClick={() => setModal({ open: true })}
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
                    _hover={{ bg: "gray.50" }}
                  >
                    <Table.Cell
                      color="#464B50"
                      px={"4"}
                      py={"6"}
                      fontWeight={"semibold"}
                    >
                      {task.name}
                    </Table.Cell>
                    <Table.Cell
                      color="#464B50"
                      px={"4"}
                      py={"6"}
                      fontWeight={"400"}
                    >
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
                    <Table.Cell
                      color="#464B50"
                      px={"4"}
                      py={"6"}
                      fontWeight={"400"}
                    >
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
                          <Text textTransform={"capitalize"}>
                            {task.priority}
                          </Text>
                        </Box>

                        <Menu.Root
                          variant={"solid"}
                          defaultHighlightedValue={"edit"}
                        >
                          <Menu.Trigger asChild>
                            <IconButton bg={"#F7F7F7"} rounded={"lg"}>
                              <HiMiniEllipsisHorizontal />
                            </IconButton>
                          </Menu.Trigger>
                          <Portal>
                            <Menu.Positioner>
                              <Menu.Content
                                p={"2"}
                                bg={"white"}
                                display={"flex"}
                                flexDirection={"column"}
                                gap={"3"}
                              >
                                <Menu.Item
                                  value="edit"
                                  color={"blue.500"}
                                  _hover={{ bg: "gray.100" }}
                                  cursor={"pointer"}
                                  px={"2"}
                                  py={"1"}
                                >
                                  <RiEditFill />
                                  <Box flex="1">Edit</Box>
                                </Menu.Item>
                                <Menu.Item
                                  value="completed"
                                  color={"green.700"}
                                  _hover={{ bg: "gray.100" }}
                                  cursor={"pointer"}
                                  px={"2"}
                                  py={"1"}
                                >
                                  <MdOutlineCheck />
                                  <Box flex="1">Mark as Competed</Box>
                                </Menu.Item>
                                <Menu.Item
                                  value="delete"
                                  color="fg.error"
                                  _hover={{ bg: "gray.100" }}
                                  cursor={"pointer"}
                                  px={"2"}
                                  py={"1"}
                                >
                                  <RiDeleteBin5Line />
                                  <Box flex="1">Delete</Box>
                                </Menu.Item>
                              </Menu.Content>
                            </Menu.Positioner>
                          </Portal>
                        </Menu.Root>
                      </Box>
                    </Table.Cell>
                  </Table.Row>
                ))}
              </CustomTable>
            </ScrollArea.Content>
          </ScrollArea.Viewport>
          {/* <ScrollArea.Scrollbar /> */}
        </ScrollArea.Root>
      </Box>
    </Box>
  );
};

export default TodoPageView;
