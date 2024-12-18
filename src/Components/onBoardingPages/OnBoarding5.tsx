import { useNavigate } from "react-router-dom";

export function OnBoarding5() {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/Home");
  };
  return (
    <div className="h-screen flex flex-col items-center gap-6">
      <img className="h-[60%] w-screen" src="./public/p5-bg.png" alt="" />
      <p className="font-bold text-xl text-center">
        Let’s fulfill your fashion <br /> needs with shoearight now!
      </p>
      <img className="mt-4" src="./public/swiper ob5.png" alt="" />
      <button
        className="bg-slate-800 text-white rounded-2xl w-[23rem] h-8"
        onClick={handleClick}
      >
        Get Started
      </button>
    </div>
  );
}
