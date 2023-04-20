export type Discount = {
  percent: number;
  number: number;
}

export type Product = {
  id: string;
  name: string;
  price: number;
  number: number;
  discount: Discount[];
}

interface IOrder {
  productList: Product[];
}

export class Order implements IOrder {
  productList: Product[] = [];

  constructor(data: Product[]) {
    this.productList = [...data];
  }

  getOrder() {
    return this.productList;
  }

  getProductInOrder(id: string) {
    return this.productList.find((item: Product) => item.id === id);
  }

  addProductToOrder(product: Product) {
    this.productList.push(product);
  }

  removeProductInOrder(id: string) {
    this.productList = this.productList.filter((item: Product) => item.id !== id );
  }

  updateProductInOrder(product: Product) {
    this.productList = this.productList.map((item: Product) => {
      if (item.id === product.id) {
        return product;
      }
      return item;
    });
  }

  removeOrder() {
    this.productList = [];
  }

  getTotalPayment() {
    return this.productList.reduce((sum, product: Product) => {
      let discountMax = 0;
      product.discount.forEach((discount: Discount) => {
        if (product.number >= discount.number && discount.percent > discountMax) {
          discountMax = discount.percent;
        }
      });
      return sum + product.price * product.number * (100 - discountMax) / 100;
    }, 0);
  }
}
