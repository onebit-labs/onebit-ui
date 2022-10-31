import Avatar from '@mui/material/Avatar'
import type { SxProps, Theme } from '@mui/material/styles'
import { styled } from '@mui/material/styles'
import { getAssetInfo } from './assets-list'

export interface TokenIconProps {
  tokenSymbol: string
  sx?: SxProps<Theme>
}

const TokenAvatar = styled(Avatar)`
  .MuiAvatar-img {
    object-fit: contain;
  }
`

export function TokenIcon({ tokenSymbol, sx }: TokenIconProps) {
  if (!tokenSymbol) return null

  const asset = getAssetInfo(tokenSymbol)

  return <TokenAvatar sx={sx} alt={tokenSymbol} src={asset.icon.src} />
}

export interface NFTIconProps {
  NFT_ID: string
  sx?: SxProps<Theme>
}
