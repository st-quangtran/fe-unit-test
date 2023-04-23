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
    const product = order.getProductInOrder('1');
    test('get product success', () => {
      expect(ord).toHaveLength(1);
      expect(ord).toContain(product1);
      expect(product).toEqual(product1);
    });
    test('payment', () => {
      expect(order.getTotalPayment()).toBe(9200);
    })
  });

  describe('add product', () => {
    const order = new Order([product1]);
    order.addProductToOrder(product2);
    test('add product success', () => {
      expect(order.getOrder()).toHaveLength(2);
      expect(order.getOrder()).toContain(product1);
      expect(order.getOrder()).toContain(product2);
    });
    test('payment', () => {
      expect(order.getTotalPayment()).toBe(35600);
    })
  });

  describe('remove product in order', () => {
    const order = new Order([product1]);
    order.addProductToOrder(product2);
    order.removeProductInOrder('1');
    test('remove product in order success', () => {
      expect(order.getOrder()).toHaveLength(1);
      expect(order.getOrder()).toContain(product2);
    });
    test('payment', () => {
      expect(order.getTotalPayment()).toBe(26400);
    })
  });

  describe('update product in order', () => {
    const order = new Order([product1]);
    order.updateProductInOrder(productUpdate);
    test('update product in order success', () => {
      expect(order.getOrder()).toHaveLength(1);
      expect(order.getOrder()).toContain(productUpdate);
    });
    test('payment', () => {
      expect(order.getTotalPayment()).toBe(4750);
    })
  });

  describe('remove order', () => {
    const order = new Order([product1]);
    order.removeOrder();
    test('remove order success', () => {
      expect(order.getOrder()).toHaveLength(0);
      expect(order.getOrder()).toEqual([]);
    });
    test('payment', () => {
      expect(order.getTotalPayment()).toBe(0);
    })
  });
});
