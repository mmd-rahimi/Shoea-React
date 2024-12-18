import { GridLoader } from "react-spinners";

export function OnBoarding1({ setPage }) {
  setTimeout(() => {
    setPage(1);
  }, 3000);

  return (
    <div className="flex flex-col justify-between items-center gap-40 mt-56">
      <div>
        <img src="./shoea icon ob1.png" alt="" />
      </div>
      <div>
        <GridLoader color="#000000" size={10} speedMultiplier={0.6} />
      </div>
    </div>
  );
}
