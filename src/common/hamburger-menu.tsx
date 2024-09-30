import React from "react";

export const HamburgerMenu: React.FC = () => {
  return (
    <section className="hamburger-menu flex h-full w-3/5 items-center justify-end lg:hidden">
      <i className="fa-solid fa-bars cursor-pointer text-2xl text-slate-50" />
    </section>
  );
};