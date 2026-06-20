import AdminNavbar from "../../components/AdminNavbar";
import AdminSidebar from "../../components/AdminSidebar";

function AdminDashboard() {
  return (
    <>
      <AdminNavbar />
      <div style={{ display: "flex" }}>
        <AdminSidebar />
        <div style={{ padding: "20px" }}>
          <h2>Dashboard</h2>
          <p>Welcome Admin 👋</p>
        </div>
      </div>
    </>
  );
}

export default AdminDashboard;