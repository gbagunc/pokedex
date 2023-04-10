import { Pagination as AntPagination } from 'antd';

import { IPaginationProps } from './interface';

const Pagination = ({ total, pageSize, current, onPageChange }: IPaginationProps) => {
  const handlePageChange = (page: number, pageSize: number) => {
    onPageChange(page, pageSize);
  };

  return (
    <AntPagination
      total={total}
      pageSize={pageSize}
      current={current}
      showSizeChanger
      pageSizeOptions={['10', '20', '50']}
      onChange={handlePageChange}
    />
  );
};

export default Pagination;
