import React, { type FormEvent, useState } from "react";
import { StudentLogin } from "./student";
import { TeacherLogin } from "./teacher";

export const LoginPage: React.FC = () => {
  const [selectedRole, setSelectedRole] = useState<string>("Siswa");
  const [isDropdownOpen, setIsDropdownOpen] = useState<boolean>(false);

  const _handleSubmit = (_e: FormEvent) => {};

  return (
    <main className="flex h-[60rem] max-h-[200vh] w-full grid-cols-1 overflow-x-hidden bg-gradient-to-r from-[#0c0c1e] to-[#141414] lg:max-h-[125vh] lg:grid-cols-2">
      <span className="absolute left-0 top-0 h-40 w-40 bg-[#ff1fa9] opacity-80 [filter:blur(8rem)]" />
      <section className="flex h-full w-full flex-col items-center justify-center text-slate-50">
        <img src="/logo-2.png" alt="Logo" className="w-48 italic" />
        <h3 className="mx-auto mt-10 h-fit w-4/5 cursor-default text-center text-3xl font-bold lg:text-4xl">
          Selamat Datang!
        </h3>
        <h5 className="mx-auto mt-3 h-fit w-4/5 cursor-default text-center text-lg font-medium">
          Siapkah Anda menjadi yang terdepan?
        </h5>
        <form onSubmit={_handleSubmit} className="mx-auto mt-10 h-fit w-4/5">
          {selectedRole === "Siswa" ? <StudentLogin /> : <TeacherLogin />}
          <section
            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
            className="mt-8 flex w-fit cursor-pointer border-b-2 border-slate-50/50"
          >
            <h4 className="text-base">{selectedRole}</h4>
            <i className={`fa-solid fa-chevron-${isDropdownOpen ? "up" : "down"} my-auto ml-3 text-sm`} />
          </section>
          {isDropdownOpen && (
            <ul className="absolute mt-4 w-fit cursor-pointer rounded-lg bg-slate-50 text-slate-950">
              {["Siswa", "Guru"].map((list, i: number) => (
                <li
                  key={i}
                  onClick={() => setSelectedRole(list)}
                  className="py-2 pl-4 pr-9 font-semibold transition-all duration-300 ease-in-out first:rounded-t-lg first:pt-4 last:rounded-b-lg last:py-4 hover:bg-slate-200"
                >
                  {list}
                </li>
              ))}
            </ul>
          )}
          <button
            type="submit"
            className="mx-auto mt-12 h-fit w-full rounded-lg bg-[#0000ee] py-4 text-base font-semibold transition-all duration-300 ease-in-out md:py-5 lg:hover:bg-[#4d4dff]"
          >
            Masuk
          </button>
        </form>
      </section>
      <section className="hidden h-full w-full cursor-default flex-col items-end justify-center bg-[url('/student-2.jpg')] bg-cover bg-center bg-no-repeat text-slate-50 lg:flex" />
    </main>
  );
};