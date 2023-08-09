import { Route, Routes } from "react-router-dom";
import Login from "./pages/Login";
import { Customer } from "./pages/Customer";
import AddCustomer from "./pages/AddCustomer";
import AddProduct from "./pages/AddProduct";
import CustomerStatus from "./pages/CustomerStatus";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Customer />} />
        <Route path="/login" element={<Login />} />
        <Route path="/addcustomer" element={<AddCustomer />} />
        <Route path="/addproduct" element={<AddProduct />} />
        <Route path="/status" element={<CustomerStatus />} />
      </Routes>
    </>
  );
}

export default App;
