import { BrowserRouter, Route, Routes } from "react-router-dom";
import { OnBoarding1 } from "./Components/onBoardingPages/OnBoarding1";
import { OnBoarding2 } from "./Components/onBoardingPages/OnBoarding2";

export function App() {
    return(
        <div className="w-[450px] h-[600px] flex justify-center items-center">
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<OnBoarding1 />}>
          {/* <Route index element={<Home />} /> */}
          <Route path="/ob2" element={<OnBoarding2 />} />
        </Route>
      </Routes>
    </BrowserRouter>

        </div>
    )
}