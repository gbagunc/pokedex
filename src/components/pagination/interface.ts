export interface IPaginationProps {
  total: number;
  pageSize: number;
  current: number;
  onPageChange: (page: number, pageSize: number) => void;
}
