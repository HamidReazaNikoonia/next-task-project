import React from 'react';
import type { AppProps } from 'next/app';
import { Provider } from 'react-redux';
import { useRouter } from 'next/dist/client/router';

// State (Context)
import { ThemeContext } from '../lib/context/theme/theme-context';
import { wrapper, AppStore } from '../lib/store';

// Components
import Header from '../layouts/Header';

// Inject Styles
import '../styles/globals.scss';

function MyApp({ Component, pageProps }: AppProps) {
  const { pathname } = useRouter();

  // We Can Get Current Theme From LocalStorage
  const [theme, setTheme] = React.useState<string>('light');

  const { store }: { store: AppStore } = wrapper.useWrappedStore(pageProps);
  return (
    <Provider store={store}>
      <div className={`theme-${theme}`}>
        <div className="layout">
          <ThemeContext.Provider value={{ theme, setTheme }}>
            {/* Header Not Appear inHome Page */}
            {pathname !== '/' && <Header />}
            <Component {...pageProps} />
          </ThemeContext.Provider>
        </div>
      </div>
    </Provider>
  );
}

export default MyApp;
