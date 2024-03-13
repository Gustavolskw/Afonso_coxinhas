import express from "express";
//import comprasRoutes from "./comprasRoutes.js";
import produtoRoutes from "./produtosRoutes.js";

const routes = (app) => {

  //app.use(express.json(), comprasRoutes);
  app.use(express.json(), produtoRoutes);
};

export default routes;