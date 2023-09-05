import { Route, Routes } from "react-router-dom";
import Login from "./pages/Login";
import { Customer } from "./pages/Customer";
import AddCustomer from "./pages/AddCustomer";
import AddProduct from "./pages/AddProduct";
import CustomerStatus from "./pages/CustomerStatus";
import { ComplexNavbar } from "./components/Navbar";
import UserManagement from "./pages/UserManagement";
import Employee from "./pages/Employee";
import { ShowNavbar } from "./utils/ShowNavbar";

function App() {
  return (
    <>
      <ShowNavbar>
        <ComplexNavbar />
      </ShowNavbar>
      <Routes>
        <Route path="/" element={<Customer />} />
        <Route path="/login" element={<Login />} />
        <Route path="/addcustomer" element={<AddCustomer />} />
        <Route path="/addproduct" element={<AddProduct />} />
        <Route path="/status" element={<CustomerStatus />} />
        <Route path="/manage" element={<UserManagement />} />
        <Route path="/employee" element={<Employee />} />
      </Routes>
    </>
  );
}

export default App;
