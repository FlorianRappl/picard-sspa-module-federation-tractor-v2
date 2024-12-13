import * as React from "react";
import * as ReactDOMClient from "react-dom/client";
import singleSpaReact from "single-spa-react";
import data from "./data/db.json";
import { src, srcset } from "./js/utils";
import "./css/index.css";

const HomePage = () => {
  const skus = ["CL-01-GY", "AU-07-MT"];

  return (
    <div data-boundary-page="explore">
      <pi-slot name="Header" />
      <main className="e_HomePage">
        {data.teaser.map(({ title, image, url }, i) => (
          <a className="e_HomePage__categoryLink" href={url} key={i}>
            <img
              src={src(image, 500)}
              srcSet={srcset(image, [500, 1000])}
              sizes="100vw, (min-width: 500px) 50vw"
              alt=""
            />
            {title}
          </a>
        ))}
        <div className="e_HomePage__recommendations">
          <pi-slot name="Recommendations" data={JSON.stringify({ skus })} />
        </div>
      </main>
      <pi-slot name="Footer" />
    </div>
  );
};

export default singleSpaReact({
  React,
  ReactDOMClient,
  rootComponent: HomePage,
  errorBoundary() {
    return <div>HomePage failed!</div>;
  },
});
