
export function OnBoarding4({setPage}) {

    return(
        <div className="h-screen flex flex-col items-center gap-6">
            <img className="h-[60%] w-screen" src="./public/p4-bg.jfif" alt="" />
            <p className="font-bold text-xl text-center">Your satisfaction is our <br /> number one periority</p>
            <img className="mt-4" src="./public/swiper ob4.png" alt="" />
            <button className="bg-slate-800 text-white rounded-2xl w-[23rem] h-8" onClick={()=>{setPage(4)}}>Next</button>
        </div>
    )
}