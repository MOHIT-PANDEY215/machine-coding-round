import Layout from "@/app/components/layout/Layout";
import OtpParent from "@/app/components/otp-input/OtpParent";

export default function page() {
  const OTP_COUNT = 6;
  return (
    <>
      <Layout title="Validate OTP">
        <OtpParent count={OTP_COUNT} />
      </Layout>
    </>
  );
}
