import pool from "../database/connection.js";
import format from "pg-format";

const findAll = async (sort, limits, page) => {
  let query = "SELECT * FROM inventario";
  const arrayValues = [];

  if (sort) {
    query += " ORDER BY %s %s";
    const property = Object.keys(sort)[0];
    arrayValues.push(property, sort[property]);
  }
  if (limits) {
    query += " LIMIT %s";
    arrayValues.push(limits);
  }
  if (page) {
    query += " OFFSET %s";
    arrayValues.push((page - 1) * limits);
  }

  try {
    const formattedQuery = format(query, ...arrayValues);
    const result = await pool.query(formattedQuery);
    if (result.rows == 0) {
      return "no hay resultados";
    }
    return result.rows;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

const findById = async (id) => {
  const text = "SELECT * FROM inventario WHERE id = $1";
  const { rows } = await pool.query(text, [id]);

  if (rows.length === 0) {
    throw { code: "404" };
  }
  return rows[0];
};

const findFiltros = async ({ precio_max, precio_min, categoria, metal }) => {
  let filtros = [];
  const values = [];
  let query = "SELECT * FROM inventario";

  const agregarFiltros = (campo, comparador, valor) => {
    values.push(valor);
    const { length } = filtros;
    filtros.push(`${campo} ${comparador} $${length + 1}`);
  };

  if (precio_max) agregarFiltros("precio", "<=", precio_max);
  if (precio_min) agregarFiltros("precio", ">=", precio_min);
  if (categoria) agregarFiltros("categoria", "=", categoria);
  if (metal) agregarFiltros("metal", "=", metal);

  if (filtros.length > 0) {
    filtros = filtros.join(" AND ");
    query += ` WHERE ${filtros}`;
  }

  try {
    console.log(query);
    const result = await pool.query(query, values);
    console.log("Joyas encontradas: ", result.rowCount);
    console.log("Información encontrada: ", result.rows);
    return result.rows;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

const findHateoas = async (joyas, limits, page) => {
  try {
    const result = joyas.map((m) => {
      return {
        nombre: m.nombre,
        categoria: m.categoria,
        precio: m.precio,
        url: `http://localhost:3000/api/joyas/${m.id}`,
      };
    });

    const text = "SELECT * FROM inventario";

    const { rows: data } = await pool.query(text);

    const total = data.length;
    const total_pages = Math.ceil(total / limits);
    console.log("total registro total paginas: ", total, total_pages);

    const HATEOAS = {
      total,
      result,
    };
    return HATEOAS;
  } catch (error) {
    const { status, message } = handleErrors(error.code);
    return res.status(status).json({ ok: false, return: message });
  }
};

export const inventarioModel = {
  findAll,
  findById,
  findFiltros,
  findHateoas,
};
