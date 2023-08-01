import { Route, Routes } from "react-router-dom";
import Login from "./pages/Login";
import { Customer } from "./pages/Customer";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Customer />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </>
  );
}

export default App;
