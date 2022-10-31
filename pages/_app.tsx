import Head from 'next/head'
import { Provider as StoreProvider } from 'react-redux'
import type { MyAppProps } from 'app'
import App from 'app'
import store from 'store'
import DomainsProvider from 'domains'
import CacheProvider from 'app/emotion'

import 'lib/toastify/styles.css'
import 'simplebar-react/dist/simplebar.min.css'
import 'rc-image/assets/index.css'
import 'styles/global.css'

function MainApp(props: MyAppProps): JSX.Element {
  return (
    <CacheProvider emotionServerCache={props.emotionCache}>
      <StoreProvider store={store}>
        <DomainsProvider>
          <Head>
            <title>Onebit</title>
            <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
            {/* <link rel="icon" href="/favicon.ico" /> */}
          </Head>
          <App {...props} />
        </DomainsProvider>
      </StoreProvider>
    </CacheProvider>
  )
}

export default MainApp
