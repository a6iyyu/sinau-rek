import React from "react";
import { HamburgerMenu } from "./hamburger-menu";

export const Header: React.FC<{ special_page: boolean }> = ({ special_page }) => {
  return (
    <header className={`mx-auto flex h-28 w-4/5 justify-between text-slate-50 lg:h-36 ${special_page ? "hidden" : ""}`}>
      <section className="flex h-full w-1/5 items-center lg:w-1/6">
        <a
          href="/"
          className="grid h-full w-full place-items-center font-semibold"
        >
          <img
            src="/logo-2.png"
            alt="Logo"
            className="object-contain"
            loading="lazy"
          />
        </a>
      </section>
      <nav className="hidden h-full w-4/5 text-lg font-semibold lg:flex lg:w-5/6 lg:items-center lg:justify-end">
        {["Artikel", "Pelajaran", "Ringkasan", "Login"].map((menu, i: number) => (
          <a
            href={`/${menu.toLowerCase().replace(/ /g, "-")}`}
            key={i}
            className="mr-14 transition-all duration-300 ease-in-out last:mr-0 last:rounded-lg last:bg-slate-50 last:px-6 last:py-3 last:text-slate-950 hover:text-slate-200 hover:underline last:hover:bg-slate-200 last:hover:text-slate-900 last:hover:no-underline"
          >
            {menu}
          </a>
        ))}
      </nav>
      <HamburgerMenu />
    </header>
  );
};