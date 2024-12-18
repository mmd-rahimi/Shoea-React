
export function OnBoarding3({setPage}) {
    return(
        <div className="h-screen flex flex-col items-center gap-6">
            <img className="h-[60%] w-screen" src="./public/p3-bg.jfif" alt="" />
            <p className="font-bold text-xl text-center">We provide high quality <br /> products just for you</p>
            <img className="mt-4" src="./public/swiper ob3.png" alt="" />
            <button className="bg-slate-800 text-white rounded-2xl w-[23rem] h-8" onClick={()=>{setPage(3)}}>Next</button>
        </div>
    )
}