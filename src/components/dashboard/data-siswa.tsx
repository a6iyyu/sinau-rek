import React from "react";
import SampelDataSiswa from "@/data/sampel-data-siswa.json";

export const DataSiswa: React.FC = () => {
  return (
    <div className="mx-auto mb-6 w-[95%] overflow-scroll lg:overflow-x-hidden">
      <table className="w-full cursor-default">
        <thead className="rounded-lg border-2 bg-gradient-to-br from-[#312ee9] to-[#651a83]">
          <tr>
            <th className="px-5 lg:px-1.5">No</th>
            <th className="px-14 py-1.5 lg:px-0 lg:py-3">Nama</th>
            <th className="px-14 py-1.5 lg:px-0 lg:py-3">Jenis Kelamin</th>
            <th className="px-14 py-1.5 lg:px-0 lg:py-3">Keaktifan</th>
            <th className="px-14 py-1.5 lg:px-0 lg:py-3">Kehadiran</th>
            <th className="px-14 py-1.5 lg:px-0 lg:py-3">Gaya Belajar</th>
            <th className="px-5 lg:px-1.5">No. Telpon Wali</th>
          </tr>
        </thead>
        <tbody>
          {SampelDataSiswa.map((siswa) => (
            <tr key={siswa.id}>
              <td className="py-5 text-center">{siswa.id}</td>
              <td className="pl-2 text-left">{siswa.nama}</td>
              <td className="pl-2 text-left">{siswa["jenis-kelamin"]}</td>
              <td className="pl-2 text-left">{siswa.keaktifan}</td>
              <td className="pl-2 text-left">{siswa.kehadiran}</td>
              <td className="pl-2 text-left">{siswa["gaya-belajar"]}</td>
              <td className="pl-2 text-left">{siswa["nomor-telepon-wali"]}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};