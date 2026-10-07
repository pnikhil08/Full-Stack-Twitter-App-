
import { BsTwitter, BsBell, BsEnvelope, BsBookmark } from "react-icons/bs";
import { BiHomeCircle, BiUser } from "react-icons/bi";
import { FaMoneyBill , FaHashtag} from "react-icons/fa";
import { HiOutlineDotsCircleHorizontal } from "react-icons/hi";

import { Inter } from "next/font/google";
import FeedCard from "@/components/FeedCard";

const inter = Inter({ subsets: ["latin"] })

interface twitterSidebarButton {
  id: number;
  title: String;
  icon: React.ReactNode;
}

const sidebarMenuItems: twitterSidebarButton[] = [
  {
    id: 1,
    title: "Home",
    icon: <BiHomeCircle />

  },
  {
    id: 2,
    title: "Explore",
    icon: <FaHashtag />
  },
  {
    id: 3,
    title: "Notification",
    icon: <BsBell />
  },
  {
    id: 4,
    title: "Messages",
    icon: <BsEnvelope />
  },
  {
    id: 5,
    title: "Bookmark",
    icon: <BsBookmark />
  },
  {
    id: 6,
    title: "Twitter Blue",
    icon: <FaMoneyBill />
  },
  
  {
    id: 8,
    title: "Profile",
    icon: <BiUser />
  },
  {
    id: 7,
    title: "More Options",
    icon: <HiOutlineDotsCircleHorizontal />
  },
]

export default function Home() {
  return (
    <div className={inter.className}>
      <div className="grid grid-cols-12 h-screen w-screen px-56">
        <div className="col-span-3  pt-1 px-4 ">
          <div className="text-2xl h-fit w-fit hover:bg-gray-800 p-4 rounded-full cursor-pointer transition-all">
            <BsTwitter />
          </div>
          <div className="m-1 text-xl pr-4">
            <ul>
              {sidebarMenuItems.map(item =>
                <li key={item.id} className="flex justify-start items-center gap-4 px-4 py-2 w-fit hover:bg-gray-800 rounded-full cursor-pointer transition-all">
                  <span>{item.icon}</span>
                  <span>{item.title}</span>
                </li>)}
            </ul>
            <div className="mt-5 px-3">
              <button className=" bg-[#1d9bf0] font-semibold text-lg  p-4 rounded-full w-full cursor-pointer">
                Tweet
                </button>
            </div>
            
          </div>

        </div>
        <div className="col-span-6 border-r border-l  h-screen overflow-scroll border-gray-600">
          <FeedCard/>
          <FeedCard/>

          <FeedCard/>

          <FeedCard/>

          <FeedCard/>
          <FeedCard/>
          <FeedCard/>
          <FeedCard/>
          <FeedCard/>
          <FeedCard/>
          <FeedCard/>
          <FeedCard/>
          <FeedCard/>
          <FeedCard/>
          <FeedCard/>
          <FeedCard/>
          <FeedCard/>
          <FeedCard/>
          <FeedCard/>
          <FeedCard/>


        </div>
        <div className="col-span-3"></div>
      </div>
    </div>
  );
}
