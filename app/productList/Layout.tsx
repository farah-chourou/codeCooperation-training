import { Suspense } from "react";
import LoadingPage from "./Loading";

export default function HomeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section>
      {" "}
      <Suspense fallback={<LoadingPage />}> {children} </Suspense>
    </section>
  );
}
