"use client";
import React, { useEffect, useState } from "react";
import Pagination from "./Pagination";
import ProductCard from "./ProductCard";
import Skeleton from "./Skeleton";

interface Product {
  id: number;
  title: string;
  thumbnail: string;
}

const PaginationContainer: React.FC = () => {
  const [data, setData] = useState<Product[]>([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      const response = await fetch("https://dummyjson.com/products?limit=100");
      const json = await response.json();
      setData(json.products);
      setLoading(false);
    };
    fetchData();
  }, []);

  const totalPages = Math.ceil(data.length / 10);

  const handlePageChange = (input: number) => {
    if (input >= 1 && input <= totalPages && input !== page) {
      setPage(input);
      setLoading(true);
      setTimeout(() => setLoading(false), 500);
    }
  };

  return (
    <main className="dark min-h-screen w-full transition-colors duration-300">
      <div className="flex flex-col items-center px-4 py-6 bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100">
        <Pagination
          page={page}
          totalPages={totalPages}
          onPageChange={handlePageChange}
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 w-full max-w-6xl">
          {loading
            ? [...Array(12)].map((_, index) => <Skeleton key={index} />)
            : data
                .slice(page * 10 - 10, page * 10)
                .map((elem) => <ProductCard key={elem.id} product={elem} />)}
        </div>

        <Pagination
          page={page}
          totalPages={totalPages}
          onPageChange={handlePageChange}
        />
      </div>
    </main>
  );
};

export default PaginationContainer;
