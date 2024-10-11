import React from "react";
import { Outlet } from "react-router-dom";

export default function Navbar() {
  return (
    <>
      <div className="bg-green-700 text-white p-5">QUIZO-PEDIA</div>
      <Outlet />
    </>
  );
}
