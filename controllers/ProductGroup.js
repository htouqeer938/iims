import productgrouptbl from "../models/productgroupmodel.js";

export const getAllproductgroups = async (req, res) => {
  try {
    const productgroups = await productgrouptbl.findAll();
    res.json(productgroups);
  } catch {
    res.json({ message: error.message });
  }
};

export const getProductGroupByID = async (req, res) => {
  try {
    const productgroup1 = await productgrouptbl.findAll({
      where: {
        id: req.params.id,
      },
    });
    res.json(productgroup1[0]);
  } catch {
    res.json({ message: error.message });
  }
};

export const createProductGroup = async (req, res) => {
  try {
    await productgrouptbl.create(req.body);
    res.json({
      message: "Product Group created!",
    });
  } catch {
    res.json({ message: error.message });
  }
};

export const updateProductGroup = async (req, res) => {
  try {
    await productgrouptbl.update(req.body, {
      where: {
        id: req.params.id,
      },
    });
    res.json({
      message: "Product Group updated!",
    });
  } catch {
    res.json({ message: error.message });
  }
};

export const deleteProductGroup = async (req, res) => {
  try {
    await productgrouptbl.destroy({
      where: {
        id: req.params.id,
      },
    });
    res.json({
      message: "Product Group deleted",
    });
  } catch {
    res.json({ message: error.message });
  }
};
