import { BrowserRouter, Routes, Route } from "react-router-dom";
import { MainPage } from "./components/MainPage";
import { TestPage } from "./components/FoodDetaile";
import { DayDetaile } from "./components/DayDetaile";

export function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/Company_foodList" element={<MainPage />} />
        <Route path="/Company_foodList/dayDetaile" element={<DayDetaile />} />
        <Route path="/Company_foodList/:date" element={<TestPage />} />
      </Routes>
    </BrowserRouter>
  );
}
