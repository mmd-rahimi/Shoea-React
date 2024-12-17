import { useState } from "react";
import { OnBoarding1 } from "./OnBoarding1";
import { OnBoarding2 } from "./OnBoarding2";

export function OnBoardings() {
    const [page, setPage] = useState(0)
    return (
        <>
          {page === 0 && <OnBoarding1 setPage={setPage} />}
          {page === 1 && <OnBoarding2 setPage={setPage} />}
          {/* {page === 2 && <OnBoarding3-5 setPage={setPage} />} */}
        </>
      );
}