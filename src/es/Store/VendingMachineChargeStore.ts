import { COIN_TYPE } from '../constants';
import { getRandomNumber } from '../utils';
import { IStore } from './Interface';

interface IVendingMachineChargeStoreState {
  coins: Array<number>;
}

class VendingMachineChargeStore implements IStore {
  private state: IVendingMachineChargeStoreState = {
    coins: [0, 0, 0, 0],
  };

  private subscribers = [];

  addSubscriber(subscriber: object) {
    this.subscribers.push(subscriber);
  }

  setState(newState: IVendingMachineChargeStoreState) {
    const changeStates: Array<string> = Object.keys(newState);

    this.state = { ...this.state, ...newState };
    this.subscribers.forEach(renderMethod => renderMethod({ state: this.state, changeStates }));
  }

  getState(): IVendingMachineChargeStoreState {
    return { ...this.state };
  }

  getTotalAmount(): number {
    return this.state.coins.reduce(
      (previous, coin, index) => (previous += COIN_TYPE[index] * coin),
      0,
    );
  }

  getMaxCoinIndex(baseAmount) {
    return COIN_TYPE.findIndex(coin => baseAmount >= coin);
  }

  getRandomCoinsFromAmount(amount: number): Array<number> {
    let leftAmount: number = amount;
    const returnCoins = [0, 0, 0, 0];

    while (leftAmount > 0) {
      const coinIndex: number = getRandomNumber(
        this.getMaxCoinIndex(leftAmount),
        COIN_TYPE.length - 1,
      );
      const randomCoin: number = COIN_TYPE[coinIndex];

      returnCoins[coinIndex] += 1;
      leftAmount -= randomCoin;
    }
    return returnCoins;
  }

  addCharge(amount: number): void {
    const coinsToAdd: Array<number> = this.getRandomCoinsFromAmount(amount);
    const totalCoins: Array<number> = this.state.coins.map(
      (value, index) => value + coinsToAdd[index],
    );

    this.setState({
      coins: totalCoins,
    });
  }
}

export default new VendingMachineChargeStore();
