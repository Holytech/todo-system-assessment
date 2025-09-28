import { SkeletonText, Stack, StackSeparator, Table } from "@chakra-ui/react";
import React from "react";
import { IPaginationProps } from "../../utility/types/pagination";
import EmptyState from "./EmptyState";
import TablePagination from "./Pagination";

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
