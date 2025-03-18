import React from "react";

interface PaginationProps {
  page: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

const Pagination: React.FC<PaginationProps> = ({
  page,
  totalPages,
  onPageChange,
}) => {
  if (totalPages <= 1) return null;

  const generatePagination = () => {
    const pages = [];
    if (totalPages <= 7) {
      for (let i = 1; i <= totalPages; i++) pages.push(i);
    } else {
      pages.push(1);
      if (page > 3) pages.push("...");
      for (
        let i = Math.max(2, page - 1);
        i <= Math.min(totalPages - 1, page + 1);
        i++
      ) {
        pages.push(i);
      }
      if (page < totalPages - 2) pages.push("...");
      pages.push(totalPages);
    }
    return pages;
  };

  return (
    <div className="flex px-2 justify-center gap-2 sm:gap-3 items-center my-4">
      <button
        className={`p-2 rounded-md ${
          page > 1
            ? "hover:bg-gray-200 dark:hover:bg-gray-800"
            : "opacity-50 cursor-not-allowed"
        }`}
        onClick={() => onPageChange(page - 1)}
        disabled={page === 1}
      >
        ◀
      </button>

      {generatePagination().map((p, index) =>
        p === "..." ? (
          <span key={index} className="px-2 text-gray-500">
            ...
          </span>
        ) : (
          <button
            key={index}
            className={`p-2 px-3 rounded-md font-semibold ${
              p === page
                ? "bg-blue-600 text-white"
                : "hover:bg-gray-200 dark:hover:bg-gray-800"
            }`}
            onClick={() => onPageChange(Number(p))}
          >
            {p}
          </button>
        )
      )}

      <button
        className={`p-2 rounded-md ${
          page < totalPages
            ? "hover:bg-gray-200 dark:hover:bg-gray-800"
            : "opacity-50 cursor-not-allowed"
        }`}
        onClick={() => onPageChange(page + 1)}
        disabled={page === totalPages}
      >
        ▶
      </button>
    </div>
  );
};

export default Pagination;
