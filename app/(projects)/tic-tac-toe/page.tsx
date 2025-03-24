import Layout from "@/app/components/layout/Layout";
import GlobalTicTacToeContainer from "@/app/components/tic-tac-toe/GlobalTicTacToeContainer";

export default function page() {
  return (
    <>
      <Layout title="Tic Tac Toe">
        <GlobalTicTacToeContainer />
      </Layout>
    </>
  );
}
