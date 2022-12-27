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
    tip: '* The product data shown on this page doesn’t exclude the management fees and performance fees.',
    stats: {
      assetsUnderManagement: 'Assets Under Management',
      estimatedAPY: 'Estimated APY',
      depositors: 'Depositors',
      initDeposit: 'Initial Deposit',
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
      totalFees: 'Total Fees',
      APY: 'APY',
      netValueTip: 'The management and performance fees have been deducted from the net value shown here.',
    },
  },
  fees: {
    title: 'Fees',
    management: {
      title: 'Management Fee',
      tip: '2% if accumulative return is over 20%',
      description:
        'The product will charge a management fee, calculated as an annual management fee rate of the initial deposit assets. The management fee will be charged per block by timestamp.',
    },
    performance: {
      title: 'Performance Fee',
      description:
        'The product will charge a performance fee based on excess returns, calculated as a performance fee rate of the appreciation in the daily Net Asset Value above the high-water mark. The performance fee will be charged based on the Net Asset Value daily.',
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
    fundraisingCap: 'Capacity Hard Cap',
    softUpperLimit: 'Capacity Soft Cap',
    minimumDeposit: 'Minimum Deposit',
    reInvestment: 'Re-investment',
    reInvestmentTip:
      'If depositors do not withdraw the funds at the end of lock-up period, the funds will be re-invested into the product for the next lock-up period.',
    auto: 'Auto',
    riskControlLine: 'Risk Control Warning',
    riskControlLineTip:
      'If the Net Value falls below the risk control line, the product will be settled in advance to reduce further losses for all depositors, and open for withdrawals.',
    redemption: 'Withdrawal',
    redemptionTip:
      'After the lock-up period, withdrawal is open on the next working day, or the net value triggers risk control warning and can be redeemed in advance.',
    netValue: 'Net Value',
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
