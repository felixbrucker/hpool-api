HPool API
======

[![Software License](https://img.shields.io/badge/license-GPL--3.0-brightgreen.svg?style=flat-square)](LICENSE)
[![npm](https://img.shields.io/npm/v/hpool-api.svg?style=flat-square)](https://www.npmjs.com/package/hpool-api)
[![npm weekly downloads](https://img.shields.io/npm/dw/hpool-api.svg?style=flat-square)](https://www.npmjs.com/package/hpool-api)

## Usage

```javascript
const HpoolApi = require('hpool-api');

(async () => {
  const client = new HpoolApi('my-api-key', 'my-user-name');
  try {
    const result = await client.bindPlotter('bind data hex string');
    const capacity = await client.getPoolCapacityInGB();
    const onlineUser = await client.getPoolUserOnline();
    const onlineMiner = await client.getPoolMinerOnline();
    const pendingBalance = await client.getPendingBalance();
    const mortgageInfo = await client.getMortgageInfo();
    const miner = await client.getMiner();
    const minedBlocksHistory = await client.getMinedBlocksHistory();
    const earningsHistory = await client.getEarningsHistory();
    const earningDetailsHistory = await client.getEarningDetailsHistory();
    const submittedDeadlinesHistory = await client.getSubmittedDeadlinesHistory();
    const balanceActivityHistory = await client.getBalanceActivityHistory();
    const withdrawHistory = await client.getWithdrawHistory();
    const boundPlotter = await client.getBoundPlotter();
  } catch (err) {
    console.error(err);
  }
})();
```

## License

GNU GPLv3 (see [LICENSE](https://github.com/felixbrucker/hpool-api/blob/master/LICENSE))
