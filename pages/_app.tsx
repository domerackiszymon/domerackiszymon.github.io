import "../styles/globals.sass";
import "./components/style/BackgroundGrid.sass";
import "./components/style/Fullpage.sass";
import "../styles/LoadingScreen.sass";

import type { AppProps } from "next/app";

export default function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}
