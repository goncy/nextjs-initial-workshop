import type {AppProps} from "next/app";

import Page from "../components/Page";

import "../globals.css";

function App({Component, pageProps}: AppProps) {
  return (
    <Page>
      <Component {...pageProps} />
    </Page>
  );
}
export default App;
