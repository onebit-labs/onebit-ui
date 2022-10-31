const locale = {
  tabs: {
    overview: 'Overview',
    fees: 'Fees',
    policies: 'Policies',
    depositors: 'Depositors',
  },
  info: {
    status: 'Status',
    term: 'Term',
    lockUpPeriod: 'Lock-Up Period',
    standard: 'Standard',
    yourEquity: 'Your Equity',
    PNL: 'PNL',
    stats: {
      assetsUnderManagement: 'Assets Under Management',
      currentAPY: 'Current APY',
      depositors: 'Depositors',
    },
  },
  overview: {
    netValue: {
      title: 'Current Net Value',
      change24h: 'Past 1D',
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
        'A management fee is a periodic payment that is paid by depositors to the Porfolio Manager. The fee is calculated as a percentage of assets under management and is independent of Vault returns.',
    },
    perfomance: {
      title: 'Perfomance Fee',
      description:
        'A performance fee is a percentage-based fee depositors pay to the Portfolio Manager out of the positive returns made over a pre-defined period. The pre-defined period is referred to as a Crystallisation period (typically a year or a quarter). The returns are benchmarked against the denomination asset. ',
    },
    entrance: {
      title: 'Entrance Fee',
    },
    exit: {
      title: 'Exit Fee',
    },
  },
  policies: {
    openPeriod: 'Open Period',
    lockUpPeriod: 'Lock-Up Period',
    fundraisingCap: 'Fundraising Cap',
    minimumDeposit: 'Minimum Deposit',
    reInvestment: 'Re-investment',
    description:
      'A management fee is a periodic payment that is paid by depositors to the Porfolio Manager. The fee is calculated as a percentage of assets under management and is independent of Vault returns.',
  },
  depositors: {
    title: 'Historical Performance',
    depositors: 'Depositors',
    since: 'Since',
    equity: 'Equity',
    percentage: 'Percentage',
  },
}

export default locale
