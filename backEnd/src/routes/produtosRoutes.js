import express from "express";
import ProdutosController from "../controller/ProdutoController.js";
import Pagination from "../middlewares/Pagination.js";

const produtoRoutes = express.Router();

produtoRoutes.get("/produtos/all", ProdutosController.listarTodosProdutos);
produtoRoutes.post("/produtos/add", ProdutosController.adicionarNovoProduto);
/*
autorRoutes.get("/produtos", ProdutosController., Pagination);
autorRoutes.get("/compras/:id", ProdutosController.);
autorRoutes.put("/compras/update/:id", ProdutosController.);
autorRoutes.delete("/compras/delete/:id", ProdutosController.);

*/

export default produtoRoutes;