import { Route, Routes } from "react-router-dom";
import TestPage from "./pages/TestPage/TestPage";
import ProductPage from "./pages/ProductPage/ProductPage";

function App() {
  return (
    <Routes>
      <Route index element={<TestPage />}></Route>
      <Route path="/product" element={<ProductPage />}></Route>
    </Routes>
  );
}

export default App;
