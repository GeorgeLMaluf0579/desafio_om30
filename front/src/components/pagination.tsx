import React, { useEffect, useState } from "react";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa6";

interface PaginationProps {
  total: number;
  limit: number;
  offset: number;
  onPrev: () => void;
  onNext: () => void;
};

const Pagination: React.FC<PaginationProps> = ({total, limit, offset, onPrev, onNext}) => {
  const [totalPages, setTotalPages] = useState<number>(0);
  const [currentPage, setCurrentPage] = useState<number>(0);

  useEffect(() => {
    const newTotalPages = Math.ceil(total / limit);
    const newCurrentPage = Math.ceil(offset/ limit) + 1;
    setTotalPages(newTotalPages)
    setCurrentPage(newCurrentPage)
  }, [total, limit, offset])
  
  return (
    <div className="w3-container w3-center">
      {totalPages > 1 ? (
        <button className="w3-button w3-light-gray w3-hover-gray w3-border" onClick={() => onPrev()}><FaAngleLeft /></button>
      ): null}
      <span style={{display:"inline-block", width:"100px"}}>
        {currentPage}/{totalPages}
      </span>
      {totalPages > 1 ? (
        <button className="w3-button w3-light-gray w3-hover-gray w3-border" onClick={() => onNext()}><FaAngleRight /></button>
      ): null}
    </div>
  )
}

export default Pagination;