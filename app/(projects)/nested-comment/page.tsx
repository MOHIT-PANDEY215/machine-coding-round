import GlobalCommentContainer from "@/app/components/nested-comment/GlobalCommentContainer";

export default function page() {
  return (
    <>
      <div className="flex flex-col gap-8 items-center w-full min-h-[calc(100vh-48px)] py-10 ">
        <h2 className="text-xl">Nested Comment</h2>
        <GlobalCommentContainer />
      </div>
    </>
  );
}
