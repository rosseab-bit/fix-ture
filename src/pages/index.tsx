import styles from "@/styles/Home.module.css";
import DefineContentView from "@/components/DefineContentView";
import { useEffect } from "react";
import { useRouter } from "next/router";
export default function Home() {
  const router = useRouter();

  useEffect(() => {
    router.replace("/ranking"); // redirige a /dashboard
  }, [router]);

  return null // o un loader
}
