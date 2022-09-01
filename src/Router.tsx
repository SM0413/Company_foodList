import { BrowserRouter, Routes, Route } from "react-router-dom";
import { MainPage } from "./components/MainPage";
import { FoodDetaile } from "./components/FoodDetaile";

export function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/Company_foodList" element={<MainPage />} />
        <Route path="/Company_foodList/:date" element={<FoodDetaile />} />
      </Routes>
    </BrowserRouter>
  );
}
