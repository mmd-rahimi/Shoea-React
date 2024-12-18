import { FaRegBell, FaRegHeart } from "react-icons/fa";

export function Header () {
    return(
        <div className="flex justify-between">
            <div className="flex gap-3">
                <div><img src="./public/profile img.png" alt="" /></div>
                <div>Good Morning 👋 <br /><br /> mmd rahimi</div>
            </div>
            <div className="flex gap-3">
                <div><FaRegBell /></div>
                <div><FaRegHeart /></div>
            </div>
        </div>
    )
}