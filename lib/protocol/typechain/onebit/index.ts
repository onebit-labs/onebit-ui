import { normalizeBN } from 'app/utils/math'
import type { providers } from 'ethers'
import type BigNumber from 'bignumber.js'

import BaseService from '../commons/BaseService'
import type { tEthereumAddress } from '../commons/types'
import type { LendingPool } from './typechain/LendingPool'
import { LendingPool__factory } from './typechain/factories/LendingPool__factory'

export type LatestRoundProps = {
  token: tEthereumAddress
}

export class LendingPoolService extends BaseService<LendingPool> {
  provider: any

  constructor(provider: providers.Provider) {
    super(provider, LendingPool__factory)
    this.provider = provider

    this.latestRound = this.latestRound.bind(this)
  }

  public async latestRound({ token }: LatestRoundProps): Promise<void> {}
}
