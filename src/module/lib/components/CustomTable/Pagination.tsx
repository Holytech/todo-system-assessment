import {
  ButtonGroup,
  Flex,
  IconButton,
  NativeSelect,
  Pagination,
} from "@chakra-ui/react";
import React from "react";
import { LuChevronLeft, LuChevronRight } from "react-icons/lu";
import { IPaginationProps } from "../../utility/types/pagination";
import { RxDoubleArrowLeft, RxDoubleArrowRight } from "react-icons/rx";

const TablePagination: React.FC<IPaginationProps> = ({
  pagination,
  setPagination,
}) => {
  const { currentPage, perPage, totalPages } = pagination;

  return (
    <Flex alignItems={"center"} justifyContent={"space-between"}>
      <Pagination.Root
        count={totalPages * perPage}
        pageSize={perPage}
        page={currentPage}
        bg={"#F7F7F7"}
        px={"4"}
        rounded={"3xl"}
      >
        <ButtonGroup variant="subtle" size="sm" wrap="wrap">
          <Pagination.PrevTrigger asChild>
            <IconButton
              variant={"plain"}
              onClick={() =>
                setPagination((prev) => ({
                  ...prev,
                  currentPage: 1,
                }))
              }
            >
              <RxDoubleArrowLeft color={"#1A1C1E"} />
            </IconButton>
          </Pagination.PrevTrigger>
          <Pagination.PrevTrigger asChild>
            <IconButton
              variant={"plain"}
              onClick={() =>
                setPagination((prev) => ({
                  ...prev,
                  currentPage: Math.max(prev.currentPage - 1, 1),
                }))
              }
            >
              <LuChevronLeft color={"#1A1C1E"} />
            </IconButton>
          </Pagination.PrevTrigger>

          <Pagination.Items
            render={(page) => (
              <IconButton
                variant={{ base: "ghost", _selected: "outline" }}
                rounded={"full"}
                color={"#75C5C1"}
                bg={"transparent"}
                _selected={{ bg: "#75C5C1", color: "white", border: "none" }}
              >
                {page.value}
              </IconButton>
            )}
          />

          <Pagination.NextTrigger asChild>
            <IconButton
              variant={"plain"}
              color={"#1A1C1E"}
              onClick={() =>
                setPagination((prev) => ({
                  ...prev,
                  currentPage: Math.max(prev.currentPage + 1, totalPages),
                }))
              }
            >
              <LuChevronRight color={"#1A1C1E"} />
            </IconButton>
          </Pagination.NextTrigger>
          <Pagination.NextTrigger asChild>
            <IconButton
              variant={"plain"}
              onClick={() =>
                setPagination((prev) => ({
                  ...prev,
                  currentPage: totalPages,
                }))
              }
            >
              <RxDoubleArrowRight color={"#1A1C1E"} />
            </IconButton>
          </Pagination.NextTrigger>
        </ButtonGroup>
      </Pagination.Root>
      <NativeSelect.Root size="sm" width="100px">
        <NativeSelect.Field
          placeholder="Select option"
          value={perPage}
          onChange={(e) =>
            setPagination((prev) => ({
              ...prev,
              perPage: Number(e.target.value),
            }))
          }
          px={"4"}
          color={"#545464"}
          bg={"#F7F7F7"}
          border={"1px solid #75C5C1"}
          borderRadius={"3xl"}
        >
          <option value="5">5</option>
          <option value="10">10</option>
          <option value="20">20</option>
          <option value="30">30</option>
          <option value="40">40</option>
          <option value="50">50</option>
          <option value="100">100</option>
          <option value="200">200</option>
        </NativeSelect.Field>
        <NativeSelect.Indicator color={"#1A1C1E"} />
      </NativeSelect.Root>
    </Flex>
  );
};

export default TablePagination;
