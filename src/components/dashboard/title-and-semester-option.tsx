import { useEffect, useRef, useState } from "react";

export const TitleAndSemesterOption = () => {
  const [dropdownMenu, setDropdownMenu] = useState(false);
  const dropdown = useRef<HTMLDivElement | null>(null);
  const semester: string[] = ["Semester 1", "Semester 2", "Semester 3", "Semester 4", "Semester 5", "Semester 6"];

  useEffect(() => {
    const handleDropdown = (event: MouseEvent) => {
      if (dropdown.current && !dropdown.current.contains(event.target as Node)) setDropdownMenu(false);
    };

    document.addEventListener("click", handleDropdown);
    return () => document.removeEventListener("click", handleDropdown);
  }, []);

  return (
    <section className="flex items-center justify-between text-slate-50">
      <h3 className="cursor-default text-2xl lg:text-3xl font-semibold">Dashboard</h3>
      <div
        ref={dropdown}
        onClick={() => setDropdownMenu(!dropdownMenu)}
        className="relative flex cursor-pointer items-center rounded-full border-2 px-5 py-3 transition-all duration-300 ease-in-out hover:bg-slate-50 hover:font-bold hover:text-slate-950"
      >
        <h5 className="text-base lg:text-lg">{semester[0]}</h5>
        <i className="fa-solid fa-chevron-down ml-3" />
        {dropdownMenu && (
          <ul className="absolute top-full mt-2 w-full rounded-lg bg-slate-50 shadow-lg">
            {semester.map((sem, i: number) => (
              <li
                key={i}
                className="px-4 py-2 hover:bg-slate-200 cursor-pointer"
                onClick={() => setDropdownMenu(false)}
              >
                {sem}
              </li>
            ))}
          </ul>
        )}
      </div>
    </section>
  );
};