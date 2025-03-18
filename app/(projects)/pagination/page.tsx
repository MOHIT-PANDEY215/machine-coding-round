import PaginationContainer from "@/app/components/pagination/PaginationContainer";

export default function page() {
  return (
    <>
      <div className="flex flex-col gap-8 items-center w-full min-h-[calc(100vh-48px)] py-10">
        <h2 className="text-xl">Pagination</h2>
        <PaginationContainer />
      </div>
    </>
  );
}
