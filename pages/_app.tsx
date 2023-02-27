import React from 'react';
import type { AppProps } from 'next/app';
import { Provider } from 'react-redux';

// State (Context)
import { ThemeContext } from '../lib/context/theme/theme-context';
import { wrapper } from '../lib/store';
import AppStore from '../lib/store';

// Components
import Header from '../layouts/Header';

// Inject Styles
import '../styles/globals.scss';

function MyApp({ Component, pageProps }: AppProps) {
  const [theme, setTheme] = React.useState<string>('light');
  const { store }: AppStore = wrapper.useWrappedStore(pageProps);
  return (
    <Provider store={store}>
      <div className={`theme-${theme}`}>
        <div className="layout">
          <ThemeContext.Provider value={{ theme, setTheme }}>
            <Header />
            <Component {...pageProps} />
          </ThemeContext.Provider>
        </div>
      </div>
    </Provider>
  );
}

export default MyApp;
