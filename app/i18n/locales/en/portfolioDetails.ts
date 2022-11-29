const locale = {
  tabs: {
    overview: 'Overview',
    fees: 'Fees',
    policies: 'Policies',
    depositors: 'Depositors',
    activities: 'Activities',
  },
  info: {
    status: 'Status',
    term: 'Term',
    lockUpPeriod: 'Lock-Up Period',
    days: 'Days',
    standard: 'Standard',
    contract: 'Contract Address',
    yourEquity: 'Your Equity',
    PNL: 'PNL',
    stats: {
      assetsUnderManagement: 'Assets Under Management',
      currentAPY: 'Current APY',
      estimatedAPY: 'Estimated APY',
      depositors: 'Depositors',
    },
    description: {
      'Onebit-Lightning-Hunter-USDT': {
        main: 'The High-frequency trading is a microstructure strategy to capture the market spread by executing a large number of pending orders in a very short period of time while taking the advantages of co-location servers, low-latency channels, and low trading fees accounts.',
        investmentRationale: {
          0: 'Suitable for risk averse investors seeking high annual returns.',
          1: 'Investors have no risk exposure, but the product capacity is low.',
        },
      },
      'Onebit-Smart-Trend-USDT': {
        main: 'The strategy aims to predict current price trends through risk preference for the macro environment, reasonable valuation levels of currencies, and the momentum of market trends. The investment process is a topdown multi-layer combination of macro, value, and trend.',
        investmentRationale: {
          0: 'Suitable for risk seeking investors expecting a high annual return.',
          1: 'Investor has a long-term long bias of the crypto market.',
        },
      },
      'Onebit-Smart-Trend-BTC': {
        main: 'The strategy aims to predict current price trends through risk preference for the macro environment, reasonable valuation levels of currencies, and the momentum of market trends. The investment process is a topdown multi-layer combination of macro, value, and trend.',
        investmentRationale: {
          0: 'Suitable for risk seeking investors expecting a high annual return.',
          1: 'Investor has a long-term long bias of the crypto market.',
        },
      },
      'Onebit-Smart-Trend-USDT-Demo': {
        main: 'The strategy aims to predict current price trends through risk preference for the macro environment, reasonable valuation levels of currencies, and the momentum of market trends. The investment process is a topdown multi-layer combination of macro, value, and trend.',
        investmentRationale: {
          0: 'Suitable for risk seeking investors expecting a high annual return.',
          1: 'Investor has a long-term long bias of the crypto market.',
        },
      },
      investmentRationale: 'Investment Rationale:',
    },
  },
  overview: {
    netValue: {
      title: 'Current Net Value',
      change24h: 'Past 1D',
      currentNetValue: 'Current Net Value%',
    },
    historicalAccumulativeNetValue: {
      title: 'Historical Accumulative Net Value',
      change24h: 'Past 1D',
    },
    historicalPerformance: {
      title: 'Historical Performance',
      term: 'Term',
      lockUpPeriod: 'Lock-Up Period',
      AUM: 'AUM',
      depositors: 'Depositors',
      finalNetValue: 'Final Net Value',
      return: 'Return',
      APY: 'APY',
    },
  },
  fees: {
    title: 'Fees',
    management: {
      title: 'Management Fee',
      tip: '2% if accumulative return is over 20%',
      description:
        'A management fee is a periodic payment that is paid by depositors to the Porfolio Manager. The fee is calculated as an annualized percentage of assets under management and is independent of Vault returns.',
    },
    perfomance: {
      title: 'Perfomance Fee',
      description:
        'A performance fee is a percentage-based fee depositors pay to the Portfolio Manager out of the positive returns made over a pre-defined period. The pre-defined period is referred to as a Locked-up period (typically a year or a quarter). The returns are benchmarked against the denomination asset. ',
    },
    entrance: {
      title: 'Entrance Fee',
    },
    exit: {
      title: 'Exit Fee',
    },
  },
  policies: {
    title: 'Policies',
    openPeriod: 'Open Period',
    lockUpPeriod: 'Lock-Up Period',
    fundraisingCap: 'Fundraising Hard Cap',
    softUpperLimit: 'Fundraising Soft Cap',
    minimumDeposit: 'Minimum Deposit',
    reInvestment: 'Re-investment',
    description:
      'If depositors do not withdraw the funds at the end of locked-up period, the funds will be re-invested into the portfolio for the next lock-up period.',
    auto: 'Auto',
  },
  depositors: {
    depositors: 'Depositors',
    since: 'Since',
    equity: 'Equity',
    percentage: 'Percentage',
  },
  activities: {
    id: 'TxID',
    type: 'Type',
    from: 'From',
    to: 'To',
    amount: 'Amount',
    date: 'Date',
  },
}

export default locale
