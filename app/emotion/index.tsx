import type { EmotionCache } from '@emotion/cache'
import { CacheProvider } from '@emotion/react'

import type { FCC } from 'app/types'

import createEmotionCache from './createEmotionCache'

const clientSideEmotionCache = createEmotionCache()

export type EmotionProps = {
  emotionServerCache: EmotionCache
}

export const Provider: FCC<EmotionProps> = ({ emotionServerCache, children }) => {
  const cache = emotionServerCache || clientSideEmotionCache
  return <CacheProvider value={cache}>{children}</CacheProvider>
}
export default Provider
