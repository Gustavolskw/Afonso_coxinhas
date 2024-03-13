import express from "express";
import ComprasController from "../controller/ComprasController.js";
import Pagination from "../middlewares/Pagination.js";

const autorRoutes = express.Router();
/*
autorRoutes.get("/compras", ComprasController.metododentro do controller, Pagination);
autorRoutes.get("/compras/:id", ComprasController.);
autorRoutes.put("/compras/update/:id", ComprasController.);
autorRoutes.delete("/compras/delete/:id", ComprasController.);
autorRoutes.post("/compras/add", ComprasController.);


*/


export default autorRoutes;