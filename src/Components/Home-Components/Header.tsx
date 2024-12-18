import { FaRegBell, FaRegHeart } from "react-icons/fa";

export function Header () {
    return(
        <div className="flex flex-row items-center justify-between gap">
            <div className="flex gap-3">
                <div><img src="./public/profile img.png" alt="" /></div>
                <div>Good Morning 👋 <br /> mmd rahimi</div>
            </div>
            <div className="flex gap-5">
                <div><FaRegBell size={30}/></div>
                <div><FaRegHeart size={30}/></div>
            </div>
        </div>
    )
}