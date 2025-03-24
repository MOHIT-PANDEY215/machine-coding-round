import Layout from "@/app/components/layout/Layout";
import GlobalCommentContainer from "@/app/components/nested-comment/GlobalCommentContainer";

export default function page() {
  return (
    <>
      <Layout title="Nested Comment">
        <GlobalCommentContainer />
      </Layout>
    </>
  );
}
