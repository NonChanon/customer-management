import { Route, Routes } from "react-router-dom";
import Login from "./pages/Login";
import { Customer } from "./pages/Customer";
import AddCustomer from "./pages/AddCustomer";
import AddProduct from "./pages/AddProduct";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Customer />} />
        <Route path="/login" element={<Login />} />
        <Route path="/addcustomer" element={<AddCustomer />} />
        <Route path="/addproduct" element={<AddProduct />} />
      </Routes>
    </>
  );
}

export default App;
