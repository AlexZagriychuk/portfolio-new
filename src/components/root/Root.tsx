import { Outlet } from "react-router-dom";
import Navigation from "../navigation/Navigation";

export default function Root() {
  return (
    <div className="flex flex-row h-screen w-screen">
      <Navigation />

      <div className="grow p-2 bg-slate-100">
        <Outlet />
      </div>
    </div>
  )
}