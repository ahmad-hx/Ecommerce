import { useState } from "react";
import { addProduct } from "../../services/adminService";
import AdminNavbar from "../../components/AdminNavbar";
import AdminSidebar from "../../components/AdminSidebar";

function AdminProducts() {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");

  const submitHandler = async () => {
    const token = localStorage.getItem("token");
    await addProduct({ name, price }, token);
    alert("Product Added");
  };

  return (
    <>
      <AdminNavbar />
      <div style={{ display: "flex" }}>
        <AdminSidebar />
        <div style={{ padding: "20px" }}>
          <h2>Add Product</h2>
          <input placeholder="Name" onChange={(e) => setName(e.target.value)} />
          <input placeholder="Price" onChange={(e) => setPrice(e.target.value)} />
          <button onClick={submitHandler}>Add</button>
        </div>
      </div>
    </>
  );
}

export default AdminProducts;