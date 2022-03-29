import { IStore, IProduct } from '@Store/Interface';

interface IProductStoreState {
  products: Array<IProduct>;
}

class ProductStore implements IStore {
  private state: IProductStoreState = {
    products: [],
  };

  private subscribers = [];

  addSubscriber(subscriber: object) {
    this.subscribers.push(subscriber);
  }

  setState(newState: IProductStoreState) {
    const changeStates: Array<string> = Object.entries(newState).map(([key]) => key);

    this.state = { ...this.state, ...newState };
    this.subscribers.forEach(renderMethod => renderMethod({ state: this.state, changeStates }));
  }

  getState(): IProductStoreState {
    return { ...this.state };
  }

  addProduct(product: IProduct): void {
    this.setState({
      products: [...this.state.products, product],
    });
  }

  updateProduct(index, product: IProduct): void {
    const updateProducts = [...this.state.products];

    updateProducts.splice(index, 1, product);
    this.setState({
      products: updateProducts,
    });
  }

  removeProductByIndex(index: number): void {
    const updateProducts = [...this.state.products];

    updateProducts.splice(index, 1);
    this.setState({
      products: updateProducts,
    });
  }

  findProductIndexByName(name: string): number {
    return this.state.products.findIndex(product => product.name === name);
  }
}

export default new ProductStore();
