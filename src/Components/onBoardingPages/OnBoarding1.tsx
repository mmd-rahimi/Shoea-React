import { GridLoader } from "react-spinners";

export function OnBoarding1() {
  return (
    <div className="flex flex-col justify-between items-center gap-40 mt-32">
      <div>
        <img src="./public/shoea icon ob1.png" alt="" />
      </div>
      <div>
        <GridLoader color="#000000" size={10} speedMultiplier={0.6} />
      </div>
    </div>
  );
}
