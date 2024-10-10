import React from "react";
import SidebarData from "@/data/sidebar.json";

export const Sidebar: React.FC = () => {
  return (
    <section className="fixed flex h-full max-h-screen w-[15%] flex-col border-r-2 border-[#232728] bg-[#1b1d1e] px-2 py-8 lg:w-[7.5%]">
      <a href="/">
        <img src="/favicon.ico" alt="Logo" className="mx-auto h-12 w-12" />
      </a>
      <div className="max-h-3/4 h-full w-full overflow-y-scroll py-10">
        {SidebarData.slice(0, 1).map((list) => (
          <div className="flex cursor-pointer text-slate-50">
            <img src={`${list.icon}`} alt="" className="m-auto" />
            <h4 className="hidden">{list.description}</h4>
          </div>
        ))}
        <hr className="mt-5 h-0.5 w-full bg-slate-50/50 opacity-50" />
      </div>
      {SidebarData.slice(9, 10).map((list) => (
        <div className="flex text-slate-50">
          <img src={`${list.icon}`} alt="" className="m-auto" />
          <h4 className="hidden">{list.description}</h4>
        </div>
      ))}
    </section>
  );
};