import { Order, Product } from './Order';

const product1: Product = {
  id: '1',
  name: 'lemon',
  price: 5000,
  number: 2,
  discount: [
    {
      percent: 5,
      number: 1,
    },
    {
      percent: 8,
      number: 2,
    }
  ]
};

const product2: Product = {
  id: '2',
  name: 'orange',
  price: 10000,
  number: 3,
  discount: [
    {
      percent: 5,
      number: 1,
    },
    {
      percent: 10,
      number: 2,
    },
    {
      percent: 12,
      number: 3,
    },
    {
      percent: 15,
      number: 4,
    }
  ]
};

const productUpdate: Product = {
  id: '1',
  name: 'lemon',
  price: 5000,
  number: 1,
  discount: [
    {
      percent: 5,
      number: 1,
    },
    {
      percent: 8,
      number: 2,
    }
  ]
};

describe('test product order', () => {
  describe('get order', () => {
    const order = new Order([product1]);
    const ord = order.getOrder();
    test('get product success', () => {
      expect(ord).toHaveLength(1);
      expect(ord).toContain(product1);
    });
  });

  describe('get product in order', () => {
    const order = new Order([product1]);
    const product = order.getProductInOrder('1');
    test('get product in order success', () => {
      expect(product).toEqual(product1);
    });
  });

  describe('add product', () => {
    const order = new Order([product1]);
    order.addProductToOrder(product2);
    test('add product success', () => {
      expect(order.getOrder()).toHaveLength(2);
      expect(order.getOrder()).toContain(product1);
      expect(order.getOrder()).toContain(product2);
    });
  });

  describe('remove product in order', () => {
    const order = new Order([product1]);
    order.removeProductInOrder('1');
    test('remove product in order success', () => {
      expect(order.getOrder()).toHaveLength(0);
      expect(order.getOrder()).toEqual([]);
    });
  });

  describe('update product in order', () => {
    const order = new Order([product1]);
    order.updateProductInOrder(productUpdate);
    test('update product in order success', () => {
      expect(order.getOrder()).toHaveLength(1);
      expect(order.getOrder()).toContain(productUpdate);
    });
  });

  describe('remove order', () => {
    const order = new Order([product1]);
    order.removeOrder();
    test('remove order success', () => {
      expect(order.getOrder()).toHaveLength(0);
      expect(order.getOrder()).toEqual([]);
    });
  });

  describe('getTotalPayment', () => {
    let order = new Order([product1]);
    beforeEach(() => {
      order = new Order([product1]);
    });
    test('getTotalPayment success', () => {
      expect(order.getTotalPayment()).toBe(9200);
    });
    test('getTotalPayment after add new product', () => {
      order.addProductToOrder(product2);
      expect(order.getTotalPayment()).toBe(35600);
    });
    test('getTotalPayment after update product in order', () => {
      order.updateProductInOrder(productUpdate);
      expect(order.getTotalPayment()).toBe(4750);
    });
  });
});
