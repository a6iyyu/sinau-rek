import React, { useState, type ChangeEvent } from "react";
import { HandleChange } from "@/utils/handle-change";

export const TeacherLogin: React.FC = () => {
  const [loginData, setLoginData] = useState({ nip: "" });
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => HandleChange(e, setLoginData, loginData);

  return (
    <div className="flex flex-col">
      <label htmlFor="nip">Nomor Induk Pegawai (NIP)</label>
      <input
        type="text"
        name="nip"
        id="nip"
        placeholder="Masukkan NIP Anda..."
        autoComplete="on"
        className="mt-4 border-b-2 border-slate-50/50 bg-transparent text-slate-50 focus:border-slate-50 focus:outline-none lg:py-3"
        onChange={handleChange}
        value={loginData.nip}
      />
    </div>
  );
};