import { initializePicard, createSingleSpaConverter } from "picard-js/client";

initializePicard({
  feed: [
    {
      link: process.env.DECIDE_URL,
      name: "decide",
      spec: "mf",
      custom: {
        id: "decide",
        runtime: "2.0",
        type: "module",
      },
    },
    {
      link: process.env.CHECKOUT_URL,
      name: "checkout",
      spec: "mf",
      custom: {
        id: "checkout",
        runtime: "2.0",
        type: "module",
      },
    },
    {
      link: process.env.EXPLORE_URL,
      name: "explore",
      spec: "mf",
      custom: {
        id: "explore",
        runtime: "2.0",
        type: "module",
      },
    },
  ],
  services: {
    "framework.default": createSingleSpaConverter,
  },
});
