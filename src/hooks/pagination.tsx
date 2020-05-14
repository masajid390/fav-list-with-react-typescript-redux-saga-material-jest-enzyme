import React from "react";

const usePagination = (items: Array<any>, pageLimit: number): [any, any] => {
  const [page, setPage] = React.useState(1);
  const handleChange = (event: any, value: number) => setPage(value);
  const getPageItems = () => {
    const start = (page - 1) * pageLimit;
    const end = start + pageLimit;
    return items.slice(start, end);
  };
  return [
    {
      count: Math.ceil(items.length / pageLimit),
      page: page,
      onChange: handleChange,
    },
    getPageItems(),
  ];
};
export default usePagination;
