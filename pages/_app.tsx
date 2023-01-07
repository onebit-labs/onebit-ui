import store from 'store'
import Head from 'next/head'
import { Provider as StoreProvider } from 'react-redux'
import type { MyAppProps } from 'app'
import App from 'app'
import DomainsProvider from 'domains'

import CacheProvider from 'app/emotion'
import { appWithTranslation, useI18nHMR } from 'app/i18n'
import { initChartjs } from 'lib/chartjs'

import 'lib/toastify/styles.css'
import 'simplebar-react/dist/simplebar.min.css'
import 'rc-image/assets/index.css'
import 'styles/global.css'

initChartjs()

function MainApp(props: MyAppProps): JSX.Element {
  useI18nHMR()
  return (
    <CacheProvider emotionServerCache={props.emotionCache}>
      <StoreProvider store={store}>
        <DomainsProvider>
          <Head>
            <title>Onebit DeFi | Decentralized Asset Management Protocol</title>
            <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
            <link rel="icon" href="/favicon.ico" />
            <meta name="description" content="Onebit DeFi is a decentralized asset management protocol that connects DeFi users." />

            <meta property="og:type" content="website" />
            <meta key="og:site_name" property="og:site_name" content="Onebit DeFi | Decentralized Asset Management Protocol" />
            <meta key="og:image" property="og:image" content="https://defi.onebit.com/logo-square.svg" />
            <meta
              key="og:description"
              property="og:description"
              content="Onebit DeFi is a decentralized asset management protocol that connects DeFi users."
            />
            <meta key="og:title" property="og:title" content="Onebit" />
            <meta key="og:url" property="og:url" content="https://defi.onebit.com/" />

            <meta name="twitter:card" content="summary" />
            <meta name="twitter:title" content="Onebit DeFi | Decentralized Asset Management Protocol" />
            {/* <meta name="twitter:site" content="" /> */}
          </Head>
          <App {...props} />
        </DomainsProvider>
      </StoreProvider>
    </CacheProvider>
  )
}

export default appWithTranslation(MainApp)
