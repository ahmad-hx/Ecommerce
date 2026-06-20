import { Link } from "react-router-dom";

function AdminSidebar() {
  return (
    <div style={{ width: "200px", background: "#eee", height: "100vh" }}>
      <ul>
        <li><Link to="/admin">Dashboard</Link></li>
        <li><Link to="/admin/products">Products</Link></li>
        <li><Link to="/admin/orders">Orders</Link></li>
      </ul>
    </div>
  );
}

export default AdminSidebar;