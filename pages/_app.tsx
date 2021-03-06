import '../styles/globals.css'
import '../styles/swiper.css'
import '../styles/gallery.css'

import type { AppProps } from 'next/app'
import Layout from "../components/layout";
import {ResizerContext} from "../contexts/resizer-context";
import {LayoutContext} from "../contexts/layout-context";

function MyApp({ Component, pageProps }: AppProps) {
  return (
      <ResizerContext>
          <LayoutContext>
              <Layout>
                  <Component {...pageProps} />
              </Layout>
          </LayoutContext>
      </ResizerContext>

  )
}

export default MyApp
