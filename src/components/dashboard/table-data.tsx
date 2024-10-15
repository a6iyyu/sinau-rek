import React, { useEffect, useRef, useState } from "react";
import { DataSiswa } from "./data-siswa";

export const TableData: React.FC = () => {
  const [dropdownMenu, setDropdownMenu] = useState(false);
  const dropdown = useRef<HTMLDivElement | null>(null);
  const classes: string[] = ["Kelas 1", "Kelas 2", "Kelas 3", "Kelas 4", "Kelas 5", "Kelas 6"];

  useEffect(() => {
    const handleDropdown = (event: MouseEvent) => {
      if (dropdown.current && !dropdown.current.contains(event.target as Node))
        setDropdownMenu(false);
    };

    document.addEventListener("click", handleDropdown);
    return () => document.removeEventListener("click", handleDropdown);
  }, []);

  return (
    <section className="my-8 flex h-full w-full flex-col rounded-xl border-2 border-[#232728] bg-[#1b1d1e] text-slate-50">
      <div className="mx-auto flex w-[95%] items-center justify-between py-8">
        <span className="flex items-center">
          <img src="/bar-chart.png" alt="Icon" />
          <h4 className="ml-2 text-2xl font-semibold">Data Siswa</h4>
        </span>
        <span
          ref={dropdown}
          onClick={() => setDropdownMenu(!dropdownMenu)}
          className="relative flex cursor-pointer items-center rounded-full border-2 px-5 py-3 transition-all duration-300 ease-in-out hover:bg-slate-50 hover:font-bold hover:text-slate-950"
        >
          <h5 className="text-base lg:text-lg">{classes[0]}</h5>
          <i className="fa-solid fa-chevron-down ml-3" />
          {dropdownMenu && (
            <ul className="absolute top-full mt-2 w-full rounded-lg bg-slate-50 shadow-lg">
              {classes.map((classes, i: number) => (
                <li
                  key={i}
                  className="cursor-pointer px-4 py-2 hover:bg-slate-200"
                  onClick={() => setDropdownMenu(false)}
                >
                  {classes}
                </li>
              ))}
            </ul>
          )}
        </span>
      </div>
      <DataSiswa />
    </section>
  );
};