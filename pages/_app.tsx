import React from 'react';
import type { AppProps } from 'next/app'
import { Provider } from "react-redux";

import { ThemeContext } from '../lib/context/theme/theme-context';

const { wrapper } = require("../lib/store");

// Inject Styles
import '../styles/globals.scss'
import '../styles/home.scss'

function MyApp({ Component, pageProps }: AppProps) {
  const [theme, setTheme] = React.useState('light');
  const { store, props } = wrapper.useWrappedStore(pageProps);
  return (
    <Provider store={store}>
      <div className={`theme-${theme}`}>
      <ThemeContext.Provider value={{ theme, setTheme }}>
      <Component {...pageProps} />
      </ThemeContext.Provider>
      </div>
    </Provider>
  )
}

export default MyApp

