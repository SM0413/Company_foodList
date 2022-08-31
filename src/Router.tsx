import { BrowserRouter, Routes, Route } from "react-router-dom";
import { MainPage } from "./components/MainPage";
import { TestPage } from "./components/FoodDetaile";

export function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainPage />}></Route>
        <Route path=":date" element={<TestPage />}></Route>
      </Routes>
    </BrowserRouter>
  );
}
