/**
 * Created by rastislavbertusek on 06.03.17.
 */

export interface Price {
  name: string;
  price: number;
  discount?: {
    count: number,
    reduceTo: number
  };
}

export let prices: Price[] = [
  {
    name: 'Apple',
    price: 0.25
  },
  {
    name: 'Orange',
    price: 0.30
  },
  {
    name: 'Garlic',
    price: 0.15
  },
  {
    name: 'Papaya',
    price: 0.50,
    discount: {
      count: 3,
      reduceTo: 2
    }
  }
];
