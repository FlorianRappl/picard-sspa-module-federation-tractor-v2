import * as React from 'react';
import * as ReactDOMClient from "react-dom/client";
import singleSpaReact from "single-spa-react";
import data from './data/db.json';
import Product from './components/Product';
import Filter from './components/Filter';
import './css/index.css';

const CategoryPage = ({ category }) => {
  const cat = category && data.categories.find((c) => c.key === category);

  const title = cat ? cat.name : 'All Machines';
  const products = cat ? cat.products : data.categories.flatMap((c) => c.products);

  // sort products by price descending
  products.sort((a, b) => b.startPrice - a.startPrice);

  const filters = [
    { url: '/products', name: 'All', active: !cat },
    ...data.categories.map((c) => ({
      url: `/products/${c.key}`,
      name: c.name,
      active: c.key === category,
    })),
  ];

  return (
    <div data-boundary-page="explore">
      <pi-slot name="Header" />
      <main className="e_CategoryPage">
        <h2>{title}</h2>
        <div className="e_CategoryPage__subline">
          <p>{products.length} products</p>
          <Filter filters={filters} />
        </div>
        <ul className="e_CategoryPage_list">
          {products.map((product, i) => (
            <Product key={i} {...product} />
          ))}
        </ul>
      </main>
      <pi-slot name="Footer" />
    </div>
  );
};

export default singleSpaReact({
  React,
  ReactDOMClient,
  rootComponent: CategoryPage,
  errorBoundary() {
    return <div>CategoryPage failed!</div>;
  },
});
