export interface IPaginationProps {
  pagination: {
    currentPage: number;
    perPage: number;
    totalPages: number;
  };
  setPagination: React.Dispatch<
    React.SetStateAction<{
      currentPage: number;
      perPage: number;
      totalPages: number;
    }>
  >;
}
