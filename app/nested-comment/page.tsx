import GlobalContainer from "../components/nested-comment/GlobalContainer";


export default function page() {
  return (
    <>
      <div className="flex flex-col gap-8 items-center w-full min-h-[calc(100vh-48px)] py-10 overflow-x-scroll">
        <h2 className="text-xl">Nested Comment</h2>
        <GlobalContainer/>
      </div>
    </>
  );
}
