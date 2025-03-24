import DraggableContainer from "@/app/components/drag-drop/DraggableContainer";
import Layout from "@/app/components/layout/Layout";

export default function page() {
  return (
    <>
      <Layout title="Drag and Drop">
        <DraggableContainer />
      </Layout>
    </>
  );
}
