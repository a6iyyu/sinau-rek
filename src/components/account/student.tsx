import React, { useState, type ChangeEvent } from "react";
import { HandleChange } from "@/utils/handle-change";

export const StudentLogin: React.FC = () => {
  const [loginData, setLoginData] = useState({ nisn: "" });
	const handleChange = (e: ChangeEvent<HTMLInputElement>) => HandleChange(e, setLoginData, loginData);

  return (
    <div className="flex flex-col">
      <label htmlFor="nisn">Nomor Induk Sekolah Nasional (NISN)</label>
      <input
        type="text"
        name="nisn"
        id="nisn"
        placeholder="Masukkan NISN Anda..."
        autoComplete="on"
        className="mt-4 border-b-2 border-slate-50/50 bg-transparent text-slate-50 focus:border-slate-50 focus:outline-none lg:py-3"
        onChange={handleChange}
        value={loginData.nisn}
      />
    </div>
  );
};