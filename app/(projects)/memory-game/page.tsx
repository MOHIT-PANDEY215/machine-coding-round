import Parent from "@/app/components/memory-game/Parent";

export default function page() {
  const TOTAL_COUNT = 12;
  return (
    <>
      <div className="flex flex-col gap-8 items-center w-full min-h-[calc(100vh-48px)] py-10">
        <h2 className="text-xl">Memory Game</h2>
        <Parent total={TOTAL_COUNT} />
      </div>
    </>
  );
}
