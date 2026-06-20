import API from "./api";

export const addProduct = (data, token) =>
  API.post("/admin/product", data, {
    headers: { Authorization: `Bearer ${token}` },
  });

export const getOrders = (token) =>
  API.get("/admin/orders", {
    headers: { Authorization: `Bearer ${token}` },
  });