import { BrowserRouter, Route, Routes } from "react-router-dom";
// import { OnBoarding1 } from "./Components/onBoardingPages/OnBoarding1";
// import { OnBoarding2 } from "./Components/onBoardingPages/OnBoarding2";
import { OnBoardings } from "./Components/onBoardingPages/OnBoardings";
import { Home } from "./Components/Home-Components/Home";

export function App() {
    return(
        <div className="w-[450px] h-[600px]">
    <BrowserRouter>
      <Routes>
        <Route path="/"  element={<OnBoardings />}>
        </Route>

        <Route path="/Home" index element={<Home />}>
        </Route>
      </Routes>
    </BrowserRouter>

        </div>
    )
}