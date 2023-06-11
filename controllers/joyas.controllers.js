import { handleErrors } from "../database/error.js";
import { inventarioModel } from "../models/joyas.model.js";

const getAllInventario = async (req, res) => {
  const { sort, limits = 5, page = 1 } = req.query;
  try {
    const result = await inventarioModel.findAll(sort, limits, page);
    return res.status(200).json({ ok: true, result });
  } catch (error) {
    console.log(error);
    const { status, message } = handleErrors(error.code);
    return res.status(status).json({ ok: false, return: message });
  }
};

const getInventarioById = async (req, res) => {
  const { id } = req.params;
  try {
    const result = await inventarioModel.findById(id);
    return res.status(200).json({ ok: true, result });
  } catch (error) {
    console.log(error);
    const { status, message } = handleErrors(error.code);
    return res.status(status).json({ ok: false, return: message });
  }
};

const getFiltros = async (req, res) => {
  const { precio_max, precio_min, categoria, metal } = req.query;
  try {
    const result = await inventarioModel.findFiltros({
      precio_max,
      precio_min,
      categoria,
      metal,
    });
    if (result.length === 0) {
      throw { code: "404" };
    }
    return res.status(200).json({ ok: true, result });
  } catch (error) {
    console.log(error);
    const { status, message } = handleErrors(error.code);
    return res.status(status).json({ ok: false, return: message });
  }
};

const getInventarioHateoas = async (req, res) => {
  const { limits, order_by, page } = req.query;
  try {
    const joyas = await inventarioModel.findAll(limits, order_by);
    const HATEOAS = await inventarioModel.findHateoas(joyas, limits, page);
    return res.status(200).json(HATEOAS);
  } catch (error) {
    console.log(error);
    const { status, message } = handleErrors(error.code);
    return res.status(status).json({ ok: false, return: message });
  }
};

export const joyasController = {
  getAllInventario,
  getInventarioById,
  getFiltros,
  getInventarioHateoas,
};
