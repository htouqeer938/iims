import express from "express";

import {
  getAllProducts,
  createProduct,
  getProductById,
  updateProduct,
  deleteProduct,
} from "../controllers/Products.js";

import {
  getAllproductgroups,
  createProductGroup,
  getProductGroupByID,
  updateProductGroup,
  deleteProductGroup,
} from "../controllers/ProductGroup.js";

const router = express.Router();

router.get("/products", getAllProducts);
router.get("/products/:id", getProductById);
router.post("/products", createProduct);
router.patch("/products/:id", updateProduct);
router.delete("/products/:id", deleteProduct);

router.get("/productgroups", getAllproductgroups);
router.get("/productgroups/:id", getProductGroupByID);
router.post("/productgroups", createProductGroup);
router.patch("/productgroups/:id", updateProductGroup);
router.delete("/productgroups/:id", deleteProductGroup);

export default router;
