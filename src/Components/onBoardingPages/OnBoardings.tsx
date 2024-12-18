import { useState } from "react";
import { OnBoarding1 } from "./OnBoarding1";
import { OnBoarding2 } from "./OnBoarding2";
import { OnBoarding3 } from "./OnBoarding3";
import { OnBoarding4 } from "./OnBoarding4";
import { OnBoarding5 } from "./OnBoarding5";

export function OnBoardings() {
    const [page, setPage] = useState(0)
    return (
        <>
          {page === 0 && <OnBoarding1 setPage={setPage} />}
          {page === 1 && <OnBoarding2 setPage={setPage} />}
          {page === 2 && <OnBoarding3 setPage={setPage} />}
          {page === 3 && <OnBoarding4 setPage={setPage} />}
          {page === 4 && <OnBoarding5 setPage={setPage} />}
        </>
      );
}