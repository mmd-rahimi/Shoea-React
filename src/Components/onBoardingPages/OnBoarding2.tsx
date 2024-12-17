export function OnBoarding2({ setPage }) {
  setTimeout(() => {
    setPage(2);
  }, 3000);
  return (
    <div className="">
      <img
        className="w-screen h-screen"
        src="./public/onboarding page 2.png"
        alt=""
      />
    </div>
  );
}
