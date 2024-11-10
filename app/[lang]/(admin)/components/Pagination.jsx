"use client"
// import {Pagination} from "@nextui-org/react";
import React from "react";
import {Pagination, PaginationItemType} from "@nextui-org/pagination";

function PaginatedItems({ itemsPerPage }) {
 
    const [currentPage, setCurrentPage] = React.useState(1);

    
    const renderItem = ({
        ref,
        key,
        value,
        isActive,
        onNext,
        onPrevious,
        setPage,
        className,
      }) => {
        if (value === PaginationItemType.NEXT) {
          return (
            <button key={key} className={className + "bg-default-200/50 min-w-8 w-8 h-8"} onClick={onNext}>
              {/* <ChevronIcon className="rotate-180" /> */}
              next
            </button>
          );
        }
    
        if (value === PaginationItemType.PREV) {
          return (
            <button key={key} className={className + "bg-default-200/50 min-w-8 w-8 h-8"} onClick={onPrevious}>
              {/* <ChevronIcon /> */}
              prev
            </button>
          );
        }
    
        if (value === PaginationItemType.DOTS) {
          return <button key={key} className={className}>...</button>;
        }
    
        // cursor is the default item
        return (
          <button
            key={key}
            ref={ref}
            className={
              className + `py-1.5 px-3 text-sm text-[#424e5a] bg-transparent cursor-pointer
                                                border border-solid border-[#eaedf1] transition-colors hover:text-[#a2132b] hover:bg-[#f8f9fa]
                                                ` +
              isActive &&
              "text-white bg-gradient-to-br from-indigo-500 to-pink-500 font-bold"
            }
            onClick={() => setPage(value)}
          >
            {value}
          </button>
        );
      };



  return (
    <>
      <Pagination
      disableCursorAnimation
      showControls
      total={10}
      initialPage={1}
      className="gap-2"
      radius="full"
      renderItem={renderItem}
      variant="light"
    />
    </>
  );
}

export default PaginatedItems;
