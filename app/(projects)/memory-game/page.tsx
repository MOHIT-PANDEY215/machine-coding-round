import Layout from "@/app/components/layout/Layout";
import Parent from "@/app/components/memory-game/Parent";

export default function page() {
  const TOTAL_COUNT = 12;
  return (
    <>
      <Layout title="Memory Game">
        <Parent total={TOTAL_COUNT} />
      </Layout>
    </>
  );
}
