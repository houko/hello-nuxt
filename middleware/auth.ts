import { Context } from "@nuxt/types";

export default (context: Context) => {
  const { store, route, redirect, params, query, req, res } = context;
  console.log("store", store);
  console.log("route", route);
  console.log("redirect", redirect);
  console.log("params", params);
  console.log("query", query);
  console.log("req", req);
  console.log("res", res);
};
