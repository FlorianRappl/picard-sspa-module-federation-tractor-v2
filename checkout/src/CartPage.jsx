import * as React from 'react';
import * as ReactDOMClient from "react-dom/client";
import singleSpaReact from "single-spa-react";
import LineItem from './components/LineItem';
import Button from './components/Button';
import data from './data/db.json';
import { useLineItems } from './data/store';
import './css/index.css';

function convertToLineItems(items) {
  return items.reduce((res, { sku, quantity }) => {
    const variant = data.variants.find((p) => p.sku === sku);
    if (variant) {
      res.push({ ...variant, quantity, total: variant.price * quantity });
    }
    return res;
  }, []);
}

const CartPage = () => {
  const rawLineItems = useLineItems();
  const lineItems = convertToLineItems(rawLineItems);
  const total = lineItems.reduce((res, { total }) => res + total, 0);
  const skus = lineItems.map(({ sku }) => sku);

  return (
    <div data-boundary-page="checkout">
      <pi-slot name="Header" />
      <main className="c_CartPage">
        <h2>Basket</h2>
        <ul className="c_CartPage__lineItems">
          {lineItems.map((li, i) => (
            <LineItem {...li} key={i} />
          ))}
        </ul>
        <hr />
        <p className="c_CartPage__total">Total: {total} Ø</p>
        <div className="c_CartPage__buttons">
          <Button href="/checkout/checkout" variant="primary">
            Checkout
          </Button>
          <Button href="/" variant="secondary">
            Continue Shopping
          </Button>
        </div>
        <pi-slot name="Recommendations" data={JSON.stringify({ skus })} />
      </main>
      <pi-slot name="Footer" />
    </div>
  );
};

export default singleSpaReact({
  React,
  ReactDOMClient,
  rootComponent: CartPage,
  errorBoundary() {
    return <div>CartPage failed!</div>;
  },
});
