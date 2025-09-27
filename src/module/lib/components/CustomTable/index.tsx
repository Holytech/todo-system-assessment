import {
  Stack,
  Table,
  Pagination,
  ButtonGroup,
  IconButton,
  Text,
} from "@chakra-ui/react";
import React, { useState } from "react";
import { LuChevronLeft, LuChevronRight } from "react-icons/lu";

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

interface CustomTableProps {
  tableHeaders: string[];
  children: React.ReactNode;
}

const CustomTable: React.FC<CustomTableProps> = ({
  tableHeaders,
  children,
}) => {
  const pageSize = 5;
  const [page, setPage] = useState(1);

  const totalPages = Math.ceil(mockItems.length / pageSize);

  const paginatedItems = mockItems.slice(
    (page - 1) * pageSize,
    page * pageSize
  );

  return (
    <Stack gap={4} width={"full"}>
      <Table.Root
        width={"full"}
        size="md"
        variant="outline"
        interactive
        border={"solid 1px"}
        borderColor={"#CDD6E9"}
        borderRadius={"xl"}
      >
        <Table.Header bg={"#F7F7F7"}>
          <Table.Row>
            {tableHeaders?.map((head) => (
              <Table.ColumnHeader
                key={head}
                color={"#1A1C1E"}
                fontWeight={"semibold"}
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

      <Pagination.Root count={mockItems.length * 5} pageSize={5} page={1}>
        <ButtonGroup variant="ghost" size="sm" wrap="wrap">
          <Pagination.PrevTrigger asChild>
            <IconButton>
              <LuChevronLeft />
            </IconButton>
          </Pagination.PrevTrigger>

          <Pagination.Items
            render={(page) => (
              <IconButton variant={{ base: "ghost", _selected: "outline" }}>
                {page.value}
              </IconButton>
            )}
          />

          <Pagination.NextTrigger asChild>
            <IconButton>
              <LuChevronRight />
            </IconButton>
          </Pagination.NextTrigger>
        </ButtonGroup>
      </Pagination.Root>
    </Stack>
  );
};

export default CustomTable;
