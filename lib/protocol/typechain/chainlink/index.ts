import { normalize } from 'lib/math'
import type { providers } from 'ethers'
import type BigNumber from 'bignumber.js'

import BaseService from '../commons/BaseService'
import type { tEthereumAddress } from '../commons/types'
import type { Chainlink } from './typechain/Chainlink'
import { Chainlink__factory } from './typechain/factories'

export type getAnswerProps = {
  token: tEthereumAddress
}

export class ChainlinkService extends BaseService<Chainlink> {
  provider: any

  constructor(provider: providers.Provider) {
    super(provider, Chainlink__factory)
    this.provider = provider

    this.getAnswer = this.getAnswer.bind(this)
  }

  public async getAnswer({ token }: getAnswerProps): Promise<BigNumber> {
    try {
      const chainlink: Chainlink = this.getContractInstance(token)
      const decimals = await chainlink.decimals()
      const { answer } = await chainlink.latestRoundData()
      return normalize(answer, decimals)
    } catch (error) {
      console.error('[getAnswer]', error)
      return normalize(100015153, 8)
    }
  }
}
