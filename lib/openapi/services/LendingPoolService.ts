/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Chain } from '../models/Chain'
import type { InputData } from '../models/InputData'
import type { Transaction } from '../models/Transaction'

import type { CancelablePromise } from '../core/CancelablePromise'
import { OpenAPI } from '../core/OpenAPI'
import { request as __request } from '../core/request'

export class LendingPoolService {
  /**
   * Add To Whitelist
   * @param network
   * @param address
   * @param requestBody
   * @returns Transaction Successful Response
   * @throws ApiError
   */
  public static addToWhitelistApiNetworkAccountsAddressWhitelistPost(
    network: Chain,
    address: string,
    requestBody: InputData
  ): CancelablePromise<Transaction> {
    return __request(OpenAPI, {
      method: 'POST',
      url: '/api/{network}/accounts/{address}/whitelist',
      path: {
        network: network,
        address: address,
      },
      body: requestBody,
      mediaType: 'application/json',
      errors: {
        400: `ValidationError`,
        422: `HTTPValidationError`,
      },
    })
  }
}
