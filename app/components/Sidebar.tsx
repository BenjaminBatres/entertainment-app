import React from "react";
import Image from "next/image";
import Logo from "../assets/logo.svg";
import HomeIcon from "../assets/icon-nav-home.svg";
import MovieIcon from "../assets/icon-nav-movies.svg";
import Avatar from "../assets/image-avatar.png";
import TvIcon from "../assets/icon-nav-tv-series.svg";

interface Tab {
  activeTab: string;
  setActiveTab: React.Dispatch<React.SetStateAction<string>>;
}
export default function Sidebar({ activeTab, setActiveTab }: Tab) {
  const tabs = [
    {
      path: "Recommended for you",
      icon: HomeIcon,
    },
    {
      path: "Movies",
      icon: MovieIcon,
    },
    {
      path: "TV Series",
      icon: TvIcon,
    },
  ];

  return (
    <div className="sm:px-6 mb-6 sm:py-6 lg:py-0 lg:px-0 ">
      <div className="lg:fixed lg:top-8 lg:left-6 lg:w-23 lg:h-[93%] py-4 lg:py-8 bg-Blue-900 sm:rounded-[20px] relative px-6">
        <div className="flex lg:flex-col sm:justify-between gap-[20%] sm:gap-18 items-center">
          <Image src={Logo} alt="logo" className="w-6 h-5" />
          <div className="flex lg:flex-col items-center gap-8 sm:gap-10">
            {tabs.map((tab, id) => (
              <button
                key={id}
                onClick={() => setActiveTab(tab.path)}
                className="cursor-pointer flex items-center gap-2"
              >
                {activeTab === tab.path && (
                  <div className="h-5 w-0.75 bg-Red-500" />
                )}
                <Image
                  src={tab.icon}
                  alt=""
                  className="hover:scale-115 transform duration-300"
                />
              </button>
            ))}
          </div>
          <div className="absolute sm:static lg:absolute lg:bottom-6 right-6.5 lg:left-6.5 rounded-full border size-6 w-8 h-8 lg:w-10 lg:h-10">
            <Image src={Avatar} alt="" className="size-full" />
          </div>
        </div>
      </div>
    </div>
  );
}
