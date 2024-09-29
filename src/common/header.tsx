import React from "react";
import { HamburgerMenu } from "./hamburger-menu";

export const Header: React.FC = () => {
  return (
    <header className="mx-auto flex h-28 w-4/5 justify-between text-[#222222] lg:h-36">
      <section className="flex h-full w-1/5 items-center lg:w-1/6">
        <a
          href="/"
          className="grid h-full w-full place-items-center font-semibold"
        >
          <img
            src="/logo.png"
            alt="Logo"
            className="object-contain"
            loading="lazy"
          />
        </a>
      </section>
      <nav className="hidden h-full w-4/5 text-lg font-semibold lg:flex lg:w-5/6 lg:items-center lg:justify-end">
        {["Artikel", "Pelajaran", "Ringkasan", "Registrasi"].map((menu, i: number) => (
          <a
            href={`/${menu.toLowerCase().replace(/ /g, "-")}`}
            key={i}
            className="mr-14 transition-all duration-300 ease-in-out last:mr-0 last:rounded-lg last:bg-[#222222] last:px-6 last:py-3 last:text-[#d9d9d9] hover:text-[#444444] hover:underline last:hover:bg-[#333333] last:hover:text-[#d4d4d4] last:hover:no-underline"
          >
            {menu}
          </a>
        ))}
      </nav>
      <HamburgerMenu />
    </header>
  );
};