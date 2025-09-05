import CanchaBackground from "@/components/CanchaBackground";
import "@/styles/globals.css";
import styles from "@/styles/Home.module.css";
import { hidenShowView, timeOutEjecute } from "@/utils/toolsFuncions";
import type { AppProps } from "next/app";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";

export default function App({ Component, pageProps }: AppProps) {
  const [showMainView, setShowMainView] = useState<boolean>(false);
  const [spinPelota, setSpinPelota] = useState<boolean>(false);
  const router = useRouter();
  const goToDashboard = () => {
    router.push("/menu");
  };
  const handleMenuAction = () => {
    /*hidenShowView('test show view', showMainView, setShowMainView)
      setSpinPelota(true);*/
      timeOutEjecute(() => setSpinPelota(false), 1);
      goToDashboard();
  };
  useEffect(() => {
    const handleRouteChange = () => {
      setSpinPelota(true); // ejemplo: reinicia el spinner
    timeOutEjecute(() => setSpinPelota(false), 1);

    };

    router.events.on("routeChangeComplete", handleRouteChange);
    return () => {
      router.events.off("routeChangeComplete", handleRouteChange);
    };
  }, [router.events]);

  return (
    <>
      <div className={`${styles.container_main}`}>
        <CanchaBackground />
        <section className={`${styles.show_container_content}`}>
          {/*<DefineContentView />*/}
          <Component {...pageProps} />
        </section>
        <section className={`${styles.menu_bar_bottom}`}>
          <span
            className={`${styles.menu_pelota} ${
              spinPelota ? `${styles.spinner}` : ""
            }`}
            onClick={() => handleMenuAction()}
          >
            ⚽
          </span>
        </section>
      </div>
    </>
  );
}
