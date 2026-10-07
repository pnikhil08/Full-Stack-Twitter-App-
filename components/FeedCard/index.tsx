import Image from "next/image";
import { BiMessageRounded } from "react-icons/bi"
import { FaRetweet } from "react-icons/fa6";
import { AiOutlineHeart } from "react-icons/ai";
import { LuUpload } from "react-icons/lu";

const FeedCard: React.FC = () => {
    return (
        <div className="border border-r-0 border-l-0 border-b-0 border-gray-600 p-4 hover:bg-slate-900 transition-all cursor-pointer">
            <div className="grid grid-cols-12">
                <div className="col-span-1 ">
                    <Image src="https://avatars.githubusercontent.com/u/116251187?v=4"
                        alt="User_Image"
                        width={50}
                        height={50}
                        className="rounded-full"
                    />
                </div>
                <div className="col-span-11 ml-2">
                    <h5>Nikhil Pandey</h5>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis, totam.</p>
                    <div className="flex justify-between px-3 mt-5 text-xl items-center">
                        <div>
                            <BiMessageRounded />
                        </div>
                        <div>
                            <FaRetweet />
                        </div>
                        <div>
                            <AiOutlineHeart />
                        </div>
                        <div>
                            <LuUpload />
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )

}

export default FeedCard;