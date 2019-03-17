const axios = require('axios');
const dayjs = require('dayjs');

class HpoolApi {
  constructor(apiKey, userName) {
    if (!apiKey) {
      throw new Error('No apiKey supplied!');
    }
    if (!userName) {
      throw new Error('No userName supplied!');
    }

    this.apiKey = apiKey;
    this.userName = userName;

    this.client = axios.create({
      baseURL: 'https://bhd.hpool.com/api/',
    });
  }

  async bindPlotter(plotterHexData) {
    const { data: result } = await this.client.post('user_plot_binding', null, {
      params: {
        hex: plotterHexData,
        api_key: this.apiKey,
      },
    });

    return result;
  }

  async getPoolCapacityInGB() {
    const { data: result } = await this.client.get('totalCapacity');

    return result.capacity;
  }

  async getPoolUserOnline() {
    const { data: result } = await this.client.get('userOnlineCount');

    return result.count;
  }

  async getPoolMinerOnline() {
    const { data: result } = await this.client.get('miningOnlineCount');

    return result.count;
  }

  async getPendingBalance() {
    const { data: result } = await this.client.get('getUserPendingInfo', {
      params: {
        api_key: this.apiKey,
      },
    });

    return result.receiving_account_balance;
  }

  async getMortgageInfo() {
    const { data: result } = await this.client.get('getUserMortgageInfo', {
      params: {
        api_key: this.apiKey,
        method: 'getinfo',
      },
    });

    return result;
  }

  async getMiner(offset = 0, limit = 20, orderBy = 'miner_name') {
    const { data: result } = await this.client.get('miner', {
      params: {
        api_key: this.apiKey,
        limit,
        skip: offset,
        order_by: orderBy,
      },
    });

    return result;
  }

  async getMinedBlocksHistory(
    offset = 0,
    limit = 20,
    from = dayjs().subtract(2, 'day').toDate().getTime(),
    to = dayjs().toDate().getTime()
  ) {
    const { data: result } = await this.client.get('admin_detail', {
      params: {
        flag: 1,
        is_user: true,
        name: this.userName,
        limit,
        skip: offset,
        start: from,
        end: to,
      },
    });

    return result;
  }

  async getEarningsHistory(
    offset = 0,
    limit = 20,
    from = dayjs().subtract(2, 'day').toDate().getTime(),
    to = dayjs().toDate().getTime()
  ) {
    const { data: result } = await this.client.get('admin_detail', {
      params: {
        flag: 2,
        is_user: true,
        name: this.userName,
        limit,
        skip: offset,
        start: from,
        end: to,
      },
    });

    return result;
  }

  async getEarningDetailsHistory(
    offset = 0,
    limit = 20,
    from = dayjs().subtract(2, 'day').toDate().getTime(),
    to = dayjs().toDate().getTime()
  ) {
    const { data: result } = await this.client.get('admin_detail', {
      params: {
        flag: 3,
        is_user: true,
        name: this.userName,
        limit,
        skip: offset,
        start: from,
        end: to,
      },
    });

    return result;
  }

  async getSubmittedDeadlinesHistory(
    offset = 0,
    limit = 20,
    from = dayjs().subtract(2, 'day').toDate().getTime(),
    to = dayjs().toDate().getTime()
  ) {
    const { data: result } = await this.client.get('admin_detail', {
      params: {
        flag: 4,
        is_user: true,
        name: this.userName,
        limit,
        skip: offset,
        start: from,
        end: to,
      },
    });

    return result;
  }

  async getBalanceActivityHistory(
    offset = 0,
    limit = 20,
    from = dayjs().subtract(2, 'day').toDate().getTime(),
    to = dayjs().toDate().getTime()
  ) {
    const { data: result } = await this.client.get('admin_detail', {
      params: {
        flag: 5,
        is_user: true,
        name: this.userName,
        limit,
        skip: offset,
        start: from,
        end: to,
      },
    });

    return result;
  }

  async getWithdrawHistory(offset = 0, limit = 20) {
    const { data: result } = await this.client.get('getUserMortgageInfo', {
      params: {
        api_key: this.apiKey,
        method: 'listwithdraw',
        limit,
        skip: offset,
      },
    });

    return result;
  }

  async getBoundPlotter(offset = 0, limit = 20) {
    const { data: result } = await this.client.get('user_plot_binding', {
      params: {
        api_key: this.apiKey,
        listall: true,
        limit,
        skip: offset,
      },
    });

    return result;
  }
}

module.exports = HpoolApi;
