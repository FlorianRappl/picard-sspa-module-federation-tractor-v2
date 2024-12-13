import * as React from 'react';
import * as ReactDOMClient from "react-dom/client";
import singleSpaReact from "single-spa-react";
import Navigation from './components/Navigation';
import './css/index.css';

const Header = () => {
  return (
    <header className="e_Header" data-boundary="explore">
      <div className="e_Header__cutter">
        <div className="e_Header__inner">
          <a className="e_Header__link" href="/">
            <img
              className="e_Header__logo"
              src="https://blueprint.the-tractor.store/cdn/img/logo.svg"
              alt="Micro Frontends - Tractor Store"
            />
          </a>
          <div className="e_Header__navigation">
            <Navigation />
          </div>
          <div className="e_Header__cart">
            <pi-slot name="MiniCart" />
          </div>
        </div>
      </div>
    </header>
  );
};

export default singleSpaReact({
  React,
  ReactDOMClient,
  rootComponent: Header,
  errorBoundary() {
    return <div>Header failed!</div>;
  },
});
