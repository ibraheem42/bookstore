import type { AppProps } from 'next/app';

import { wrapper } from '../redux/store';

import 'bootstrap/dist/css/bootstrap.min.css';

function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

export default wrapper.withRedux(App);
