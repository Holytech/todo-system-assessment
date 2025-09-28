import {
  Stack,
  Table,
  Pagination,
  ButtonGroup,
  IconButton,
  Text,
  Box,
  SkeletonText,
  StackSeparator,
} from "@chakra-ui/react";
import React, { useState } from "react";
import { LuChevronLeft, LuChevronRight } from "react-icons/lu";
import EmptyState from "./EmptyState";
import TablePagination from "./Pagination";
import { IPaginationProps } from "../../utility/types/pagination";

// Define the item interface
interface ProductItem {
  id: string | number;
  name: string;
  category: string;
  price: string | number;
}

// Sample data (replace with real data or props)
const mockItems: ProductItem[] = [
  { id: 1, name: "T-shirt", category: "Clothing", price: "$25" },
  { id: 2, name: "Laptop", category: "Electronics", price: "$999" },
  { id: 3, name: "Book", category: "Education", price: "$15" },
  { id: 4, name: "Shoes", category: "Footwear", price: "$60" },
  { id: 5, name: "Watch", category: "Accessories", price: "$120" },
  { id: 6, name: "Backpack", category: "Travel", price: "$40" },
  { id: 7, name: "Headphones", category: "Electronics", price: "$150" },
  { id: 8, name: "Notebook", category: "Stationery", price: "$5" },
  { id: 9, name: "Gloves", category: "Winterwear", price: "$20" },
  { id: 10, name: "Sunglasses", category: "Accessories", price: "$80" },
];

interface CustomTableProps extends IPaginationProps {
  tableHeaders: string[];
  children: React.ReactNode;
  isLoading: boolean;
  emptyStateData: {
    emptyStateHeader: string;
    emptyStateParagraph: string;
    callToAction?: React.ReactNode;
  };
  data: Record<string, unknown>[];
  hasPagination?: boolean;
}

const CustomTable: React.FC<CustomTableProps> = ({
  tableHeaders,
  children,
  isLoading,
  emptyStateData,
  data,
  hasPagination = true,
  pagination,
  setPagination,
}) => {
  return (
    <>
      {isLoading ? (
        <Stack separator={<StackSeparator />}>
          {[1, 2, 3, 4, 5, 6].map((each) => (
            <SkeletonText noOfLines={1} key={each} />
          ))}
        </Stack>
      ) : !data?.length && !isLoading ? (
        <EmptyState
          headingText={emptyStateData.emptyStateHeader}
          pText={emptyStateData.emptyStateParagraph}
          CTA={emptyStateData.callToAction}
        />
      ) : (
        <Stack gap={4} width={"full"}>
          <Table.Root
            width={"full"}
            size="md"
            variant="outline"
            interactive
            border={"1px solid #CDD6E9"}
            bg={"none"}
            borderRadius={"xl"}
          >
            <Table.Header bg={"#F7F7F7"}>
              <Table.Row>
                {tableHeaders?.map((head) => (
                  <Table.ColumnHeader
                    key={head}
                    color={"#1A1C1E"}
                    fontWeight={"bold"}
                    px={"4"}
                    py={"6"}
                    border={"solid 1px #CDD6E9"}
                  >
                    {head}
                  </Table.ColumnHeader>
                ))}
              </Table.Row>
            </Table.Header>

            <Table.Body>{children}</Table.Body>
          </Table.Root>
          {hasPagination && (
            <TablePagination
              pagination={pagination}
              setPagination={setPagination}
            />
          )}
        </Stack>
      )}
    </>
  );
};

export default CustomTable;
