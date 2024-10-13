import React from "react";
import SidebarData from "@/data/sidebar.json";

export const Sidebar: React.FC = () => {
  return (
    <aside className="fixed flex h-full max-h-screen w-[15%] flex-col border-r-2 border-[#232728] bg-[#1b1d1e] px-2 pt-8 py-3 lg:w-[7.5%]">
      <a href="/">
        <img src="/favicon.ico" alt="Logo" className="mx-auto h-12 w-12" />
      </a>
      <section className="max-h-[87.5%] h-full w-full overflow-y-scroll mt-10">
        <div className="m-auto flex w-fit cursor-pointer">
          {SidebarData.slice(0, 1).map((list, i: number) => (
            <img key={i} src={`${list.icon}`} alt={`${list.description}`} className="m-auto" />
          ))}
        </div>
        <hr className="h-1 mt-5" />
        <div className="m-auto flex w-fit cursor-pointer mt-5 bg-[#0000ee] rounded-md p-2">
          {SidebarData.slice(1, 2).map((list, i: number) => (
            <img key={i} src={`${list.icon}`} alt={`${list.description}`} className="m-auto" />
          ))}
        </div>
        <hr className="h-1 mt-5" />
        <div className="m-auto flex w-fit cursor-pointer flex-col">
          {SidebarData.slice(2, 4).map((list, i: number) => (
            <img key={i} src={`${list.icon}`} alt={`${list.description}`} className="mx-auto first:mt-5 mb-6" />
          ))}
        </div>
        <hr className="h-1" />
        <div className="m-auto flex w-fit cursor-pointer mt-5">
          {SidebarData.slice(4, 5).map((list, i: number) => (
            <img key={i} src={`${list.icon}`} alt={`${list.description}`} className="m-auto" />
          ))}
        </div>
        <hr className="h-1 mt-5" />
        <div className="m-auto flex w-fit cursor-pointer flex-col">
          {SidebarData.slice(5, 8).map((list, i: number) => (
            <img key={i} src={`${list.icon}`} alt={`${list.description}`} className="mx-auto first:mt-5 mb-6 last:mb-5" />
          ))}
        </div>
      </section>
      <section className="max-h-[10%] h-full flex flex-col">
        <hr className="h-2" />
        {SidebarData.slice(9, 10).map((list, i: number) => (
          <div key={i} className="flex text-slate-50 cursor-pointer my-auto w-full">
            <img src={`${list.icon}`} alt="" className="m-auto" />
            <h4 className="hidden">{list.description}</h4>
          </div>
        ))}
      </section>
    </aside>
  );
};