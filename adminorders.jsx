import { useEffect, useState } from "react";
import { getOrders } from "../../services/adminService";
import AdminNavbar from "../../components/AdminNavbar";
import AdminSidebar from "../../components/AdminSidebar";

function AdminOrders() {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    const token = localStorage.getItem("token");
    getOrders(token).then((res) => setOrders(res.data));
  }, []);

  return (
    <>
      <AdminNavbar />
      <div style={{ display: "flex" }}>
        <AdminSidebar />
        <div style={{ padding: "20px" }}>
          <h2>Orders</h2>
          {orders.map((order) => (
            <div key={order._id}>
              <p>Status: {order.status}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default AdminOrders;