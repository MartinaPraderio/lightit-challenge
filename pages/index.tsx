import { useEffect } from "react";
import { useRouter } from "next/router";

export default function Home(): JSX.Element {
  const router = useRouter();

  useEffect(() => {
    router.push("/patients");
  }, [router]);

  return (
    <>
      <main className="flex min-h-screen flex-col items-center justify-between p-24"></main>
    </>
  );
}
